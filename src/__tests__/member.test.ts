import {Member, ListMembers} from '../member'

test('Create a member with lastname', () => {
    let aMember: Member = new Member("Julien");
    expect(aMember.getLastname()).toBe("Julien");
});


test('Retrieve current member from list of members', () => {
    let members = new ListMembers();
    let expectedMember = new Member("Julien");

    members.add(expectedMember);

    let currentMember = members.current()

    expect(currentMember).toBe(expectedMember);
});

test('Retrieve current member from list of multple members', () => {
    let members = new ListMembers();
    let firstMember = new Member("Anthony");
    let secondMember = new Member("Julien");

    members.add(firstMember);
    members.add(secondMember);

    let currentMember = members.current()

    expect(currentMember).toBe(firstMember);
});