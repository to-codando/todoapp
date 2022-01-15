import { observableFactory, pubsubFactory } from 'lemejs';

import template from './template'
import styles from './styles'

import { appNote } from '../appNote';
import { appSearch } from '../appSearch';
import { appPopupProject } from '../appPopupProject'


import { store } from '../../store';


export const appProjects = () => {

	const state = observableFactory({
		projects: store.getState().projects,
		popupOptions: {
			isVisible: false,
			eventName: '',
			data: {
				id: '',
				projectId: '',
				title: '',
				description: ''
			}
		},
	})

	const hooks = ({ methods }) => ({
		beforeOnInit() {
			store.onUpdated(methods.togglePopupsProject)
		},
		onDestroy() {
			store.off(methods.togglePopup)
		}
	})

	const children = () => [
		appNote,
		appSearch,
		appPopupProject
	]

	const events = ({ on, queryOnce, queryAll, methods }) => ({})

	const methods = ({ publicMethods }) => ({
		togglePopupsProject(payload) {
			publicMethods.showProjectPopup(payload)
			publicMethods.setProjectList(payload)
		},
		showProjectPopup({ projectPopup }) {
			const { popupOptions } = projectPopup
			const { eventName } = popupOptions
			if (!eventName || eventName !== 'togglePopupProject') return
			state.set({ ...state, popupOptions })
		},
		setProjectList(payload) {
			if (!payload.event || payload.event !== 'createProject') return
			state.set({ projects: payload.projects })
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
