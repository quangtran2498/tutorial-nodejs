class people {
    constructor() {
        this.age= "25",
        this.gender = "male"
    }
}

const callPeople = new people()

class addProperti extends people {
    constructor() {
        super()
        this.height="1m"
    }
}
const newOj = new addProperti()
console.log(newOj);
//! khi extends thì đối tượng dc extends sẽ đươc kế thừa thêm chính đối tượng đó
