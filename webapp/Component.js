jQuery.sap.declare("customer.mytpaystubs.variant1.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "hcm.fab.mypaystubs",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/HCMFAB_PAY_MON"

	// we use a URL relative to our own component
	// extension application is deployed with customer namespace
});

hcm.fab.mypaystubs.Component.extend("customer.mytpaystubs.variant1.Component", {
	metadata: {
		manifest: "json"
	}	
});
