import source from './source.json';

export type LocalizeKey = keyof typeof source;

const localize = (key: LocalizeKey) => source[key];

export default localize;
