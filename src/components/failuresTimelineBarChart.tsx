'use client';

import dayjs from 'dayjs';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from './ui/chart';
import {
  Bar,
  CartesianGrid,
  BarChart as RechartsBarChart,
  XAxis,
} from 'recharts';

const chartConfig = {
  desktop: {
    label: '_count.id',
    color: '#2563eb',
  },
  mobile: {
    label: 'closingDate',
    color: '#60a5fa',
  },
} satisfies ChartConfig;

const FailuresTimelineBarChart = ({
  data,
}: {
  data: Record<string, unknown>[];
}) => {
  return (
    <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
      <RechartsBarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='closingDate'
          tickLine={true}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => dayjs(value).format('M/YY')}
        />
        <Bar
          dataKey='_count.id'
          fill='#2563eb'
          stroke='#2563eb'
          fillOpacity={1}
          radius={[10, 10, 0, 0]}
          barSize={2}
          maxBarSize={2}
          label={{
            position: 'top',
          }}
          animationDuration={0}
          animationEasing='linear'
          animationBegin={0}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
      </RechartsBarChart>
    </ChartContainer>
  );
};

export default FailuresTimelineBarChart;
