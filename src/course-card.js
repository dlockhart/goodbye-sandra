
import 'd2l-card/d2l-card.js';
import { LitElement, html, css } from 'lit-element';

export class Card extends LitElement {

	static get properties() {
		return {
			href: { type: String },
			image: { type: String },
			text: { type: String }
		};
	}

	static get styles() {
		return css`
			:host {
				display: block;
				padding-bottom: 0.75rem;
			}
			.card-content {
				overflow: hidden;
				word-wrap: break-word;
				overflow-wrap: break-word;
				display: flex;
				flex-direction: column;
				margin: -0.35rem 0 -.1rem -0%.05rem;
			}
			.card-header {
				height: 100px;
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
			<d2l-card text="${this.text}" href="/${this.href}">
				<div class="card-header" slot="header">
					<img src="assets/course-images/${this.image}-sm.png" alt="">
				</div>
				<div class="card-content" slot="content">${this.text}</div>
			</d2l-card>
		`;
	}

}

customElements.define('goodbye-sandra-card', Card);
