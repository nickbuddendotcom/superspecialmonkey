require.config({
    paths: {
        jquery                   	: '../bower_components/jquery/jquery',
	      jqueryui                 	: '../bower_components/jquery-ui/jqueryui',
	      underscore               	: '../bower_components/lodash/dist/lodash',
	      backbone                 	: '../bower_components/backbone/backbone',
	      mediator                 	: 'support/backbone.mediator',
	      raphael 								 	: '../bower_components/raphael/raphael',
	      freeTransform        		 	: '../bower_components/raphael.free_transform/raphael.free_transform',
	    	'mediator-js'			 				: '../bower_components/mediator-js/lib/mediator',
	    	html2canvas				 				: '../bower_components/html2canvas/build/html2canvas'
    },
    shim: {
	    underscore : {
	      exports: '_'
	    },
	    backbone: {
	      deps: [ 'jquery', 'underscore' ],
	      exports: 'Backbone'
	    },
	    mediator: {
	      deps: [ 'backbone' ],
	      exports: 'mediator'
	    },
	    raphael : {
	    	deps: [],
	    	exports: 'raphael'
	    },
	    raphaelFreeTransform: {
	    	deps: [],
	    	exports: 'freeTransform'
	    }
    }
});

require(['app', 'jquery', 'router/router', 'mediator-js'], function (app, $, Router, Mediator) {
    'use strict';

		$(function() {
      Router.initialize();
      Backbone.mediator = new Mediator();
      Backbone.history.start({ pushState: true, root: app.root });
		});

});

