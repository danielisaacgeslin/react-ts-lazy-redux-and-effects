import { Action, Effect } from './types';

export type WrappedEffect = (action: Action) => void;

export class EffectRegistry {
  private emitChange: any = null;
  /** actionType and the original effects are kept there in case we want to avoid duplicating effects in the future */
  private effects: { actionType: string; effect: Effect, wrapped: WrappedEffect }[] = [];

  public getEffects(): WrappedEffect[] {
    return this.effects.map(effect => effect.wrapped);
  }

  public register(actionType: string, effect: Effect): void {
    this.effects = this.effects.concat([{
      actionType,
      effect,
      wrapped: this.wrapEffect(actionType, effect)
    }]);
    if (this.emitChange) this.emitChange(this.getEffects());
  }

  private wrapEffect(actionType: string, effect: Effect): WrappedEffect {
    return (action: Action): void => {
      if (action.type === actionType) effect(action);
    };
  }
}

export const effectRegistry: EffectRegistry = new EffectRegistry();
