describe('for array', () => {
  it('should get element of an array', () => {
    const array = [1, 2, 3, 4, 5];

    // <--start
    // Please write down the correct result. You should write the result directly.
    const expected = array[2];
    // --end->

    expect(array[2]).toEqual(expected);
  });

  it('should be able to push elements into array', () => {
    const array = [1, 2, 3, 4, 5];

    // <--start
    // Please write one line of code to push some elements in the array to pass the test
    array.push(6, 7, 8);
    // --end->

    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should be able to spread to array elements', () => {
    const array = [1, 2, 3, 4, 5];
    const newArray = [9, ...array, 10];

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = [9].concat(array).concat([10]);
    // --end->

    expect(newArray).toEqual(expected);
  });

  it('should destruct array', () => {
    const [row, column] = [2, 3];

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedRow = [row, column].shift();
    const expectedColumn = [row, column].pop();
    // --end->

    expect(row).toEqual(expectedRow);
    expect(column).toEqual(expectedColumn);
  });

  it('should filter array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const filtered = numbers.filter(n => n % 2 === 0);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = numbers.filter(n => n % 2 === 0);
    // --end->

    expect(filtered).toEqual(expected);
  });

  it('should map array element to other value', () => {
    const numbers = [1, 2, 3, 4, 5];
    const mapped = numbers.map((n, i) => `Unit ${n} for element at index ${i}`);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = numbers.map((n, i) => `Unit ${n} for element at index ${i}`);
    // --end->

    expect(mapped).toEqual(expected);
  });

  it('should summarize with reduce', () => {
    const numbers = [1, 2, 3, 4, 5];
    const reduced = numbers.reduce((prev, current) => prev + current);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = numbers.reduce((prev, current) => prev + current);
    // --end->

    expect(reduced).toEqual(expected);
  });
});
