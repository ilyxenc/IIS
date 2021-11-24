// интерфейс продукта
class LandingPage {
    getInfo() {
        console.log('Веб-страница для сбора данных')
    }
}

class WebService {
    getInfo() {
        console.log('Веб сервис для обработки изображений')
    }
}

// интерфейс специалистов
class FrontEndDev {
    getInfo() {
        console.log('Сделаю интерфейс')
    }
}

class BackEndDev {
    getInfo() {
        console.log('Сделаю сервис')
    }
}

// интерфейс фабрики
class LandingPageFactory {
    makeLandingPage() {
        return new LandingPage()
    }

    makeFrontEndDev() {
        return new FrontEndDev()
    }
}

class WebServiceFactory {
    makeWebService() {
        return new WebService()
    }

    makeBackEndDev() {
        return new BackEndDev()
    }
}

const siteFactory = new LandingPageFactory()

const site = siteFactory.makeLandingPage()
const specialist = siteFactory.makeFrontEndDev()

site.getInfo()
specialist.getInfo()