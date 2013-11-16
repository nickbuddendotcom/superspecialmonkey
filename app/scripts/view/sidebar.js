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

      el : "#sidebar",

      events: {
        "click .something" : "doSomething"
      },

      doSomething: function(e) {

      },

      model: new Backbone.Model(),

      initialize: function() {
        var self = this;
        console.log('init');
        this.on('render', self.afterRender);
      },

      afterRender: function() {
        console.log('rendered');
        this.$el.html('test');
      }

    });
  }
);