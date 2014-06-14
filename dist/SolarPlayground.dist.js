/**
 * SolarPlayground - The adaptive javascript-based solar
 * system simulator.
 *
 * @author Moriel Schottlender
 *
 * Define an easily accessed global namespace for the
 * Solar Playground system.
 */
( function () {
	var solarPlayground = {};

	/**
	 * General method to produce logs into the console
	 * or some files.
	 *
	 * @param {String} type Message type: LOG, ERROR
	 * @param {String} msg Log message
	 */
	solarPlayground.log = function SpLog( type, msg ) {
		type = type || 'LOG';
		// TODO: Condition the console logging only on debug mode
		// otherwise output logs to a file
		window.console.log( '[' + type + '] ' + msg );
	};

	// Add to the global namespace
	window.sp = solarPlayground;
} )();

/*
 * Copyright (C) 2012 David Geary. This code is from the book
 * Core HTML5 Canvas, published by Prentice-Hall in 2012.
 *
 * License:
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * The Software may not be used to create training material of any sort,
 * including courses, books, instructional videos, presentations, etc.
 * without the express written consent of David Geary.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
*/

window.requestNextAnimationFrame = ( function () {
	var originalWebkitRequestAnimationFrame = undefined,
		wrapper = undefined,
		callback = undefined,
		geckoVersion = 0,
		userAgent = navigator.userAgent,
		index = 0,
		self = this;

		// Workaround for Chrome 10 bug where Chrome
		// does not pass the time to the animation function

	if ( window.webkitRequestAnimationFrame ) {
		// Define the wrapper
		wrapper = function (time) {
			if (time === undefined) {
				time += new Date();
			}
			self.callback(time);
		};

		// Make the switch
		originalWebkitRequestAnimationFrame = window.webkitRequestAnimationFrame;

		window.webkitRequestAnimationFrame = function ( callback, element ) {
			self.callback = callback;

			// Browser calls the wrapper and wrapper calls the callback
			originalWebkitRequestAnimationFrame( wrapper, element );
		}
	}

	// Workaround for Gecko 2.0, which has a bug in
	// mozRequestAnimationFrame() that restricts animations
	// to 30-40 fps.

	if ( window.mozRequestAnimationFrame ) {
		// Check the Gecko version. Gecko is used by browsers
		// other than Firefox. Gecko 2.0 corresponds to
		// Firefox 4.0.
		index = userAgent.indexOf( 'rv:' );

		if ( userAgent.indexOf( 'Gecko' ) != -1) {
			geckoVersion = userAgent.substr( index + 3, 3 );

			if ( geckoVersion === '2.0' ) {
				// Forces the return statement to fall through
				// to the setTimeout() function.
				window.mozRequestAnimationFrame = undefined;
			}
		}
	}

	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function ( callback, element ) {
			var start,
				finish;

			window.setTimeout( function () {
				start += new Date();
				callback( start );
				finish += new Date();

				self.timeout = 1000 / 60 - ( finish - start );
			}, self.timeout );
		};
} ) ();

/**
 * SolarPlaygound Gui objects and methods
 */
sp.Gui = {};

/**
 * Solar playground scenario container
 *
 * @class sp.Scenario
 * @mixins OO.EventEmitter
 *
 * @param {JQuery} $canvas Target canvas for the scenario
 * @param {Object} scenario Scenario configuration object
 */
sp.Scenario = function SpScenario( $canvas, scenario ) {
	var objects;

	// Mixin constructors
	OO.EventEmitter.call( this );

	// TODO: Validate the scenario object to make sure all required
	// elements exist.

	// TODO: Create another canvas for trails so we can visualize the
	// orbits with trails that remain for a bit on the screen
	this.$canvas = $canvas;
	this.context = $canvas[0].getContext( '2d' );

	this.paused = true;
	this.objects = {};

	// Prepare general configuration
	this.config = scenario.config || {};

	// Viewpoint controller
	this.viewpoint = new sp.Viewpoint( {
		'zoom': this.config.init_zoom || 1,
		'centerPoint': {
			x: this.$canvas.width() / 2,
			y: this.$canvas.height() / 2
		},
		'yaw': 0,
		'pitch': 0,
		'scale': {
			'orbit': this.config.orbit_scale || 0.5 * Math.pow( 10, -5 ),
			'planets': this.config.planet_scale
		}
	} );

	this.showTrails = this.config.show_trails || false;
	this.frameCounter = 0;
	this.trailsFrameGap = 5;

	this.pov_key = this.config.init_pov;
	this.pov_object = null;

	this.date = this.config.start_time || { day: 1, month: 1, year: 2000 };
	this.time = 0;
	this.speed = this.config.init_speed || 1;

	// Prepare the objects
	this.processObjects( scenario.objects || {} );
};

/* Inheritance */
OO.mixinClass( sp.Scenario, OO.EventEmitter );

/**
 * @event paused
 * @param {boolean} [isPaused] Paused or resumed
 * Change in pause/resume state
 */

/**
 * Process the solar playground simulator objects
 * @param {Object} scenarioObjects Simulation objects definition
 */
