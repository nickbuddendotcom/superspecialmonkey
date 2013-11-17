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

      el : "#toolbar",

      events: {
        "click #shirt .grid_cell"     : "setShirt",
        "click #pouch .grid_cell"     : "setPocket"
        // "click .image"                : "sidebarImageHandler",
        // "click #pockets .grid_cell"   : "setPocket",
        // "click .grid_cell"            : "setPouchColor"
      },

      model: new Backbone.Model(),

      initialize: function() {
        var self = this;
        console.log('init');
      },

      setShirt: function(e) {
        var self = this;

        if($(e.currentTarget).parent().hasClass('current_cell')) {
          return;
        }

        $("#shirt .grid_cell").removeClass('current_cell');
        $(e.currentTarget).closest(".grid_cell").addClass('current_cell');

        Backbone.Mediator.publish('canvas:tshirt');
      },

      setPocket: function(e) {
        // dumb way to set current image
        // TODO: DRY this...
        $("#pouch .grid_cell").removeClass('current_cell');
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