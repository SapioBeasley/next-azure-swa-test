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
import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
import { CalendarDays, MapPin } from 'lucide-react';
import { unstable_noStore as noStore } from 'next/cache';

const prisma = new PrismaClient();

const Home = async () => {
  noStore();

  const timeOnServer = dayjs().format('h:mm:ss A');

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
