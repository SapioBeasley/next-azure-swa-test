import { createReadStream } from 'fs';
import csv from 'csv-parser';
import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';

const prisma = new PrismaClient();

const sanitizeHeader = (header: string) =>
  header.replace(/[^\x00-\x7F]/g, '').trim();

const POST = async (req: Request) => {
  const filePath = `src/app/api/failed-banks/import/banklist.csv`;

  createReadStream(filePath)
    .pipe(
      csv({
        separator: ',',
        mapHeaders: ({ header }) => sanitizeHeader(header),
      })
    )
    .on('data', async (row) => {
      try {
        const cert = parseInt(row['Cert'], 10);

        await prisma.failedBank.upsert({
          where: {
            cert,
          },
          update: {
            bankName: row['Bank Name'],
            city: row['City'],
            state: row['State'],
            acquiringInstitution: row['Acquiring Institution'],
            closingDate: dayjs(row['Closing Date']).toDate(),
            fund: parseInt(row['Fund'], 10),
            updatedAt: dayjs().toDate(),
          },
          create: {
            bankName: row['Bank Name'],
            city: row['City'],
            state: row['State'],
            cert: cert,
            acquiringInstitution: row['Acquiring Institution'],
            closingDate: dayjs(row['Closing Date']).toDate(),
            fund: parseInt(row['Fund'], 10),
            createdAt: dayjs().toDate(),
            updatedAt: dayjs().toDate(),
          },
        });
      } catch (error) {
        console.error('Error inserting/updating row: ', error);
      }
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });

  return new Response('ok');
};

export { POST };
