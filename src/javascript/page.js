/*global module, require */
'use strict';

var Core = require('./core');
var utils = require('./utils');

/**
 * Default properties for page tracking requests.
 *
 * @type {Object}
 */
var defaultPageConfig = function () {
	return {
		category: 'page',
		action: 'view',
		context: {
			url: document.URL,
			referrer: document.referrer
		},

		async: true // Send this event asyncronously - as sync doesn't work in FF, as it doesn't send cookies. https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#withCredentials
	};
};

/**
 * Make the page tracking request.
 *
 * @param {Object} config - Configuration object. If omitted, will use the defaults.
 * @param {Function} callback - Callback function. Called when request completed.
 */
function page(config, callback) {
	config = utils.merge(defaultPageConfig(), {
		context: config
	});

	// New PageID for a new Page.
	Core.setRootID();
	Core.track(config, callback);

	// Alert internally that a new page has been tracked - for single page apps for example.
	utils.triggerPage();
}

/**
 * Listener for pages.
 *
 * @param CustomEvent The CustomEvent
 * @private
 */
function listener(e) {
	page(e.detail);
}
utils.addEvent(window, 'oTracking.page', listener);

module.exports = page;
