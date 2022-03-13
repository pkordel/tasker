// Import and register all your controllers from the importmap under controllers/*

import StimulusReflex from 'stimulus_reflex'
import { application } from "controllers/application"
import { cable } from "@hotwired/turbo-rails"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import controller from '../controllers/application_controller'
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
const consumer = await cable.getConsumer()
application.consumer = consumer
StimulusReflex.initialize(application, { controller, isolate: true })
// StimulusReflex.debug = process.env.RAILS_ENV === 'development'
StimulusReflex.debug = true
