import emotionTheme from '../theme/emotionTheme';

type MyTheme = typeof emotionTheme;

declare module '@emotion/react' {
    export interface Theme extends MyTheme {}
}
