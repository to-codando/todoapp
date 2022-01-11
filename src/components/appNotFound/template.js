export default ({ state, html }) => html`
    <div class="wrapper">
        <h1 class="title">${state.title}</h1>
        <p>${state.text}</p>
        <a href="#/">< go back</a>
    </div>
    `

