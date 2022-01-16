import { observableFactory, routerObservable } from 'lemejs';

import { store } from '../../store';
import { filterTaskObservable } from '../../services/filterObservable';

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
		beforeOnInit() {
			store.onUpdated(methods.setProjectList)
			filterTaskObservable.on(methods.executeTaskFilter)

			methods.setProjectId()
			methods.setProjectListById()
		},
		onDestroy() {

		}
	})


	const events = ({ on, queryAll, methods, props }) => ({
		onClickToShowTaskDetail() {
			const taskHeader = queryAll('.task-header')
			on('click', taskHeader, methods.showTaskDetail)
		},
		onClickToEditTask() {
			const button = queryAll('.button-edit')
			on('click', button, methods.setIdTaskToEdit)
		},
		onClickToRemove() {
			const button = queryAll('.button-remove')
			on('click', button, methods.setTaskToRemove)
		}
	})

	const methods = ({ publicMethods }) => ({
		executeTaskFilter(payload){
			const { eventName, term, projectId } = payload
			if(eventName === 'resetTaskList') return publicMethods.resetProjectList()
			if(eventName === 'filterTaskList') return publicMethods.filterTasksByTerm({ term })
		},
		filterTasksByTerm(payload) {
			const { project } = state.get()
			const { tasks } = project
			const { term } = payload
			const newTaskList = tasks.find(taskItem => taskItem.title === term)
			project.tasks = newTaskList
			state.set({ project })
		},
		resetProjectList (){
			const { routeParams: {id: projectId}} = routerObservable.get()
			const { projects } = store.getState()
			const project = projects.find( project => project.id === +projectId)
			state.set({ project: Object.create(project)})
		},
		setProjectList(payload) {
			publicMethods.setProjectListById()
		},
		setIdTaskToEdit({ target }) {

			const { selectedTaskId, projectId, project } = state.get()
			const task = project.tasks.find(task => task.id === selectedTaskId)
			const event = 'togglePopupTask'
			const data = { ...task, projectId }
			const popupOptions = { isVisible: true, eventName: event, data }

			store.emit(event, { popupOptions })
		},
		setTaskToRemove({ target }) {

			const { selectedTaskId, projectId } = state.get()
			const event = 'togglePopupRemove'
			const data = { taskId: selectedTaskId, projectId }
			const popupOptions = { isVisible: true, eventName: event, data }

			store.emit(event, { popupOptions })
		},
		showTaskDetail({ target }) {
			const taskItem = target.closest('.task-item')
			const { taskId } = taskItem.dataset
			state.set({ selectedTaskId: +taskId })
		},
		setProjectListById() {
			const { routeParams } = routerObservable.get()
			if (!routeParams || !routeParams.id) return

			const { projects } = store.getState()
			const projectId = +routeParams.id
			const project = projects.find(project => project.id === projectId)
			state.set({ project: Object.create(project) })
		},
		setProjectId() {
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
