const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee.js');

test('creates a new manager', () => {
    const manager = new Manager('Buddy Guy');
    expect(manager.name).toBe('Buddy Guy');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});