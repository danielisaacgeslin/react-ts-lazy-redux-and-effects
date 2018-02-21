import { Reducer } from './types';

export class ReducerRegistry {
  private emitChange: any = null;
  private reducers: { [stateName: string]: Reducer<any> } = {};

  public getReducers(): { [stateName: string]: Reducer<any> } {
    return { ...this.reducers };
  }

  public register(stateName: string, reducer: Reducer<any>): void {
    this.reducers = { ...this.reducers, [stateName]: reducer };
    if (this.emitChange) this.emitChange(this.getReducers());
  }

  public setChangeListener(listener: Function): void {
    this.emitChange = listener;
  }
}

export const reducerRegistry: ReducerRegistry = new ReducerRegistry();
