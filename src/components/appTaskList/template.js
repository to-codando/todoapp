
export default ({ state, html }) => {

    if(!state.tasks.length) return html`
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

        ${state.tasks.map( task => {
            return html`
            <div class="task-item">
                <div class="task-header">
                    <div class="task-id">#${task.id}</div>
                    <div class="task-title">${task.title}</div>
                    <div class="task-icon" data-task-id="${task.id}">
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
                            <app-combo></app-combo>
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

