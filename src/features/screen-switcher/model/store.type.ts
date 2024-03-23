import type { SCREEN_LIST } from './constants';

export type ScreenId = keyof typeof SCREEN_LIST;

export type ScreenState = {
    screenId: ScreenId;
    selectScreen: (value: ScreenId) => void;
};
