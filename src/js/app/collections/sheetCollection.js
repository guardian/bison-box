define([
    'backbone',
    'underscore',
    'nestedmodel',
    'crossdomain'
],function(
    Backbone,
    _
) {
    'use strict';
    
    return Backbone.Collection.extend({

        url: function() {
            return 'http://interactive.guim.co.uk/spreadsheetdata/'+this.key+'.json';
        },

        model: Backbone.NestedModel.extend({}),

        initialize: function(options) {
            this.sheetname = options.sheetname;
            this.key = options.key;
        },

        parse: function(data) {
            if (!data) {
                console.error('Error parsing sheet JSON');
                return false;
            }
            _.map(data.sheets,function(month){
                _.each(month,function(story){
                    if(story.copy){
                        var paragraphs = story.copy.split('\n');
                        story.copy = paragraphs.filter(function(p){
                            return p;
                        });
                    }
                });
            });
            return data.sheets;
        }

    });
});

