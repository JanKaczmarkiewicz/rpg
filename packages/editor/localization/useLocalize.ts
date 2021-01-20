import source from './source.json';

export type LocalizeKey = keyof typeof source;

export const useLocalize = () => (key: LocalizeKey) => source[key];
