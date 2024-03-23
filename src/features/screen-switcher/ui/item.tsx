import type { FC } from 'react';

import { screenStore } from '../model/store';
import type { ItemProps } from './item.type';

export const Item: FC<ItemProps> = ({ text, id }) => {
    const { screenId, selectScreen } = screenStore();
    const handleClick = () => {
        selectScreen(id);
    };

    return <article onClick={handleClick}>{text}</article>;
};
