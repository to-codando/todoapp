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
			template: '',
			eventName: '',
			data: {
				id:'',
				projectId:'',
				title:'',
				inpuValue:'',
				textareaValue:''
			}
		},
	})

	const hooks = ({ methods }) => ({ 
		beforeOnInit () {
			store.onUpdated((payload) => {
				methods.showProjectPopup(payload)
				methods.setProjectList(payload)
			})
		}
	})

	const children = () => [
		appNote,
		appSearch,
		appPopupProject
	]

	const events = ({ on, queryOnce, queryAll, methods }) => ({})

	const methods = ({ publicMethods }) => ({
		showProjectPopup (payload) {
			if(!payload.event || payload.event !== 'togglePopupProject') return
			state.set({ ...payload.projectPopup })
		},
		setProjectList (payload) {
			if(!payload.event || payload.event !== 'createProject') return
			state.set({	projects: payload.projects })
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
