/* global my:true */

sap.ui.define([
		"jquery.sap.global",
		"sap/ui/core/library"
	], // library dependency
	function(jQuery) {

		"use strict";

		sap.ui.getCore().initLibrary({
			name: "mysharedlibrary",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [
				"mysharedlibrary.ProductRating"
			],
			elements: []
		});

		return my.custom.control;

	}, /* bExport= */ false);