sp.Scenario.prototype.processObjects = function ( scenarioObjects ) {
	var o, co, radii_diff, step_size, radius, circle_radius, smallest_radii,
		radii = {
			'star': [],
			'planet': []
		};

	// Initialize celestial objects
	for ( o in scenarioObjects ) {
		this.objects[o] = new sp.Scenario.CelestialObject( scenarioObjects[o] );

		// Collect all radii
		if ( scenarioObjects[o].vars.r ) {
			if ( scenarioObjects[o].type === 'star' ) {
				radii['star'].push( Number( scenarioObjects[o].vars.r ) );
			} else {
				radii['planet'].push( Number( scenarioObjects[o].vars.r ) );
			}
		}
	}

	// Send the radii list to the viewpoint
	this.viewpoint.setRadiiList( radii );

	// Figure out which objects orbit what
	for ( co in this.objects ) {
		if ( scenarioObjects[co] && this.objects[scenarioObjects[co].orbiting] ) {
			// Connect the object to its center of orbit
			this.objects[co].setOrbit( this.objects[scenarioObjects[co].orbiting] );
		}
	}

	// Set initial POV
	if ( this.pov_key && this.objects[this.pov_key] ) {
		this.pov_object = this.objects[this.pov_key];
		this.viewpoint.setPOV( this.objects[this.pov_key].getSpaceCoordinates( 0 ) );
	}
};

/**
 * Draw all elements
 * @param {number} time Time
 * @param {boolean} ignoreTrails Ignore trails despite settings
 */
sp.Scenario.prototype.draw = function ( time, ignoreTrails ) {
	var o, coords, viewpointCoords, view, radius, trails;

	time = time || this.time;

	for ( o in this.objects ) {
		coords = this.objects[o].getSpaceCoordinates( time );

		// TODO: Allow POV that isn't an object
		// Update POV coordinates
		if ( o === this.pov_key ) {
			this.viewpoint.setPOV( coords );
		}
		// Translate coordinates to canvas
		viewpointCoords = this.viewpoint.getCoordinates( coords );

		if ( viewpointCoords ) {
			// Get graphic details
			view = this.objects[o].getView();

			// TODO: Allow the user to choose between relative radii and preset radius value
			// in the view parameters, instead of having the view take precedence randomly
			radius = this.viewpoint.getRadius( this.objects[o].getRadius(), this.objects[o].getType() );

			// Draw planet trails
			if ( !ignoreTrails && this.showTrails && o !== this.pov_key ) {
				// Store trails
				this.frameCounter++;
				if ( this.frameCounter >= this.trailsFrameGap ) {
					this.objects[o].storeTrailPoint( viewpointCoords );
					this.frameCounter = 0;
				}

				// Get the trail points
				trails = this.objects[o].getTrailPoints();
				for ( i = 0; i < trails.length; i++ ) {
					// Draw all trails as dots
					this.drawCircle(
						this.context,
						trails[i],
						1,
						// TODO: Consider making trail colors a configuration option
						view.color || '#FF005D' // Bright pink
					);
				}
			}

			// Draw the object
			this.drawCircle( this.context,
				viewpointCoords,
				radius,
				view.color,
				// Add a shadow to stars
				this.objects[o].getType() === 'star'
			);
		}
	}
};

/**
 * Draw a circle on the canvas
 * @param {Object} context Canvas context object
 * @param {Object} coords Canvas coordinates
 * @param {number} [radius] Circle radius
 * @param {string} [color] Circle color
 * @param {boolean} [hasShadow] Add a shadow
 */
sp.Scenario.prototype.drawCircle = function ( context, coords, radius, color, hasShadow ) {
	context.save();
	context.beginPath();
	context.arc(
		coords.x,
		coords.y,
		radius || 5, 0, 2 * Math.PI,
		false
	);
	context.fillStyle = color || 'white';
	if ( hasShadow ) {
		context.shadowColor = color || 'white';
		context.shadowBlur = 20;
		context.shadowOffsetX = 0;
		context.shadowOffsetY = 0;
	}
	context.fill();
	context.restore();
};

/**
 * Clear an area on the canvas
 * @param {Object} context Canvas context object
 * @param {number} [square] Dimensions and coordinates of the square
 * to clear
 * @param {number} [square.top] Top coordinate of the square
 * @param {number} [square.left] Left coordinate of the square
 * @param {number} [square.width] Width of the square
 * @param {number} [square.height] Height of the square
 */
sp.Scenario.prototype.clearCanvas = function ( context, square ) {
	context = this.context;
	square = square || {};

	// Fix optional values:
	square.left = square.left || 0;
	square.top = square.top || 0;
	square.width = square.width || this.$canvas.width();
	square.height = square.height || this.$canvas.height();

	// Erase the square
	context.clearRect( square.left, square.top, square.width, square.height );
};

/**
 * Flush all trails from all objects
 */
sp.Scenario.prototype.flushAllTrails = function () {
	var o;
	for ( o in this.objects ) {
		this.objects[o].flushTrailPoints()
	}
};

/**
 * Run the scenario
 */
sp.Scenario.prototype.run = function () {
	if ( !this.paused ) {
		// Clear canvas
		this.clearCanvas( this.context );

		// Draw canvas
		this.draw( this.time );

		// Increase time
		this.time += 0.0000000001 * this.speed;

		window.requestNextAnimationFrame( $.proxy( this.run, this ) );
	}
};

/**
 * Retrieve all the celestial objects attached to this scenario
 * @returns {sp.Scenario.CelestialObject} All objects in the scenario
 */
sp.Scenario.prototype.getAllObjects = function () {
	return this.objects;
}

/**
 * Toggle between pause and resume the scenario
 * @param {boolean} [isPause] Optional. If supplied, pauses or resumes the scenario
 * @fires paused
 */
sp.Scenario.prototype.togglePaused = function ( isPause ) {
	if ( isPause === undefined ) {
		isPause = !this.paused;
	}
	isPause = !!isPause;

	this.paused = isPause;
	this.run();

	this.emit( 'paused', isPause );
};

/**
 * Check whether the scenario is paused
 */
sp.Scenario.prototype.isPaused = function () {
	return this.paused;
};

/**
 * Pause the scenario
 */
sp.Scenario.prototype.pause = function () {
	this.togglePaused( true );
};

/**
 * Resume the scenario
 */
