/* eslint-disable @typescript-eslint/no-misused-promises */
import { type FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { Checkbox } from '$shared/ui/checkbox';
import { Input } from '$shared/ui/input';

import type { FormValues } from './sort-elements.type';

import styles from './sort-elements.module.scss';

export const SortElements: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const handleSubmitForm: SubmitHandler<FormValues> = (data) => {
        console.log(data);

        // Здесь обрабатываем данные формы, отправляем на сервер или в state-management
    };

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit(handleSubmitForm)}
        >
            <Input
                error={errors.elementsPerRow}
                type='number'
                {...register('elementsPerRow', { min: 1, required: true })}
            />
            <Input
                error={errors.horizontalPadding}
                type='number'
                {...register('horizontalPadding', { min: 0, required: true })}
            />
            <Input
                error={errors.verticalPadding}
                type='number'
                {...register('verticalPadding', { min: 0, required: true })}
            />
            <Checkbox
                error={errors.sortName}
                {...register('sortName')}
            />

            <button
                className={styles.button}
                type='submit'
            >
                Submit
            </button>
        </form>
    );
};
