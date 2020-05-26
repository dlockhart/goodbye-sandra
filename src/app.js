import './announcements-widget.js';
import './calendar-widget.js';
import './my-courses-widget.js';
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
			.page-padding {
				padding: 10px 30px;
			}
			.homepage {
				column-gap: 60px;
				display: grid;
				grid-template-columns: 50% 50%;
				grid-template-rows: auto auto;
				grid-template-areas:
					"courses courses"
					"announcements calendar";
			}
			goodbye-sandra-my-courses-widget {
				grid-area: courses;
			}
			goodbye-sandra-announcements-widget {
				grid-area: announcements;
			}
			goodbye-sandra-calendar-widget {
				grid-area: calendar;
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
			<header>
				<goodbye-sandra-nav></goodbye-sandra-nav>
			</header>
			<main>
				<div class="page-padding">
					<div class="homepage">
						<goodbye-sandra-my-courses-widget active-route="${this.route}" active-course="${this.params.id}"></goodbye-sandra-my-courses-widget>
						<goodbye-sandra-announcements-widget></goodbye-sandra-announcements-widget>
						<goodbye-sandra-calendar-widget></goodbye-sandra-calendar-widget>
					</div>
				</div>
			</main>
		`;
	}

}

customElements.define('goodbye-sandra-app', App);
