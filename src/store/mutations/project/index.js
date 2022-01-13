import { uuid } from "../../../services/uuid"

const createProject = (state, payload) => {
	const id = uuid()
	const { title } = payload.data
	const project = { id, title, tasks: []}
	return {...state, projects: [...state.projects, project], event: payload.event}
}

const createTask = (state, payload) => {
	const id = uuid()
	const { projectId, title, description } = payload.data
	const task = { id, title, description }
	const otherProjects = state.projects.filter( project => project.id !== projectId )
	const project = state.projects.find( project  => project.id === projectId)

	const sortById = (a, b) => a.id - b.id
	project.tasks = [...project.tasks, task ]
	const newProjectList = [ ...otherProjects, project ].sort(sortById)
	return { ...state, projects: newProjectList }
}

const setIdTaskToEdit = (state, payload) => {
	const { data, event, selectedTaskId, projectId } = payload

	const project = state.projects.find( project => project.id === projectId) 
	const task = project.tasks.find( task => task.id === selectedTaskId)
	
	const newState = {
		taskPopup: {
			popupOptions: {
				...data.popupOptions,
				eventName: event,
				data: {
					...task,
					projectId
				}
			}			
		}
	}

	return { ...state, ...newState }

	
}

const updateTask = (state, payload) => {
	
	const { id: taskId, projectId, inputValue: title, textareaValue: description } = payload

	const otherProjects = state.projects.filter( project => project.id !== +projectId)
	const selectedProject = state.projects.find(  project => project.id === +projectId)

	const otherTasks = selectedProject.tasks.filter( task => task.id !== +taskId)
	const updatedTask = { id: +taskId, title, description }

	selectedProject.tasks = [...otherTasks, updatedTask]

	 return {
		 ...state,
		 projects: [...otherProjects, selectedProject]
	   }
}

const togglePopupProject = (state, payload) => {

	const projectPopup = {
		...payload.data
	}
	
	return {
		...state,
		projectPopup: {
			...state.projectPopup,
			popupOptions: {
				...state.projectPopup.popupOptions,
				...projectPopup.popupOptions,
				eventName: payload.event,
				data: { taskId: '', projectId:'', title:'', description:' '}
			}
		},
		event: payload.event
	}
}

const togglePopupTask = (state, payload) => {
	const taskPopup = {
		...payload.data
	}
	
	return {
		...state,
		taskPopup: {
			...state.taskPopup,
			popupOptions: {
				...state.taskPopup.popupOptions,
				...taskPopup.popupOptions
			}
		},
		event: payload.event
	}
}

export const projectMustations = {
	createProject,
	createTask,
	updateTask,
	togglePopupProject,
	togglePopupTask,
	setIdTaskToEdit
}