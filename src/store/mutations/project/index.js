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
	const project = state.projects.find( project  => project.id === +projectId)

	const sortById = (a, b) => a.id - b.id
	project.tasks = [...project.tasks, task ]
	const newProjectList = [ ...otherProjects, project ].sort(sortById)
	return { ...state, projects: newProjectList }
}

const removeTask = (state, payload) => {
	const { data: { id, projectId } } = payload

	const otherProjects = state.projects.filter( project => project.id !== +projectId)
	const project = state.projects.find( project => project.id === +projectId)
	const tasks = project.tasks.filter(task => task.id !== +id)
	project.tasks = [ ...tasks ]

	const orderById = (a, b) => a.id - b.id
	const projects = [ ...otherProjects, project ].sort(orderById)
	
	return { 
		...state,
		projects
	 }
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
	const { projectId, taskId } = payload.data
	
	const projects = Array.from(state.projects)
	const project = projects.find( project => project.id === +projectId)
	const taskUpdated = { ...payload.data, id: +taskId }

	const updateTask = (taskItem) => {
		if(taskItem.id === +taskId) return taskUpdated
		return taskItem
	}

	const updateProject = (projectItem) => {
		if(projectItem.id === +projectId) return project
		return projectItem
	}

	project.tasks = Array.from(project.tasks, updateTask)

	 return {
		 ...state,	
		   projects: Array.from(projects, updateProject)
	   }
}

const togglePopupProject = (state, payload) => {
	
	return {
		...state,
		projectPopup: {
			...payload
		}
	}
}

const togglePopupTask = (state, payload) => {
	return {
		...state,
		taskPopup: {
			...state.taskPopup,
			...payload
		},

	}
}

const togglePopupRemove = (state, payload) => {

	const { popupOptions: { data: { projectId, taskId }}} = payload
	const project = state?.projects.find( project => project.id === projectId)
	const task = project?.tasks.find( task => task.id === taskId)

	if(!project || !task) {
		return {
			...state,
			removePopup: {
				popupOptions: {
					isVisible: false,
					eventName: 'togglePopupRemove',
					data: {
						id:'',
						projectId:'',
						title:'',
					}
				},				
			}
		}
	}

	return {
		...state,
		removePopup: {
			popupOptions: {
				...payload.popupOptions,
				data: {
					...payload.popupOptions.data,
					projectId,
					id: task.id,
					title: task.title
				}
			}
		},
	}

	return { ...state }
}

export const projectMustations = {
	createProject,
	createTask,
	updateTask,
	removeTask,
	togglePopupProject,
	togglePopupTask,
	togglePopupRemove,
	setIdTaskToEdit
}