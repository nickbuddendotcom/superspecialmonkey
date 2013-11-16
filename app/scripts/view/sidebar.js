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
        "click .image" : "sidebarImageHandler"
      },

      sidebarImageHandler: function(e) {
        var img = $(e.currentTarget).data('img-url');

        // dumb way to set current image
        this.$el.find(".image").not(e.currentTarget).removeClass('current_image');
        $(e.currentTarget).addClass('current_image');

        Backbone.Mediator.publish('canvas:image');
      },

      model: new Backbone.Model(),

      initialize: function() {
        var self = this;
        console.log('init');
        this.on('render', self.afterRender);
      },

      afterRender: function() {
        console.log('rendered');
      }

    });
  }
);