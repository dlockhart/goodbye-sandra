
import './course-card.js'
import { LitElement, html, css } from 'lit-element';
import { heading4Styles } from '@brightspace-ui/core/components/typography/styles.js';
import { tileData } from './tile-data.js';

export class MyCourses extends LitElement {

	static get styles() {
		return [heading4Styles, css`
			:host {
				background-color: #ffffff;
				border-bottom: 1px solid #d8d8d8;
				border-radius: 8px;
				box-shadow: 0 4px 8px 0 rgba(0,0,0,.03);
				display: block;
				margin-top: 30px;
				padding: 15px 20px 20px;
			}
			.d2l-heading-4 {
				margin: 0 0 11px;
			}
			.card-grid {
				display: grid;
				grid-column-gap: 15px;
				grid-template-columns: repeat(3, 1fr);
			}
		`];
	}

	render() {
		return html`
			<h2 class="d2l-heading-4">My Courses</h2>
			<div class="card-grid">
				${tileData.map((tile => {
					return html`<goodbye-sandra-card
						href="${tile.id}"
						image="${tile.image}"
						text="${tile.name}"></goodbye-sandra-card>`;
				}))}
			</div>
		`;
	}

}

customElements.define('goodbye-sandra-my-courses', MyCourses);
