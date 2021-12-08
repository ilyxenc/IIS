// Invertion of Control (IoC) - возможность программы управлять кодом. Реализация шаблона Стратегия

// семейство схожих алгоритмов, которые могут меняться и расширяться
function carStrategy(distance, speed) {
    travelTime = distance / speed + 0.25 // 15 минут тратим на маршрут до машины
    return travelTime
}

function walkStrategy(distance, speed) {
    travelTime = distance / speed
    return travelTime
}

function bicycleStrategy(distance, speed) {
    travelTime = distance / speed + 0.1 // 6 минут тратим на то, чтобы достать велосипед
    return travelTime
}


// контекст
class Navigator {
    constructor(strategy) {
        this.strategy = strategy
        this.distance = 0
        this.speed = 0
    }

    // общий интерфейс стратегий
    checkTime() {
        return this.strategy(this.distance, this.speed)
    }

    setParams(distance, speed) {
        this.distance = distance
        speed != 0 ? this.speed = speed : this.speed = 0.01
    }
}


const driver = new Navigator(carStrategy)
const walker = new Navigator(walkStrategy)
const cyclist = new Navigator(bicycleStrategy)

driver.setParams(5, 60)
console.log(driver.checkTime())

walker.setParams(5, 5)
console.log(walker.checkTime())

cyclist.setParams(5, 15)
console.log(cyclist.checkTime())