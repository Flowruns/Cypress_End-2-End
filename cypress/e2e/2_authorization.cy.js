require('cypress-xpath');

describe ('Авторизация', () => {

    it('Авторизируемся в личном кабинете', () => {
      
        // Открываем страницу "РЖД - пассажирам"
        cy.visit("https://www.rzd.ru/");
        // Нажимаем на кнопку "Вход"
        cy.xpath("//header/div[@id='logo-menu_wrap']/div[2]/nav[2]/ul[1]/li[2]/a[1]").click();
        // Проверяем открытие модального окна - формы для авторизации
        if (window.Cypress) {
            window.appReady = true
        }

        

    })
})