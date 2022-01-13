
export default ({ state, props, html }) => html`
<div class="content">
	<h3>Cadastro de tarefas</h3>
	<input type="text"  value="${state.title}" placeholder="Informe o título da tarefa aqui">
	<textarea  placeholder="Informe a descrição da tarefa aqui">${state.description}</textarea>
	<button class="button button-red" id="popup-cancel">Cancelar</button>
	<button class="button button-blue" id="popup-save">Salvar</button>
</div>        
`

