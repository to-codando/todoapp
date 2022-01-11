import { observableFactory, pubsubFactory } from 'lemejs';

import template from './template'
import styles from './styles'

 const popupEventDrive = pubsubFactory()

const appPopup = (options) => {

	const state = observableFactory({

	})

	const props = observableFactory({
		id:'',
		title: '',
		inputValue: '',
		textareaValue:''
	})

	const children = () => []

	const hooks = ({ methods }) => ({

	})

	const events = ({ on, queryOnce, methods }) => ({
		onClickToFailure () {
			const buttonCancel = queryOnce('#popup-button-failure')
			on('click', buttonCancel,  methods.toFail)
		},
		onClickAndSuccess () {
			const buttonSuccess = queryOnce('#popup-button-success')
			on('click', buttonSuccess, methods.toSuccess)
		}
	})

	const methods = () => ({

		toFail () {			
			popupEventDrive.emit('on-popup-fail', { isVisible: false })
		},
		toSuccess () {		
			const { popupOptions } = props.get()	
			popupEventDrive.emit('on-popup-success', { isVisible: false, popupOptions })
		},
	})

	return {
		state,
		props,
		template,
		styles,
		events,
		methods,
		children,
		hooks
	}
};

export { appPopup, popupEventDrive }