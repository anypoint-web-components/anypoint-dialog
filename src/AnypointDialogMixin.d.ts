import { ArcOverlayMixinConstructor } from '@advanced-rest-client/arc-overlay-mixin/src/ArcOverlayMixin';

declare function AnypointDialogMixin<T extends new (...args: any[]) => {}>(base: T): T & ArcOverlayMixinConstructor & AnypointDialogMixinConstructor;
interface AnypointDialogMixinConstructor {
  new(...args: any[]): AnypointDialogMixin;
}
interface AnypointDialogMixin {
  /**
   * If `modal` is true, this implies `nocancelonoutsideclick`,
   * `nocancelonesckey` and `withbackdrop`.
   */
  modal?: boolean;

  connectedCallback(): void;

  disconnectedCallback(): void;

  _updateClosingReasonConfirmed(confirmed: boolean): void;

  _isTargetClosingReason(target: Node): boolean;

  _clickHandler(e: PointerEvent): void;

  _modalChanged(modal: boolean): void;
}
export {AnypointDialogMixinConstructor};
export {AnypointDialogMixin};
