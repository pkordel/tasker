import ApplicationController from "./application_controller";

export default class extends ApplicationController {
  destroy(event) {
    const confirmation = confirm("Are you sure?")

    if (confirmation) {
      this.stimulate("TaskReflex#destroy", event.currentTarget)
    }
  }
}
