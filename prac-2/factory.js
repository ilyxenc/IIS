class Teacher {
    lecture() {
        console.log("Учиться нам нужно, учиться и учиться")
    }
}

class Audience {
    enter() {
        console.log("Вы можете зайти")
    }
}

class University {
    setTeacher() {
        return new Teacher()
    }

    enterAudience() {
        return new Audience()
    }
}

let university = new University()

let teacher = university.setTeacher()
let audience = university.enterAudience()

teacher.lecture()
audience.enter()