define([
  'underscore',
  'jquery',
  'backbone',
  'view/_base',
  'model/editor',
  'raphael',
  'freeTransform',
  'mediator'
], function(
  _,
  $,
  Backbone,
  BaseView,
  Model,
  raphael,
  freeTransform,
  mediator
) {
    'use strict';

    return BaseView.extend({

      el : "#editor",

      model: new Model(),

      initialize: function() {
        var self = this;
        this.on('render', self.afterRender);

        // Backbone.Mediator.subscribe('canvas:image', function() {
        //   var current_image = $(".current_cell img").attr('src');
        //   self.addImage( current_image );
        // }, this);

        // TODO: DRY these functions...
        // Backbone.Mediator.subscribe('canvas:pocket', function() {
        //   var current = $("#pouch .current_cell img").attr('src');
        //   self.addPocket( current );
        // }, this);

        // Backbone.Mediator.subscribe('canvas:tshirt', function() {
        //   var current = $("#shirt .current_cell img").attr('src');
        //   self.setShirt( current );
        // }, this);

        // Backbone.Mediator.subscribe('canvas:scene', function() {
        //   var current = $("#scene .current_cell img").attr('src');
        //   self.setScene( current );
        // }, this);

        Backbone.Mediator.subscribe("canvas:togglePin", function(args){
          self.togglePin( args.img );
        });

        Backbone.Mediator.subscribe("canvas:scene", function(args){
          self.setScene( args.img_url );
        });

        Backbone.Mediator.subscribe("canvas:shirt", function(args){
          self.setShirt( args.img_url );
        });

        Backbone.Mediator.subscribe("canvas:pocket", function(args){
          self.setPocket( args.img_url );
        });

      },

      afterRender: function() {
        var self = this;
        self.paper = Raphael("tshirt", 295, 229);
        self.pins = self.pins || {};
      },

      togglePin: function( img ) {

        var self    =  this,
            pins    = self.model.get('pins') || [],
            img_url = img.attr('src'),
            width   = img.data("full_width"),
            height  = img.data("full_height");

        if(_.contains(pins, img_url)) {

          self.pins[img_url].el.remove();
          self.pins[img_url].transform.unplug();
          delete self.pins[img_url];
          pins.splice(pins.indexOf(img_url), 1);

        } else {

          self.pins[img_url] = {
            el: self.paper.image(img_url, 50, 50, width, height).data("ssm_id", 3)
          };

          self.pins[img_url].transform = self.paper.freeTransform(self.pins[img_url].el);
          self.pins[img_url].transform.setOpts({
            keepRatio: 'bboxCorners',
            scale: 'bboxCorners',
            draw: 'bbox'
          });

          pins.push(img_url);

        }

        self.model.set("pins", pins ).trigger("change:pins");
      },

      setScene: function( img_url ) {
        $('#canvas').css('background-image', 'url(' + img_url + ')');
      },

      setShirt: function( img_url ) {
        $('#tshirt').css('background-image', 'url(' + img_url + ')');
      },

      setPocket: function( img_url ) {
        var self = this;
        if(self.pocket !== undefined) {
          self.pocket.remove();
        }

        self.pocket = self.paper.image(img_url, 177, 140, 83, 67);
        self.pocket.toFront();
      },

      addPocket: function( img_url ) {
        var self = this;
        if(self.pocket !== undefined) {
          self.pocket.remove();
        }

        self.pocket = self.paper.image(img_url, 177, 140, 83, 67);
        self.pocket.toFront();
      }

    });
  }
);