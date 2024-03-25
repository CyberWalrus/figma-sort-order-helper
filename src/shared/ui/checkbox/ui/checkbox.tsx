import { type FC, useId } from 'react';
import { clsx } from 'clsx';

import type { CheckBoxProps } from './checkbox.type';

import styles from './checkbox.module.scss';

export const Checkbox: FC<CheckBoxProps> = ({ error, wrapperClassName, title, ...props }) => {
    const elementId = useId();

    return (
        <section className={clsx(styles.checkboxContainer, wrapperClassName)}>
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
                {title}
            </label>
            {error && error.message && <span className={styles.error}>{error.message}</span>}
        </section>
    );
};
