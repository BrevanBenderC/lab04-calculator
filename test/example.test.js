// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add_two, int, pyth, subt } from '../calculations.js';
import { add } from '../calculations';
import { mult } from '../calculations';

const test = QUnit.test;

test('test add_two function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add_two(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



test('add function', (expect) => {

    const input1 = 3;
    const input2 = 2;
    const expected = 5;

    const actual = add(input1, input2);
    expect.equal(actual, expected);
});

test('add(4,5) function', (expect) => {
    const input1 = 4;
    const input2 = 5;
    const expected = 9;
    const actual = add(input1, input2);
    expect.equal(actual, expected);
});
test('subt function', (expect) => {
    const input1 = 3;
    const input2 = 1;
    const expected = 2;
    const actual = subt(input1, input2);
    expect.equal(actual, expected)
})
test('mult function' , (expect) =>{
    const input1 = 3;
    const input2 = 2;
    const expected = 6;
    const actual = mult(input1, input2);
    expected.equal(actual, expected)
})
test('div function' , (expect) =>{
    const input1 = 6;
    const input2 = 2;
    const expected = 3;
    const actual = div(input1, input2);
    expected.equal(actual, expected)
})
test('pyth function' , (expect) =>{
    const input1 = 3;
    const input2 = 4;
    const expected = 5;
    const actual = pyth(input1, input2);
    expected.equal(actual, expected)
})
test('Integer function' , (expect) =>{
    const input1 = 5;
    const input2 = 3;
    const expected = 1;
    const actual = int(input1, input2);
    expected.equal(actual, expected)
})
test('modulo function' , (expect) =>{
    const input1 = 21;
    const input2 = 5;
    const expected = 1;
    const actual = mod(input1, input2);
    expected.equal(actual, expected)
})