define([
    'backbone'
],
function(Backbone) {
    'use strict';

    var Routes = Backbone.Router.extend({
        routes: {
            ':month/:id' : 'bisonContent',
            '*path' : 'default'
        }
    });

    return new Routes();
});

