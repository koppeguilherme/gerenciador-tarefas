const ProjetoController = require('../controller/projeto'); 

describe("Meu teste de integração", () => {

    it("Adicionar um projeto", async () => {
        const projeto = {
            titulo: "Projeto 1",
            descricao: "Projeto de teste",
            status: "ativo",
            autorId: 2
        }
        

        const { dataValues } = await ProjetoController.criarProjeto(projeto.titulo, projeto.descricao, projeto.status, projeto.autorId);

        expect(dataValues.titulo).toBe(projeto.titulo); 
        expect(dataValues.descricao).toBe(projeto.descricao);
        expect(dataValues.status).toBe(projeto.status);
        expect(dataValues.autorId).toBe(projeto.autorId);
    });
});
