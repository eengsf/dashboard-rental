
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

const data: { name: string; uv: number; pv: number; amt: number }[] = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
];

// XAxis Component with default parameter and label
interface XAxisCustomProps {
  dataKey?: string;
}

const XAxisCustom = ({ dataKey = 'name' }: XAxisCustomProps): JSX.Element => {
  return (
    <XAxis
      dataKey={dataKey}
      label={{ value: 'Pages', position: 'insideBottomRight', offset: -5 }}
      axisLine={true} // Enable axis line for X axis
      tickLine={true} // Enable tick marks for X axis
    />
  );
};

// YAxis Component
interface YAxisCustomProps {
  domain?: [number, number];
}

const YAxisCustom = (props: YAxisCustomProps): JSX.Element => {
  return (
    <YAxis
      {...props}
      label={{ value: 'UV & PV', angle: -90, position: 'insideLeft' }}
      axisLine={true} // Enable axis line for Y axis
      tickLine={true} // Enable tick marks for Y axis
    />
  );
};

// Custom Tooltip to show title from data.name
const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>): JSX.Element | null => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Title: ${label}`}</p>{' '}
        {/* Title from data.name */}
        <p className="intro">{`PV: ${payload[0].value}`}</p>
        <p className="desc">{`UV: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function ChartOverview(): JSX.Element {
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
          <Tooltip content={<CustomTooltip />} /> {/* Custom Tooltip */}
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
