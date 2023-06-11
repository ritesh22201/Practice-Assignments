import {render, screen, fireEvent} from '@testing-library/react';
import Counter from '../Components/Counter';

describe('test files for counter', () => {    
    it('Should render the app', () => {
        render(<Counter/>);
    })

    it('Should check the data-testid the ', () => {
        render(<Counter/>);
        const heading = screen.getByTestId('counter');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Counter : 0')
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

    // it('Should decrement the counter value', () => {
    //     render(<Counter/>)
        
    //     const heading = screen.getByTestId('counter');
    //     expect(heading).toHaveTextContent('Counter : 0')
    //     expect(heading).toHaveTextContent('Counter : -1')
    // })
})