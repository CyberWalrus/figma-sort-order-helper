import type { InputHTMLAttributes, ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: FieldError;
    title?: ReactNode;
    wrapperClassName?: string;
};
