/**
 * config.js - Configurações do quiz
 * 
 * Este arquivo contém as configurações personalizáveis do quiz.
 * Altere estas configurações para adaptar o quiz à sua matéria.
 */

// Configuração do quiz
const quizConfig = {
    // Título principal que aparece na tela de login
    title: "Quiz de Medicina Legal",

    // Nome do localStorage para salvar os dados do usuário
    storageKey: "medicinaLegalQuizData",

    // Lista de módulos disponíveis
    // O nome do arquivo deve corresponder ao valor em 'file' (sem a extensão .json)
    modules: [
        {
            id: "introducao",
            name: "1. Introdução",
            file: "1-introducao"
        },
        {
            id: "historia",
            name: "2. História",
            file: "2-historia"
        },
        {
            id: "pericias",
            name: "3. Perícias",
            file: "3-pericias"
        },
        {
            id: "documentos",
            name: "4. Documentos Médicos",
            file: "4-documentos medicos"
        },
        {
            id: "antropologia",
            name: "5. Antropologia",
            file: "5-antropologia"
        },
        {
            id: "traumatologia",
            name: "6. Traumatologia",
            file: "6-traumatologia"
        },
        {
            id: "lesao",
            name: "7. Lesão",
            file: "7-lesao"
        },
        {
            id: "asfixiologia",
            name: "8. Asfixiologia",
            file: "8-asfixiologia"
        }
    ]
};
