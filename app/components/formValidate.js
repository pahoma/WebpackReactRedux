'use strict'

const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minValue = min => value => value && value < min ? `Must be at least ${min}` : undefined;
const inRange = (min,max) => value => value && (value.length < min || value.length > max) ?
    `Must be in range of ${min} to ${max} characters` : undefined;

export default {
    maxLength: maxLength,
    minLength: minLength,
    minValue: minValue,
    inRange: inRange,
    required: (value) => value ? undefined : 'Required',
    number: value => value && isNaN(Number(value)) ? 'Must be a number' : undefined,
    email: value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined
}
