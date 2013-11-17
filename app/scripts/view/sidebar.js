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
        // "click #scene .grid_cell"     : "setScene",
        // "click #shirt .grid_cell"     : "setShirt",
        // "click #pouch .grid_cell"     : "setPocket",
        // "click #pins  .grid_cell"     : "togglePin",

        "click #pins .grid_cell"        : "setPin",
        "click #scene .grid_cell"       : "setScene",
        "click #shirt .grid_cell"       : "setShirt",
        "click #pocket .grid_cell"      : "setPocket"
      },

      model: new Backbone.Model(),

      initialize: function() {
        var self = this;
      },

      setPin: function(e) {
        Backbone.Mediator.publish('canvas:togglePin', {
          img : $(e.currentTarget).find("img")
        });
      },

      setScene: function(e) {
        Backbone.Mediator.publish('canvas:scene', {
          img_url : $(e.currentTarget).find("img").attr('src')
        });
      },

      setShirt: function(e) {
        Backbone.Mediator.publish('canvas:shirt', {
          img_url : $(e.currentTarget).find("img").attr('src')
        });
      },

      setPocket: function(e) {

        Backbone.Mediator.publish('canvas:pocket', {
          img_url : $(e.currentTarget).find("img").attr('src')
        });

        // if($(e.currentTarget).hasClass('current_cell')) {
        //   return;
        // }

        // // dumb way to set current image
        // // TODO: DRY this...
        // $("#pouch .grid_cell").removeClass('current_cell');
        // $(e.currentTarget).closest(".grid_cell").addClass('current_cell');

        // Backbone.Mediator.publish('canvas:pocket');
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