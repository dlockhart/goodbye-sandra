
import './my-courses.js';
import './navigation.js';
import { LitElement, html, css } from 'lit-element';

export class App extends LitElement {

	static get styles() {
		return css`
			:host {
				display: block;
			}
			header {
				background-color: #fff;
			}
			main {
				margin: 0 auto;
				max-width: 1230px;
			}
			.main-padding {
				padding: 10px 30px;
			}
		`;
	}

	render() {
		return html`
			<header>
				<goodbye-sandra-nav></goodbye-sandra-nav>
			</header>
			<main>
				<div class="main-padding">
					<goodbye-sandra-my-courses></goodbye-sandra-my-courses>
				</div>
			</main>
		`;
	}

}

customElements.define('goodbye-sandra-app', App);
