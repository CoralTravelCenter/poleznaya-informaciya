import { hostReactAppReady } from "../../common/js/utils";
import Accordion from "accordion-js";

hostReactAppReady().then(() => {
	new Accordion(".accordion-container", {
		duration: 300,
		showMultiple: true,
	});
});
