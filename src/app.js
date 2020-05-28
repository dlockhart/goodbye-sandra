import './announcements-widget.js';
import './calendar-widget.js';
import './my-courses-widget.js';
import './picture-library-widget.js';
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
					"col1 col2";
			}
			@media (max-width: 850px) {
				.homepage {
					grid-template-areas:
					"courses courses"
					"col1 col1"
					"col2 col2";
				}
			}
			@media (max-width: 767px) {
				.page-padding {
					padding: 0 15px;
				}
			}
			goodbye-sandra-my-courses-widget {
				grid-area: courses;
			}
			.col1 {
				grid-area: col1;
			}
			.col2 {
				grid-area: col2;
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
						<div class="col1">
							<goodbye-sandra-announcements-widget></goodbye-sandra-announcements-widget>
						</div>
						<div class="col2">
							<goodbye-sandra-calendar-widget></goodbye-sandra-calendar-widget>
							<goodbye-sandra-picture-library-widget></goodbye-sandra-picture-library-widget>
						</div>
					</div>
				</div>
			</main>
		`;
	}

}

customElements.define('goodbye-sandra-app', App);
