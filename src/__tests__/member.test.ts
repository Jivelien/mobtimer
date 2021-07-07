import {Member} from '../member'

test('Create a member with lastname', () => {
    let aMember = new Member("Julien");
    expect(aMember.getLastname()).toBe("Julien");
});



test('TODO', () => {
    let aMember = new Member("Julien");
    expect(aMember.getLastname()).toBe("Julien");
});