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
        "click .grid_cell"              : "toggleOnClass",
        "click #pins .grid_cell"        : "setPin",
        "click #scene .grid_cell"       : "setScene",
        "click #shirt .grid_cell"       : "setShirt",
        "click #pocket .grid_cell"      : "setPocket",
        "click #design .grid_cell"      : "setDesign"
      },

      model: new Backbone.Model(),

      initialize: function() {
        var self = this;
      },

      toggleOnClass: function(e) {
        $(e.currentTarget).toggleClass('open_cell');

        if($(e.currentTarget).data('radio')) {
          $(e.currentTarget).parent().find(".grid_cell").not(e.currentTarget).removeClass('open_cell');
        }
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
      },

      setDesign: function(e) {
        Backbone.Mediator.publish('canvas:design', {
          img : $(e.currentTarget).find("img")
        });
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