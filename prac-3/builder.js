let storeList = [
    'Flower',
    'Букет77',
    'Цветы в Центре'
]

class RosesBouquet {
    constructor(builder) {
        this.numberOfFlowers = builder.numberOfFlowers
        this.packagingType = builder.packagingType
        builder.storeName ? this.storeName = builder.storeName : this.storeName = storeList[0]
        this.deliveryAddress = builder.deliveryAddress
    }
}

class RosesBouquetBuilder {
    setNumberOfFlowers(num) {
        this.numberOfFlowers = num
        return this
    }

    setPackagingType(type) {
        this.packagingType = type
        return this
    }

    setStoreName(store) {
        this.storeName = store
        return this
    }

    setDeliveryAddress(address) {
        this.deliveryAddress = address
        return this
    }

    build() {
        if (!('numberOfFlowers' in this) || this.numberOfFlowers.toString().length == 0) throw new Error('Не задано количество роз')

        if (!('packagingType' in this) || this.packagingType.toString().length == 0) throw new Error('Не задан тип упаковки')

        if (!('storeName' in this) || this.storeName.toString().length == 0) throw new Error('Не задано название магазина')
        if (!storeList.includes(this.storeName)) throw new Error('Магазин отсутствует в списке')

        if (!('deliveryAddress' in this) || this.deliveryAddress.toString().length == 0) throw new Error('Не задан адрес доставки')

        return new RosesBouquet(this)
    }
}

class Customer {
    constructor(...args) {
        this.name = args[0]

        console.log('Здравствуйте, ' + this.name)
    }
}

class Shop {
    static regularCustomerData = {
        'name': 'Илья',
        'address': 'ул.Ленинский проспект, д.111к1, кв.27',
        'numberOfFlowers': 21,
        'storeName': 'Flower',
        'packagingType': 'Крафтовая бумага'
    }

    regularCustomer() {
        let customer = new Customer(Shop.regularCustomerData.name)
    
        let bouquet = new RosesBouquetBuilder()
                .setNumberOfFlowers(Shop.regularCustomerData.numberOfFlowers)
                .setPackagingType(Shop.regularCustomerData.packagingType)
                .setStoreName(Shop.regularCustomerData.storeName)
                .setDeliveryAddress(Shop.regularCustomerData.address)
                .build()
        
        if (bouquet) console.log(customer['name'] + ', Ваш заказ собран\n')
    }

    newCustomer(data) {
        let customer = new Customer(data.name)
    
        let bouquet = new RosesBouquetBuilder()
                .setNumberOfFlowers(data.numberOfFlowers)
                .setPackagingType(data.packagingType)
                .setStoreName(data.storeName)
                .setDeliveryAddress(data.address)
                .build()
        
        if (bouquet) console.log(customer['name'] + ', Ваш заказ собран')
    }
}

let customerData = {
    'name': 'Вадим',
    'address': 'центр',
    'numberOfFlowers': 101,
    'storeName': 'Flowers',
    'packagingType': 'Не надо'
}

let shop = new Shop()

// shop.newCustomer(customerData)
shop.regularCustomer()