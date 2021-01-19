import { setTileCollision } from './actions/setTileCollision';
import { config } from './reducer';

export type State = typeof config;
export type Action = ReturnType<typeof setTileCollision>;
export type Reducer = (state: State, action: Action) => State;
