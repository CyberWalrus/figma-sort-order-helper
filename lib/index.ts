import type { FormSortElementSchema } from '$features/sort-element';

import { sortElement } from './lib/sort-element';

type Msg = { options: FormSortElementSchema; type: 'sort-element' };

figma.showUI(__html__, { height: 500, width: 400 });

figma.ui.onmessage = (msg: Msg) => {
    if (msg.type === 'sort-element') sortElement(msg.options);
};
