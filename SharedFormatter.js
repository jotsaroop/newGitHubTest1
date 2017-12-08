sap.ui.define(["sap/ui/core/format/DateFormat"], function(DateFormat) {

	"use strict";

	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit: function(sValue) {
			if (!sValue) {
				return "";
			}
			return sValue.toLocaleString();
		}
	};

});