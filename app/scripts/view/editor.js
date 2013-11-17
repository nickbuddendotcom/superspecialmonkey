define([
  'underscore',
  'jquery',
  'backbone',
  'view/_base',
  'raphael',
  'freeTransform',
  'mediator',
  'jqueryui/dialog'
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

        // TODO: DRY these functions...
        Backbone.Mediator.subscribe('canvas:pocket', function() {
          var current = $("#pouch .current_cell img").attr('src');
          self.addPocket( current );
        }, this);

        Backbone.Mediator.subscribe('canvas:tshirt', function() {
          var current = $("#shirt .current_cell img").attr('src');
          self.setShirt( current );
        }, this);

        Backbone.Mediator.subscribe('canvas:scene', function() {
          var current = $("#scene .current_cell img").attr('src');
          self.setScene( current );
        }, this);

      },

      afterRender: function() {
        var self = this;

        // I don't have an html element yet...
        self.paper = Raphael("tshirt", 295, 229);
      },

      setScene: function( img_url ) {
        $('#canvas').css('background-image', 'url(' + img_url + ')');
      },

      setShirt: function( img_url ) {
        $('#tshirt').css('background-image', 'url(' + img_url + ')');
      },

      addPocket: function( img_url ) {
        var self = this;
        if(self.pocket !== undefined) {
          self.pocket.remove();
        }

        self.pocket = self.paper.image(img_url, 177, 140, 83, 67);
        self.pocket.toFront();
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