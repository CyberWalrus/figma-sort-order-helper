import type { FormSortElementsSchema } from '$features/sort-elements';

import { createSection } from './lib/create-section';
import { sortElements } from './lib/sort-elements';
import { updateElements } from './lib/update-elements';

type Msg =
    | { options: FormSortElementsSchema; type: 'sort-elements' }
    | { type: 'update-elements' }
    | {
          options: {
              borderRadius: number;
              fillColor: string;
              padding: number;
              text: string;
          };
          type: 'create-section';
      };

figma.showUI(__html__, { height: 500, width: 400 });

figma.ui.onmessage = (msg: Msg) => {
    if (msg.type === 'sort-elements') sortElements(msg.options);
    if (msg.type === 'update-elements') updateElements();
    if (msg.type === 'create-section') createSection(msg.options);
};
