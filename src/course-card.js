
import 'd2l-card/d2l-card.js';
import { LitElement, html, css } from 'lit-element';

export class CourseCard extends LitElement {

	static get properties() {
		return {
			identifier: { type: String },
			text: { type: String }
		};
	}

	static get styles() {
		return css`
			:host {
				display: block;
				padding-bottom: 0.75rem;
				width: 100%;
			}
			.card-content {
				overflow: hidden;
				word-wrap: break-word;
				overflow-wrap: break-word;
				display: flex;
				flex-direction: column;
				margin: -0.35rem 0 -.1rem -0%.05rem;
			}
			img {
				object-fit: cover;
				object-position: center;
				height: 100%;
				width: 100%;
			}
		`;
	}

	render() {
		return html`
			<d2l-card text="${this.text}" href="#" @click="${this._handleClick}">
				<img src="assets/courses/${this.identifier}-sm.jpg" alt="" slot="header" width="365" height="100" loading="lazy">
				<div class="card-content" slot="content">${this.text}</div>
			</d2l-card>
		`;
	}

	_handleClick(e) {
		e.preventDefault();
		this.dispatchEvent(
			new CustomEvent(
				'goodbye-sandra-course-card-select',
				{ bubbles: true, composd: true, detail: {id: this.identifier} }
			)
		);
	}

}

customElements.define('goodbye-sandra-course-card', CourseCard);
