
import './widget.js';
import { LitElement, html, css } from 'lit-element';
import { bodySmallStyles, heading4Styles } from '@brightspace-ui/core/components/typography/styles.js';
import '@brightspace-ui/core/components/colors/colors.js';

export class AnnouncementsWidget extends LitElement {

	static get styles() {
		return [bodySmallStyles, heading4Styles, css`
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

			img {
				border-radius: 6px;
				height: auto;
				max-width: 100%;
			}
		`];
	}

	render() {
		return html`
			<goodbye-sandra-widget name="Announcements">
				<h4 class="d2l-heading-4">UXP introduces Flannel Fridays</h4>
				<p class="d2l-body-small">Feb 24, 2012</p>
				<img src="../assets/announcements/flannel-friday.jpg" width="640" height="403">
				<p>Flannel Fridays are now a thing! We will DEFINITELY do this every Friday from now on, this is just the beginning! Cough cough.</p>
				<hr>
				<h4 class="d2l-heading-4">D2L Earns More Love from NFB</h4>
				<p class="d2l-body-small">DEC 16, 2011</p>
				<img src="../assets/announcements/nfb.jpg" width="640" height="427">
				<p>Desire2Learn Incorporated receives a national award once again in recognition of their continuous commitment to accessibility for visually impaired users based on its latest release of Desire2Learn® Learning Environment.</p>
				<hr>
				<h4 class="d2l-heading-4">Local employers boost winning ways with staff</h4>
				<p class="d2l-body-small">Nov 6, 2010</p>
				<img src="../assets/announcements/record.jpg" width="640" height="396">
				<p>After posing for 1000 different versions of this photo, only Sandra looked like her face muscles weren't permanently frozen in a twitchy smile.</p>
			</goodbye-sandra-widget>
		`;
	}

}

customElements.define('goodbye-sandra-announcements-widget', AnnouncementsWidget);
