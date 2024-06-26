import type { InputHTMLAttributes, ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

export type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: FieldError;
    title?: ReactNode;
    wrapperClassName?: string;
};
