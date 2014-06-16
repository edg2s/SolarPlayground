Ext.data.JsonP.sp_System({"tagname":"class","name":"sp.System","autodetected":{},"files":[{"filename":"sp.System.js","href":"sp.System.html#sp-System"}],"mixins":["OO.EventEmitter"],"params":[{"tagname":"params","type":"Object","name":"config","optional":true,"doc":"<p>Configuration object</p>\n","html_type":"Object"}],"members":[{"name":"getConfig","tagname":"method","owner":"sp.System","id":"method-getConfig","meta":{}},{"name":"getContainer","tagname":"method","owner":"sp.System","id":"method-getContainer","meta":{}},{"name":"setContainer","tagname":"method","owner":"sp.System","id":"method-setContainer","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-sp.System","short_doc":"Solar Playground system ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixins</h4><div class='dependency'>OO.EventEmitter</div><h4>Files</h4><div class='dependency'><a href='source/sp.System.html#sp-System' target='_blank'>sp.System.js</a></div></pre><div class='doc-contents'><p>Solar Playground system</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>Configuration object</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getConfig' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.System'>sp.System</span><br/><a href='source/sp.System.html#sp-System-method-getConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.System-method-getConfig' class='name expandable'>getConfig</a>( <span class='pre'>[option]</span> ) : string|Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get configuration option or full configuration object. ...</div><div class='long'><p>Get configuration option or full configuration object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>option</span> : string (optional)<div class='sub-desc'><p>Configuration key</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string|Object</span><div class='sub-desc'><p>Configuration object</p>\n</div></li></ul></div></div></div><div id='method-getContainer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.System'>sp.System</span><br/><a href='source/sp.System.html#sp-System-method-getContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.System-method-getContainer' class='name expandable'>getContainer</a>( <span class='pre'>container_id</span> ) : <a href=\"#!/api/sp.Container\" rel=\"sp.Container\" class=\"docClass\">sp.Container</a>|null<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrueve the container by its id ...</div><div class='long'><p>Retrueve the container by its id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container_id</span> : string<div class='sub-desc'><p>The id of the DOM that this container\nis attached to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/sp.Container\" rel=\"sp.Container\" class=\"docClass\">sp.Container</a>|null</span><div class='sub-desc'><p>The container</p>\n</div></li></ul></div></div></div><div id='method-setContainer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sp.System'>sp.System</span><br/><a href='source/sp.System.html#sp-System-method-setContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sp.System-method-setContainer' class='name expandable'>setContainer</a>( <span class='pre'>container_id, [config]</span> ) : <a href=\"#!/api/sp.Container\" rel=\"sp.Container\" class=\"docClass\">sp.Container</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Add a container ...</div><div class='long'><p>Add a container</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container_id</span> : string<div class='sub-desc'><p>The id of the DOM that this container\nwill be attached to</p>\n</div></li><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>Configuration object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/sp.Container\" rel=\"sp.Container\" class=\"docClass\">sp.Container</a></span><div class='sub-desc'><p>The new container</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Error</span><div class='sub-desc'><p>If container_id is undefined or empty</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});