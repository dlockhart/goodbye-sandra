
import { LitElement, html, css } from 'lit-element';
import { heading4Styles } from '@brightspace-ui/core/components/typography/styles.js';

export class Widget extends LitElement {

	static get properties() {
		return {
			name: { type: String }
		}
	}

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
				flex: 1 0 auto;
				margin: 0;
			}
			.title {
				align-items: center;
				display: flex;
				margin-bottom: 11px;
			}
			.right {
				flex: 0 0 auto;
			}
		`];
	}

	render() {
		return html`
			<div class="title">
				<h2 class="d2l-heading-4">${this.name}</h2>
				<div class="right"><slot name="title"></slot></div>
			</div>
			<slot></slot>
		`;
	}

}

customElements.define('goodbye-sandra-widget', Widget);
