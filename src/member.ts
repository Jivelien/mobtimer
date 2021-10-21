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
    private firstmember2 : Member;
    private currentMember : Member;

    constructor() {
        this.firstmember2 = new Member("Sentinelle")
        this.currentMember = this.firstmember2;
    }

    add_at_last_postion(member: Member) {
        let lastMember = this.get_last();
        if (lastMember == null) {
            this.firstmember = member
            return
        }
        lastMember.next = member 
    }

    add_at_first_postion(member: Member) {

        member.next = this.firstmember2
        this.firstmember2 = member
        if (this.currentMember == new Member("Sentinelle"))
            this.currentMember = this.firstmember2
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

    // TODO : add_at_first_position

    current() {
        return this.firstmember;
    }

    current2() : Member {
        return this.currentMember;
    }

    next() {
        if (this.current2().next == null) {}
        // TODO next ?
        return this.currentMember ;
    }

    // next2() {
    //     let actualCurrent = this.current2() 
    //     if ( actualCurrent != null) {
    //         this.currentMember = actualCurrent.next
    //         return this.currentMember ;
    //     }
    //     else {
    //         return null;
    //     }
    // }
}


