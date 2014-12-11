/* global fyre */
"use strict";

var oCommentUtilities = require('o-comment-utilities');
var userDialogs = require('./userDialogs');
var oCommentApi = require('o-comment-api');
var utils = require('./utils.js');
var globalEvents = require('./globalEvents.js');

/**
 * Auth creates Livefyre RemoteAuthDelegate, also provides login and logout into Livefyre.
 */
function Auth () {
	var self = this;

	/**
	 * See http://docs.livefyre.com/developers/user-auth/remote-profiles/#BuildingAuthDelegate
	 * @type {RemoteAuthDelegate}
	 */
	var authDelegate;

	var loggedIn = false;

	/**
	 * Pseudonym is still missing.
	 * @type {Boolean}
	 */
	this.pseudonymMissing = false;

	/**
	 * Pseudonym was missing since the page was loaded and only 1 comment was posted.
	 * @type {Boolean}
	 */
	this.pseudonymWasMissing = false;


	this.authPageReload = false;

	function getLfObj () {
		return fyre;
	}

	/**
	 * Get the RemoteAuthDelegate instance.
	 * @return {RemoteAuthDelegate}
	 */
	this.getAuthDelegate = function () {
		var lfObj = getLfObj();

		if (!authDelegate && lfObj) {
			authDelegate = new lfObj.conv.RemoteAuthDelegate();
		}

		return authDelegate;
	};

	/**
	 * Tries to obtain the user's login data. Calls a callback with the resulted status,
	 * and also fires an event if the user can be logged in.
	 * @param  {Function} callback Called with two parameters: loginStatus, authData.
	 */
	this.login = function (callback) {
		if (typeof callback !== 'function') {
			callback = function () {};
		}

		if (!getLfObj()) {
			callback(false, null);
			return;
		}

		oCommentApi.api.getAuth(function (err, authData) {
			if (err) {
				callback(false);
				return;
			}

			if (authData) {
				if (authData.token) {
					getLfObj().conv.login(authData.token);
					callback(true, authData);
					globalEvents.trigger('auth.login', authData);

					loggedIn = true;
				} else if (authData.pseudonym === false) {
					// the user doesn't have pseudonym

					self.pseudonymMissing = true;
					self.pseudonymWasMissing = true;

					callback(false, authData);
				} else {
					callback(false, authData);
				}
			} else {
				callback(false);
			}
		});
	};

	/**
	 * Logs out the user in the Livefyre system, and also clears the token from the local cache.
	 */
	this.logout = function () {
		if (!getLfObj()) {
			return;
		}

		var response = getLfObj().conv.logout();
		globalEvents.trigger('auth.logout');

		return response;
	};


	/**
	 * Login required and pseudonym is missing
	 * @param  {[type]} delegate [description]
	 * @return {[type]}          [description]
	 */
	this.loginRequiredPseudonymMissing = function (delegate, maintainCommentQueue) {
		oCommentUtilities.logger.log('pseudonymMissing');

		userDialogs.showSetPseudonymDialog({
			success: function (authData) {
				if (self.authPageReload === true && !maintainCommentQueue) {
					utils.emptyLivefyreActionQueue();
				}

				if (authData && authData.token) {
					self.login();
				}

				if (delegate && delegate.success) {
					delegate.success();
				}
			},
			failure: function () {
				utils.emptyLivefyreActionQueue();

				if (delegate && delegate.failure) {
					delegate.failure();
				}
			}
		});
	};

	/**
	 * Login required, first attempt of the login process is successful.
	 * If the user is still not logged in, then fail.
	 * If the user has no pseudonym, ask for a pseudonym.
	 * @param  {[type]} delegate [description]
	 * @return {[type]}          [description]
	 */
	function loginRequiredAfterASuccess (delegate) {
		oCommentApi.api.getAuth({
			force: true
		}, function (err, authData) {
			if (authData && authData.pseudonym === false) {
				self.loginRequiredPseudonymMissing(delegate);
			} else {
				if (delegate && delegate.failure) {
					delegate.failure();
				}
			}
		});
	}

	/**
	 * Login is required.
	 * If pseudonym is missing, ask for a pseudonym.
	 * If there is no known method to login the user, generate a `loginRequired.authAction` event that can be handled at the integration level.
	 * If successful, check if the user is logged in.
	 * @param  {[type]} delegate [description]
	 * @return {[type]}          [description]
	 */
	this.loginRequired = function (delegate) {
		oCommentApi.api.getAuth(function (err, authData) {
			if (authData && authData.pseudonym === false) {
				self.loginRequiredPseudonymMissing(delegate);
			} else if (!authData || !authData.token) {
				globalEvents.trigger('auth.loginRequired', {
					success: function () {
						loginRequiredAfterASuccess(delegate);
					},
					failure: function () {
						utils.emptyLivefyreActionQueue();

						if (delegate && delegate.failure) {
							delegate.failure();
						}
					}
				});
			} else {
				if (!loggedIn) {
					self.login();
				}

				if (delegate && delegate.success) {
					delegate.success();
				}
			}
		});
	};
}

module.exports = new Auth();
