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

	const methods = () => ({
		editTask() {
			
			const { selectedTaskId } = state.get()
			const { tasks } = state.get()
			const selectedTask = tasks.find( task => +task.id === +selectedTaskId)
			const {title: inputValue, description: textareaValue, id} = selectedTask
			const title = 'Cadastro de tarefas'
			const data =  { id, title, inputValue, textareaValue }
			const options = { eventName: 'editTask', template:'task', isVisible: true, data }

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
				state.set({ tasks: selectedProject.tasks  })
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
