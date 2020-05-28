
import './widget.js';
import { LitElement, html, css } from 'lit-element';
import { bodySmallStyles, heading4Styles } from '@brightspace-ui/core/components/typography/styles.js';
import '@brightspace-ui/core/components/colors/colors.js';

export class AnnouncementsWidget extends LitElement {

	static get styles() {
		return css`
			:host {
				display: block;
			}

			.d2l-heading-4 {
				margin: .5rem 0 0 0;
			}

			hr {
				height:1px;
				border-width:0;
				background-color:var(--d2l-color-mica);
				margin: 1.5rem 0;
			}
		`;
	}

	render() {
		return html`
			<goodbye-sandra-widget name="Announcements">
				<h4 class="d2l-heading-4">UXP introduces Flannel Fridays</h4>
				<p class="d2l-body-small">Feb 24, 2012</p>
				<img src="../assets/announcements/flannel-friday.png" style="max-width:100%; border-radius:6px;"/>
				<p>Flannel Fridays are now a thing! We will DEFINITELY do this every Friday from now on, this is just the beginning! Cough cough.</p>
				<hr>
				<h4 class="d2l-heading-4">D2L Earns More Love from NFB</h4>
				<p class="d2l-body-small">DEC 16, 2011</p>
				<img src="../assets/announcements/nfb.png" style="max-width:100%; border-radius:6px;"/>
				<p>Desire2Learn Incorporated receives a national award once again in recognition of their continuous commitment to accessibility for visually impaired users based on its latest release of Desire2Learn® Learning Environment.</p>
			</goodbye-sandra-widget>
		`;
	}

}

customElements.define('goodbye-sandra-announcements-widget', AnnouncementsWidget);
