require(["gitbook", "jquery"], function(gitbook, $) {

  var init = function(){
    $('.craftml').each(function(){
        var options = {
            autoResize: 'container'
        }
        Craftml.IDE.edit(this, options)
    })
  }

	gitbook.events.bind("page.change", init);
});
