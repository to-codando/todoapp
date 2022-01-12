
export default ({ state, props, html }) => html`
<div class="content">
	<h3>Confirma a remoção da tarefa?</h3>
	<input type="text" value="${state.inputValue}" disabled>
	<button class="button button-red" id="popup-button-failure">Cancelar</button>
	<button class="button button-blue" id="popup-button-success">Confirmar</button>
</div>        
`