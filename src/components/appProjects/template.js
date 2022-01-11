
export default ({ state, html }) => {

    const renderNote = (projects, template) => {
        if(!projects.length) return template        
    }

    const renderProjects = (projects, template) => {
        if(projects.length) return template
    }

    const renderProjectItems = ( projects, template ) => {
      return  projects.map( project => {
            return template(project)
        }).join('')
    }


    return html`
        <div class="filter-area">
            <div class="content">
                <app-search></app-search>
            </div>
        </div>
        <div class="content">

            ${renderNote(state.projects, html`
                <div class="note-area">
                    <app-note
                        data-length="0" 
                        data-title="Projetos cadastrados"
                        data-message="Cadastre novos projetos"
                    >
                    </app-note>            
                </div>
            `)}


            ${renderProjects(state.projects, html`
                <ul>
                    ${renderProjectItems(state.projects,  (project) => html`
                        <li>
                            <a href="#/projects/${project.id}">
                                <span>${project.id}</span>
                                <span>${project.title}</span>
                                <span>Tarefas <small>${project.tasks.length}</small></span>
                            </a>
                        </li>            
                    `)}
                </ul>        
            `)}

        </div>
    `
}

