lass Name {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.initials = `${fname[0]}.${lname[0]}`
        this.fullname = `${fname} ${lname}`
    }
}

const human = new Name('Lizzy', 'Moyo');
const fname = human.fname;
const lname = human.lname;
const initials = human.initials;
const fullname = human.fullname;

console.log({fname, lname, initials, fullname});