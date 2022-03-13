import ApplicationController from "./application_controller";

export default class extends ApplicationController {
  static targets = ["form"]

  beforeCreateTask(element) {
    element.querySelectorAll("input").forEach(input => {
      input.blur()
    });
    element.classList.add("disabled:opacity-75")
  }

  createTaskError(element, name, error) {
    alert(error)
  }

  createTaskSuccess() {
    this.formTarget.reset()
  }
}
