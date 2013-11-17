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

        console.log('test');

        Backbone.Mediator.subscribe('canvas:image', function() {
          var current_image = $(".current_cell img").attr('src');
          self.addImage( current_image );
        }, this);

        // TODO: DRY these functions...
        Backbone.Mediator.subscribe('canvas:pocket', function() {
          var current = $("#pockets .current_cell img").attr('src');
          self.addPocket( current );
        }, this);

        Backbone.Mediator.subscribe('canvas:tshirt', function() {
          var current = $("#shirt .current_cell img").attr('src');
          self.setShirt( current );
        }, this);

      },

      afterRender: function() {
        var self = this;

        // I don't have an html element yet...
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

      setShirt: function( img_url ) {
        var self = this;

        // don't do this on the canvas, just do it in DIV's

        if(self.shirt !== undefined) {
          self.shirt.remove();
        }

        self.shirt = self.paper.rect(0,0,295,229);
        console.log('editor shirt', self.shirt);

        // self.shirt.attr("fill", img_url);
        // self.shirt.toBack();
      },

      addPocket: function( img_url ) {
        // var self = this;
        // if(self.pocket !== undefined) {
        //   self.pocket.remove();
        // }

        // self.pocket = self.paper.image(img_url, 180, 125, 59, 91);
      },

      addImage: function(img_url) {
        // var self        = this;

        // // dumb...
        // if(self.image !== undefined) {
        //   self.image.remove();
        //   self.imageTransform.unplug();
        // }

        // self.image          = self.paper.image(img_url, 100, 100, 200, 200);
        // self.imageTransform = self.paper.freeTransform(self.image );

        // self.imageTransform.setOpts({
        //   scale: false
        // });

        // // temporary
        // self.overlay.toFront();
      }

    });
  }
);