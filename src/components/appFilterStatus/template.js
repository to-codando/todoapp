import bannerLemeJs from '../../assets/images/leme-js-banner.png'
export default ({ state, html }) => {
    return html`
        <ul>
            <li>A Fazer</li>
            <li class="active">Fazendo</li>
            <li>Pronto</li>
        </ul>
    `
}

