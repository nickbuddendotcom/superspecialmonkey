define([
  'underscore',
  'jquery',
  'backbone'
], function(
  _,
  $,
  Backbone
) {
    'use strict';

  var Router = Backbone.Router.extend({
    routes: {
      // Default
      '*path': 'default'
    }
  });

  var initialize = function(){

    var app_router = new Router;

    // ### DEFAULT ROUTE
    app_router.on('route:default', function(path){

      // initialize all the stuff

    });

  };
  return {
    initialize: initialize
  };
});