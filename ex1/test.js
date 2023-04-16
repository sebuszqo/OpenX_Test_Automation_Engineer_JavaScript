const lengthOfLongestSubstring = require('./script');

describe('Function lengthOfLongestSubstring: returns correct length of longest substring', () => {
    test('returns 0 for empty string', () => {
        expect(lengthOfLongestSubstring('')).toBe(0);
    });

    test('returns length of longest substring for string without repeated characters', () => {
        expect(lengthOfLongestSubstring('openx')).toBe(5);
    });

    test('returns 1 for string of length 1', () => {
        expect(lengthOfLongestSubstring('o')).toBe(1);
    });

    test('returns length of string for string with unique characters', () => {
        expect(lengthOfLongestSubstring('abcsdefr')).toBe(8);
    });

    test('returns length of longest substring for string with repeated characters', () => {
        expect(lengthOfLongestSubstring('abcabcabc')).toBe(3);
    });

    test('returns length of longest substring for string with all repeated characters', () => {
        expect(lengthOfLongestSubstring('bbbbbbbb')).toBe(1);
    });

    test('returns length of longest substring for string with special characters', () => {
        expect(lengthOfLongestSubstring('a!bc&De^f')).toBe(9);
    });

    test('returns length of longest substring for string with repeated characters at the beginning', () => {
        expect(lengthOfLongestSubstring('sssvvv')).toBe(2);
    });

    test('returns length of longest substring for string with repeated characters at the end', () => {
        expect(lengthOfLongestSubstring('bcdeee')).toBe(4);
    });

    test('returns length of longest substring for string with numbers', () => {
        expect(lengthOfLongestSubstring('1 2 3 4 5 6 7 8 9')).toBe(3);
    });

    test('returns length of longest substring for string with uppercase and lowercase letters', () => {
        expect(lengthOfLongestSubstring('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')).toBe(11);
    });
});

describe('Function lengthOfLongestSubstring: throws an error if input is not a string', () => {
    test('throws an error if input is not a string', () => {
        expect(() => lengthOfLongestSubstring(null)).toThrow('Input must be a string');
    });
    test('throws an error if input is not a string', () => {
        expect(() => lengthOfLongestSubstring(undefined)).toThrow('Input must be a string');
    });
    test('throws an error if input is not a string', () => {
        expect(() => lengthOfLongestSubstring(123)).toThrow('Input must be a string');
    });
    test('throws an error if input is not a string', () => {
        expect(() => lengthOfLongestSubstring({})).toThrow('Input must be a string');
    });
});