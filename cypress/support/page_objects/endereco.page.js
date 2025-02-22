class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email) {
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('#payment_method_bacs').click()
        cy.get('#terms').check()
        cy.get('#place_order').click()

    }

    editarEnderecoEntrega() {
        //elementos + ações
    }

}

export default new EnderecoPage()