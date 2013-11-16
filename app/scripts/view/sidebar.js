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
        "click .image" : "sidebarImageHandler"
      },//jquery equiv. doSomething is the function

      sidebarImageHandler: function(e) {
        var img = $(e.currentTarget).data('img-url');
        console.log(img);
        console.log('mediator', mediator);
        // mediator.publish('change:image', "rwar");
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