sp.Scenario.prototype.resume = function () {
	this.togglePaused( false );
	this.run();
};

/**
 * Increase or decrease scenario zoom levels
 * @param {number} z Zoom level, negative for zoom out
 */
sp.Scenario.prototype.zoom = function ( z ) {
	this.viewpoint.setZoom( z );
	this.flushAllTrails();
	if ( this.isPaused() ) {
		this.clearCanvas();
		this.draw( this.time, true );
	}
};

/**
 * Set the viewpoint's center point
 * @param {number} x X coordinate of the center of the system
 * @param {number} y Y coordinate of the center of the system
 */
sp.Scenario.prototype.setCenterPoint = function ( x, y ) {
	this.viewpoint.setCenterPoint( x, y );
	this.flushAllTrails();
	if ( this.isPaused() ) {
		this.clearCanvas();
		this.draw( this.time, true );
	}
};

/**
 * Get the current center point of the view
 * @returns {Object} x/y coordinates of the current center point
 */
sp.Scenario.prototype.getCenterPoint = function () {
	return this.viewpoint.getCenterPoint();
};

/**
 * Solar Playground system
 *
 * @class sp.System
 * @mixins OO.EventEmitter
 *
 * @param {Object} [config] Configuration object
 */
sp.System = function SpSystemInitialize( config ) {
	var defaultConfig, guiLoader;

	// Mixin constructors
	OO.EventEmitter.call( this );

	// Scenario holder
	// TODO: Allow for multiple scenarios
	this.scenario = null;

	config = config || {};

	defaultConfig = {
		container: '#solarSystem',
		scenario_dir: 'scenarios', // Default directory unless otherwise specified
		directory_sep: '/',
		width: $( window ).width() - 100,
		height: $( window ).height() - 100
	};

	// Extend default global options
	this.config = $.extend( true, defaultConfig, config );

	// Initialize
	this.$container = $( this.config.container )
		.addClass( 'sp-system-container' )

	this.$canvas = $( '<canvas>' )
		.addClass( 'sp-system-canvas' )
		.attr( 'width', this.config.width )
		.attr( 'height', this.config.height )
		.appendTo( this.$container );

	// Gui
	guiLoader = new sp.Gui.Loader( {
		'module': 'ooui',
		'$container': this.$container
	} );
	this.gui = guiLoader.initialize();

	this.canvasMoving = false;

	// Events
	this.$canvas.on( 'mousedown', $.proxy( this.onCanvasMouseDown, this ) );
	this.$canvas.on( 'mousemove', $.proxy( this.onCanvasMouseMove, this ) );
	this.$canvas.on( 'mouseup', $.proxy( this.onCanvasMouseUp, this ) );
	this.$canvas.on( 'mouseout', $.proxy( this.onCanvasMouseUp, this ) );

	this.gui.connect( this, { 'play': 'onGuiPlay' } );
	this.gui.connect( this, { 'zoom': 'onGuiZoom' } );
};

/* Inheritance */
OO.mixinClass( sp.System, OO.EventEmitter );

/* Events */

/**
 * @event scenarioLoaded
 * @param {sp.Scenario} scenario Reference to the loaded scenario
 * Scenario fully loaded and ready to be run.
 */

/* Methods */

/**
 * Respond to play button press
 * @param {Boolean} isPlay Play or pause
 */
sp.System.prototype.onGuiPlay = function ( isPlay ) {
	this.scenario.togglePaused( !isPlay );
};

/**
 * Respond to zoom button press
 * @param {Boolean} zoom Zoom level
 */
sp.System.prototype.onGuiZoom = function ( zoom ) {
	this.scenario.zoom( zoom );
	if ( this.isPaused() ) {
		this.scenario.clearCanvas()
		this.scenario.draw();
	}
};

/**
 * Respond to mouse down event
 * @param {Event} e Event
 * @return {boolean} False
 */
sp.System.prototype.onCanvasMouseDown = function ( e ) {
	this.canvasMoving = true;
	this.canvasCenter = this.scenario.getCenterPoint();
	this.mouseStartingPoint = {
		'x': e.pageX,
		'y': e.pageY
	};
	return false;
};

/**
 * Respond to mouse move event
 * @param {Event} e Event
 * @return {boolean} False
 */
sp.System.prototype.onCanvasMouseMove = function ( e ) {
	var dx, dy;
	if ( this.canvasMoving ) {
		dx = e.pageX - this.mouseStartingPoint.x;
		dy = e.pageY - this.mouseStartingPoint.y;
		this.scenario.setCenterPoint(
			this.canvasCenter.x + dx,
			this.canvasCenter.y + dy
		);
	}
	return false;
};

/**
 * Respond to mouse up event
 * @param {Event} e Event
 * @return {boolean} False
 */
sp.System.prototype.onCanvasMouseUp = function ( e ) {
	this.canvasMoving = false;
	this.canvasCenter = {};
	this.mouseStartingPoint = {};
	return false;
};

/**
 * Load a scenario
 * @param {String} scenarioName Scenario name. The system will search for
 *  an ajax response from source 'scenario.[name].json' in the scenario
 *  directory.
 */
sp.System.prototype.load = function ( scenarioName ) {
	var targetName,
		targetDir = this.config.scenario_dir + this.config.directory_sep;

	scenarioName = scenarioName || 'example';
	targetName = 'scenario.' + scenarioName + '.json';

	$.getJSON( targetDir + targetName )
		.done( $.proxy( function ( response ) {
			// Load the scenario
			this.loadScenario( response );
		}, this ) )
		.fail( function () {
			sp.log( 'Error', 'Scenario ' + targetName + ' not found in directory "' + targetDir + '"' );
		} );
};

/**
 * Load and run a scenario
 * @param {Object} scenarioObject Scenario configuration object
 * @fires scenarioLoaded
 */
