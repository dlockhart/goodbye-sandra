
import './course-card.js';
import './widget.js';
import { LitElement, html, css } from 'lit-element';
import { courses } from './data.js';

export class MyCoursesWidget extends LitElement {

	static get styles() {
		return css`
			:host {
				display: block;
			}
			.card-grid {
				display: grid;
				grid-column-gap: 15px;
				grid-template-columns: repeat(3, 1fr);
			}
		`;
	}

	render() {
		return html`
			<goodbye-sandra-widget name="My Courses">
				<div class="card-grid">
					${courses.map((tile => {
						return html`<goodbye-sandra-card
							identifier="${tile.id}"
							image="${tile.image}"
							text="${tile.name}"></goodbye-sandra-card>`;
					}))}
				</div>
			</goodbye-sandra-widget>
		`;
	}

}

customElements.define('goodbye-sandra-my-courses-widget', MyCoursesWidget);
