
import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const gameRouter = Router();
const prisma = new PrismaClient();

gameRouter.get("/game", async (req, res) => {
    const games = await prisma.game.findMany();
    res.json(games);
    });

gameRouter.post("/game", async (req, res) => {
    const { title, genre, rating } = req.body;
    const game = await prisma.game.create({
        data: {
            title,
            genre,
            rating
        }
    });
    res.json(game);
}
);

gameRouter.put("/game/:id", async (req, res) => {
    const { id } = req.params;
    const { title, genre, rating } = req.body;
    const game = await prisma.game.update({
        where: {
            id: parseInt(id)
        },
        data: {
            title,
            genre,
            rating
        }
    });
    res.json(game);
}
);

gameRouter.delete("/game/:id", async (req, res) => {
    const { id } = req.params;
    const game = await prisma.game.delete({
        where: {
            id: parseInt(id)
        }
    });
    res.json(game);
}
);

gameRouter.get("/game/:id", async (req, res) => {
    const { id } = req.params;
    const game = await prisma.game.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    res.json(game);
}
);


   

export default gameRouter;