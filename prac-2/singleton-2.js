class Singleton {
    static instance = null;
    
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance
        }

        Singleton.instance = this
    }
}

console.log(new Singleton() === new Singleton())