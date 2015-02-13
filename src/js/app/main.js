define([
    'backbone',
    'collections/sheetCollection',
    'views/appView',
    'iframeMessenger'
], function(
    Backbone,
    SheetCollection,
    AppView,
    iframeMessenger
) {
   'use strict';

    var appView;
    
    // Your proxied Google spreadsheet goes here
    var key = '1Z4YjeZQ9c6joiCAeRkNHybxvqjNmrZUkY6WNHrb1Pqg';

    function init(el, context, config, mediator) {
        // Create collection from Google spreadsheet key and sheetname
        // from live external data
        var bisonBoxContent = new SheetCollection({
            key: key
        });
       
        // Create an app view, passing along the collection made above
        appView = new AppView({
            el: el,
            collection: bisonBoxContent
        });
        
        // Fetch data
        bisonBoxContent.fetch();

        // Start listening to URL #paths
        Backbone.history.start();
        // Enable iframe resizing on the GU site
        iframeMessenger.enableAutoResize();
    }
    
    return {
        init: init
    };
});
