import { observableFactory } from 'lemejs';

import template from './template'
import styles from './styles'

import { store } from '../../store';


 const popupRemoveObserver = observableFactory()

const appPopupRemove = (options) => {

	const { element } = options

	const state = observableFactory({
		id:'',
		projectId:'',
		title: '',
	})

	const children = () => []

	const hooks = ({ methods, props }) => ({
		beforeOnInit () {
			state.set({ ...props })
		}
	 })

	const events = ({ on, queryOnce, methods, props }) => ({
		onClickToRemove() {
			const button = queryOnce('#popup-confirm')
			on('click', button, methods.removeTask)
		},
		onClickToCancel (){
			const button = queryOnce('#popup-cancel')
			on('click', button, methods.hidePopupTask)
		},		
	})

	const methods = ({ publicMethods }) => ({
		removeTask (){
			const data = { ...state.get() }
			const event = 'removeTask'
			publicMethods.hidePopupTask()
			store.emit(event, { data, event })
		},
		hidePopupTask () {

			const event = 'togglePopupRemove'
			const data = { taskId:'',  projectId:'' }
			const popupOptions = {  isVisible: false, eventName: event, data }
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

export { appPopupRemove, popupRemoveObserver }