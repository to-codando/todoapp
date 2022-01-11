import { observableFactory, routerObservable } from 'lemejs';

import { store } from '../../store';
import { popupEventDrive } from '../appPopup'

import template from './template'
import styles from './styles'

import { appCombo } from '../appCombo';
import { appNote } from '../appNote'


export const appTaskList = () => {

	const state = observableFactory({
		tasks: [],
		selectedTaskId: ''
	})

	const children = () => [
		appCombo,
		appNote
	]

	const hooks = ({ methods }) => ({
		beforeOnInit() {
			methods.setTasksByProjectId()	
			store.on('updateTask', methods.resetTasksWhenStoreChanges)		
			store.on('addTask', methods.resetTasksWhenStoreChanges)		
			popupEventDrive.on('on-popup-success', methods.updateTaskList)
		}
	})


	const events = ({ on, queryAll, methods }) => ({
		onClickToEdit() {
			const buttonEdit = queryAll('.button-edit')
			on('click', buttonEdit, methods.editTask)
		},
		onClickToRemove() {
			const buttonCancel = queryAll('.button-remove')
			on('click', buttonCancel, methods.removeTask)
		},
		onClickToExpandTask() {
			const taskIcon = queryAll('.task-icon')

			on('click', taskIcon, ({ target }) => {
				methods.setSelectedTask(target)
			})
		}
	})

	const methods = ({ publicMethods }) => ({
		sortById  (a, b) {
			return a.id - b.id
		},
		resetTasksWhenStoreChanges(payload) { 
			const { projects } = payload
			const { routeParams } = routerObservable.get()
			const selectedProject = projects.find( project => project.id === +routeParams.id)
			const tasks = Array.from(selectedProject.tasks).sort(publicMethods.sortById)

			state.set({ tasks })
		},
		updateTaskList (payload) {
			const { eventName, data } = payload
			store.emit(eventName, data)
		},
		editTask() {

			const { routeParams } = routerObservable.get()
			const { id: projectId } = routeParams
			const { selectedTaskId } = state.get()
			const { tasks } = state.get()
			const selectedTask = tasks.find( task => +task.id === +selectedTaskId)
			const {title: inputValue, description: textareaValue, id} = selectedTask
			const title = 'Cadastro de tarefas'
			const data =  { id, projectId, title, inputValue, textareaValue }
			const options = { eventName: 'updateTask', template:'task', isVisible: true, data }

		    popupEventDrive.emit('on-show-popup', options)
		},
		removeTask () {},
		setTasksByProjectId() {

			let tasks = []
			const { routeParams } = routerObservable.get()
			const { id: projectId } = routeParams

			if(projectId) {
				const { projects } = store.getState()
				const selectedProject = projects.find(project => +project.id === +projectId)
				const tasks = selectedProject.tasks
				state.set({ tasks: tasks.sort(publicMethods.sortById)  })
			}
		},
		setSelectedTask(target) {
			const taskId = target.parentElement.dataset.taskId
			state.set({ selectedTaskId: +taskId })
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
