export default ({ state, html }) => { 

	const renderPopup = (condition, template) => {
        if(condition) return template
    }	

    return html`
    <div class="filter-area">
        <div class="content">
            <div class="grid">
                <div>
                    <app-filter-status></app-filter-status>
                </div>
                <div>
                    <app-search></app-search>   
                </div>
            </div>
        </div>
    </div>
    <div class="content">
       <div class="gap">
            <app-task-list></app-task-list>
       </div>
    </div>

	${renderPopup(state.popupOptions.isVisible, html`
		<app-popup-task></app-popup-task>
	`)}		
    `
}

