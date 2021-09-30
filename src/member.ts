export class Member {
    lastname: string;

    constructor(lastname: string) {
        this.lastname = lastname;
    }

    getLastname() {
        return this.lastname;
    }
}

export class ListMembers {
    private member?: Member;

    add(member: Member) {
        return this.member = member;
    }

    current() {
        return this.member;
    }
}


