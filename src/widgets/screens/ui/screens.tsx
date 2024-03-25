import type { FC } from 'react';

import { screenStore } from '$features/screen-switcher';
import { SortElement } from '$features/sort-element';

export const Screens: FC = () => {
    const { screenId } = screenStore();

    if (screenId === '2') return <SortElement />;

    return 'test';
};
