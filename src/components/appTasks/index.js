import { observableFactory } from 'lemejs';
import { store } from '../../store';

import template from './template'
import styles from './styles'

import { appSearch } from '../appSearch'
import { appFilterStatus } from '../appFilterStatus';
import { appTaskList } from '../appTaskList';
import { appPopupTask } from '../appPopupTask';
import { appPopupRemove } from '../appPopupRemove';

export const appTasks = () => {

	const state = observableFactory({
		taskPopup: {
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
		},
		removePopup: {
			popupOptions: {
				isVisible: false,
				eventName: '',
				data: {
					id: '',
					projectId: '',
					title: '',
				}
			},			
		}
	})

	const children = () => [
		appSearch,
		appFilterStatus,
		appTaskList,
		appPopupTask,
		appPopupRemove
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
			publicMethods.togglePopupRemove(payload)
		},
		togglePopupRemove({ removePopup, taskPopup }){ 
			const { popupOptions } = removePopup
			const { eventName } = popupOptions
			if(!eventName || eventName !== 'togglePopupRemove') return
			state.set({ removePopup })			
		},
		togglePopupTask({ taskPopup }) {
			const { popupOptions } = taskPopup
			const { eventName } = popupOptions
			if(!eventName || eventName !== 'togglePopupTask') return
			state.set({ taskPopup })
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