const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee.js');

test('creates a new engineer', () => {
    const engineer = new Engineer('Gary Clark Jr');
    expect(engineer.name).toBe('Gary Clark Jr');
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
});