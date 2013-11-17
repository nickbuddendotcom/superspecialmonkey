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
        "click #pockets .grid_cell" : "setPocket",
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

      setPocket: function(e) {
        // dumb way to set current image
        // TODO: DRY this...
        $("#pockets .grid_cell").removeClass('current_cell');
        $(e.currentTarget).closest(".grid_cell").addClass('current_cell');

        Backbone.Mediator.publish('canvas:pocket');
      },

      sidebarImageHandler: function(e) {
        // dumb way to set current image
        // TODO: DRY this...
        this.$el.find(".grid_cell").removeClass('current_cell');
        $(e.currentTarget).closest(".grid_cell").addClass('current_cell');

        Backbone.Mediator.publish('canvas:image');
      }

    });
  }
);