sp.System.prototype.loadScenario = function ( scenarioObject ) {
	var objList;

	scenarioObject = scenarioObject || {};

	this.scenario = new sp.Scenario( this.$canvas, scenarioObject );
	// Link scenario to GUI
	this.gui.setScenario( this.scenario );

	// Draw initial frame
	this.scenario.draw( 0 );

	// Add pov objects to gui
	objList = this.scenario.getAllObjects();
	for ( o in objList ) {
		this.gui.addToPOVList(
			o,
			objList[o].getName()
		);
	}
/*	this.gui.addToToolbar(
		'pov',
		'earth',
		'povTools',
		'play',
		'Earth'
	);*/

	this.emit( 'scenarioLoaded', this.scenario );
};

/**
 * Toggle between pause and resume the scenario
 * @param {boolean} [isPause] Optional. If supplied, pauses or resumes the scenario
 */
sp.System.prototype.togglePaused = function ( isPause ) {
	this.scenario.togglePaused( isPause );
};

/**
 * Check whether the scenario is paused
 */
sp.System.prototype.isPaused = function () {
	return this.scenario.isPaused();
};

/**
 * Get configuration option or full configuration object.
 * @param {string} [option] Configuration key
 * @returns {string|Object} Configuration object
 */
sp.System.prototype.getConfig = function ( option ) {
	if ( this.config[option] ) {
		return this.config[option];
	}
	return this.config;
};

/**
 * Solar Playground viewpoint controller.
 * Controls the presentation of the objects on the canvas.
 *
 * @class sp.Viewpoint
 * @mixins OO.EventEmitter
 *
 * @param {Object} [config] Configuration object
 */
sp.Viewpoint = function SpViewpoint( config ) {
	// Mixin constructors
	OO.EventEmitter.call( this );

	// Configuration
	this.config = config || {};

	this.zoom = this.config.zoom || 1;
	this.orbit_scale = this.config.orbit_scale || 1;
	this.centerPoint = this.config.centerPoint;
	this.yaw = this.config.yaw;
	this.pitch = this.config.pitch;

	this.pov = { 'x': 0, 'y': 0, 'z': 0 };
	this.radii_list = null;

	// Set up visible canvas-scaled radius steps in pixels
	this.radii = {
		'star': [ 25, 30, 32, 35 ],
		'planet': [ 4, 8, 10, 12, 14, 16 ]
	};
	// Define the step between each value
	this.radius_step = {
		'star': 0,
		'planet': 0
	};
};

/* Inheritance */
OO.mixinClass( sp.Viewpoint, OO.EventEmitter );

/* Events */

/**
 * Change of the POV coordinates in space
 * @event changePOV
 * @param {Object} New space coordinates of the POV
 */

/* Methods */

/**
 * Set the coordinates of the current POV object
 * @param {Object} pov_coords The 3d coordinates of the current POV
 * @fires changePOV
 */
sp.Viewpoint.prototype.setPOV = function ( pov_coords ) {
	if ( !pov_coords ) {
		return;
	}
	if ( pov_coords.x !== this.pov.x || pov_coords.y !== this.pov.y ) {
		this.pov = pov_coords;
		this.emit( 'changePOV', pov_coords );
	}
};

/**
 * Translate between space coordinates and viewpoint coordinates
 * on the canvas.
 * @param {Object} spaceCoords Original 3D space coordinates
 * @returns {Object} Canvas 2d coordinates
 */
sp.Viewpoint.prototype.getCoordinates = function ( spaceCoords ) {
	var ca = Math.cos( this.yaw ),
		sa = Math.sin( this.yaw ),
		cb = Math.cos( this.pitch ),
		sb = Math.sin( this.pitch ),
		dx = this.centerPoint.x,
		dy = this.centerPoint.y,
		scale = Math.sqrt( this.orbit_scale * this.zoom );

	// TODO: Work out proper scale
	x = ( spaceCoords.x - this.pov.x ) * scale;
	y = ( spaceCoords.y - this.pov.y ) * scale;
	z = ( spaceCoords.z - this.pov.z ) * scale;

	destination = {
		'x': x * ca - y * sa + dx,
		'y': x * sa + y * ca
	};
	destination.z = destination.y * sb;
	destination.y = destination.y * cb + dy;

	// TODO: Check if destination is inside the canvas. Return null otherwise.
	return destination;
};

/**
 * Calculate radius size steps from a new radii list
 * @param {Object} rList Actual size radii of all celestial objects
 * divided into 'stars' and 'planets' to distinguish relative sizes better
 */
sp.Viewpoint.prototype.setRadiiList = function ( rList ) {
	var type, diff;

	this.radii_list = rList;

	for ( type in this.radii_list ) {
		// Sort by size, ascending
		this.radii_list[type].sort( function ( a, b ) {
			return a - b;
		} );

		// Figure out steps for each of the types
		diff = this.radii_list[type][this.radii_list[type].length - 1] -
			this.radii_list[type][0];

		this.radius_step[type] = diff / this.radii[type].length
	}
};

/**
 * Translate between the original radius and the canvas radius in pixels
 * @param {number} orig_radius Object's original radius
 * @returns {number} Actual radius in pixels
 */
sp.Viewpoint.prototype.getRadius = function ( orig_radius, type ) {
	var radius, index,
		step = this.radius_step[type] || 1;

	type = type || 'planet';
	index = Math.floor( orig_radius / step );

	if ( index > this.radii[type].length - 1 ) {
		index = this.radii[type].length - 1;
	}

	radius = Math.sqrt( this.radii[type][ index ] * this.zoom ) / 100;

	return ( radius >= 2 ) ? radius : 2;
};

