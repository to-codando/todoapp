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
			store.onUpdated(methods.togglePopup)
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
		togglePopup(payload) {
			publicMethods.showProjectPopup(payload)
			publicMethods.setProjectList(payload)
		},
		showProjectPopup(payload) {
			if (!payload.event || payload.event !== 'togglePopupProject') return
			state.set({ ...payload.projectPopup })
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
