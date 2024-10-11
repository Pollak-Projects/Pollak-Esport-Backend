import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const teamRouter = Router();
const prisma = new PrismaClient();

teamRouter.get("/team", async (req, res) => {
    const teams = await prisma.team.findMany();
    res.json(teams);
    });


teamRouter.post("/team", async (req, res) => {
    const { name, members } = req.body;
    const team = await prisma.team.create({
        data: {
            name,
            members
        }
    });
    res.json(team);
}
);

teamRouter.put("/team/:id", async (req, res) => {
    const { id } = req.params;
    const { name, members } = req.body;
    const team = await prisma.team.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name,
            members
        }
    });
    res.json(team);
}
);

teamRouter.delete("/team/:id", async (req, res) => {
    const { id } = req.params;
    const team = await prisma.team.delete({
        where: {
            id: parseInt(id)
        }
    });
    res.json(team);
}
);

teamRouter.get("/team/:id", async (req, res) => {
    const { id } = req.params;
    const team = await prisma.team.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    res.json(team);
}
);

teamRouter.get("/join/:teamId/:userId", async (req, res) => {
    const { teamId, userId } = req.params;
    const team = await prisma.team.update({
        where: {
            id: parseInt(teamId)
        },
        data: {
            members: {
                connect: {
                    id: parseInt(userId)
                }
            }
        }
    });
    res.json(team);
}

);


export default teamRouter;

