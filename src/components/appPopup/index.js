import { observableFactory, pubsubFactory } from 'lemejs';

import template from './template'
import styles from './styles'


 const popupEventDrive = pubsubFactory()

const appPopup = (options) => {

	const { element } = options

	const state = observableFactory({
		id:'',
		projectId:'',
		title: '',
		inputValue: '',
		textareaValue:'',
		template: '',
	})

	const children = () => []

	const hooks = ({ methods, props }) => ({
		beforeOnInit () {
			state.set({ ...props })
		}
	})

	const events = ({ on, queryOnce, methods, props }) => ({
		onInputType () {
			const inputText = queryOnce('input')
			const field = 'inputValue'

			const debounceOptions = {
                focusEnd: () => ['input', element],
                debounceTime: 150,
                useDebounce: true                
            }

			on('keyup', inputText, ({ target }) =>  {
				methods.updateState({target, field})
			}, debounceOptions)
		},
		onTextAreaType () {
			if(!queryOnce('textarea')) return 
			const textarea = queryOnce('textarea')
			const field = 'textareaValue'

			const debounceOptions = {
                focusEnd: () => ['textarea', element],
                debounceTime: 150,
                useDebounce: true                
            }

			

			on('keyup', textarea, ({ target }) =>  {
				methods.updateState({target, field})
			}, debounceOptions)

		},
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

		updateState({ target, field }) {
			state.set({[field]: target.value})
		},

		toFail () {			
			popupEventDrive.emit('on-popup-fail', { isVisible: false })
		},

		toSuccess () {	
			const { id, projectId, inputValue, textareaValue, eventName } = state.get()
			const data = { id, projectId, inputValue, textareaValue }
			const isVisible = false
			popupEventDrive.emit('on-popup-success', { isVisible, eventName, data })
		},
	})

	return {
		state,
		template,
		styles,
		events,
		methods,
		children,
		hooks
	}
};

export { appPopup, popupEventDrive }