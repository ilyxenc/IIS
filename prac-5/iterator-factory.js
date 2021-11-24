// итератор
class Iterator {
    constructor(element) {
        this.index = 0
        this.keys = Object.keys(element)
        this.elements = element
    }

    next() {
        return this.elements[this.keys[this.index++]]
    }

    hasNext() {
        return this.index < this.keys.length
    }
}

// фабричный метод
class Document {
    constructor(type, name, price) {
        this.type = type
        this.name = name
        this.price = price
    }
}

class DocumentFactory {
    make(type, name) {
        if (type === 'attorney')
            return new Document(type, name, 250);
        if (type === 'contract')
            return new Document(type, name, 500);
    }
}


// создание новой фабрики
const factory = new DocumentFactory()

// создание объектов с разными значениями
const attorneyIlya = factory.make('attorney', 'Ilya')
const contractIlya = factory.make('contract', 'Ilya')
const attorneyPavel = factory.make('attorney', 'Pavel')
const contractPavel = factory.make('contract', 'Pavel')

// создание коллекции объектов
const documents = {
    attorneyIlya,
    contractIlya,
    attorneyPavel,
    contractPavel
}

// создание объекта итератора
const collection = new Iterator(documents)

// перебор объектов итератора
while(collection.hasNext()) {
    console.log(collection.next())
}