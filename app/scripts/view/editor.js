define([
  'underscore',
  'jquery',
  'backbone',
  'mediator-js',
  'view/_base',
  'raphael',
  'freeTransform'
], function(
  _,
  $,
  Backbone,
  mediator,
  BaseView,
  raphael,
  freeTransform
) {
    'use strict';

    return BaseView.extend({

      el : "#editor",

      model: new Backbone.Model(),

      initialize: function() {
        var self = this;
        this.on('render', self.afterRender);
      },

      afterRender: function() {
        var self = this;
        self.paper = Raphael("editor", 672, 800);

        // testing
        self.setImage('http://imgs.steps.dragoart.com/how-to-draw-a-baby-monkey-step-5_1_000000007630_5.jpg');
      },

      setImage: function(img_url) {
        var self      = this,
            img       = self.paper.image(img_url, 100, 100, 200, 200),
            transform = self.paper.freeTransform(img);

        transform.setOpts({
          scale: false
        });
      }

    });
  }
);