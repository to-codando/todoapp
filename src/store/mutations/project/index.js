import { uuid } from "../../../services/uuid"

const addProject = (state, payload) => {
	const id = uuid()
	const { inputValue: title } = payload
	const project = { id, title, tasks: []}
	return {
		...state,
		projects: [...state.projects, project]
	}
}


const addTask = (state, payload) => {
	const { projectId, inputValue: title, textareaValue: description } = payload
	const newTask = { title, description, id: uuid() }
	const project = state.projects.find( project => +project.id === +projectId)
	console.log('--->', project)
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

export const projectMustations = {
	addProject,
	addTask,
	updateTask
}