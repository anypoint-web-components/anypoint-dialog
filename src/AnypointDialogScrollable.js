import { html, LitElement, css } from 'lit-element';

export class AnypointDialogScrollable extends LitElement {

  // eslint-disable-next-line class-methods-use-this
  get styles() {
    return [
      css`
      :host {
        display: block;
        position: relative;
      }

      .scrollable {
        overflow: auto;
        padding: 0 24px;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }
      `
    ];
  }

  static get properties() {
    return {
      /**
       * Parent element to this element.
       */
      dialogElement: { type: Object }
    };
  }

  /**
   * Returns the scrolling element.
   */
  get scrollTarget() {
    return this.shadowRoot.querySelector('.scrollable');
  }

  firstUpdated() {
    this._ensureTarget();
    // dialog styles has this style definition
    this.classList.add('no-padding');
  }

  _ensureTarget() {
    const node = this.dialogElement || this.parentElement;
    if (node) {
      node.sizingTarget = this.scrollTarget;
    }
  }

  updateScrollState() {
    this._toggleClass('is-scrolled', this.scrollTarget.scrollTop > 0);
    this._toggleClass(
        'can-scroll',
        this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight);
    this._toggleClass(
        'scrolled-to-bottom',
        this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >=
            this.scrollTarget.scrollHeight);
  }

  _toggleClass(klas, add) {
    if (add) {
      this.classList.add(klas);
    } else {
      this.classList.remove(klas);
    }
  }

  render() {
    return html`
      <styles>${this.styles}</styles>
      <div class="scrollable" @scroll="${this.updateScrollState}">
        <slot></slot>
      </div>
    `;
  }
}
