define([
  'underscore',
  'jquery',
  'backbone',
  'view/editor',
  'view/sidebar'
], function(
  _,
  $,
  Backbone,
  Editor,
  Sidebar
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

      var editor = new Editor();
      editor.render();

      var sidebar = new Sidebar();
      sidebar.render();
    });

  };
  return {
    initialize: initialize
  };
});