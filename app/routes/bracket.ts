
import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const bracketRouter = Router();
const prisma = new PrismaClient();

bracketRouter.get("/bracket/:id", async (req, res) => {
    const { id } = req.params;
    const bracket = await prisma.bracket.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    res.json(bracket);
}
);

bracketRouter.post("/bracket", async (req, res) => {
    const { title, genre, rating } = req.body;
    const bracket = await prisma.bracket.create({
        data: {
            title,
            genre,
            rating
        }
    });
    res.json(bracket);
}
);

bracketRouter.put("/bracket/:id", async (req, res) => {
    const { id } = req.params;
    const { title, genre, rating } = req.body;
    const bracket = await prisma.bracket.update({
        where: {
            id: parseInt(id)
        },
        data: {
            title,
            genre,
            rating
        }
    });
    res.json(bracket);
}
);


export default bracketRouter;