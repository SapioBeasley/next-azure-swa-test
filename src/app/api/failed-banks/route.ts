import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const GET = async () => {
  try {
    const totalFailedBanks = await prisma.failedBank.count();
    const failuresByState = await prisma.failedBank.groupBy({
      by: ['state'],
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } },
      take: 5,
    });

    const topAcquirers = await prisma.failedBank.groupBy({
      by: ['acquiringInstitution'],
      _count: { id: true },
      where: { acquiringInstitution: { not: 'No Acquirer' } },
      orderBy: { _count: { id: 'desc' } },
      take: 5,
    });

    const recentFailures = await prisma.failedBank.findMany({
      orderBy: { closingDate: 'desc' },
      take: 5,
    });

    const failuresTimeline = await prisma.failedBank.groupBy({
      by: ['closingDate'],
      _count: { id: true },
      orderBy: { closingDate: 'asc' },
      having: {
        id: {
          _count: {
            gte: 3,
          },
        },
      },
    });

    return Response.json(
      {
        totalFailedBanks,
        failuresByState,
        topAcquirers,
        recentFailures,
        failuresTimeline,
      },
      { status: 200 }
    );
  } catch (error) {
    let errorMessage = error instanceof Error ? error.message : 'Unknown error';

    if (error instanceof Error) {
      return Response.json({ error: errorMessage }, { status: 400 });
    }

    return Response.json({ error: errorMessage }, { status: 500 });
  }
};

export { GET };
