/**
 * Solar Playground screen controller for canvas and context elements
 *
 * @class sp.container.Screen
 * @mixins OO.EventEmitter
 *
 * @param {Object} [config] Configuration object
 */
sp.container.Screen = function SpContainerScreen( config ) {
	this.config = config || {};

	// Mixin constructors
	OO.EventEmitter.call( this );

	this.canvasCenterPoint = { x: 0, y: 0 };

	this.canvasID = 'canvas_' + this.config.id;

	// Initialize
	this.$canvas = $( '<canvas>' )
		.addClass( 'sp-container-canvas' )
		.prop( 'id', this.canvasID )
		.attr( 'width', this.config.width )
		.attr( 'height', this.config.height );

	this.context = this.$canvas[0].getContext( '2d' );

	// Events
	this.$canvas.on( 'mousedown', $.proxy( this.onCanvasMouseDown, this ) );
	this.$canvas.on( 'mousemove', $.proxy( this.onCanvasMouseMove, this ) );
	this.$canvas.on( 'mouseup', $.proxy( this.onCanvasMouseUp, this ) );
	this.$canvas.on( 'mouseout', $.proxy( this.onCanvasMouseUp, this ) );
};

/* Inheritance */

OO.mixinClass( sp.container.Screen, OO.EventEmitter );

/* Events */

/**
 * @event drag
 * @param {string} action Drag action 'start', 'during' or 'end'
 * @param {Object|null} coords Mouse x/y coordinates.
 *  * For 'start' action, coords are mouseStartingPoint
 *  * For 'during' action, coords are the relative distance between
 *    the current mouse coordinates and the initial dragging point.
 *    (In other words, it is the distance 'dragged' by the mouse)
 *  * For 'end' action, coords are not supplied.
 * point, depending on the action.
 * Dragging the mouse on the screen (moving while mousedown)
 */

/**
 * Propogate canvas mousedown event
 * @param {Event} e Event
 * @fires startDrag
 */
sp.container.Screen.prototype.onCanvasMouseDown = function ( e ) {
	this.canvasMouseMoving = true;
	this.mouseStartingPoint = {
		'x': e.pageX,
		'y': e.pageY
	};
	this.emit( 'drag', 'start', this.mouseStartingPoint );
};

/**
 * Respond to canvas mouse move
 * @param {Event} e Event
 * @fires drag
 */
sp.container.Screen.prototype.onCanvasMouseMove = function ( e ) {
	var coords;
	if ( this.canvasMouseMoving && !$.isEmptyObject( this.mouseStartingPoint ) ) {
		dx = e.pageX - this.mouseStartingPoint.x;
		dy = e.pageY - this.mouseStartingPoint.y;

		coords = {
			'x': dx + this.canvasCenterPoint.x,
			'y': dy + this.canvasCenterPoint.y
		};
		this.emit( 'drag', 'during', coords );
	}
};

/**
 * Propogate canvas mouseup event
 * @param {Event} e Event
 * @fires drag
 */
sp.container.Screen.prototype.onCanvasMouseUp = function ( e ) {
	this.canvasMouseMoving = false;
	this.mouseStartingPoint = {};
	this.canvasCenterPoint = {};
	this.emit( 'drag', 'end' );
};

/**
 * Draw a circle on the canvas
 * @param {Object} coords Canvas coordinates
 * @param {number} [radius] Circle radius
 * @param {string} [color] Circle color
 * @param {boolean} [hasShadow] Add a shadow
 */
sp.container.Screen.prototype.drawCircle = function ( coords, radius, color, hasShadow ) {
	this.context.save();
	this.context.beginPath();
	this.context.arc(
		coords.x,
		coords.y,
		radius || 5, 0, 2 * Math.PI,
		false
	);
	this.context.fillStyle = color || 'white';
	if ( hasShadow ) {
		this.context.shadowColor = color || 'white';
		this.context.shadowBlur = 20;
		this.context.shadowOffsetX = 0;
		this.context.shadowOffsetY = 0;
	}
	this.context.fill();
	this.context.restore();
};

/**
 * Draw a line on the canvas
 * @param {number[]} coords_start Canvas coordinates to start of line
 * @param {number[]} coords_end Canvas coordinates to end of line
 * @param {string} [color] Line color
 * @param {string} [width] Line width
 * @param {boolean} [isDashed] Make the line dashed
 */
sp.container.Screen.prototype.drawLine = function ( coords_start, coords_end, color, width, isDashed ) {
	this.context.beginPath();
	this.context.moveTo( coords_start[0], coords_start[1] );
	this.context.lineTo( coords_end[0], coords_end[1] );
	if ( isDashed && this.context.setLineDash ) {
		this.context.setLineDash( [ 5, 7 ] );
	}
	this.context.lineWidth = width || 1;
	this.context.strokeStyle = color || '#ffffff';
	this.context.stroke();
};

/**
 * Clear an area on the canvas
 * @param {number} [square] Dimensions and coordinates of the square
 * to clear. If not set, the entire canvas will be cleared.
 * @param {number} [square.top] Top coordinate of the square
 * @param {number} [square.left] Left coordinate of the square
 * @param {number} [square.width] Width of the square
 * @param {number} [square.height] Height of the square
 */
sp.container.Screen.prototype.clear = function ( square ) {
	var canvasDimensions = this.getDimensions();
	square = square || {};

	// Fix optional values:
	square.left = square.left || 0;
	square.top = square.top || 0;
	square.width = square.width || canvasDimensions.width;
	square.height = square.height || canvasDimensions.height;

	// Erase the square
	this.context.clearRect( square.left, square.top, square.width, square.height );
};

/**
 * Set the center point of the center of the scenario.
 * @param {Object} coords Center of scenario coordinates
 */
sp.container.Screen.prototype.setCenterPoint = function ( coords ) {
	this.canvasCenterPoint = {
		'x': coords.x,
		'y': coords.y
	};
};

/**
 * Get the canvas center point
 * @returns {Object} Center point
 */
sp.container.Screen.prototype.getCenterPoint = function () {
	return this.canvasCenterPoint;
};

/**
 * Get canvas jQuery element
 * @return {jQuery} Canvas jQuery element
 */
sp.container.Screen.prototype.getCanvas = function () {
	return this.$canvas;
};

/**
 * Get the canvas context
 * @returns {Object} Canvas context
 */
sp.container.Screen.prototype.getContext = function () {
	return this.$canvas[0].getContext( '2d' );
};

/**
 * Get the canvas dimensions
 * @returns {Object} Width and height of the canvas
 */
sp.container.Screen.prototype.getDimensions = function () {
	return {
		'width': this.$canvas.width(),
		'height': this.$canvas.height()
	};
};

/**
 * Get canvas id
 * @return {string} Canvas id
 */
sp.container.Screen.prototype.getID = function () {
	return this.canvasID;
};
