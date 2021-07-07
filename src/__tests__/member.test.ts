import Member from '../member'

test('X', () => {
    let aMember = new Member("Julien");
    expect(aMember.getLastname()).toBe("Julien");
});