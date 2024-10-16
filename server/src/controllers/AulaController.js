import { createAula } from "../models/AulaModel.js";

export async function criarAula(req, res) {
    console.log('AulaController criarAula');
    const aula = req.body;

    try {
        const [status, resposta] = await createAula(aula);
        res.status().json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function mostrarAulas(req, res) {
    return res.status(200).json(
        [
            {
                "id": "c7e9",
                "data": "2024-10-18",
                "data_hora_inicio": "14:00",
                "data_hora_fim": "15:30",
                "turma": "sair cedo",
                "instrutor": "pedro perfeito",
                "unidade_curricular": "conforto & preguiça",
                "ambiente": "sala, preferencia deitado",
                "chave": null
            }
        ]
    );
}