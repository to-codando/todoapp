
export default ({ state, props, html }) =>  html`
<div class="content">
	<h3> Cadastro de projetos </h3>
	<input type="text" value="${state.title}" name="title" placeholder="Informe o título do projeto aqui">
	<button class="button button-red" id="popup-cancel">Cancelar</button>
	<button class="button button-blue" id="popup-save">Salvar</button>
</div>        
`

