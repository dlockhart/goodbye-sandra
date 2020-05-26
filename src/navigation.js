
import '@brightspace-ui/core/components/colors/colors.js';
import 'd2l-navigation/d2l-navigation.js';
import 'd2l-navigation/d2l-navigation-link-image.js';
import 'd2l-navigation/d2l-navigation-main-header.js';
import 'd2l-navigation/d2l-navigation-main-footer.js';
import 'd2l-navigation/d2l-navigation-separator.js';
import { LitElement, html, css } from 'lit-element';
import { navigator } from 'lit-element-router';

export class Navigation extends navigator(LitElement) {

	static get styles() {
		return css`
			:host {
				display: block;
			}
			.left-wrapper {
				align-items: center;
				display: flex;
				flex: 0 1 auto;
				height: 100%;
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
						<d2l-navigation-link-image src="assets/gaudi.png" text="Gaudi" href="/" @click="${this._handleLogoClick}" slim></d2l-navigation-link-image>
						<d2l-navigation-separator></d2l-navigation-separator>
						<div class="course-name">Farewell Sandra!</div>
					</div>
					<div slot="right">
						<d2l-navigation-link-image src="assets/user-image-set.png" text="Sandra Earl" slim></d2l-navigation-link-image><span>Sandra Earl</span>
					</div>
				</d2l-navigation-main-header>
				<d2l-navigation-main-footer>
					<div slot="main">Nav Footer</div>
				</d2l-navigation-main-footer>
			</d2l-navigation>
		`;
	}

	_handleLogoClick(e) {
		e.preventDefault();
		this.navigate('/');
	}

}

customElements.define('goodbye-sandra-nav', Navigation);
