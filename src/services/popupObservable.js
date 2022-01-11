import { observableFactory } from "lemejs";

const toggleProjectPopup = observableFactory()
const toggleTaskPopup = observableFactory()
const toggleEditPopup = observableFactory()
const toggleRemovePopup = observableFactory()

export {
	toggleProjectPopup,
	toggleTaskPopup,
	toggleEditPopup,
	toggleRemovePopup
}

