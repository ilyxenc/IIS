let instance;

function Singleton() {
    if (instance) {
        return instance
    }
    instance = this
}

console.log(new Singleton() === new Singleton())