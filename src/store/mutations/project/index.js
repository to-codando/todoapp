import { uuid } from "../../../services/uuid"

const createProject = (state, payload) => {
	const id = uuid()
	const { title } = payload.data
	const project = { id, title, tasks: []}
	return {...state, projects: [...state.projects, project], event: payload.event}
}


const addTask = (state, payload) => {
	const { projectId, inputValue: title, textareaValue: description } = payload
	const newTask = { title, description, id: uuid() }
	const project = state.projects.find( project => +project.id === +projectId)
	project.tasks = [ ...project.tasks, newTask ]

	
	return { 
		...state, 
		projects: [ ...state.projects ]
	}
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
				...projectPopup.popupOptions
			}
		},
		event: payload.event
	}
}

export const projectMustations = {
	createProject,
	addTask,
	updateTask,
	togglePopupProject
}