import { html, LitElement } from 'lit-element';
import { AnypointDialogMixin } from './AnypointDialogMixin.js';
import dialogStyles from './AnypointDialogStyles.js';

export class AnypointDialog extends AnypointDialogMixin(LitElement) {
  static get styles() {
    return [
      dialogStyles,
    ];
  }

  render() {
    return html`<slot></slot>`;
  }
}
