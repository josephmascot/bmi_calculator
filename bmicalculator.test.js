const { bmi_cal } = require('./bmicalculator');

test.each([
    [100, 5, 4],
    [72, 6, 2]
])(
    'Your Weight is %i and your height is %i hence your BMI is %i', (weight, height, expected) => {
        expect(bmi_cal(weight, height)).toBe(expected);
    },
);