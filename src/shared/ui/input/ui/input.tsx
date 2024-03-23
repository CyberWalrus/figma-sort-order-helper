import { type FC, useId } from 'react';

import type { InputProps } from './input.type';

import styles from './input.module.scss';

export const Input: FC<InputProps> = ({ error, wrapperClassName, title, errorMessage, ...props }) => {
    const elementId = useId();

    return (
        <section className={wrapperClassName}>
            <label
                className={styles.label}
                htmlFor={elementId}
            >
                {title}
            </label>
            <input
                className={styles.input}
                id={elementId}
                {...props}
            />
            {error && errorMessage && <span className={styles.error}>{errorMessage}</span>}
        </section>
    );
};
