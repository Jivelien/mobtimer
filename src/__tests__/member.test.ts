import {Member, ListMembers} from '../member'

test('Create a member with lastname', () => {
    let aMember: Member = new Member("Julien");
    expect(aMember.getLastname()).toBe("Julien");
});



test('TODO', () => {
    let members = new ListMembers();
    let aMember = new Member("Julien");

    members.add(aMember);

    let currentMember = members.current()

    expect(currentMember).toBe(aMember);
});