import bannerLemeJs from '../../assets/images/leme-js-banner.png'
export default ({ state, html }) => {
    return html`
        <div>
             Selecione um valor 
             <span class="material-icons">
                expand_more
             </span>                
         </div>
        <ul>
            <li>A Fazer</li>
            <li>Fazendo</li>
            <li>Pronto</li>
        </ul>
    `
}

