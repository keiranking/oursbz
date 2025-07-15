import { Application } from "stimulus";
import ContactFormController from "./controllers/contact_form_controller";

const application = Application.start();
console.log("Stimulus started.");

application.register("contact-form", ContactFormController);
