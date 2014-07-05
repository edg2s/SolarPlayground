Ext.data.JsonP.sp_container_Manager({"tagname":"class","name":"sp.container.Manager","autodetected":{},"files":[{"filename":"sp.container.Manager.js","href":"sp.container.Manager.html#sp-container-Manager"}],"mixins":["OO.EventEmitter"],"params":[{"tagname":"params","type":"Object","name":"config","optional":true,"doc":"<p>Configuration object</p>\n","html_type":"Object"}],"members":[{"name":"addCommands","tagname":"method","owner":"sp.container.Manager","id":"method-addCommands","meta":{}},{"name":"addToolbar","tagname":"method","owner":"sp.container.Manager","id":"method-addToolbar","meta":{}},{"name":"execute","tagname":"method","owner":"sp.container.Manager","id":"method-execute","meta":{}},{"name":"getScenario","tagname":"method","owner":"sp.container.Manager","id":"method-getScenario","meta":{}},{"name":"isPaused","tagname":"method","owner":"sp.container.Manager","id":"method-isPaused","meta":{}},{"name":"loadFromFile","tagname":"method","owner":"sp.container.Manager","id":"method-loadFromFile","meta":{}},{"name":"setScenario","tagname":"method","owner":"sp.container.Manager","id":"method-setScenario","meta":{}},{"name":"setZoom","tagname":"method","owner":"sp.container.Manager","id":"method-setZoom","meta":{}},{"name":"togglePaused","tagname":"method","owner":"sp.container.Manager","id":"method-togglePaused","meta":{}},{"name":"scenarioLoaded","tagname":"event","owner":"sp.container.Manager","id":"event-scenarioLoaded","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-sp.container.Manager","short_doc":"Solar Playground container manager ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixins</h4><div class='dependency'>OO.EventEmitter</div><h4>Files</h4><div class='dependency'><a href='source/sp.container.Manager.html#sp-container-Manager' target='_blank'>sp.container.Manager.js</a></div></pre><div class='doc-contents'><p>Solar Playground container manager</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>Configuration object</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addCommands' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.container.Manager'>sp.container.Manager</span><br/><a href='source/sp.container.Manager.html#sp-container-Manager-method-addCommands' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.container.Manager-method-addCommands' class='name expandable'>addCommands</a>( <span class='pre'>names</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add all commands from initialization options. ...</div><div class='long'><p>Add all commands from initialization options.</p>\n\n<p>Commands and triggers must be registered under the same name prior to adding them to the surface.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>names</span> : string[]<div class='sub-desc'><p>List of symbolic names of commands in the command registry</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Error</span><div class='sub-desc'><p>If command has not been registered</p>\n</div></li><li><span class='pre'>Error</span><div class='sub-desc'><p>If trigger has not been registered</p>\n</div></li><li><span class='pre'>Error</span><div class='sub-desc'><p>If trigger is not complete</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>addCommand</li></ul></div></div></div><div id='method-addToolbar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.container.Manager'>sp.container.Manager</span><br/><a href='source/sp.container.Manager.html#sp-container-Manager-method-addToolbar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.container.Manager-method-addToolbar' class='name expandable'>addToolbar</a>( <span class='pre'>$toolbar, [position]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add a toolbar to the container ...</div><div class='long'><p>Add a toolbar to the container</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$toolbar</span> : jQuery<div class='sub-desc'><p>jQuery toolbar element</p>\n</div></li><li><span class='pre'>position</span> : string (optional)<div class='sub-desc'><p>Position in the container; 'top' or 'bottom'</p>\n</div></li></ul></div></div></div><div id='method-execute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.container.Manager'>sp.container.Manager</span><br/><a href='source/sp.container.Manager.html#sp-container-Manager-method-execute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.container.Manager-method-execute' class='name expandable'>execute</a>( <span class='pre'>action, [method]</span> ) : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Execute an action or command. ...</div><div class='long'><p>Execute an action or command.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : string<div class='sub-desc'><p>Symbolic name of action</p>\n</div></li><li><span class='pre'>method</span> : string (optional)<div class='sub-desc'><p>Action method name</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>Action or command was executed</p>\n</div></li></ul></div></div></div><div id='method-getScenario' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.container.Manager'>sp.container.Manager</span><br/><a href='source/sp.container.Manager.html#sp-container-Manager-method-getScenario' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.container.Manager-method-getScenario' class='name expandable'>getScenario</a>( <span class='pre'></span> ) : sp.Scenario<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieve the scenario attached to this container ...</div><div class='long'><p>Retrieve the scenario attached to this container</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>sp.Scenario</span><div class='sub-desc'><p>s Scenario object</p>\n</div></li></ul></div></div></div><div id='method-isPaused' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.container.Manager'>sp.container.Manager</span><br/><a href='source/sp.container.Manager.html#sp-container-Manager-method-isPaused' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.container.Manager-method-isPaused' class='name expandable'>isPaused</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Check whether the scenario is paused ...</div><div class='long'><p>Check whether the scenario is paused</p>\n</div></div></div><div id='method-loadFromFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.container.Manager'>sp.container.Manager</span><br/><a href='source/sp.container.Manager.html#sp-container-Manager-method-loadFromFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.container.Manager-method-loadFromFile' class='name expandable'>loadFromFile</a>( <span class='pre'>scenarioName</span> ) : jQuery.Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Load scenario from file. ...</div><div class='long'><p>Load scenario from file.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scenarioName</span> : string<div class='sub-desc'><p>The scenario name</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>jQuery.Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setScenario' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.container.Manager'>sp.container.Manager</span><br/><a href='source/sp.container.Manager.html#sp-container-Manager-method-setScenario' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.container.Manager-method-setScenario' class='name expandable'>setScenario</a>( <span class='pre'>s</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Attach scenario object to this container ...</div><div class='long'><p>Attach scenario object to this container</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : sp.Scenario<div class='sub-desc'><p>Scenario object</p>\n</div></li></ul></div></div></div><div id='method-setZoom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.container.Manager'>sp.container.Manager</span><br/><a href='source/sp.container.Manager.html#sp-container-Manager-method-setZoom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.container.Manager-method-setZoom' class='name expandable'>setZoom</a>( <span class='pre'>zoom</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set scenario zoom ...</div><div class='long'><p>Set scenario zoom</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>zoom</span> : number<div class='sub-desc'><p>Zoom factor</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>zoom</li></ul></div></div></div><div id='method-togglePaused' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.container.Manager'>sp.container.Manager</span><br/><a href='source/sp.container.Manager.html#sp-container-Manager-method-togglePaused' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.container.Manager-method-togglePaused' class='name expandable'>togglePaused</a>( <span class='pre'>[isPaused]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Toggle between pause and resume the scenario ...</div><div class='long'><p>Toggle between pause and resume the scenario</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isPaused</span> : boolean (optional)<div class='sub-desc'><p>Optional. If supplied, pauses or resumes the scenario</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>pause</li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-scenarioLoaded' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.container.Manager'>sp.container.Manager</span><br/><a href='source/sp.container.Manager.html#sp-container-Manager-event-scenarioLoaded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.container.Manager-event-scenarioLoaded' class='name expandable'>scenarioLoaded</a>( <span class='pre'>scenario</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scenario</span> : sp.Scenario<div class='sub-desc'><p>Reference to the loaded scenario\nScenario fully loaded and ready to be run.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});