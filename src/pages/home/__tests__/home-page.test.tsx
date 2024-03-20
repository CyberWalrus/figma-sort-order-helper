import { render } from '@testing-library/react';

import { HomePage } from '../ui/home-page';

describe('HomePage', () => {
    it('HomePage', () => {
        const { baseElement } = render(<HomePage />);

        expect(baseElement).toBeInTheDocument();
    });
});
