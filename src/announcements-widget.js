
import './widget.js';
import { LitElement, html, css } from 'lit-element';
import { bodySmallStyles, heading3Styles } from '@brightspace-ui/core/components/typography/styles.js';
import '@brightspace-ui/core/components/colors/colors.js';
import '@brightspace-ui/core/components/link/link.js';

export class AnnouncementsWidget extends LitElement {

	static get styles() {
		return [bodySmallStyles, heading3Styles, css`
			:host {
				display: block;
			}

			.d2l-heading-3 {
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
				margin: 1rem 0 0 0;
			}
		`];
	}

	render() {
		return html`
			<goodbye-sandra-widget name="Announcements">
				<h3 class="d2l-heading-3">One of D2L's most beloved employees is leaving!</h3>
				<p class="d2l-body-small">Posted May 29, 2020</p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/JqzezRn3dRA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="margin-top: 10px;"></iframe>
				<p>You heard right folks.  Sandra Earl, long-time employee of D2L, has decided it's time to try something new.  She will be missed, and we wish her the best of luck!</p>
				<hr>
				<h3 class="d2l-heading-3">Announcing EOL for Internet Explorer Support and OpenDyslexic Font!</h3>
				<p class="d2l-body-small">Posted Jul 22, 2019</p>
				<p>We made two important EOL announcements recently!  Read about our decisions to EOL <d2l-link href="https://community.brightspace.com/s/article/Intent-to-End-of-Life-Notice-for-Internet-Explorer-Support">Internet Explorer Support</d2l-link> and the <d2l-link href="https://community.brightspace.com/s/article/Intent-to-End-of-Life-Notice-for-OpenDyslexic-Font-Option-in-Account-Settings">OpenDyslexic Font Option</d2l-link>. We have a long road ahead to get this done, but it will be worth it!</p>
				<hr>
				<h3 class="d2l-heading-3">Announcing GA of Daylight on Chrome!</h3>
				<p class="d2l-body-small">Posted Jan 24, 2017</p>
				<p>As you may have read in <d2l-link href="https://community.brightspace.com/s/article/Announcing-General-Availability-of-Daylight-on-Chrome">our announcement on Community</d2l-link>, Daylight is now GA in Chrome!  Great work team, this is a huge milestone after years of effort!</p>
				<hr>
				<h3 class="d2l-heading-3">UXP introduces Flannel Fridays</h3>
				<p class="d2l-body-small">Posted Feb 24, 2012</p>
				<img src="../assets/announcements/flannel-friday.jpg" width="640" height="403" alt="" loading="lazy">
				<p>Flannel Fridays are now a thing! We will DEFINITELY do this every Friday from now on, this is just the beginning! Cough cough.</p>
				<hr>
				<h3 class="d2l-heading-3">D2L Earns More Love from NFB</h3>
				<p class="d2l-body-small">Posted Dec 16, 2011</p>
				<img src="../assets/announcements/nfb.jpg" width="640" height="427" alt="" loading="lazy">
				<p>Desire2Learn Incorporated receives a national award once again in recognition of their continuous commitment to accessibility for visually impaired users based on its latest release of Desire2Learn® Learning Environment.</p>
				<hr>
				<h3 class="d2l-heading-3">Local employers boost winning ways with staff</h3>
				<p class="d2l-body-small">Posted Nov 6, 2010</p>
				<img src="../assets/announcements/record.jpg" width="640" height="396" alt="" loading="lazy">
				<p>Unfortunately after posing for 1000 different versions of this photo over an hour, the staff were left with severe face muscle damage, resulting in permanently twitchy smiles.</p>
				<hr>
				<h3 class="d2l-heading-3">Mystery drummer disappears suddenly</h3>
				<p class="d2l-body-small">Posted Dec 10, 2006</p>
				<img src="../assets/announcements/drums.jpg" width="640" height="477" alt="" loading="lazy">
				<p>An employee at a local company's holiday office party performed a surprise drum solo for her coworkers, much to the annoyance of the band who owned the equipment. Shortly following the performance she vanished, leaving only a trail of golden flakes.</p>
				<p>In other news, local LCBO stores are experiencing a shortage of Goldschläger.</p>
			</goodbye-sandra-widget>
		`;
	}

}

customElements.define('goodbye-sandra-announcements-widget', AnnouncementsWidget);
