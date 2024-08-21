import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const GET = async () => {
  try {
    const totalFailedBanks = await prisma.failedBank.count();
    // const failuresByState = await prisma.failedBank.groupBy({
    //   by: ['state'],
    //   _count: { id: true },
    //   orderBy: { _count: { id: 'desc' } },
    //   take: 5,
    // });

    // const topAcquirers = await prisma.failedBank.groupBy({
    //   by: ['acquiringInstitution'],
    //   _count: { id: true },
    //   where: { acquiringInstitution: { not: 'No Acquirer' } },
    //   orderBy: { _count: { id: 'desc' } },
    //   take: 5,
    // });

    // const recentFailures = await prisma.failedBank.findMany({
    //   orderBy: { closingDate: 'desc' },
    //   take: 5,
    // });

    // const failuresTimeline = await prisma.failedBank.groupBy({
    //   by: ['closingDate'],
    //   _count: { id: true },
    //   orderBy: { closingDate: 'asc' },
    //   having: {
    //     id: {
    //       _count: {
    //         gte: 3,
    //       },
    //     },
    //   },
    // });

    const { failuresByState, topAcquirers, recentFailures, failuresTimeline } =
      {
        failuresByState: [
          {
            _count: {
              id: 93,
            },
            state: 'GA',
          },
          {
            _count: {
              id: 76,
            },
            state: 'FL',
          },
          {
            _count: {
              id: 69,
            },
            state: 'IL',
          },
          {
            _count: {
              id: 43,
            },
            state: 'CA',
          },
          {
            _count: {
              id: 23,
            },
            state: 'MN',
          },
        ],
        topAcquirers: [
          {
            _count: {
              id: 12,
            },
            acquiringInstitution: 'State Bank and Trust Company',
          },
          {
            _count: {
              id: 11,
            },
            acquiringInstitution: 'First-Citizens Bank & Trust Company',
          },
          {
            _count: {
              id: 10,
            },
            acquiringInstitution: 'Ameris Bank',
          },
          {
            _count: {
              id: 9,
            },
            acquiringInstitution: 'U.S. Bank N.A.',
          },
          {
            _count: {
              id: 8,
            },
            acquiringInstitution: 'Community & Southern Bank',
          },
        ],
        recentFailures: [
          {
            id: 1,
            bankName: 'Republic First Bank dba Republic Bank',
            city: 'Philadelphia',
            state: 'PA',
            cert: 27332,
            acquiringInstitution: 'Fulton Bank, National Association',
            closingDate: '2024-04-26T05:00:00.000Z',
            fund: 10546,
            createdAt: '2024-08-21T03:14:32.642Z',
            updatedAt: '2024-08-21T03:35:20.407Z',
          },
          {
            id: 13,
            bankName: 'Citizens Bank',
            city: 'Sac City',
            state: 'IA',
            cert: 8758,
            acquiringInstitution: 'Iowa Trust & Savings Bank',
            closingDate: '2023-11-03T05:00:00.000Z',
            fund: 10545,
            createdAt: '2024-08-21T03:14:32.642Z',
            updatedAt: '2024-08-21T03:35:20.407Z',
          },
          {
            id: 18,
            bankName: 'Heartland Tri-State Bank',
            city: 'Elkhart',
            state: 'KS',
            cert: 25851,
            acquiringInstitution: 'Dream First Bank, N.A.',
            closingDate: '2023-07-28T05:00:00.000Z',
            fund: 10544,
            createdAt: '2024-08-21T03:14:32.642Z',
            updatedAt: '2024-08-21T03:35:20.407Z',
          },
          {
            id: 11,
            bankName: 'First Republic Bank',
            city: 'San Francisco',
            state: 'CA',
            cert: 59017,
            acquiringInstitution: 'JPMorgan Chase Bank, N.A.',
            closingDate: '2023-05-01T05:00:00.000Z',
            fund: 10543,
            createdAt: '2024-08-21T03:14:32.642Z',
            updatedAt: '2024-08-21T03:35:20.407Z',
          },
          {
            id: 5,
            bankName: 'Signature Bank',
            city: 'New York',
            state: 'NY',
            cert: 57053,
            acquiringInstitution: 'Flagstar Bank, N.A.',
            closingDate: '2023-03-12T06:00:00.000Z',
            fund: 10540,
            createdAt: '2024-08-21T03:14:32.642Z',
            updatedAt: '2024-08-21T03:35:20.407Z',
          },
        ],
        failuresTimeline: [
          {
            _count: {
              id: 3,
            },
            closingDate: '2008-11-21T06:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2009-01-30T06:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2009-02-06T06:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2009-02-13T06:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2009-03-20T05:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2009-04-24T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2009-05-01T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2009-06-19T05:00:00.000Z',
          },
          {
            _count: {
              id: 5,
            },
            closingDate: '2009-06-26T05:00:00.000Z',
          },
          {
            _count: {
              id: 7,
            },
            closingDate: '2009-07-02T05:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2009-07-17T05:00:00.000Z',
          },
          {
            _count: {
              id: 7,
            },
            closingDate: '2009-07-24T05:00:00.000Z',
          },
          {
            _count: {
              id: 5,
            },
            closingDate: '2009-07-31T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2009-08-07T05:00:00.000Z',
          },
          {
            _count: {
              id: 5,
            },
            closingDate: '2009-08-14T05:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2009-08-21T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2009-08-28T05:00:00.000Z',
          },
          {
            _count: {
              id: 5,
            },
            closingDate: '2009-09-04T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2009-09-11T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2009-10-02T05:00:00.000Z',
          },
          {
            _count: {
              id: 7,
            },
            closingDate: '2009-10-23T05:00:00.000Z',
          },
          {
            _count: {
              id: 9,
            },
            closingDate: '2009-10-30T05:00:00.000Z',
          },
          {
            _count: {
              id: 5,
            },
            closingDate: '2009-11-06T06:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2009-11-13T06:00:00.000Z',
          },
          {
            _count: {
              id: 6,
            },
            closingDate: '2009-12-04T06:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2009-12-11T06:00:00.000Z',
          },
          {
            _count: {
              id: 7,
            },
            closingDate: '2009-12-18T06:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2010-01-15T06:00:00.000Z',
          },
          {
            _count: {
              id: 5,
            },
            closingDate: '2010-01-22T06:00:00.000Z',
          },
          {
            _count: {
              id: 6,
            },
            closingDate: '2010-01-29T06:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2010-02-19T06:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2010-03-05T06:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2010-03-12T06:00:00.000Z',
          },
          {
            _count: {
              id: 7,
            },
            closingDate: '2010-03-19T05:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2010-03-26T05:00:00.000Z',
          },
          {
            _count: {
              id: 8,
            },
            closingDate: '2010-04-16T05:00:00.000Z',
          },
          {
            _count: {
              id: 7,
            },
            closingDate: '2010-04-23T05:00:00.000Z',
          },
          {
            _count: {
              id: 7,
            },
            closingDate: '2010-04-30T05:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2010-05-07T05:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2010-05-14T05:00:00.000Z',
          },
          {
            _count: {
              id: 5,
            },
            closingDate: '2010-05-28T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2010-06-04T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2010-06-25T05:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2010-07-09T05:00:00.000Z',
          },
          {
            _count: {
              id: 6,
            },
            closingDate: '2010-07-16T05:00:00.000Z',
          },
          {
            _count: {
              id: 7,
            },
            closingDate: '2010-07-23T05:00:00.000Z',
          },
          {
            _count: {
              id: 5,
            },
            closingDate: '2010-07-30T05:00:00.000Z',
          },
          {
            _count: {
              id: 8,
            },
            closingDate: '2010-08-20T05:00:00.000Z',
          },
          {
            _count: {
              id: 6,
            },
            closingDate: '2010-09-17T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2010-10-15T05:00:00.000Z',
          },
          {
            _count: {
              id: 7,
            },
            closingDate: '2010-10-22T05:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2010-11-05T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2010-11-12T06:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2010-11-19T06:00:00.000Z',
          },
          {
            _count: {
              id: 6,
            },
            closingDate: '2010-12-17T06:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2011-01-21T06:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2011-01-28T06:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2011-02-04T06:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2011-02-11T06:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2011-02-18T06:00:00.000Z',
          },
          {
            _count: {
              id: 6,
            },
            closingDate: '2011-04-15T05:00:00.000Z',
          },
          {
            _count: {
              id: 5,
            },
            closingDate: '2011-04-29T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2011-05-20T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2011-07-08T05:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2011-07-15T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2011-07-22T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2011-07-29T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2011-08-19T05:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2011-10-14T05:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2011-10-21T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2012-01-20T06:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2012-01-27T06:00:00.000Z',
          },
          {
            _count: {
              id: 5,
            },
            closingDate: '2012-04-27T05:00:00.000Z',
          },
          {
            _count: {
              id: 4,
            },
            closingDate: '2012-06-08T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2012-06-15T05:00:00.000Z',
          },
          {
            _count: {
              id: 5,
            },
            closingDate: '2012-07-20T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2012-10-19T05:00:00.000Z',
          },
          {
            _count: {
              id: 3,
            },
            closingDate: '2013-04-19T05:00:00.000Z',
          },
        ],
      };

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
