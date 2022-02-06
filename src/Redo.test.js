import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Redo from './Redo';
import BasicData from './components/BasicData'

describe('Dummy Test', () => {
    it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
    });
});

describe('Redo', () => {
    test('renders redesigned app', () => {
        render(<Redo />);
        expect(screen.getByText('WeatherApp')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });
});

describe('BasicData', () => {
    test('renders fake props', () => {
        const data = {
            city: 'Perth',
            country: 'Australia',
            currentTemp: 30,
            minTemp: 10,
            maxTemp: 40,
            gradientPrompt: 'Sunny',
            weatherDescription: 'Clear',
            humidity: 35,
            windSpeed: 23,
            windDirection: 270,
            currentTime: 1202837,
            sunrise: 1828373,
            sunset: 1433993
        }

        render(<BasicData weatherData={data} />);
        screen.debug();

        expect(screen.getByText('Perth, Australia')).toBeInTheDocument();
        expect(screen.getByText(/30/)).toBeInTheDocument();
        expect(screen.getByText(/10/)).toBeInTheDocument();
        expect(screen.getByText(/40/)).toBeInTheDocument();
    })
})



