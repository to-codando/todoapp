import { observableFactory, routerObservable } from 'lemejs';

import template from './template'
import styles from './styles'
import { store } from '../../store';

 const popupTaskObserver = observableFactory()

const appPopupTask = (options) => {

	const { element } = options

	const state = observableFactory({
		title:'',
		description:'',
		projectId:'',
		taskId:'',
	})

	const children = () => []

	const hooks = ({ methods, props }) => ({
		beforeOnInit () {
			methods.setProjectId()
			methods.setStateByStaticProps()
		}
	 })

	const events = ({ on, queryOnce, methods }) => ({
		onClickToSave() {
			const button = queryOnce('#popup-save')
			on('click', button, methods.createTask)
		},
		onClickToCancel (){
			const button = queryOnce('#popup-cancel')
			on('click', button, methods.hidePopupTask)
		},
		onTypeTitle () {
			const input = queryOnce('input')
			const focusEnd = () => ['input', element]
			const debounceOptions = { focusEnd, debounceTime: 120, useDebounce: true }				
			on('keyup', input, methods.setTitle, debounceOptions)
		},
		onTypeDescription () {
			const textarea = queryOnce('textarea')
			const focusEnd = () => ['textarea', element]
			const debounceOptions = { focusEnd, debounceTime: 120, useDebounce: true }				
			on('keyup', textarea, methods.setDescription, debounceOptions)			
		}
	})

	const methods = ({ publicMethods }) => ({
		setStateByStaticProps() {
			const { element } = options
			const popupOptions = JSON.parse(JSON.stringify(element.dataset))
			state.set({ ...popupOptions })
		},
		createTask (){
			const data = { ...state.get() }
			const event = 'createTask'
			publicMethods.hidePopupTask()
			store.emit(event, { data, event })
		},
		setProjectId () {
			const { routeParams } = routerObservable.get()
			state.set({ projectId: +routeParams.id })
		},
		setTitle ({ target }) {
			state.set({ title: target.value })
		},
		setDescription ({ target }) {
			state.set({ description: target.value })
		},
		hidePopupTask () {
			const { routeParams } = routerObservable.get()
			const { id } = routeParams

			const event = 'togglePopupTask'
			const data = { id:'', title:'', description:'', projectId: +id }
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

export { appPopupTask, popupTaskObserver }