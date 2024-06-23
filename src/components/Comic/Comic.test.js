import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Comic from './Comic';

jest.mock('../Rating', () => ({
    Rating: jest.fn(() => <div>Rating Component</div>)
}));

describe('Comic Component', () => {
    const mockComic = {
        num: 123,
        title: 'Mock Comic Title',
        img: 'https://example.com/mock-comic.png',
        alt: 'Mock Comic Alt Text',
        month: '06',
        day: '23',
        year: '2024',
        transcript: 'Mock Comic Transcript'
    };

    test('renders comic details', () => {
        render(<Comic comic={mockComic} />);
        
        expect(screen.getByText(`#${mockComic.num}`)).toBeInTheDocument();
        expect(screen.getByText(mockComic.title)).toBeInTheDocument();
        expect(screen.getByAltText(mockComic.alt)).toHaveAttribute('src', mockComic.img);
        expect(screen.getByText(`Date: ${mockComic.month}/${mockComic.day}/${mockComic.year}`)).toBeInTheDocument();
        expect(screen.getByText(`Transcript: ${mockComic.transcript}`)).toBeInTheDocument();
    });

    test('renders Rating component', () => {
        render(<Comic comic={mockComic} />);
        
        expect(screen.getByText('Rating Component')).toBeInTheDocument();
    });

    test('renders nothing if no comic is passed', () => {
        render(<Comic comic={null} />);
        const loadingSpinner = screen.getByTestId('loading-spinner');

        expect(loadingSpinner).toBeInTheDocument();
        expect(loadingSpinner.textContent).toBe('Loading...');
    });
});
