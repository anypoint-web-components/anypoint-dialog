import { html, LitElement } from 'lit-element';
import { AnypointDialogMixin } from './AnypointDialogMixin.js';
import dialogStyles from './AnypointDialogStyles.js';

export class AnypointDialog extends AnypointDialogMixin(LitElement) {

  // eslint-disable-next-line class-methods-use-this
  get styles() {
    return [
      dialogStyles,
    ];
  }

  static get properties() {
    return {
      /** 
       * Enables compatibility theme for Anypoint
       */
      compatibility: { type: Boolean, reflect: true, }
    };
  }

  render() {
    return html`
      <style>${this.styles}</style>
      <slot></slot>
    `;
  }
}