/**
 * Increase or decrease scenario zoom levels
 * @param {number} z Zoom level, negative for zoom out
 */
sp.Viewpoint.prototype.setZoom = function ( z ) {
	this.zoom += z;
};

/**
 * Set the canvas center point
 * @param {number} x X coordinate of the center of the system
 * @param {number} y Y coordinate of the center of the system
 */
sp.Viewpoint.prototype.setCenterPoint = function ( x, y ) {
	x = x || this.centerPoint.x;
	y = y || this.centerPoint.y;

	this.centerPoint = {
		'x': x,
		'y': y
	};
};

/**
 * Get the current center point of the view
 * @returns {Object} x/y coordinates of the current center point
 */
sp.Viewpoint.prototype.getCenterPoint = function () {
	return this.centerPoint;
};

/**
 * Add to the center point
 * @param {number} [x] Amount to add to X coordinate
 * @param {number} [y] Amount to add to Y coordinate
 */
sp.Viewpoint.prototype.addToCenterPoint = function ( x, y ) {
	x = x || 0;
	y = y || 0;

	this.centerPoint.x += x;
	this.centerPoint.y += y;
};

/**
 * SolarPlaground GUI Modules
 * @property {Object}
 */
sp.Gui.Module = {};

/**
 * Gui Loader. Creates the gui to be attached to
 * the SolarPlayground container.
 *
 * @class sp.Gui.Loader
 * @mixins OO.EventEmitter
 *
 * @param {Object} config Gui definition
 * @config {string} module The GUI module. Defaults to 'ooui'
 * @config {jQuery} jQuery object for the container on top of which
 *  the GUI should be built.
 */
sp.Gui.Loader = function SpGuiInitializer( config ) {
	config = config || {};

	// Mixin constructors
	OO.EventEmitter.call( this );

	this.moduleName = config.module || 'ooui';
	this.module = null;
	this.scenario = config.scenario;

	this.settings = config.settings || {};

	this.$container = config.$container;
	this.$spinner = $( '<div>' )
		.addClass( 'sp-system-spinner' )
		.appendTo( this.$container );
};

/* Inheritance */
OO.mixinClass( sp.Gui.Loader, OO.EventEmitter );

/**
 * Create the GUI according to the ui module
 */
sp.Gui.Loader.prototype.initialize = function () {
	var module;
	/// TODO: Use a factory instead of this quick and somewhat
	/// lame 'switch' statement, so we can allow for proper
	/// modules for the GUI, like jQueryUI or whatever else.
	switch ( this.module ) {
		case 'ooui':
		default:
			this.module = new sp.Gui.Module.ooui( this.$container, this.settings );
			break;
	}

	module = this.module.initialize( this.settings );
	this.$spinner.hide();
	return module;
};

/**
 * General Gui module
 *
 * @class sp.Gui.Module.Base
 * @abstract
 *
 * @param {jQuery} $container The container to attach the GUI to
 * @param {Object} [config] Gui module definition
 */
sp.Gui.Module.Base = function SpGuiModuleOoui ( $container, config ) {
	config = config || {};

	// Mixin constructors
	OO.EventEmitter.call( this );

	this.$container = $container;

	this.scenario = null;
};

/* Inheritance */
OO.mixinClass( sp.Gui.Module.Base, OO.EventEmitter );

/* Events */

/**
 * Play or pause scenario
 * @event play
 * @param {boolean} isPlay Play scenario or pause
 */

/**
 * Zoom in or out
 * @event zoom
 * @param {number} zoomLevel How much to zoom. Negative to zoom out.
 */

/**
 * Change point of view object
 * @event pov
 * @param {string} povObjName New POV object name or key
 */

/* Methods */

/**
 * Connect the GUI to the scenario it controls
 * @param {sp.Scenario} scenario The scenario object this GUI controls
 */
sp.Gui.Module.Base.prototype.setScenario = function ( scenario ) {
	this.scenario = scenario;
};

/**
 * Initialize the Gui
 * @abstract
 * @returns {OO.ui.Toolbar}
 */
sp.Gui.Module.Base.prototype.initialize = function () {
	throw new Error( 'sp.Gui.Module.Initialize must be implemented in child class.' );
};

/**
 * Add a tool to the POV list
 * @abstract
 * @param {string} name Tool name
 * @param {string} title Title or alternate text
 * @param {string} [icon] Tool icon
 */
sp.Gui.Module.Base.prototype.addToPOVList = function ( name, title, icon ) {
	throw new Error( 'sp.Gui.Module.addToPOVList must be implemented in child class.' );
};

/**
 * OOUI Gui module
 *
 * @class sp.Gui.Module.ooui
 *
 * @param {jQuery} $container The container to attach the GUI to
 * @param {Object} [config] Gui module definition
 */
sp.Gui.Module.ooui = function SpGuiModuleOoui ( $container, config ) {
	config = config || {};

	// Parent constructor
	sp.Gui.Module.ooui.super.call( this, $container, config );

	this.tools = {};
};

/* Inheritance */
OO.inheritClass( sp.Gui.Module.ooui, sp.Gui.Module.Base );

/* Events */

/**
 * Play or pause scenario
 * @event play
 * @param {boolean} isPlay Play scenario or pause
 */

/**
 * Zoom in or out
 * @event zoom
 * @param {number} zoomLevel How much to zoom. Negative to zoom out.
 */

/**
 * Change point of view object
 * @event pov
 * @param {string} povObjName New POV object name or key
 */

/* Methods */

/**
 * Initialize the Gui
 * @returns {OO.ui.Toolbar}
 */
