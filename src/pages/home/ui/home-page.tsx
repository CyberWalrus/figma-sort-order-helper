import type { FC } from 'react';

import { Counter } from '$widgets/counter';

import styles from './home-page.module.scss';

export const HomePage: FC = () => (
    <div className={styles.container}>
        <Counter />
    </div>
);
