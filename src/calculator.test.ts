import { describe, test, expect } from 'vitest';
import { sum } from './calculator';

describe('calculator', () => {
    test('sum should return the result of adding two numbers', () => {
        // Given
        const number1 = 2;
        const number2 = 3;

        // When
        const result = sum(number1, number2);

        // Then
        expect(result).toBe(5);
    });
});