describe ('Проверка адреса', () => {

    it('positive_test', () => {
      
        // Открываем страницу "РЖД - пассажирам"
        cy.visit("https://www.rzd.ru/");
        // Проверяем заголовок страницы
        cy.title().should('eq','Пассажирам')

    })

    it('negative_test', () => {
      
        // Открываем страницу "РЖД - пассажирам"
        cy.visit("https://www.rzd.ru/");
        // Проверяем заголовок страницы
        cy.title().should('eq','Пfассажирам')

    })
})