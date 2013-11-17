define([
  'underscore',
  'jquery',
  'backbone',
  'mediator'
], function(
  _,
  $,
  Backbone,
  mediator
) {
    'use strict';

    return Backbone.Model.extend({

      defaults: {
        scene: 'space',
        shirt: 'blue',
        pins: []
      }

    });
  }
);