
import './widget.js';
import { LitElement, html, css } from 'lit-element';

export class AnnouncementsWidget extends LitElement {

	static get styles() {
		return css`
			:host {
				display: block;
			}
		`;
	}

	render() {
		return html`
			<goodbye-sandra-widget name="Announcements">
				<p>Announcements widget content in here</p>
			</goodbye-sandra-widget>
		`;
	}

}

customElements.define('goodbye-sandra-announcements-widget', AnnouncementsWidget);
