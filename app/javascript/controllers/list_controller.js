import ApplicationController from "./application_controller";

export default class extends ApplicationController {
  static targets = ["form"]

  createTaskSuccess() {
    this.formTarget.reset()
  }
}