sp.Gui.Module.ooui.prototype.initialize = function () {
	var i, tools, tname;

	this.toolFactory = new OO.ui.ToolFactory(),
	this.toolGroupFactory = new OO.ui.ToolGroupFactory();

	// Create toolbar
	this.toolbar = new OO.ui.Toolbar( this.toolFactory, this.toolGroupFactory );
	this.toolbar.setup( [
		{
			'type': 'bar',
			'include': [ { 'group': 'playTools' } ]
		},
		{
			'type': 'bar',
			'include': [ { 'group': 'viewTools' } ]
		},
		{
			'type': 'menu',
			'indicator': 'down',
			'label': 'POV',
			'icon': 'picture',
			'include': [ { 'group': 'povTools' } ]
		}
	] );
	this.toolbar.emit( 'updateState' );

	// Create buttons for the toolbar
	// TODO: Disable all buttons until the scenario is loaded
	tools = {
		// playTools
		'play': [ 'playTool', 'playTools', 'play', 'Play scenario', null, this.onPlayButtonSelect ],
		// viewTools
		'zoomin': [ 'zoominTool', 'viewTools', 'zoomin', 'Zoom in', null, this.onZoomInButtonSelect ],
		'zoomout': [ 'zoomoutTool', 'viewTools', 'zoomout', 'Zoom out', null, this.onZoomOutButtonSelect ]
	}

	this.tools = {};
	for ( tname in tools ) {
		this.tools[tname] = this.createTool.apply( this, tools[tname] );
		this.toolFactory.register( this.tools[tname] );
	}

	// Attach toolbar to container
	this.$container.prepend( this.toolbar.$element );

	// Events
	this.toolbar.connect( this, { 'updateState': [ 'onToolbarEvent', 'updateToolbarState' ] } );
	this.toolbar.connect( this, { 'play': [ 'onToolbarEvent', 'play' ] } );
	this.toolbar.connect( this, { 'zoom': [ 'onToolbarEvent', 'zoom' ] } );
	this.toolbar.connect( this, { 'pov': [ 'onToolbarEvent', 'pov' ] } );

	return this;
};

/**
 * Add a tool to the POV list
 * @param {string} name Tool name
 * @param {string} title Title or alternate text
 * @param {string} [icon] Tool icon
 */
sp.Gui.Module.ooui.prototype.addToPOVList = function ( name, title, icon ) {
	var toolDefinition, onSelectFunc,
		eventObject = {},
		toolName = name + 'Tool';

	onSelectFunc = function () {
		this.toolbar.emit( 'pov',
			this.constructor.static.object_name
		);
	}

	eventObject[toolName] = [ 'onToolbarEvent', toolName ];

	toolDefinition = [
		// name
		toolName,
		// group
		'povTools',
		// icon
		icon,
		// title/label
		title,
		// init function
		null,
		// onSelect function
		onSelectFunc
	];

	this.tools[toolName] = this.createTool.apply( this, toolDefinition );
	this.tools[toolName].static.object_name = name;

	this.toolFactory.register( this.tools[toolName] );
	this.toolbar.connect( this, eventObject );
};

/**
 * Propogate the event from the toolbar to the module.
 * We want the system to listen to the module and not specific
 * elements in it.
 * @param {string} ev Type of event to emit
 * @param {Object} [params] Parameters to attach to the event
 */
sp.Gui.Module.ooui.prototype.onToolbarEvent = function ( ev, params ) {
	this.emit( ev, params );
};

/**
 * Respond to zoom in button click
 * @fires zoom
 */
sp.Gui.Module.ooui.prototype.onZoomInButtonSelect = function () {
	this.setActive( false );
	this.toolbar.emit( 'zoom', 1000 );
};

/**
 * Respond to zoom in button click
 * @fires zoom
 */
sp.Gui.Module.ooui.prototype.onZoomOutButtonSelect = function () {
	this.setActive( false );
	this.toolbar.emit( 'zoom', -1000 );
};

/**
 * Respond to play button click
 * @fires play
 */
sp.Gui.Module.ooui.prototype.onPlayButtonSelect = function () {
	// TODO: Activate the pause button and disable self
	this.toggled = !this.toggled;
	this.setActive( this.toggled );

	this.toolbar.emit( 'play', this.toggled );
};

/**
 * Get the Gui toolbar
 * @returns {OO.ui.Toolbar} The toolbar connected to the gui
 */
sp.Gui.Module.ooui.prototype.getToolbar = function () {
	return this.toolbar;
};

/**
 * Create a toolbar tool.
 * NOTE: Taken from the OOUI tools demo. This method should be adjusted
 * to better suit this projects' needs, it is only used as-is at
 * the moment for basic testing.
 *
 * @param {string} name Tool name
 * @param {string} group Tool group
 * @param {string} icon Tool icon
 * @param {string} title Title or alternate text
 * @param {Function} init Initialization function
 * @param {Function} onSelect Activation function
 * @returns {OO.ui.Tool} Tool
 */
sp.Gui.Module.ooui.prototype.createTool = function ( name, group, icon, title, init, onSelect ) {
	// TODO: The entire createTool method should be rewritten to
	// better suit the needs of this particular toolbar
	var Tool = function SpGuiTool() {
		Tool.super.apply( this, arguments );
		this.toggled = false;
		if ( init ) {
			init.call( this );
		}
	};

	OO.inheritClass( Tool, OO.ui.Tool );

	Tool.prototype.onSelect = function () {
		if ( onSelect ) {
			onSelect.call( this );
		} else {
			this.toggled = !this.toggled;
			this.setActive( this.toggled );
		}
		this.toolbar.emit( 'updateState' );
	};
	Tool.prototype.onUpdateState = function () {};

	Tool.static.name = name;
	Tool.static.group = group;
	Tool.static.icon = icon;
	Tool.static.title = title;
	return Tool;
};

/**
 * Scenario calculator
 * @param {Object} [config] Configuration object
 */
