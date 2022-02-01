/// <reference types="cypress" />
let dadosLogin
import EnderecoPage from '../support/page_objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

context('Exercício - Teste End-To-End - Fluxo de Pedido', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        cy.visit('produtos')
        })

    });

    it('Fluxo de Pedido - E2E', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XL', 'Purple', 1)
        cy.visit('produtos')
        cy.addProdutos('Abominable Hoodie', 'L', 'Blue', 1)
        cy.visit('produtos')
        cy.addProdutos('Aether Gym Pant', '36', 'Brown', 1)
        cy.visit('produtos')
        cy.addProdutos('Arcadio Gym Short', '33', 'Black', 1)
        cy.get('.woocommerce-message > .button').click()
        cy.visit('carrinho')
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            )

    });

});