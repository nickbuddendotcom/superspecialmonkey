define([
  'underscore',
  'jquery',
  'backbone',
  'mediator-js',
  'view/_base'
], function(
  _,
  $,
  Backbone,
  mediator,
  BaseView
) {
    'use strict';

    return BaseView.extend({

      el : "#editor",

      model: new Backbone.Model(),

      events: {
        'click .something' : 'dothis'
      },

      initialize: function() {
        var self = this;
        console.log('init');
      },

      render: function() {
        console.log('working');
      }
    });
  }
);