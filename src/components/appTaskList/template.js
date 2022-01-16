
export default ({ state, html }) => {

	const setCssClassByStatus = (task) => {
		const statusId = +task.statusId
		if(statusId === 1) return 'status-todo'
		if(statusId === 2) return 'status-doing'
		if(statusId === 3) return 'status-done'
	}

    if(!state.project.tasks.length) return html`
    <div class="content">
        <app-note
            data-length="0" 
            data-title="Tarefas cadastrados"
            data-message="Cadastre novas tarefas"
        >
        </app-note> 
    </div>         
    `

    return html`
        <div class="task-list">

        ${state.project.tasks.map( task => {
            return html`
            <div class="task-item" data-task-id="${task.id}">
                <div class="task-header">
                    <div class="task-id">
					 <span class="status ${setCssClassByStatus(task)}"></span> #${task.id}
					</div>
                    <div class="task-title">${task.title}</div>
                    <div class="task-icon">
                        <span class="material-icons">
                        expand_more
                        </span>                
                    </div>                
                </div>
                <div class="task-content ${state.selectedTaskId !== +task.id ? 'hide-content' : ''}">
                    <div class="task-controller">
                        <div>
                            <button class="button button-edit">Editar</button>
                            <button class="button button-remove">Remover</button>
                        </div>
                        <div>
                            <app-combo
								data-status-id="${task.statusId}"
								data-task-id="${task.id}"
								data-project-id="${state.projectId}"
							></app-combo>
                        </div>
                    </div>
                    <p> ${task.description}</p>
                </div>
            </div>            
            `
        }).join('')}
         
        </div>
    `
}

