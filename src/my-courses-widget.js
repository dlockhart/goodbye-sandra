
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
		`;
	}

	render() {
		const activeCourseData = courses.find((c) => c.id === this._activeCourseId);
		let dialogTitle = '';
		let dialogOpened = false;
		if (activeCourseData) {
			dialogTitle = activeCourseData.name;
			dialogOpened = true;
		}
		return html`
			<goodbye-sandra-widget name="My Courses" @goodbye-sandra-course-card-select="${this._handleCourseCardSelect}">
				<div class="card-grid">
					${courses.map((tile => {
						return html`<goodbye-sandra-course-card
							identifier="${tile.id}"
							image="${tile.image}"
							text="${tile.name}"></goodbye-sandra-course-card>`;
					}))}
				</div>
			</goodbye-sandra-widget>
			<d2l-dialog title-text="${dialogTitle}" ?opened="${dialogOpened}" @d2l-dialog-close="${this._handleDialogClose}">
			</d2l-dialog>
		`;
	}

	_handleCourseCardSelect(e) {
		this._activeCourseId = e.detail.id;
	}

	_handleDialogClose() {
		this._activeCourseId = '';
	}

}

customElements.define('goodbye-sandra-my-courses-widget', MyCoursesWidget);
