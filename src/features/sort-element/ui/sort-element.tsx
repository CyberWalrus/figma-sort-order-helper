/* eslint-disable @typescript-eslint/no-misused-promises */
import { type FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Checkbox } from '$shared/ui/checkbox';
import { Input } from '$shared/ui/input';

import type { FormSchema } from '../lib/schemas';
import { FormSortElementSchema } from '../lib/schemas';

import styles from './sort-element.module.scss';

export const SortElement: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchema>({
        defaultValues: FormSortElementSchema.parse({}),
        resolver: zodResolver(FormSortElementSchema),
    });

    const handleSubmitForm: SubmitHandler<FormSchema> = (data) => {
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
                title='Element Per Row'
                type='number'
                {...register('elementsPerRow', { valueAsNumber: true })}
            />
            <Input
                error={errors.horizontalPadding}
                title='Horizontal Padding'
                type='number'
                {...register('horizontalPadding', { valueAsNumber: true })}
            />
            <Input
                error={errors.verticalPadding}
                title='Vertical Padding'
                type='number'
                {...register('verticalPadding', { valueAsNumber: true })}
            />
            <Checkbox
                error={errors.isSortByName}
                title='Sort By Name'
                {...register('isSortByName')}
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
