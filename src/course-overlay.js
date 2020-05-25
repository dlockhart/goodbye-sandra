
import '@brightspace-ui/core/components/backdrop/backdrop.js';
import { LitElement, html, css } from 'lit-element';
import { courses } from './data.js';

export class CourseOverlay extends LitElement {

	static get properties() {
		return {
			identifier: { type: String }
		};
	}

	static get styles() {
		return css`
			:host {
				display: block;
			}
		`;
	}

	render() {
		const courseData = courses.find((c) => c.id === this.identifier);
		console.log('overllay render', this.identifier)
		if (!courseData) return;
		return html`
			<div id="target">${courseData.name}</div>
			<d2l-backdrop for-target="target"></d2l-backdrop>
		`;
	}

}

customElements.define('goodbye-sandra-course-overlay', CourseOverlay);
