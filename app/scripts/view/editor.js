define([
  'underscore',
  'jquery',
  'backbone',
  'view/_base',
  'raphael',
  'freeTransform',
  'mediator'
], function(
  _,
  $,
  Backbone,
  BaseView,
  raphael,
  freeTransform,
  mediator
) {
    'use strict';

    return BaseView.extend({

      el : "#editor",

      model: new Backbone.Model(),

      initialize: function() {
        var self = this;
        this.on('render', self.afterRender);

        Backbone.Mediator.subscribe('canvas:image', function() {
          var current_image = $(".current_cell img").attr('src');
          self.addImage( current_image );
        }, this);

        // TODO: DRY these functions...
        Backbone.Mediator.subscribe('canvas:pocket', function() {
          var current = $("#pockets .current_cell img").attr('src');
          self.addPocket( current );
        }, this);

      },

      afterRender: function() {
        var self = this;
        self.paper = Raphael("tshirt", 295, 230);
      },

      addPocket: function( img_url ) {
        var self = this;
        if(self.pocket !== undefined) {
          self.pocket.remove();
        }

        self.pocket = self.paper.image(img_url, 180, 125, 59, 91);
      },

      addImage: function(img_url) {
        var self        = this;

        // dumb...
        if(self.image !== undefined) {
          self.image.remove();
          self.imageTransform.unplug();
        }

        self.image          = self.paper.image(img_url, 100, 100, 200, 200);
        self.imageTransform = self.paper.freeTransform(self.image );

        self.imageTransform.setOpts({
          scale: false
        });
      }

    });
  }
);