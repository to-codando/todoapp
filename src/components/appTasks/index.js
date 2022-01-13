import { observableFactory } from 'lemejs';
import { store } from '../../store';

import template from './template'
import styles from './styles'

import { appSearch } from '../appSearch'
import { appFilterStatus } from '../appFilterStatus';
import { appTaskList } from '../appTaskList';
import { appPopupTask } from '../appPopupTask';

export const appTasks = () => {

	const state = observableFactory({
		popupOptions: {
			isVisible: false,
			eventName: '',
			data: {
				id: '',
				projectId: '',
				title: '',
				description: '',
			}
		},
	})

	const children = () => [
		appSearch,
		appFilterStatus,
		appTaskList,
		appPopupTask
	]

	const hooks = ({ methods }) => ({
		beforeOnInit() {
			store.onUpdated(methods.togglePopupsTask)
		},
		onDestroy () {
			store.off(methods.togglePopup)
		}
	})

	const events = ({ on, queryOnce, queryAll, methods }) => ({

	})

	const methods = ({ publicMethods }) => ({
		togglePopupsTask(payload) {
			publicMethods.togglePopupTask(payload)
			publicMethods.togglePopupToEditTask(payload)
		},
		togglePopupTask({ taskPopup }) {
			const { popupOptions } = taskPopup
			const { eventName } = popupOptions
			if(!eventName || eventName !== 'togglePopupTask') return
			state.set({ ...taskPopup })
		},
		togglePopupToEditTask({ taskPopup }) {
			// const { popupOptions } = taskPopup
			// const { eventName, isVisible, data } = popupOptions
			// if (!eventName || eventName !== 'setIdTaskToEdit') return
			// console.log(taskPopup)
			// state.set({ popupOptions: { ...state.popupOptions, data, isVisible } })
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