import bannerLemeJs from '../../assets/images/leme-js-banner.png'
export default ({ state, props, html }) => {

    return html`
        <h2>
            <span>${props.length}</span>
            ${props.title}
        </h2>
        <p>${props.message}</p>
    `
}

