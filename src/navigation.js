
import '@brightspace-ui/core/components/colors/colors.js';
import 'd2l-navigation/d2l-navigation.js';
import 'd2l-navigation/d2l-navigation-link-image.js';
import 'd2l-navigation/d2l-navigation-main-header.js';
import 'd2l-navigation/d2l-navigation-main-footer.js';
import 'd2l-navigation/d2l-navigation-notification-icon.js';
import 'd2l-navigation/d2l-navigation-separator.js';
import { LitElement, html, css } from 'lit-element';
import { bodySmallStyles } from '@brightspace-ui/core/components/typography/styles.js';

export class Navigation extends LitElement {

	static get properties() {
		return {
			_showOrgTabs: { type: Boolean, attribute: false }
		}
	}

	static get styles() {
		return [bodySmallStyles, css`
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
				font-weight: normal;
				margin: 0;
			}
			.d2l-consortium-tab-box {
				display: flex;
				flex-wrap: nowrap;
				max-height: 0;
				overflow-x: unset;
				overflow-y: hidden;
			}
			.d2l-consortium-tab-growIn {
				max-height: 1.5rem;
				transform-origin: top;
				transition: max-height 500ms ease-in;
			}
			.d2l-consortium-tab-showTabs {
				max-height: 1.5rem;
			}
			.d2l-tab-container {
				border: 1px solid rgba(255, 255, 255, .30);
				border-radius: 6px 6px 0 0;
				border-bottom: none;
				display: inline-block;
				margin: 4px 0 0 -1px;
				position: relative;
			}
			.d2l-tab-container:first-child {
				margin-left: 0;
				margin-right: 0;
			}
			.d2l-tab-container:hover {
				border-color: rgba(255, 255, 255, .60);
				border-bottom: none;
			}
			.d2l-tab-container[selected] {
				border-color: rgba(0, 0, 0, .42);
				border-bottom: none;
				z-index: 1;
			}
			.d2l-consortium-tab {
				background-color: rgba(0, 0, 0, .54);
				border-bottom: none;
				border-radius: 5px 5px 0 0;
				display: block;
				max-width: 8.5rem;
				outline: none;
				padding: 0 0.6rem;
			}
			@media (max-width: 767px) {
				.d2l-consortium-tab {
					padding: 0 0.5rem;
				}
			}
			.d2l-consortium-tab:hover {
				background-color: rgba(0, 0, 0, .70);
			}
			.d2l-consortium-tab:focus {
				box-shadow: inset 0 0 0 2px rgba(0, 0, 0, .54),
							inset 0 0 0 2px var(--d2l-color-celestine),
							inset 0 0 0 4px #ffffff;
			}
			[selected] .d2l-consortium-tab {
				background-color: white;
			}
			.d2l-consortium-tab-content {
				color: #ffffff;
				cursor: pointer;
				display: inline-block;
				line-height: 1.25rem;
				max-width: 100%;
				overflow: hidden;
				text-decoration: none;
				text-overflow: ellipsis;
				white-space: nowrap;
				word-break: break-all;
				vertical-align: middle;
			}
			.d2l-consortium-tab-content:focus {
				outline: none;
			}
			[selected] .d2l-consortium-tab-content {
				color: var(--d2l-color-ferrite);
				cursor: default;
			}
			d2l-navigation-notification-icon {
				pointer-events: none;
				right: -1px;
				top: -1px;
				width: auto;
			}
		`];
	}

	constructor() {
		super();
		this._showOrgTabs = false;

		setTimeout(() => {
			this._showOrgTabs = true;
		}, 500);
	  }

	render() {
		return html`
			<d2l-navigation>
				<div slot="navigation-band" class="d2l-consortium-tab-box${this._showOrgTabs ? ' d2l-consortium-tab-growIn' : ''}" role="navigation" aria-label="Other Accounts">
					<div class="d2l-tab-container" selected>
						<a class="d2l-consortium-tab" aria-label="Farewell Sandra"><div class="d2l-consortium-tab-content d2l-body-small" tabindex="-1">Farewell Sandra!</div></a>
						<d2l-navigation-notification-icon hidden thin-border></d2l-navigation-notification-icon>
					</div>
					<div class="d2l-tab-container">
						<a class="d2l-consortium-tab" href="https://www.d2l.com/careers/" aria-label="Welcome Back Sandra" tabindex="0"><div class="d2l-consortium-tab-content d2l-body-small" tabindex="-1">Welcome Back Sandra!</div></a>
						<d2l-navigation-notification-icon thin-border></d2l-navigation-notification-icon>
					</div>
				</div>
				<d2l-navigation-main-header>
					<div slot="left" class="left-wrapper">
						<d2l-navigation-link-image src="assets/gaudi.png" text="Gaudi" slim></d2l-navigation-link-image>
						<d2l-navigation-separator></d2l-navigation-separator>
						<h1 class="course-name">Farewell Sandra!</h1>
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

}

customElements.define('goodbye-sandra-nav', Navigation);
