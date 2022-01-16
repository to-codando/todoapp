import bannerLemeJs from '../../assets/images/leme-js-banner.png'
export default ({ state, html }) => {
    return html`
    <input 
		type="text" 
		placeholder="informe o título ou id do projeto"
		value="${state.term}"
	>
    <button id="button-filter">Filtrar</button>        
    <button id="button-clear">Limpar</button>        
    `
}

