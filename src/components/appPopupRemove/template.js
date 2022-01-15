
export default ({ state, props, html }) => html`
<div class="content">
	<h3>Confirma a remoção da tarefa?</h3>
	<input type="text" value="${state.title}" disabled>
	<button class="button button-red" id="popup-cancel">Cancelar</button>
	<button class="button button-blue" id="popup-confirm">Confirmar</button>
</div>        
`