Ext.data.JsonP.sp_data_Scenario({"tagname":"class","name":"sp.data.Scenario","autodetected":{},"files":[{"filename":"SolarPlayground.dist.js","href":"SolarPlayground.dist.html#sp-data-Scenario"}],"mixins":["OO.EventEmitter"],"params":[{"tagname":"params","type":"sp.container.Screen","name":"screen","doc":"<p>Target screen for the scenario</p>\n","html_type":"<a href=\"#!/api/sp.container.Screen\" rel=\"sp.container.Screen\" class=\"docClass\">sp.container.Screen</a>"},{"tagname":"params","type":"Object","name":"scenario","doc":"<p>Scenario configuration object</p>\n","html_type":"Object"},{"tagname":"params","type":"Object","name":"config","optional":true,"doc":"<p>Configuration options. Will override any\nconfiguration in the scenario object</p>\n","html_type":"Object"}],"members":[{"name":"addToCenterPoint","tagname":"method","owner":"sp.data.Scenario","id":"method-addToCenterPoint","meta":{}},{"name":"draw","tagname":"method","owner":"sp.data.Scenario","id":"method-draw","meta":{}},{"name":"flushAllTrails","tagname":"method","owner":"sp.data.Scenario","id":"method-flushAllTrails","meta":{}},{"name":"getAllObjects","tagname":"method","owner":"sp.data.Scenario","id":"method-getAllObjects","meta":{}},{"name":"getCenterPoint","tagname":"method","owner":"sp.data.Scenario","id":"method-getCenterPoint","meta":{}},{"name":"getPOV","tagname":"method","owner":"sp.data.Scenario","id":"method-getPOV","meta":{}},{"name":"getPitchAngle","tagname":"method","owner":"sp.data.Scenario","id":"method-getPitchAngle","meta":{}},{"name":"getZoom","tagname":"method","owner":"sp.data.Scenario","id":"method-getZoom","meta":{}},{"name":"isPaused","tagname":"method","owner":"sp.data.Scenario","id":"method-isPaused","meta":{}},{"name":"isShowGrid","tagname":"method","owner":"sp.data.Scenario","id":"method-isShowGrid","meta":{}},{"name":"onPitchChange","tagname":"method","owner":"sp.data.Scenario","id":"method-onPitchChange","meta":{}},{"name":"onScreenDrag","tagname":"method","owner":"sp.data.Scenario","id":"method-onScreenDrag","meta":{}},{"name":"pause","tagname":"method","owner":"sp.data.Scenario","id":"method-pause","meta":{}},{"name":"processObjects","tagname":"method","owner":"sp.data.Scenario","id":"method-processObjects","meta":{}},{"name":"resume","tagname":"method","owner":"sp.data.Scenario","id":"method-resume","meta":{}},{"name":"run","tagname":"method","owner":"sp.data.Scenario","id":"method-run","meta":{}},{"name":"setCenterPoint","tagname":"method","owner":"sp.data.Scenario","id":"method-setCenterPoint","meta":{}},{"name":"setPOV","tagname":"method","owner":"sp.data.Scenario","id":"method-setPOV","meta":{}},{"name":"setPitchAngle","tagname":"method","owner":"sp.data.Scenario","id":"method-setPitchAngle","meta":{}},{"name":"setZoom","tagname":"method","owner":"sp.data.Scenario","id":"method-setZoom","meta":{}},{"name":"toggleGrid","tagname":"method","owner":"sp.data.Scenario","id":"method-toggleGrid","meta":{}},{"name":"togglePaused","tagname":"method","owner":"sp.data.Scenario","id":"method-togglePaused","meta":{}},{"name":"paused","tagname":"event","owner":"sp.data.Scenario","id":"event-paused","meta":{}},{"name":"pitch","tagname":"event","owner":"sp.data.Scenario","id":"event-pitch","meta":{}},{"name":"pov","tagname":"event","owner":"sp.data.Scenario","id":"event-pov","meta":{}},{"name":"zoom","tagname":"event","owner":"sp.data.Scenario","id":"event-zoom","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-sp.data.Scenario","short_doc":"Solar playground scenario ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixins</h4><div class='dependency'>OO.EventEmitter</div><h4>Files</h4><div class='dependency'><a href='source/SolarPlayground.dist.html#sp-data-Scenario' target='_blank'>SolarPlayground.dist.js</a></div></pre><div class='doc-contents'><p>Solar playground scenario</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>screen</span> : <a href=\"#!/api/sp.container.Screen\" rel=\"sp.container.Screen\" class=\"docClass\">sp.container.Screen</a><div class='sub-desc'><p>Target screen for the scenario</p>\n</div></li><li><span class='pre'>scenario</span> : Object<div class='sub-desc'><p>Scenario configuration object</p>\n</div></li><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>Configuration options. Will override any\nconfiguration in the scenario object</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addToCenterPoint' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-addToCenterPoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-addToCenterPoint' class='name expandable'>addToCenterPoint</a>( <span class='pre'>[x], [y]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add to the center point ...</div><div class='long'><p>Add to the center point</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : number (optional)<div class='sub-desc'><p>Amount to add to X coordinate</p>\n</div></li><li><span class='pre'>y</span> : number (optional)<div class='sub-desc'><p>Amount to add to Y coordinate</p>\n</div></li></ul></div></div></div><div id='method-draw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-draw' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-draw' class='name expandable'>draw</a>( <span class='pre'>time, ignoreTrails</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Draw all elements ...</div><div class='long'><p>Draw all elements</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>time</span> : number<div class='sub-desc'><p>Time</p>\n</div></li><li><span class='pre'>ignoreTrails</span> : boolean<div class='sub-desc'><p>Ignore trails despite settings</p>\n</div></li></ul></div></div></div><div id='method-flushAllTrails' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-flushAllTrails' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-flushAllTrails' class='name expandable'>flushAllTrails</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Flush all trails from all objects ...</div><div class='long'><p>Flush all trails from all objects</p>\n</div></div></div><div id='method-getAllObjects' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-getAllObjects' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-getAllObjects' class='name expandable'>getAllObjects</a>( <span class='pre'></span> ) : sp.data.Scenario.CelestialObject<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieve all the celestial objects attached to this scenario ...</div><div class='long'><p>Retrieve all the celestial objects attached to this scenario</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>sp.data.Scenario.CelestialObject</span><div class='sub-desc'><p>All objects in the scenario</p>\n</div></li></ul></div></div></div><div id='method-getCenterPoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-getCenterPoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-getCenterPoint' class='name expandable'>getCenterPoint</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the current center point of the view ...</div><div class='long'><p>Get the current center point of the view</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>x/y coordinates of the current center point</p>\n</div></li></ul></div></div></div><div id='method-getPOV' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-getPOV' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-getPOV' class='name expandable'>getPOV</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the POV key currently set ...</div><div class='long'><p>Get the POV key currently set</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>POV key</p>\n</div></li></ul></div></div></div><div id='method-getPitchAngle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-getPitchAngle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-getPitchAngle' class='name expandable'>getPitchAngle</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the current pitch angle ...</div><div class='long'><p>Get the current pitch angle</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>Pitch angle</p>\n</div></li></ul></div></div></div><div id='method-getZoom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-getZoom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-getZoom' class='name expandable'>getZoom</a>( <span class='pre'></span> ) : numver<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieve the zoom level ...</div><div class='long'><p>Retrieve the zoom level</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>numver</span><div class='sub-desc'><p>Current zoom level</p>\n</div></li></ul></div></div></div><div id='method-isPaused' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-isPaused' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-isPaused' class='name expandable'>isPaused</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Check whether the scenario is paused ...</div><div class='long'><p>Check whether the scenario is paused</p>\n</div></div></div><div id='method-isShowGrid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-isShowGrid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-isShowGrid' class='name expandable'>isShowGrid</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Check whether the scenario is paused ...</div><div class='long'><p>Check whether the scenario is paused</p>\n</div></div></div><div id='method-onPitchChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-onPitchChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-onPitchChange' class='name expandable'>onPitchChange</a>( <span class='pre'>pitch</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Propogate the pitch event from the view controller ...</div><div class='long'><p>Propogate the pitch event from the view controller</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pitch</span> : number<div class='sub-desc'><p>Current pitch angle</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/sp.data.Scenario-event-pitch\" rel=\"sp.data.Scenario-event-pitch\" class=\"docClass\">pitch</a></li></ul></div></div></div><div id='method-onScreenDrag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-onScreenDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-onScreenDrag' class='name expandable'>onScreenDrag</a>( <span class='pre'>action, [coords]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Respond to screen drag ...</div><div class='long'><p>Respond to screen drag</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : string<div class='sub-desc'><p>Action parameter for 'start', 'during', and 'end'</p>\n</div></li><li><span class='pre'>coords</span> : Object (optional)<div class='sub-desc'><p>Coordinates</p>\n</div></li></ul></div></div></div><div id='method-pause' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-pause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-pause' class='name expandable'>pause</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Pause the scenario ...</div><div class='long'><p>Pause the scenario</p>\n<h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/sp.data.Scenario-event-paused\" rel=\"sp.data.Scenario-event-paused\" class=\"docClass\">paused</a></li></ul></div></div></div><div id='method-processObjects' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-processObjects' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-processObjects' class='name expandable'>processObjects</a>( <span class='pre'>scenarioObjects</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Process the solar playground simulator objects ...</div><div class='long'><p>Process the solar playground simulator objects</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scenarioObjects</span> : Object<div class='sub-desc'><p>Simulation objects definition</p>\n</div></li></ul></div></div></div><div id='method-resume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-resume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-resume' class='name expandable'>resume</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resume the scenario ...</div><div class='long'><p>Resume the scenario</p>\n<h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/sp.data.Scenario-event-paused\" rel=\"sp.data.Scenario-event-paused\" class=\"docClass\">paused</a></li></ul></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-run' class='name expandable'>run</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Run the scenario ...</div><div class='long'><p>Run the scenario</p>\n</div></div></div><div id='method-setCenterPoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-setCenterPoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-setCenterPoint' class='name expandable'>setCenterPoint</a>( <span class='pre'>coords</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the viewpoint's center point ...</div><div class='long'><p>Set the viewpoint's center point</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>coords</span> : Object<div class='sub-desc'><p>x/y coordinates of the center of the system</p>\n</div></li></ul></div></div></div><div id='method-setPOV' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-setPOV' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-setPOV' class='name expandable'>setPOV</a>( <span class='pre'>povKey</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the POV object ...</div><div class='long'><p>Set the POV object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>povKey</span> : string<div class='sub-desc'><p>Object key for the pov</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/sp.data.Scenario-event-pov\" rel=\"sp.data.Scenario-event-pov\" class=\"docClass\">pov</a></li></ul></div></div></div><div id='method-setPitchAngle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-setPitchAngle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-setPitchAngle' class='name expandable'>setPitchAngle</a>( <span class='pre'>pitch</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the pitch angle for the scenario ...</div><div class='long'><p>Set the pitch angle for the scenario</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pitch</span> : [type]<div class='sub-desc'><p>[description]</p>\n</div></li></ul></div></div></div><div id='method-setZoom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-setZoom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-setZoom' class='name expandable'>setZoom</a>( <span class='pre'>z</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Increase or decrease scenario zoom levels ...</div><div class='long'><p>Increase or decrease scenario zoom levels</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>z</span> : number<div class='sub-desc'><p>Zoom level, negative for zoom out</p>\n</div></li></ul></div></div></div><div id='method-toggleGrid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-toggleGrid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-toggleGrid' class='name expandable'>toggleGrid</a>( <span class='pre'>isShowGrid</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Toggle the grid display ...</div><div class='long'><p>Toggle the grid display</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isShowGrid</span> : Boolean<div class='sub-desc'><p>Show grid</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>grid</li></ul></div></div></div><div id='method-togglePaused' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-method-togglePaused' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-method-togglePaused' class='name expandable'>togglePaused</a>( <span class='pre'>[isPause]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Toggle between pause and resume the scenario ...</div><div class='long'><p>Toggle between pause and resume the scenario</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isPause</span> : boolean (optional)<div class='sub-desc'><p>Optional. If supplied, pauses or resumes the scenario</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/sp.data.Scenario-event-paused\" rel=\"sp.data.Scenario-event-paused\" class=\"docClass\">paused</a></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-paused' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-event-paused' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-event-paused' class='name expandable'>paused</a>( <span class='pre'>[isPaused]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isPaused</span> : boolean (optional)<div class='sub-desc'><p>Paused or resumed\nChange in pause/resume state</p>\n</div></li></ul></div></div></div><div id='event-pitch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-event-pitch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-event-pitch' class='name expandable'>pitch</a>( <span class='pre'>pitch</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pitch</span> : number<div class='sub-desc'><p>Current pitch angle\nChange the pitch angle for display</p>\n</div></li></ul></div></div></div><div id='event-pov' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-event-pov' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-event-pov' class='name expandable'>pov</a>( <span class='pre'>pov_key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pov_key</span> : string<div class='sub-desc'><p>The key of the new POV object\nChange in point-of-view (POV) for the scenario</p>\n</div></li></ul></div></div></div><div id='event-zoom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.data.Scenario'>sp.data.Scenario</span><br/><a href='source/SolarPlayground.dist.html#sp-data-Scenario-event-zoom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.data.Scenario-event-zoom' class='name expandable'>zoom</a>( <span class='pre'>zoom</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>zoom</span> : number<div class='sub-desc'><p>Current zoom factor\nChange the zoom level for the scenario</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});