import { type FC, useId } from 'react';

import type { InputProps } from './input.type';

import styles from './input.module.scss';

export const Input: FC<InputProps> = ({ error, ...props }) => {
    const elementId = useId();

    return (
        <section>
            <label
                className={styles.label}
                htmlFor={elementId}
            >
                Elements per Row:
            </label>
            <input
                className={styles.input}
                id={elementId}
                {...props}
            />
            {error && <span className={styles.error}>This field is required</span>}
        </section>
    );
};
