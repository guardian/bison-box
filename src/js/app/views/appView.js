define([
    'backbone',
    'mustache',
    'routes',
    'text!templates/appTemplate.html',
    'text!templates/errorTemplate.html',
    'underscore'
], function(
    Backbone,
    Mustache,
    routes,
    template,
    errortemplate,
    _
) {
    'use strict';

    return Backbone.View.extend({

        className: 'guInteractive',

        events: {
            'click .column-header': 'sortTable'
        },

        initialize: function() {
            this.render();
            routes.on('route:bisonContent', this.bisonLoadData ,this);  
            routes.on('route:default', function(){
                this.$el.html(Mustache.render(errortemplate));
                console.error("Couldn't recognize data input. This is the path that you should paste: http://interactive.guim.co.uk/embed/dlouter/boxout/#/monthandyear/contentid")
            } ,this);   
        },

        bisonLoadData: function(month, contentId) {
            this.collection.on('sync', function(){
                var dataset = this.collection.toJSON()[0][month];
                if(dataset){
                    var bisonStory = _.findWhere(dataset,{uniqueid: contentId});
                    if(bisonStory){
                        this.renderBison(bisonStory);
                    }else{
                        console.error("Couldn't find a story with the ID \"" + contentId + "\", are you sure that's right?")
                    }
                }else{
                    console.error("Couldn't recognize month, are you sure that \"" + month + "\" corresponds with the sheetname?");
                }
            },this);
        },

        renderBison:function(bisonStory){
            this.$el.html(Mustache.render(template,bisonStory));
        },
        render: function() {
            this.$el.html("Loading");
            
            return this;
        }
    });
});

