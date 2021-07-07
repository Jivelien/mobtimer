test('X', () => {
    let aMember = Member(lastname="Julien");
    expect(aMember.yourName()).toBe("Julien");
});