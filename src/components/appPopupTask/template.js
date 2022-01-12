
export default ({ state, props, html }) => { 

	const templates = {
        project:  () => html`
            <div class="content">
                <h3>${state.hasOwnProperty('title') ? state.title : 'Cadastro de projetos'}</h3>
                <input type="text" value="${state.inputValue}" name="title" placeholder="Informe o título do projeto aqui">
                <button class="button button-red" id="popup-button-failure">Cancelar</button>
                <button class="button button-blue" id="popup-button-success">Salvar</button>
            </div>        
        `,
        task: () => html`
            <div class="content">
                <h3>${state.hasOwnProperty('title') ? state.title : 'Cadastro de tarefas'}</h3>
                <input type="text"  value="${state.inputValue}" placeholder="Informe o título da tarefa aqui">
                <textarea  placeholder="Informe a descrição da tarefa aqui">${state.textareaValue}</textarea>
                <button class="button button-red" id="popup-button-failure">Cancelar</button>
                <button class="button button-blue" id="popup-button-success">Salvar</button>
            </div>        
        `,
        remove: () => html`
            <div class="content">
                <h3>${state.hasOwnProperty('title') ? state.title : 'Confirma a remoção da tarefa?'}</h3>
                <input type="text" value="${state.inputValue}" disabled>
                <button class="button button-red" id="popup-button-failure">Cancelar</button>
                <button class="button button-blue" id="popup-button-success">Confirmar</button>
            </div>        
        `
    }

    if(!state.template) {
		console.log('template indefinido')
		return
	}
   
   return templates[state.template]()
}

