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
        self.paper = Raphael("tshirt", 161, 194);

        // self.overlay = self.paper.path("M0 0L73 0L0 72L0 0");
        // self.overlay = self.paper.path("M 181 181 l 0.000 100.000 l -100.000 0.000 l 0.000 -100.000 l 100.000 0.000");

        // self.overlay.attr("fill", "rgb(9,10,42)");
        // self.overlay.attr("fill", "#06071C");
        // self.overlay.attr("stroke", "#06071C");
        // self.overlay.attr("opacity", ".8");

        // self.overlay2 = self.paper.path("M0 100L53 112L0 72L0 0");
        // self.overlay2.attr("fill", "http://static.tumblr.com/44e684098f0ac7c33a6640c20556b923/jxahzkb/fZ5mod2rw/tumblr_static_dog-logo.jpg");


        console.log(self.overlay);
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

        // temporary
        self.overlay.toFront();
      }

    });
  }
);