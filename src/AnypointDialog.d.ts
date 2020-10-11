import { TemplateResult, CSSResult, LitElement } from 'lit-element';
import { AnypointDialogMixin } from './AnypointDialogMixin';

export declare class AnypointDialog {
  static readonly styles: CSSResult;
  /** 
   * Enables compatibility theme for Anypoint
   * @attribute
   */
  compatibility: boolean;

  render(): TemplateResult;
}

export declare interface AnypointDialog extends AnypointDialogMixin, LitElement {
}
