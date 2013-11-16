require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
	      jqueryui                 : '../bower_components/jquery.ui/jqueryui',
	      underscore               : '../bower_components/lodash/dist/lodash',
	      backbone                 : '../bower_components/backbone/backbone',
	      'mediator-js'            : '../bower_components/mediator-js/lib/mediator'
    },
    shim: {
	    underscore : {
	      exports: '_'
	    },
	    backbone: {
	      deps: [ 'jquery', 'underscore' ],
	      exports: 'Backbone'
	    },
	    'mediator-js': {
	      deps: [],
	      exports: 'mediator-js'
	    }
    }
});

require(['app', 'jquery', 'router/router'], function (app, $, Router) {
    'use strict';

		$(function() {
      Router.initialize();
      Backbone.history.start({ pushState: true, root: app.root });
		});

});
