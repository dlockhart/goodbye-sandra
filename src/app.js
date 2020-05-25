
import './app-main.js';
import './course-overlay.js';
import './my-courses.js';
import './navigation.js';
import { LitElement, html, css } from 'lit-element';
import { router } from 'lit-element-router';

export class App extends router(LitElement) {

	static get properties() {
		return {
			route: { type: String },
			params: { type: Object },
			query: { type: Object }
		};
	}

	static get routes() {
		return [
			{
				name: 'home',
				pattern: '',
				data: {title: 'Goodbye to Sandra from Gaudi'}
			},
			{
				name: 'course',
				pattern: 'course/:id'
			}
		];
	}

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
	
	 router(route, params, query, data) {
		this.route = route;
		this.params = params;
		this.query = query;
		console.log('router', route, params, query, data);
	}

	render() {
		return html`
			<goodbye-sandra-app-main active-route="${this.route}">
				<header>
					<goodbye-sandra-nav></goodbye-sandra-nav>
				</header>
				<main>
					<div class="main-padding">
						<goodbye-sandra-my-courses></goodbye-sandra-my-courses>
					</div>
				</main>
				<goodbye-sandra-course-overlay route="course" identifier="${this.params.id}"></goodbye-sandra-course-overlay>
			</goodbye-sandra-app-main>
		`;
	}

}

customElements.define('goodbye-sandra-app', App);
