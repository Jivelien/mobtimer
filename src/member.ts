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
        let lastMember = this.get_last();
        if (lastMember == null) {
            this.firstmember = member
            return
        }
        lastMember.next = member
        
    }

    private get_last()  {
        if (this.firstmember == null) {
            return null;
        }
        else {

            let currentMember = this.firstmember;

            while (currentMember.next != null) {
                currentMember = currentMember.next;
            }

            return currentMember;
        }
    }

    current() {
        return this.firstmember;
    }
}


