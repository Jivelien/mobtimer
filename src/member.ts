export class Member {
    lastname: string;
    next?: Member;

    constructor(lastname: string) {
        this.lastname = lastname;
    }

    getLastname() {
        return this.lastname;
    }
}

export class ListMembers {
    private firstmember?: Member;

    add(member: Member) {
        if (this.firstmember == null) {
            this.firstmember = member;
        }
        else {
            let currentMember = this.firstmember

            while (currentMember != null) {
                currentMember = currentMember.next();
            };

            currentMember.next = member
        }
        
    }

    current() {
        return this.firstmember;
    }
}


