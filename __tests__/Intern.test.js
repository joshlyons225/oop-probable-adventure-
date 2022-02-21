const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee.js');

test('creates a new intern', () => {
    const intern = new Intern('Jeff Beck');
    expect(intern.name).toBe('Jeff Beck');
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
});