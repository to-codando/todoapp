export default  ({ state, html }) => {
    return html`
        <div class="app-main-wrapper">
            <app-header></app-header>
            <router-view></router-view>
        </div>
    `
}