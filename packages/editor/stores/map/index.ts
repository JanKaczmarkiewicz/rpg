import { createStore } from 'redux';

import { State } from "./types";
import mapGenerator from "../../components/mapGenerator";

const map = mapGenerator();

const reducer = (state: State = { map }, action) => state;

export const store = createStore(reducer);