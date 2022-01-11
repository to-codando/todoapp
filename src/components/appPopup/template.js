
export default ({ state, props, html }) => {

    const templates = {
        project:  () => html`
            <div class="content">
                <h3>${props.title ? props.title : 'Cadastro de projetos'}</h3>
                <input type="text" value="${props.inputValue}" name="title" placeholder="Informe o título do projeto aqui">
                <button class="button button-red" id="popup-button-failure">Cancelar</button>
                <button class="button button-blue" id="popup-button-success">Salvar</button>
            </div>        
        `,
        task: () => html`
            <div class="content">
                <h3>${props.title ? props.title : 'Cadastro de tarefas'}</h3>
                <input type="text"  value="${props.inputValue}" placeholder="Informe o título da tarefa aqui">
                <textarea  placeholder="Informe a descrição da tarefa aqui">${props.textareaValue}</textarea>
                <button class="button button-red" id="popup-button-failure">Cancelar</button>
                <button class="button button-blue" id="popup-button-success">Salvar</button>
            </div>        
        `,
        remove: () => html`
            <div class="content">
                <h3>${props.title ? props.title : 'Confirma a remoção da tarefa?'}</h3>
                <input type="text" value="${props.inputValue}" disabled>
                <button class="button button-red" id="popup-button-failure">Cancelar</button>
                <button class="button button-blue" id="popup-button-success">Confirmar</button>
            </div>        
        `
    }

    if(!props.template) return
   
   return templates[props.template]()
}

