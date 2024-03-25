import type { FormSortElementSchema } from '$features/sort-element';

import { sortElement } from './lib/sort-element';
import { updateElements } from './lib/update-elements';

type Msg =
    | { options: FormSortElementSchema; type: 'sort-element' }
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
    if (msg.type === 'sort-element') sortElement(msg.options);
    if (msg.type === 'update-elements') updateElements();
};
