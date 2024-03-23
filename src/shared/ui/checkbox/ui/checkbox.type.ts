import type { InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

export type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: FieldError;
};
