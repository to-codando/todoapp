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
			template: '',
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
			store.onUpdated(methods.togglePopup)
		},
		onDestroy () {
			store.off(methods.togglePopup)
		}
	})

	const events = ({ on, queryOnce, queryAll, methods }) => ({

	})

	const methods = ({ publicMethods }) => ({
		togglePopup(payload) {
			publicMethods.togglePopupTask(payload)
			publicMethods.togglePopupToEditTask(payload)
		},
		togglePopupTask(payload) {
			if (!payload.event || payload.event !== 'togglePopupTask') return
			state.set({ ...payload.taskPopup })
		},
		togglePopupToEditTask({ taskPopup }) {
			const { popupOptions } = taskPopup
			const { eventName, isVisible, data } = popupOptions
			if (!eventName || eventName !== 'setIdTaskToEdit') return
			state.set({ popupOptions: { ...state.popupOptions, data, isVisible } })
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