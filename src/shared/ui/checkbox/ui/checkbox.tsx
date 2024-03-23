import { type FC, useId } from 'react';

import type { CheckBoxProps } from './checkbox.type';

import styles from './checkbox.module.scss';

export const Checkbox: FC<CheckBoxProps> = ({ error, ...props }) => {
    const elementId = useId();

    return (
        <section>
            <input
                className={styles.input}
                id={elementId}
                type='checkbox'
                {...props}
            />
            <label
                className={styles.checkboxLabel}
                htmlFor={elementId}
            >
                Sort by Name
            </label>
            {error && <span className={styles.error}>This field is required</span>}
        </section>
    );
};
