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
      members,
    },
  });
  res.json(team);
});

teamRouter.put("/team/:id", async (req, res) => {
  const { id } = req.params;
  const { name, members } = req.body;
  const team = await prisma.team.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      members,
    },
  });
  res.json(team);
});

teamRouter.delete("/team/:id", async (req, res) => {
  const { id } = req.params;
  const team = await prisma.team.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.json(team);
});

teamRouter.get("/team/:id", async (req, res) => {
  const { id } = req.params;
  const team = await prisma.team.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.json(team);
});

teamRouter.get("/join/", async (req, res) => {
  //code, teamId, userId
  const { code, teamId, userId } = req.query;
  const team = await prisma.team.findUnique({
    where: {
      id: teamId,
    },
  });
  if (team.code === code) {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        teamId: teamId,
      },
    });
    res.json(user);
  } else {
    res.json({ message: "Invalid code" });
  }
});
