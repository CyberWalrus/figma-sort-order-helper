import { forwardRef, useId } from 'react';

import type { InputProps } from './input.type';

import styles from './input.module.scss';

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, wrapperClassName, title, ...props }, $input) => {
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
                    ref={$input}
                    className={styles.input}
                    id={elementId}
                    {...props}
                />
                {error && error.message && <span className={styles.error}>{error.message}</span>}
            </section>
        );
    },
);
