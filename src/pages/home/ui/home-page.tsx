import type { FC } from 'react';

import { Screens } from '$widgets/screens';
import { ScreenSwitcher } from '$features/screen-switcher';

import styles from './home-page.module.scss';

export const HomePage: FC = () => (
    <div className={styles.container}>
        <ScreenSwitcher />
        <Screens />
    </div>
);
