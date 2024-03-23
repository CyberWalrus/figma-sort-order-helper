import { createStore } from '$shared/lib/create-store';

import type { ScreenState } from './store.type';

export const screenStore = createStore<ScreenState>(
    (set) => ({
        screenId: '1',
        selectScreen: (value) => set({ screenId: value }),
    }),
    'Screen',
);
