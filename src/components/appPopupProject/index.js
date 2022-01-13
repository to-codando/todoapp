import { observableFactory } from 'lemejs';

import template from './template'
import styles from './styles'
import { store } from '../../store';


 const popupProjectObserver = observableFactory()

const appPopupProject = (options) => {

	const { element } = options

	const state = observableFactory({
		title:''
	})

	const children = () => []

	const hooks = ({ methods, props }) => ({ })

	const events = ({ on, queryOnce, methods, props }) => ({
		onClickToSave () {
			const button = queryOnce('#popup-save')
			on('click', button, methods.createProject)
		},
		onClickToCancel () {
			const button = queryOnce('#popup-cancel')
			on('click', button, methods.hidePopupProject)
		},
		onTypTitle () {
			const input = queryOnce('input')
			const focusEnd = () => ['input', element]
			const debounceOptions = { focusEnd, debounceTime: 120, useDebounce: true }			
			on('keyup', input, methods.setTitle, debounceOptions)
		},
	})

	const methods = ({ publicMethods }) => ({
		createProject () {
			const { title } = state.get()
			const data = { title }
			const event = 'createProject'
			publicMethods.hidePopupProject()
			store.emit(event, { data, event })
		},
		setTitle ({ target }) {
			state.set({ title: target.value })
		},
		hidePopupProject () {
			const event = 'togglePopupProject'
			const data = { id:'', title:'', description:'', projectId:'' }
			const popupOptions = {  isVisible: false, eventName: event, data	}

			store.emit(event, { popupOptions })			
		}
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

export { appPopupProject, popupProjectObserver }