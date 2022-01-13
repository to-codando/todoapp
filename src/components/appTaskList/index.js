import { observableFactory, routerObservable } from 'lemejs';

import { store } from '../../store';

import template from './template'
import styles from './styles'

import { appCombo } from '../appCombo';
import { appNote } from '../appNote'

//

export const appTaskList = () => {

	const state = observableFactory({
		tasks: [],
		project: {
			tasks: []
		},
		projectId: null,
		selectedTaskId: null
	})

	const children = () => [
		appCombo,
		appNote
	]

	const hooks = ({ methods }) => ({
		beforeOnInit () {
			methods.setProjectId()
			methods.setProjectListById()
		}
	})


	const events = ({ on, queryAll, methods, props }) => ({ 
		onClickToShowTaskDetail () {
			const taskHeader = queryAll('.task-header')
			on('click', taskHeader, methods.showTaskDetail)
		},
		onClickToEditTask () {
			const button = queryAll('.button-edit')
			on('click', button, methods.setIdTaskToEdit)
		}
	})

	const methods = ({ publicMethods }) => ({
		setIdTaskToEdit({ target }){
			const { selectedTaskId, projectId } = state.get()
			const event = 'setIdTaskToEdit'
			const data = { popupOptions: { isVisible: true }}
			store.emit(event, { data, event, selectedTaskId, projectId })
		},
		showTaskDetail ({ target }) {
			const taskItem = target.closest('.task-item')
			const { taskId } = taskItem.dataset
			state.set({ selectedTaskId: +taskId})
		},
		setProjectListById (){
			const { projects } = store.getState()
			const { projectId } = state.get()
			const project = projects.find( project => project.id === projectId )
			state.set({ project })
		},
		setProjectId () {
			const { routeParams } = routerObservable.get()
			state.set({ projectId: +routeParams.id })
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
