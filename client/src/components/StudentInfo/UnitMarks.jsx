import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

const UnitMarksChart = ({ unitMarks }) => {
  if (!unitMarks) return null;
  const data = unitMarks.flat();
  return (
    <ResponsiveContainer>
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="unitName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="unitMarks" barSize={20} fill="#7e22ceaf">
          <LabelList dataKey="unitMarks" position="top" />
        </Bar>
        <Line
          type="monotone"
          dataKey="unitMarks"
          stroke="#ff7300"
          strokeWidth={2}
          dot={false}
          gradient={{
            stops: [
              { offset: 0, color: '#ff7300' },
              { offset: 1, color: '#82ca9d' },
            ],
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default UnitMarksChart;
