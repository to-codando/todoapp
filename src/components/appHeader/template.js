import bannerLemeJs from '../../assets/images/leme-js-banner.png'
export default ({ state, html }) => {

	const renderPopup = (condition, template) => {
        if(condition) return template
    }

    return html`
        <div class="content">
            <app-bread-crumbs></app-bread-crumbs>
            <button id="button-show-popup">
                <span class="material-icons">
                    add
                </span>                
            </button>

            ${renderPopup(state.popupOptions.isVisible, html`
                <app-popup 
					data-id="${state?.popupOptions?.data?.id}"
                    data-template="${state.popupOptions.template}" 
                    data-event-name="${state.popupOptions.eventName}"
					data-title="${state?.popupOptions?.data?.title}"
					data-input-value="${state?.popupOptions?.data?.inputValue}"
					data-textarea-value="${state?.popupOptions?.data?.textareaValue}"
                ></app-popup>
            `)}

        </div>
    `
}

