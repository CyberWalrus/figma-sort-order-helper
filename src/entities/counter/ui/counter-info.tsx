import { useCounterStore } from '../model/store';

export const CounterInfo = () => {
    const counter = useCounterStore(({ value }) => value);

    return (
        <div
            color='teal'
            data-test-id='counter-value'
        >
            {counter}
        </div>
    );
};
