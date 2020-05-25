
import '@brightspace-ui/core/components/colors/colors.js';
import 'd2l-navigation/d2l-navigation.js';
import 'd2l-navigation/d2l-navigation-link-image.js';
import 'd2l-navigation/d2l-navigation-main-header.js';
import 'd2l-navigation/d2l-navigation-main-footer.js';
import 'd2l-navigation/d2l-navigation-separator.js';
import { LitElement, html, css } from 'lit-element';

export class Navigation extends LitElement {

	static get styles() {
		return css`
			:host {
				display: block;
			}
			.left-wrapper {
				align-items: center;
				display: flex;
				flex: 0 1 auto;
			}
			.course-name {
				color: var(--d2l-color-ferrite);
				font-size: 1.25rem;
			}
		`;
	}

	render() {
		return html`
			<d2l-navigation>
				<d2l-navigation-main-header>
					<div slot="left" class="left-wrapper">
						<d2l-navigation-link-image src="assets/gaudi.png" text="Gaudi" slim></d2l-navigation-link-image>
						<d2l-navigation-separator></d2l-navigation-separator>
						<div class="course-name">Farewell Sandra!</div>
					</div>
					<div slot="right">Nav Header Right</div>
				</d2l-navigation-main-header>
				<d2l-navigation-main-footer>
					<div slot="main">Nav Footer</div>
				</d2l-navigation-main-footer>
			</d2l-navigation>
		`;
	}

}

customElements.define('goodbye-sandra-nav', Navigation);
