// 'use client';

// import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from '@/components/ui/chart';

// export const description = 'A multiple line chart';

// const chartData = [
//   { month: 'January', desktop: 186, mobile: 80 },
//   { month: 'February', desktop: 305, mobile: 200 },
//   { month: 'March', desktop: 237, mobile: 120 },
//   { month: 'April', desktop: 73, mobile: 190 },
//   { month: 'May', desktop: 209, mobile: 130 },
//   { month: 'June', desktop: 214, mobile: 140 },
// ];

// const chartConfig = {
//   desktop: {
//     label: 'Desktop',
//     color: 'hsl(var(--chart-1))',
//   },
//   mobile: {
//     label: 'Mobile',
//     color: 'hsl(var(--chart-2))',
//   },
// } satisfies ChartConfig;

// export default function ChartOverview() {
//   return (
//     <div className=" w-full h-full flex justify-center items-end">
//       <ChartContainer config={chartConfig} className="w-full h-full pb-3">
//         <LineChart
//           accessibilityLayer
//           data={chartData}
//           margin={{
//             left: -20,
//             right: 10,
//           }}
//         >
//           <CartesianGrid vertical={false} />
//           <XAxis
//             dataKey="month"
//             tickLine={true}
//             axisLine={true}
//             tickMargin={8}
//             tickFormatter={(value) => value.slice(0, 3)}
//           />
//           <YAxis tickLine={true} axisLine={true} tickMargin={8} tickCount={4} />
//           <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
//           <Line
//             dataKey="desktop"
//             type="monotone"
//             stroke="var(--color-desktop)"
//             strokeWidth={2}
//             dot={false}
//           />
//           <Line
//             dataKey="mobile"
//             type="monotone"
//             stroke="var(--color-mobile)"
//             strokeWidth={2}
//             dot={false}
//           />
//         </LineChart>
//       </ChartContainer>
//     </div>
//   );
// }

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
];

// XAxis Component with default parameter and label
const XAxisCustom = ({ dataKey = 'name' }) => {
  return (
    <XAxis
      dataKey={dataKey}
      label={{ value: 'Pages', position: 'insideBottomRight', offset: -5 }} // Label for X axis
    />
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const YAxisCustom = (props: any) => {
  return (
    <YAxis
      {...props}
      label={{ value: 'UV & PV', angle: -90, position: 'insideLeft' }} // Label for Y axis
    />
  );
};

export default function ChartOverview() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxisCustom />
          <YAxisCustom />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
