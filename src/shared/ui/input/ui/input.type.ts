import type { InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: FieldError;
};
