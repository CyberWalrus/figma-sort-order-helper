import type { FC } from 'react';

import { SortElements } from '$features/sort-elements';

import styles from './home-page.module.scss';

export const HomePage: FC = () => (
    <div className={styles.container}>
        <SortElements />
    </div>
);
