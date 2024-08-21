import { cn, Container, Main, Section } from '@/components/craft';
import FailuresTimelineBarChart from '@/components/failuresTimelineBarChart';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import dayjs from 'dayjs';
import { CalendarDays, MapPin } from 'lucide-react';
import { unstable_noStore as noStore } from 'next/cache';

const Home = async () => {
  noStore();

  const timeOnServer = dayjs().format('h:mm:ss A');

  const response = await fetch('http://localhost:3000/api/failed-banks');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  // const {
  //   totalFailedBanks,
  //   failuresByState,
  //   topAcquirers,
  //   recentFailures,
  //   failuresTimeline,
  // } = await response.json();

  const {
    totalFailedBanks,
    failuresByState,
    topAcquirers,
    recentFailures,
    failuresTimeline,
  } = {
    totalFailedBanks: 569,
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

  return (
    <Main>
      <Section>
        <Container className='space-y-4'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Card>
              <CardHeader>
                <CardTitle>Failed Banks Overview</CardTitle>
                <CardDescription>
                  Total Failed Banks: {totalFailedBanks}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className='text-lg font-semibold mb-4'>Top Acquirers</h4>
                <ul>
                  {topAcquirers.map((acquirer, index) => (
                    <li
                      key={index}
                      className='flex items-center justify-between mb-2'
                    >
                      <span>{acquirer.acquiringInstitution}</span>
                      <Badge variant='secondary' className='flex items-center'>
                        {acquirer._count.id}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bank Failures by State</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2'>
                  {failuresByState.map((stateData, index) => (
                    <li key={index} className='flex justify-between pb-2'>
                      <span className='font-medium'>{stateData.state}</span>
                      <Badge variant='secondary' className='flex items-center'>
                        {stateData._count.id} Failures
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Bank Failures</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-4'>
                {recentFailures.map((failure, index) => (
                  <li
                    key={failure.id}
                    className={cn(
                      ' pb-4',
                      recentFailures.length - 1 !== index && 'border-b'
                    )}
                  >
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3 className='text-lg font-semibold'>
                          {failure.bankName}
                        </h3>
                        <p className='text-sm text-muted-foreground flex'>
                          <MapPin className='mr-1 h-4 w-4' />
                          {failure.city}, {failure.state} | Cert: {failure.cert}
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Acquired by: {failure.acquiringInstitution}
                        </p>
                      </div>
                      <p className='text-sm text-muted-foreground flex'>
                        <CalendarDays className='mr-1 h-4 w-4' />
                        Closing Date:{' '}
                        {dayjs(failure.closingDate).format('MMM DD, YYYY')}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <FailuresTimelineBarChart data={failuresTimeline} />
          </Card>

          <div>
            This is a Next.js application hosted on Azure Static Web Apps with
            hybrid rendering. The time on the server is{' '}
            <strong>{`dayjs: ${timeOnServer}`}</strong>.
          </div>
        </Container>
      </Section>
    </Main>
  );
};

export default Home;
