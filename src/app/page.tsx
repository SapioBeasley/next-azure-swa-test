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
import { randomUUID } from 'crypto';
import { TelemetryClient } from 'applicationinsights';
import applicationInsightsTelemetryClient from '../../appinsights-preload';

const client =
  applicationInsightsTelemetryClient.applicationInsightsTelemetryClient as TelemetryClient;

const Home = async () => {
  console.log(randomUUID());
  (client as any).trackPageView({
    id: randomUUID(),
    name: 'Home',
    url: '/',
  });

  noStore();

  const timeOnServer = dayjs().format('h:mm:ss A');

  const response = await fetch(`${process.env.APP_HOST}/api/failed-banks`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const {
    totalFailedBanks,
    failuresByState,
    topAcquirers,
    recentFailures,
    failuresTimeline,
  } = await response.json();

  return (
    <Main>
      <Section>
        <Container className='space-y-4'>
          <div>
            This is a Next.js application hosted on Azure Static Web Apps with
            hybrid rendering. The time on the server is{' '}
            <strong>{`dayjs: ${timeOnServer}`}</strong>.
          </div>
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
                  {topAcquirers.map((acquirer: any, index: number) => (
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
                  {failuresByState.map((stateData: any, index: number) => (
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
                {recentFailures.map((failure: any, index: number) => (
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
        </Container>
      </Section>
    </Main>
  );
};

export default Home;