sp.Scenario.Calculator = function SpScenarioCalculator( config ) {

};

/**
 * Astronomical constants. Mostly related to the solar
 * system but also to other calculations.
 * @property {Object}
 */
sp.Scenario.Calculator.constants = {
	// Astronomical units (AU) in km
	'AU': 149597871, // km
	// Gravitational constant in N*(m/kg)^2
	'G': 6.67 * Math.pow( 10, -11 )
};

/**
 * Calculate the absolute time needed for proper calculations.
 * In our case, it is the number of days from 1999 Dec 31, 0:00 UT
 * @param {number} year Requested year (YYYY)
 * @param {number} month Requested month
 * @param {number} day Requested day of the month
 * @param {number} time_of_day Time of day in decimals 0-24
 * @returns {number} The decimal number of days from 1999 Dec 31, 0:00 UT
 */
sp.Scenario.Calculator.translateTime = function ( year, month, day, time_of_day ) {
	var totalDays;
	year = year || 2014;
	month = month || 6;
	day = day || 10;
	time_of_day = time_of_day || 0;

	// The day calculation must be integer calculation, so 'Math.floor' must
	// be used for all divisions
	totalDays = 367 * year - 7 *
		Math.floor( ( year + Math.floor( ( month + 9 ) / 12 ) ) / 4 ) +
		275 * Math.floor( month / 9 ) + D - 730530;

	// Add time (floating point division)
	totalDays += time_of_day / 24;

	return totalDays;
};

/**
 * Return a JDN (Julian Day Number) from J2000.0, converted from a Gregorian date and time
 * @param {number} year Requested year (yyyy)
 * @param {number} month Requested month
 * @param {number} day Requested day of the month
 * @param {number} [hours] Hour of the day in 24h format
 * @param {number} [minutes] Minutes after the hour
 * @param {number} [seconds] Seconds after the minute
 * @returns {number} JDN, number of days from epoch J2000.0
 */
sp.Scenario.Calculator.getJDNTime = function ( year, month, day, hours, minutes, seconds ) {
	var JDN,
		a = Math.floor( ( 14 - month ) / 12 ),
		y = year + 4800 - a,
		m = month + 12 * a - 3;

	hours = hours || 12; // Given hours or midday
	minutes = minutes || 0;
	seconds = seconds || 0;

	// Translate from Gregorian to JDN
	// Calculation take from
	// https://en.wikipedia.org/wiki/Julian_day#Converting_Julian_or_Gregorian_calendar_date_to_Julian_Day_Number
	JDN = day + Math.floor( ( 153 * m + 2) / 5 ) + 365 * y +
		Math.floor( y / 4 ) - Math.floor( y / 100 ) + Math.floor( y / 400 ) +
		32045

	// Include time of day
	JD = JDN + ( ( hours - 12 ) / 24 ) + ( minutes / 1440 ) + ( seconds / 86400 );

	// Return JD from J2000.0 (Epoch)
	return JD - 2451545.0;
};

/**
 * Solve the Kepler equation for the given parameters to get the object's
 * position in space. This position is raw heliocentric space coordiates
 *
 * Calculation taken from NASA JPL Formula:
 * http://ssd.jpl.nasa.gov/?planet_pos
 * And
 * https://gist.github.com/bartolsthoorn/7913357
 *
 * @param {Object} vars Variables necessary for calculation.
 * @param {number[]} vars.a Semi-major axis (au and au/seconds)
 * @param {number[]} vars.e Eccentricity ( no units and no units/seconds)
 * @param {number[]} vars.I Inclination (degrees and degrees/seconds)
 * @param {number[]} vars.L Mean longitude (degrees and degrees/seconds)
 * @param {number[]} vars.long_peri Longitude of perihelion (degree and degrees/seconds)
 * @param {number[]} vars.long_node Longitude of the ascending node (degrees and degrees/seconds)
 * @param {number} [jd] Julian Days from J2000.0. If not given, calculated for J2000.0
 * @returns {Object} Three-dimensional position in space, values in km
 */
sp.Scenario.Calculator.solveKepler = function ( vars, jd ) {
	var T, a, e, I, L, om, bigOm, omega, M, b, c, f, s,
		dimensions = {},
		x_tag, y_tag, z_tag,
		ITERLIMIT = 1000,
		ERRORLIMIT = Math.pow( 10, -4 ),
		/**
		 * Convert angles to radians
		 * @param {number} angle Angle
		 * @returns {number} Radians
		 */
		to_radians = function toRadians( angle ) {
			return angle * ( 180 / Math.PI );
		},
		/**
		 * Approximate the eccententric anomaly by iteration
		 * @param {number} e Eccentricity
		 * @param {number} M Mean anomaly
		 * @returns {number} Eccentric anomaly in radians
		 */
		approximate_E = function approxE( e, M ) {
			var e_star = ( Math.PI / 180 ) * e,
			E_n = M + e_star + Math.sin( to_radians( M ) ),
			dE = 1,
			i = 0;

			while ( ITERLIMIT-- && Math.abs( dE ) > ERRORLIMIT ) {
				dM = M - ( E_n - e_star * Math.sin( to_radians( E_n ) ) );
				dE = dM / ( 1 - e * Math.cos( to_radians( E_n ) ) );
				E_n = E_n + dE;
			}
			return to_radians( E_n );
		};

	if ( !vars ) {
		return null;
	}

	// Optional variables
	T = jd || 0;
	b = vars.b || 0;
	c = vars.c || 0;
	f = vars.f || 0;
	s = vars.s || 0;

	// Calculate the elements
	a = vars.a[0] + vars.a[1] * T;
	e = vars.e[0] + vars.e[1] * T;
	I = vars.I[0] + vars.I[1] * T;
	L = vars.L[0] + vars.L[1] * T;
	om = vars.long_peri[0] + vars.long_peri[1] * T;
	bigOm = vars.long_node[0] + vars.long_node[1] * T;

	// Argument of perihelion
	omega = om - bigOm;

	// Mean anomaly
	M = L - om + b *
		Math.pow( T, 2 ) + c * Math.cos( f * T ) + s * Math.sin( f * T );
	M = to_radians( M ) % 180;

	// Eccentric anomaly
	E = approximate_E( e, M );

	// Heliocentric coordinates
	x = a * ( Math.cos( E ) - e );
	y = a * Math.sqrt( 1 - Math.pow( e, 2 ) ) * Math.sin( E );
	z = 0;

	// TODO: Figure out how to adjust to a system
	// where two or more stars are the 'heliocentric'
	// coordinate center, like binary systems

	dimensions = {
		'x': x,
		'y': y,
		'z': y
	}
	return dimensions;
};

