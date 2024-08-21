import dayjs from 'dayjs';
import { unstable_noStore as noStore } from 'next/cache';

const Home = () => {
  noStore();

  const timeOnServer = dayjs().format('h:mm:ss A');

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        This is a Next.js application hosted on Azure Static Web Apps with
        hybrid rendering. The time on the server is{' '}
        <strong>{`dayjs: ${timeOnServer}`}</strong>.
      </div>
    </main>
  );
};

export default Home;
