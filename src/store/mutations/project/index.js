const addProject = (state, payload) => {
	const projects = [...state.projects, payload.project]
	return {...state, projects }
}
const addTask = (state, payload) => {
	const { projectId } = payload
	const project = state.projects.find( project => +project.id === +projectId)
	project.tasks = [ ...project.tasks, payload.task]

	
	return { 
		...state, 
		projects: [ ...state.projects ]
	}
}

export const projectMustations = {
	addProject,
	addTask
}