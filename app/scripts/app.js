/*global define */
define([
	'jquery',
   'backbone',
   'underscore'
], function ($, Backbone, _) {
    'use strict';

    var app = app || {};

    return _.extend(app, Backbone.Events);
});