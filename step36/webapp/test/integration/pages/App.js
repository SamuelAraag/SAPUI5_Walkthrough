sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
], function (Opa5, Press) {
	"use strict";

	var sViewName = "sap.ui.demo.walkthrough.view.HelloPanel";

	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iPressTheSayHelloWithDialogButton: function () {
					return this.waitFor({
						id: "helloDialogButton",
						viewName: sViewName,
						actions: new Press(),
						errorMessage: "Não foi encontrado 'Diga olá com o dialog' botão no PainelOlá view"

					});
				}
			},

			assertions: {
				iShouldSeeTheHelloDialog: function () {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success: function () {
							Opa5.assert.ok(true, "O dialogo foi aberto");
						},
						errorMessage: "Não foi encontrado o controle de dialogo"
					});
				}
			}
		}
	});
});