
import './widget.js';
import { LitElement, html, css } from 'lit-element';

export class CalendarWidget extends LitElement {

	static get styles() {
		return css`
			:host {
				display: block;
			}
		`;
	}

	render() {
		return html`
			<goodbye-sandra-widget name="Calendar">
				<p>Calendar widget content in here</p>
			</goodbye-sandra-widget>
		`;
	}

}

customElements.define('goodbye-sandra-calendar-widget', CalendarWidget);
