define([
    'backbone',
    'underscore',
    'views/gameView',
    'text!templates/catalogueTemplate.html'
], function(
    Backbone,
    _,
    GameView,
    templateHTML
) {
    'use strict';

    return Backbone.View.extend({

        className: 'catalogue',

        template: _.template(templateHTML),
        
        events: {
        },

        initialize: function() {
        },

        addGame: function(model) {
            var gameView = new GameView({model: model});
            this.$el.append(gameView.render().el);
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });
});

