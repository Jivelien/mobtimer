export class Member {
    lastname: string;
    private next?: Member;

    constructor(lastname: string) {
        this.lastname = lastname;
    }

    getLastname() {
        return this.lastname;
    }

    getNext(): Member {
        return <Member>this.next;
    }

    setNext(member: Member) {
        this.next = member;
    }

}

export class ListMembers {
    private firstmember?: Member;
    private firstmember2: Member;
    private readonly sentinelle: Member;
    private currentMember: Member;

    constructor() {
        this.sentinelle = new Member("Sentinelle")
        this.firstmember2 = this.sentinelle;
        this.currentMember = this.firstmember2;
    }

    // add_at_last_postion(member: Member) {
    //     let lastMember = this.get_last();
    //     if (lastMember == null) {
    //         this.firstmember = member
    //         return
    //     }
    //     lastMember.setNext(member)
    // }

    private is_empty_list(): boolean {
        return this.currentMember == this.sentinelle
    }

    add_at_first_postion(member: Member) {

        member.setNext(this.firstmember2);
        this.firstmember2 = member
        if (this.is_empty_list())
            this.currentMember = this.firstmember2
    }

    // private get_last() {
    //     if (this.firstmember == null) {
    //         return null;
    //     } else {
    //         let currentMember = this.firstmember;
    //
    //         while (currentMember.next != null) {
    //             currentMember = currentMember.next;
    //         }
    //
    //         return currentMember;
    //     }
    // }

    // TODO : add_at_first_position

    current() {
        return this.firstmember;
    }

    current2(): Member {
        return this.currentMember;
    }

    next() {
        if (this.current2().getNext() == null) {
        }
        // TODO next ?
        return this.currentMember;
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


