define([
  'underscore',
  'jquery',
  'backbone',
  'view/_base',
  'html2canvas'
], function(
  _,
  $,
  Backbone,
  BaseView,
  html2canvas
) {
    'use strict';

    return BaseView.extend({

      el : ".wrapper",

      events: {
      },

      model: new Backbone.Model(),

      initialize: function() {
        var self = this;
        this.on('render', self.afterRender);
        console.log(html2canvas);
      },

      afterRender: function() {
      }

    });
  }
);