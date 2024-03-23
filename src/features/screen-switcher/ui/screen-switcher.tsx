import type { FC } from 'react';

import { SCREENS } from '../model/constants';
import { Item } from './item';

import styles from './screen-switcher.module.scss';

export const ScreenSwitcher: FC = () => (
    <section className={styles.sliderContainer}>
        {SCREENS.map((item) => (
            <Item
                key={item.id}
                {...item}
            />
        ))}
    </section>
);
