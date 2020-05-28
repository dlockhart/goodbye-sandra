import './announcements-widget.js';
import './calendar-widget.js';
import './my-courses-widget.js';
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
			.page-padding {
				padding: 10px 30px;
			}
			.homepage {
				column-gap: 4%;
				display: grid;
				grid-template-columns: 58% 38%;
				grid-template-rows: auto auto;
				grid-template-areas:
					"courses courses"
					"announcements calendar";
			}
			@media (max-width: 850px) {
				.homepage {
					grid-template-areas:
					"courses courses"
					"announcements announcements"
					"calendar calendar";
				}
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

	render() {
		return html`
			<header>
				<goodbye-sandra-nav></goodbye-sandra-nav>
			</header>
			<main>
				<div class="page-padding">
					<div class="homepage">
						<goodbye-sandra-my-courses-widget></goodbye-sandra-my-courses-widget>
						<goodbye-sandra-announcements-widget></goodbye-sandra-announcements-widget>
						<goodbye-sandra-calendar-widget></goodbye-sandra-calendar-widget>
					</div>
				</div>
			</main>
		`;
	}

}

customElements.define('goodbye-sandra-app', App);
