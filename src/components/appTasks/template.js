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

	${renderPopup(state.removePopup.popupOptions.isVisible, html`
		<app-popup-remove
			data-id="${state.removePopup.popupOptions.data.id}"
			data-project-id="${state.removePopup.popupOptions.data.projectId}"
			data-title="${state.removePopup.popupOptions.data.title}"
		></app-popup-remove>
	`)}		

	${renderPopup(state.taskPopup.popupOptions.isVisible, html`
		<app-popup-task
			data-task-id="${state.taskPopup.popupOptions.data.id}"
			data-project-id="${state.taskPopup.popupOptions.data.projectId}"
			data-title="${state.taskPopup.popupOptions.data.title}"
			data-description="${state.taskPopup.popupOptions.data.description}"
		></app-popup-task>
	`)}		
    `
}

