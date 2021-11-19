import {Member, ListMembers} from '../member'

test('Create a member with lastname', () => {
    let aMember: Member = new Member("Julien");
    expect(aMember.getLastname()).toBe("Julien");
});


// test('Retrieve current member from list of members', () => {
//     let members = new ListMembers();
//     let expectedMember = new Member("Julien");
//
//     members.add_at_last_postion(expectedMember);
//
//     let currentMember = members.current()
//
//     expect(currentMember).toBe(expectedMember);
// });
//
// test('Retrieve current member from list of multple members', () => {
//     let members = new ListMembers();
//     let firstMember = new Member("Anthony");
//     let secondMember = new Member("Julien");
//
//     members.add_at_last_postion(firstMember);
//     members.add_at_last_postion(secondMember);
//
//     let currentMember = members.current()
//
//     expect(currentMember).toBe(firstMember);
// });

test('add at first position', () => {
    let members = new ListMembers();
    let firstMember = new Member("Anthony");

    members.add_at_first_postion(firstMember);

    let currentMember = members.current2()

    expect(currentMember).toBe(firstMember);
});

test('Retrieve current member from list of multple members', () => {
    let members = new ListMembers();
    let firstAddedMember = new Member("Anthony");
    let secondAddedMember = new Member("Julien");

    members.add_at_first_postion(firstAddedMember);
    members.add_at_first_postion(secondAddedMember);

    let currentMember = members.current2()

    expect(currentMember).toBe(firstAddedMember);
});

test('Compare equality between members', () => {
    let firstAddedMember = new Member("Anthony");
    let secondAddedMember = new Member("Anthony");

    secondAddedMember.setNext(new Member("Strange things"))
    expect(firstAddedMember).toEqual(secondAddedMember);
});

test.skip('Retrieve next member from list of multple members', () => {
    let members = new ListMembers();
    let firstAddedMember = new Member("Anthony");
    let secondAddedMember = new Member("Julien");

    members.add_at_first_postion(firstAddedMember);
    members.add_at_first_postion(secondAddedMember);

    let nextMember = members.next()

    expect(nextMember).toBe(secondAddedMember);
});