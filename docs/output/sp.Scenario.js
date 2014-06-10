Ext.data.JsonP.sp_Scenario({"tagname":"class","name":"sp.Scenario","autodetected":{},"files":[{"filename":"sp.Scenario.js","href":"sp.Scenario.html#sp-Scenario"}],"params":[{"tagname":"params","type":"jQuery","name":"$canvas","doc":"<p>Target canvas for the scenario</p>\n","html_type":"jQuery"},{"tagname":"params","type":"Object","name":"scenario","doc":"<p>Scenario configuration object</p>\n","html_type":"Object"}],"members":[{"name":"clearCanvas","tagname":"method","owner":"sp.Scenario","id":"method-clearCanvas","meta":{}},{"name":"draw","tagname":"method","owner":"sp.Scenario","id":"method-draw","meta":{}},{"name":"drawCircle","tagname":"method","owner":"sp.Scenario","id":"method-drawCircle","meta":{}},{"name":"isPaused","tagname":"method","owner":"sp.Scenario","id":"method-isPaused","meta":{}},{"name":"pause","tagname":"method","owner":"sp.Scenario","id":"method-pause","meta":{}},{"name":"processObjects","tagname":"method","owner":"sp.Scenario","id":"method-processObjects","meta":{}},{"name":"resume","tagname":"method","owner":"sp.Scenario","id":"method-resume","meta":{}},{"name":"run","tagname":"method","owner":"sp.Scenario","id":"method-run","meta":{}},{"name":"togglePaused","tagname":"method","owner":"sp.Scenario","id":"method-togglePaused","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-sp.Scenario","short_doc":"Solar playground scenario container ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/sp.Scenario.html#sp-Scenario' target='_blank'>sp.Scenario.js</a></div></pre><div class='doc-contents'><p>Solar playground scenario container</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$canvas</span> : jQuery<div class='sub-desc'><p>Target canvas for the scenario</p>\n</div></li><li><span class='pre'>scenario</span> : Object<div class='sub-desc'><p>Scenario configuration object</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clearCanvas' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.Scenario'>sp.Scenario</span><br/><a href='source/sp.Scenario.html#sp-Scenario-method-clearCanvas' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.Scenario-method-clearCanvas' class='name expandable'>clearCanvas</a>( <span class='pre'>context, [square]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Clear an area on the canvas ...</div><div class='long'><p>Clear an area on the canvas</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object<div class='sub-desc'><p>Canvas context object</p>\n</div></li><li><span class='pre'>square</span> : number (optional)<div class='sub-desc'><p>Dimensions and coordinates of the square\nto clear</p>\n<ul><li><span class='pre'>top</span> : number (optional)<div class='sub-desc'><p>Top coordinate of the square</p>\n</div></li><li><span class='pre'>left</span> : number (optional)<div class='sub-desc'><p>Left coordinate of the square</p>\n</div></li><li><span class='pre'>width</span> : number (optional)<div class='sub-desc'><p>Width of the square</p>\n</div></li><li><span class='pre'>height</span> : number (optional)<div class='sub-desc'><p>Height of the square</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-draw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.Scenario'>sp.Scenario</span><br/><a href='source/sp.Scenario.html#sp-Scenario-method-draw' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.Scenario-method-draw' class='name expandable'>draw</a>( <span class='pre'>time</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Draw all elements ...</div><div class='long'><p>Draw all elements</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>time</span> : number<div class='sub-desc'><p>Time</p>\n</div></li></ul></div></div></div><div id='method-drawCircle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.Scenario'>sp.Scenario</span><br/><a href='source/sp.Scenario.html#sp-Scenario-method-drawCircle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.Scenario-method-drawCircle' class='name expandable'>drawCircle</a>( <span class='pre'>context, coords, [radius], [color], [hasShadow]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Draw a circle on the canvas ...</div><div class='long'><p>Draw a circle on the canvas</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object<div class='sub-desc'><p>Canvas context object</p>\n</div></li><li><span class='pre'>coords</span> : Object<div class='sub-desc'><p>Canvas coordinates</p>\n</div></li><li><span class='pre'>radius</span> : number (optional)<div class='sub-desc'><p>Circle radius</p>\n</div></li><li><span class='pre'>color</span> : string (optional)<div class='sub-desc'><p>Circle color</p>\n</div></li><li><span class='pre'>hasShadow</span> : boolean (optional)<div class='sub-desc'><p>Add a shadow</p>\n</div></li></ul></div></div></div><div id='method-isPaused' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.Scenario'>sp.Scenario</span><br/><a href='source/sp.Scenario.html#sp-Scenario-method-isPaused' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.Scenario-method-isPaused' class='name expandable'>isPaused</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Check whether the scenario is paused ...</div><div class='long'><p>Check whether the scenario is paused</p>\n</div></div></div><div id='method-pause' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.Scenario'>sp.Scenario</span><br/><a href='source/sp.Scenario.html#sp-Scenario-method-pause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.Scenario-method-pause' class='name expandable'>pause</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Pause the scenario ...</div><div class='long'><p>Pause the scenario</p>\n</div></div></div><div id='method-processObjects' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.Scenario'>sp.Scenario</span><br/><a href='source/sp.Scenario.html#sp-Scenario-method-processObjects' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.Scenario-method-processObjects' class='name expandable'>processObjects</a>( <span class='pre'>scenarioObjects</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Process the solar playground simulator objects ...</div><div class='long'><p>Process the solar playground simulator objects</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scenarioObjects</span> : Object<div class='sub-desc'><p>Simulation objects definition</p>\n</div></li></ul></div></div></div><div id='method-resume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.Scenario'>sp.Scenario</span><br/><a href='source/sp.Scenario.html#sp-Scenario-method-resume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.Scenario-method-resume' class='name expandable'>resume</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resume the scenario ...</div><div class='long'><p>Resume the scenario</p>\n</div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.Scenario'>sp.Scenario</span><br/><a href='source/sp.Scenario.html#sp-Scenario-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.Scenario-method-run' class='name expandable'>run</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Run the scenario ...</div><div class='long'><p>Run the scenario</p>\n</div></div></div><div id='method-togglePaused' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.Scenario'>sp.Scenario</span><br/><a href='source/sp.Scenario.html#sp-Scenario-method-togglePaused' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.Scenario-method-togglePaused' class='name expandable'>togglePaused</a>( <span class='pre'>[isPause]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Toggle between pause and resume the scenario ...</div><div class='long'><p>Toggle between pause and resume the scenario</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isPause</span> : boolean (optional)<div class='sub-desc'><p>Optional. If supplied, pauses or resumes the scenario</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});