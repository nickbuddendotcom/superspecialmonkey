define([
  'underscore',
  'jquery',
  'backbone',
  'mediator-js'
], function(
  _,
  $,
  Backbone,
  mediator
) {
    'use strict';

    return Backbone.View.extend({

      model: new Backbone.Model(),

      initialize: function() {
        var self = this;
      },

      render: function() {
        this.trigger('render');
        return this;
      },

      serialize: function () {
        return this.model.attributes;
      },

    });
  }
);