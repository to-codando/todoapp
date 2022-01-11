import bannerLemeJs from '../../assets/images/leme-js-banner.png'
export default ({ state, html }) => {
    return html`
    <div class="hello-wrapper">
        <h1 class="title" style="margin-bottom:30px;">${state.title}</h1>
        <p>
            ${state.text}
        </p>
        <p>
            <img src="${bannerLemeJs}" alt="Leme Js" class="banner">
        </p>
        <app-text></app-text>
        <a href="#/xxx">Go to other page!!!</a>
    </div>
    `
}

