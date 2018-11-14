import Tracking from './tracking';

class OAudio {
	/**
	 * Class constructor.
	 * @param {HTMLElement} [oAudioEl] - The component element in the DOM
	 * @param {Object} [options={}] - An options object for configuring the component
	 */
	constructor (oAudioEl, opts) {
		this.oAudioEl = oAudioEl;
		this.options = Object.assign({}, {
		}, opts || OAudio.getDataAttributes(oAudioEl));
	
		this.tracking = new Tracking(oAudioEl, this.options);

		if (this.options.dispatchListenedEventOnUnload) {
			window.addEventListener(
				('onbeforeunload' in window) ? 'beforeunload' : 'unload',
				() => this.tracking.dispatchListenedEvent()
			);
		}
	}

	destroy() {
		this.tracking.dispatchListenedEvent();
		this.tracking.destroy();
	}

	/**
	 * Get the data attributes from the OAudioElement. If the message is being set up
	 * declaratively, this method is used to extract the data attributes from the DOM.
	 * @param {HTMLElement} oAudioEl - The component element in the DOM
	 */
	static getDataAttributes (oAudioEl) {
		if (!(oAudioEl instanceof HTMLElement)) {
			return {};
		}
		return Object.keys(oAudioEl.dataset).reduce((options, key) => {

			// Ignore data-o-component
			if (key === 'oComponent') {
				return options;
			}

			// Build a concise key and get the option value
			const shortKey = key.replace(/^oAudio(w)(w+)$/, (m, m1, m2) => m1.toLowerCase() + m2);
			const value = oAudioEl.dataset[key];

			// Try parsing the value as JSON, otherwise just set it as a string
			try {
				options[shortKey] = JSON.parse(value.replace(/'/g, '"'));
			} catch (error) {
				options[shortKey] = value;
			}

			return options;
		}, {});
	}

	/**
	 * Initialise message component.
	 * @param {(HTMLElement|String)} rootElement - The root element to intialise the component in, or a CSS selector for the root element
	 * @param {Object} [options={}] - An options object for configuring the component
	 */
	static init (rootEl, opts) {
		if (!rootEl) {
			rootEl = document.body;
		}
		if (!(rootEl instanceof HTMLElement)) {
			rootEl = document.querySelector(rootEl);
		}
		if (rootEl instanceof HTMLElement && rootEl.matches('[data-o-component=o-audio]')) {
			return new OAudio(rootEl, opts);
		}
		return Array.from(rootEl.querySelectorAll('[data-o-component="o-audio"]'), rootEl => new OAudio(rootEl, opts));
	}
}

export default OAudio;