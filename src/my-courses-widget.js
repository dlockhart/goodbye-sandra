
import '@brightspace-ui/core/components/colors/colors.js';
import '@brightspace-ui/core/components/button/button.js';
import '@brightspace-ui/core/components/dialog/dialog.js';
import './course-card.js';
import './widget.js';
import { LitElement, html, css } from 'lit-element';
import { courses } from './data.js';

export class MyCoursesWidget extends LitElement {

	static get properties() {
		return {
			_activeCourseId: { type: String, attribute: false }
		}
	}

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
			@media (max-width: 850px) {
				.card-grid {
					grid-template-columns: repeat(2, 1fr);
				}
			}
			@media (max-width: 465px) {
				.card-grid {
					grid-template-columns: repeat(1, 1fr);
				}
			}
			.author-picture {
				border: 1px solid var(--d2l-color-galena);
				border-radius: 10px;
				height: 100px;
				position: absolute;
				right: 5px;
				top: 5px;
				width: 100px;
			}
			.course-picture {
				border: 1px solid var(--d2l-color-galena);
				height: 338px;
				width: 540px;
			}
			.blockquote {
				background: var(--d2l-color-gypsum);
				border-left: 8px solid var(--d2l-color-corundum);
				font-style: italic;
				margin: 0;
				padding: 1rem 120px 1rem 55px;
				position: relative;
			}
			.blockquote::before {
				font-family: Arial;
				content: "\\201C";
				color: var(--d2l-color-corundum);
				font-size: 4em;
				position: absolute;
				left: 10px;
				top: 35px;
			}
			.blockquote::after {
				content: '';
			}
			.blockquote p {
				margin: 0;
			}
			.blockquote footer {
				display:block;
				font-style: normal;
				font-weight: bold;
				margin-top: 1em;
				text-transform: uppercase;
			}
		`;
	}

	render() {
		return html`
			<goodbye-sandra-widget name="My Courses" @goodbye-sandra-course-card-select="${this._handleCourseCardSelect}">
				<div class="card-grid">
					${courses.map((tile => {
						return html`<goodbye-sandra-course-card
							identifier="${tile.id}"
							text="${tile.name}"></goodbye-sandra-course-card>`;
					}))}
				</div>
			</goodbye-sandra-widget>
			${this._getDialogView()}
		`;
	}

	_getDialogView() {
		
		const activeCourseData = courses.find((c) => c.id === this._activeCourseId);
		if (!activeCourseData) {
			return null;
		}
		
		return html`
			<d2l-dialog title-text="${activeCourseData.name}" @d2l-dialog-close="${this._handleDialogClose}" opened>
				<img src="assets/courses/${activeCourseData.id}-lg.jpg" alt="" class="course-picture">
				<blockquote class="blockquote">
					<img src="assets/users/${activeCourseData.author.id}.png" alt="" class="author-picture">
					<p>${activeCourseData.message}</p>
					<footer>&mdash;${activeCourseData.author.name}</footer>
				</blockquote>
				<d2l-button slot="footer" data-dialog-action="done" primary>Done</d2l-button>
			</d2l-dialog>`;

	}

	_handleCourseCardSelect(e) {
		this._activeCourseId = e.detail.id;
	}

	_handleDialogClose() {
		this._activeCourseId = '';
	}

}

customElements.define('goodbye-sandra-my-courses-widget', MyCoursesWidget);
