import type { FC } from 'react';

import { screenStore } from '$features/screen-switcher';
import { SortElements } from '$features/sort-elements';

export const Screens: FC = () => {
    const { screenId } = screenStore();

    if (screenId === '2') return <SortElements />;

    return 'test';
};
