define([
  'underscore',
  'jquery',
  'backbone',
  'view/_base'
], function(
  _,
  $,
  Backbone,
  BaseView
) {
    'use strict';

    return BaseView.extend({

      el : "#sidebar",

      events: {
        "click .image" : "sidebarImageHandler",
        "click .grid_cell" : "setPouchColor"
      },

      model: new Backbone.Model(),

      initialize: function() {
        var self = this;
        console.log('init');
        this.on('render', self.afterRender);
      },

      afterRender: function() {
        console.log('rendered');
      },

      sidebarImageHandler: function(e) {
        var img = $(e.currentTarget).data('img-url');

        // dumb way to set current image
        this.$el.find(".image").not(e.currentTarget).removeClass('current_image');
        $(e.currentTarget).addClass('current_image');

        Backbone.Mediator.publish('canvas:image');
      },

      setPouchColor: function(e) {
        var color = $(e.currentTarget).css('background');

        this.$el.find(".color").not(e.currentTarget).removeClass('current_color');
        $(e.currentTarget).addClass('current_color');

        Backbone.Mediator.publish('canvas:pouchColor');
      }

    });
  }
);