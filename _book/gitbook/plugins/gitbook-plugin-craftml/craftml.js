function printVersions(){
    var string = 'Craftml (Engine: ' + Craftml.Engine.version +
        ', IDE: ' + Craftml.IDE.version +
        ', Preview: ' + Craftml.Preview.version +
        ')'
    console.debug(string)
}

printVersions()

env = {}

require(["gitbook", "jquery"], function(gitbook, $) {


  var init = function(){

        Craftml.IDE.closeAll()

        $('.craftml').each(function(){
            var options = {
                //autoResize: 'container',
                mode: 'doc',
                height: 298,
                theme: {
                    editor: {
                        width: 400
                    },
                    preview: {
                        width: '60%'
                    },
                    navbar: {
                        hidden: true
                    },
                    toolbar: {
                        mode: 'compact'
                    }
                }
            }
            options.api = Craftml.Engine.hosts.api
            // options.engine = engine
            Craftml.IDE.edit(this, options)
        })
  }

	gitbook.events.bind("page.change", init);
});
