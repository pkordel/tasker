import ApplicationController from "./application_controller";

export default class extends ApplicationController {
  connect() {
    StimulusReflex.register(this)
  }
}
