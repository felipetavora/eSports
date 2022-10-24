import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { convertHoursMinutes } from './utils/convert-hours-minutes';
import { convertMinutesHours } from './utils/convert-minutes-hours';

const app = express();
app.use(express.json());
app.use(cors()); //set domain cors configuration in prod

const prisma = new PrismaClient({
   log: ['query'], //config to return log on terminal
});

//requests//
app.get('/games', async (req, res) => {
   const games = await prisma.game.findMany({
      include: {
         // include and count ads / same relation
         _count: {
            select: {
               ads: true,
            },
         },
      },
   });
   return res.json(games);
});

app.post('/games/:id/ads', async (req, res) => {
   const gameId = req.params.id;
   const body: any = req.body;
   const ad = await prisma.ad.create({
      data: {
         gameId,
         name: body.name,
         yearsPlaying: body.yearsPlaying,
         discord: body.discord,
         weekDays: body.weekDays.join(','),
         hourStart: convertHoursMinutes(body.hourStart),
         hourEnd: convertHoursMinutes(body.hourEnd),
         useVoiceChannel: body.useVoiceChannel,
      },
   });
   return res.status(201).json(ad);
});

app.get('/games/:id/ads', async (req, res) => {
   const gameId = req.params.id;
   const ads = await prisma.ad.findMany({
      //select fields to show on query
      select: {
         id: true,
         name: true,
         weekDays: true,
         useVoiceChannel: true,
         yearsPlaying: true,
         hourStart: true,
         hourEnd: true,
      },
      where: {
         gameId: gameId, // or only gameId
      },
      orderBy: {
         createdAt: 'desc',
      },
   });
   return res.json(
      ads.map((ad) => {
         return {
            ...ad,
            weekDays: ad.weekDays.split(','), //convert in array(weekDays)
            hourStart: convertMinutesHours(ad.hourStart),
            hourEnd: convertMinutesHours(ad.hourEnd),
         };
      })
   );
});

app.get('/ads/:id/discord', async (req, res) => {
   const adId = req.params.id;
   const ad = await prisma.ad.findFirstOrThrow({
      select: {
         discord: true,
      },
      where: {
         id: adId,
      },
   });
   return res.json({
      discord: ad.discord,
   });
});

app.listen(4000);
