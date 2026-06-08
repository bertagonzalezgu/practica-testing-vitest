import { describe, test, expect } from 'vitest';
import { divide, multiply, sum } from './calculator';
import { subtract } from './calculator';

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

describe('calculator', () => {
    test('substract should return the result of substraction of two numbers', () => {
        // Given
        const number1 = 10;
        const number2 = 5;

        // When
        const result = subtract(number1, number2);

        // Then
        expect(result).toBe(5);
    });
});

describe('calculator', () => {
    test('multiply should return the result of multiplication of two numbers', () => {
        // Given
        const number1 = 7;
        const number2 = 7;

        // When
        const result = multiply(number1, number2);

        // Then
        expect(result).toBe(49);
    });
});

describe('calculator', () => {
    test('divide should return the result of dividation of two numbers', () => {
        // Given
        const number1 = 14;
        const number2 = 2;

        // When
        const result = divide(number1, number2);

        // Then
        expect(result).toBe(7);
    });
});