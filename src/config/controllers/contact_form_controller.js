import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [
    "sugarcube",
    // "name",
    "email"
    // "org",
    // "bia",
    // "biaList",
    // "message"
  ];

  isEmailAddress(string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(string.trim());
  }

  isSpam = this.sugarcubeTargets.some(sugarcube => sugarcube.value !== '');

  validateEmail() {
    this.hasValidEmail = this.isEmailAddress(this.emailTarget.value);
    this.emailTarget.setAttribute("aria-invalid", String(!this.hasValidEmail));
  }

  validate(event) {
    event.preventDefault();
    let isValid = true;

    if (this.isSpam || !this.hasValidEmail) {
      isValid = false;
    }

    if (isValid) {
      this.element.submit();
    } else {
      console.log("Invalid form submission.")
    }
  }
}