/**
 * Celestial object, defines a moving object in space.
 *
 * @class sp.Scenario.CelestialObject
 * @mixins OO.EventEmitter
 *
 * @param {Object} config Celestial object definition
 */
sp.Scenario.CelestialObject = function SpScenarioCelestialObject( config ) {
	config = config || {};

	// Mixin constructors
	OO.EventEmitter.call( this );

	// Cache
	this.cache = {};

	// Cache trail points
	this.trails = [];
	this.frameCounter = 0;
	// TODO: Consider adding these to the global scenario config
	// Keep record of trail every X frames
	this.trailsFrameGap = 2;
	// How many trail points to store
	this.numTrailPoints = 80;

	// Attributes
	this.name = config.name || '';
	this.description = config.description || '';
	this.view = config.graphic || {};

	this.transform = { x: 0, y: 0, angle: 0, scale: 1 };

	this.vars = config.vars;

	this.initial_position = config.initial_position || { 'x': 0, 'y': 0 };

	// Link to the object it is orbiting
	this.orbiting = null;

	this.type = config.type || 'planet';

	// Initial radius
	this.radius = Number( config.vars.r ) || 10;
};

/* Inheritance */
OO.mixinClass( sp.Scenario.CelestialObject, OO.EventEmitter );

/**
 * Get space coordinates per time.
 * @param {number} time Time unit
 */
sp.Scenario.CelestialObject.prototype.getSpaceCoordinates = function ( time ) {
	var dest, M, G, period;

	time = time || 0;

	if ( this.orbiting ) {
		// Find period if it doesn't exist
		if ( !this.vars.p ) {
			// Calculate period
			a = this.vars.a[0];// * sp.Scenario.Calculator.constants.AU;
			G = sp.Scenario.Calculator.constants.G;
			M = this.orbiting.getMass();
			this.vars.p = 2 * Math.PI * Math.sqrt( Math.pow( a, 3) / ( G * M ) );
		}

		// TODO: Cache coordinates

		this.coordinates = sp.Scenario.Calculator.solveKepler(
			this.vars,
			time
		);
	} else {
		this.coordinates = { x: 0, y: 0, z: 0 };
	}
	return this.coordinates;
};

/**
 * Store the coordinate in the trail queue. Stores the space coordinates.
 * Dequeue the first when trail number cap is reached.
 * @param {Object} coordinates Coordinates of the trails
 */
sp.Scenario.CelestialObject.prototype.storeTrailPoint = function ( coordinates ) {
	// Store coordinates for trails
	this.trails.push( coordinates );
	if ( this.trails.length > this.numTrailPoints ) {
		// Dequeue the first
		this.trails.shift();
	}
};

/**
 * Get the trail points.
 * @returns {Object[]} Space coordinates for the trails
 */
sp.Scenario.CelestialObject.prototype.getTrailPoints = function () {
	return this.trails;
};

/**
 * Flush the trails queue completely.
 */
sp.Scenario.CelestialObject.prototype.flushTrailPoints = function () {
	this.trails = [];
	this.frameCounter = 0;
};

/**
 * Get object type
 * @returns {string} Celestial object type, 'star' or 'planet'
 */
sp.Scenario.CelestialObject.prototype.getType = function () {
	return this.type;
};

/**
 * Get object name
 * @returns {string} Celestial object name
 */
sp.Scenario.CelestialObject.prototype.getName = function () {
	return this.name;
};

/**
 * Get object description
 * @returns {string} Celestial object description
 */
sp.Scenario.CelestialObject.prototype.getDescription = function () {
	return this.description;
};

/**
 * Set the object this object is orbiting
 * @param {sp.Scenario.CelestialObject} obj Object that is the center of the orbit
 */
sp.Scenario.CelestialObject.prototype.setOrbit = function ( obj ) {
	this.orbiting = obj;
};

/**
 * Retrieve the object that is the center of orbit
 * @returns {sp.Scenario.CelestialObject} obj Object that is the center of the orbit
 */
sp.Scenario.CelestialObject.prototype.getOrbit = function () {
	return this.orbiting;
};

/**
 * Set object name
 * @param {string} name New object name
 */
sp.Scenario.CelestialObject.prototype.setName = function ( name ) {
	this.name = name;
};

/**
 * Set object description
 * @param {string} desc New object description
 */
sp.Scenario.CelestialObject.prototype.setDescription = function ( desc ) {
	this.description = desc;
};

sp.Scenario.CelestialObject.prototype.getMass = function () {
	return this.vars.m;
};

sp.Scenario.CelestialObject.prototype.getView = function () {
	return this.view;
}

/**
 * Get the planet radius if it exists.
 * @returns {number|null} Planet radius in km
 */
sp.Scenario.CelestialObject.prototype.getRadius = function () {
	return this.vars.r;
};
