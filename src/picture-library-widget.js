
import '@brightspace-ui/core/components/button/button-icon.js';
import '@brightspace-ui/core/components/colors/colors.js';
import '@brightspace-ui/core/components/dialog/dialog.js';
import './widget.js';
import { LitElement, html, css } from 'lit-element';
import { pictureLibraryPhotos } from './data.js';

let isShufled = false;
function shufflePhotos() {
	if (isShufled) return pictureLibraryPhotos;
	isShufled = true;
	for (let i = pictureLibraryPhotos.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[pictureLibraryPhotos[i], pictureLibraryPhotos[j]] = [pictureLibraryPhotos[j], pictureLibraryPhotos[i]];
	}
}

export class PictureLibraryWidget extends LitElement {

	static get properties() {
		return {
			position: { type: Number },
			_activePictureId: { type: String }
		}
	}

	static get styles() {
		return [css`
			:host {
				display: block;
			}
			img {
				height: auto;
				margin-top: 10px;
				max-width: 100%;
			}
			d2l-button-icon {
				margin-left: 5px;
			}
			figure {
				margin: 0;
			}
			figcaption {
				color: var(--d2l-color-galena);
				text-align: center;
			}
		`];
	}

	constructor() {
		super();
		this.position = 0;
	}

	render() {
		shufflePhotos();
		const prevIsDisabled = this.position === 0;
		const nextIsDisabled = this.position === pictureLibraryPhotos.length - 1;
		const picture = pictureLibraryPhotos[this.position];
		return html`
			<goodbye-sandra-widget name="Picture Library">
				<d2l-button-icon slot="title" icon="tier1:chevron-left" text="Previous" @click="${this._prev}" ?disabled="${prevIsDisabled}"></d2l-button-icon>
				<d2l-button-icon slot="title" icon="tier1:chevron-right" text="Next" @click="${this._next}" ?disabled="${nextIsDisabled}"></d2l-button-icon>
				<d2l-button-icon slot="title" icon="tier1:zoom-in" text="View" @click="${this._selectPicture}"></d2l-button-icon>
				<figure>
					<img src="assets/library/${picture.id}.jpg" alt="${picture.caption}" width="${picture.width}" height="${picture.height}">
					<figcaption>${picture.caption}</figcaption>
				</figure>
			</goodbye-sandra-widget>
			${this._getDialogView()}
		`;
	}

	_getDialogView() {
		
		const picture = pictureLibraryPhotos.find((c) => c.id === this._activePictureId);
		if (!picture) {
			return null;
		}
		
		return html`
			<d2l-dialog title-text="Picture Library" @d2l-dialog-close="${this._handleDialogClose}" opened width="860">
				<figure>
					<img src="assets/library/${picture.id}.jpg" alt="${picture.caption}" width="${picture.width}" height="${picture.height}" tabindex="-1">
					<figcaption>${picture.caption}</figcaption>
				</figure>
				<d2l-button slot="footer" data-dialog-action="done" primary>Done</d2l-button>
			</d2l-dialog>`;

	}

	_handleDialogClose() {
		this._activePictureId = '';
	}

	_next() {
		this.position++;
	}

	_prev() {
		this.position--;
	}

	_selectPicture() {
		this._activePictureId = pictureLibraryPhotos[this.position].id;
	}

}

customElements.define('goodbye-sandra-picture-library-widget', PictureLibraryWidget);
