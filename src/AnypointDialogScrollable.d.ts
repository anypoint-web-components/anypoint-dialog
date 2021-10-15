import { TemplateResult, CSSResult, LitElement } from 'lit-element';
import { AnypointDialog } from './AnypointDialog';

/**
 * @deprecated Migrate to @anypoint-web-components/awc
 */
export declare class AnypointDialogScrollable extends LitElement {
  static readonly styles: CSSResult;

  /**
   * Parent element to this element.
   */
  dialogElement: AnypointDialog;

  /**
   * Returns the scrolling element.
   */
  readonly scrollTarget: HTMLElement;

  firstUpdated(): void;

  _ensureTarget(): void;

  updateScrollState(): void;

  _toggleClass(klas: string, add: boolean): void;

  render(): TemplateResult;
}
