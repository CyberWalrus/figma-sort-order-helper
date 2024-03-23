export const SCREEN_LIST = {
    '1': {
        id: '1',
        text: 'Fast Select',
    },
    '2': {
        id: '2',
        text: 'Sort Elements',
    },
    '3': {
        id: '3',
        text: 'Create Section',
    },
    '4': {
        id: '4',
        text: 'Update Elements',
    },
} as const;

export const SCREENS = Object.values(SCREEN_LIST);
