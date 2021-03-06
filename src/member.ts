export class Member  {
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

    public equals(otherMember: Member): boolean {
        return this.getLastname() == otherMember.getLastname();
      }


}

export class ListMembers {
    private firstmember: Member;
    private readonly sentinelle: Member;
    private currentMember: Member;

    constructor() {
        this.sentinelle = new Member("Sentinelle")
        this.firstmember = this.sentinelle;
        this.currentMember = this.firstmember;
    }


    private is_empty_list(): boolean {
        return this.currentMember == this.sentinelle
    }

    add_at_first_postion(member: Member) {

        member.setNext(this.firstmember);
        this.firstmember = member
        if (this.is_empty_list())
            this.currentMember = this.firstmember
    }


    current() {
        return this.firstmember;
    }

    current2(): Member {
        return this.currentMember;
    }

    next() {
        return this.currentMember.getNext();
    }

}


