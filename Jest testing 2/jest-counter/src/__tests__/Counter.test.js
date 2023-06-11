import {render, screen, fireEvent} from '@testing-library/react';
import Counter from '../Components/Counter';

describe('test files for counter', () => {    
    it('should render without any error', () => {
        render(<Counter/>);
    })

    it('Should check the data-testid the ', () => {
        render(<Counter/>);
        const heading = screen.getByTestId('counter');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Counter : 0')
    })

    it('should have add and reduce buttons', () => {
        render(<Counter/>);
        let inc = screen.getByTestId('increment');
        const dec = screen.getByTestId('decrement');
        expect(inc).toBeInTheDocument();
        expect(dec).toBeInTheDocument();
    })

    it('Should increment the counter value', () => {
        render(<Counter/>)
        const increment = screen.getByTestId('increment');
        const decrement = screen.getByTestId('decrement');
        const heading = screen.getByTestId('counter');
        expect(heading).toHaveTextContent('Counter : 0')
        fireEvent.click(increment);
        expect(heading).toHaveTextContent('Counter : 1')
        fireEvent.click(increment);
        expect(heading).toHaveTextContent('Counter : 2');
        fireEvent.click(decrement);
        expect(heading).toHaveTextContent('Counter : 1');
    })

})