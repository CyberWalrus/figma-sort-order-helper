import { forwardRef, useId } from 'react';
import { clsx } from 'clsx';

import type { CheckBoxProps } from './checkbox.type';

import styles from './checkbox.module.scss';

export const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>(
    ({ wrapperClassName, title, error, ...props }, $input) => {
        const elementId = useId();

        return (
            <section className={clsx(styles.wrapper, wrapperClassName)}>
                <input
                    ref={$input}
                    id={elementId}
                    type='checkbox'
                    {...props}
                />
                <label
                    className={styles.label}
                    htmlFor={elementId}
                >
                    {title}
                </label>
                {error && error.message && <span className={styles.error}>{error.message}</span>}
            </section>
        );
    },
);
