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
} from 'recharts';

const data = [
  { unitName: 'Unit Testing', marks: 9 },
  { unitName: 'Advanced Javascript', marks: 6 },
  { unitName: 'Data Structures', marks: 2 },
  { unitName: 'Algorithms', marks: 10 },
  { unitName: 'Networking', marks: 4 },
  { unitName: 'Backend Frameworks', marks: 3 },
  { unitName: 'Databases', marks: 8 },
  { unitName: 'Advanced HTML & CSS', marks: 1 },
  { unitName: 'TypeScript', marks: 7 },
  { unitName: 'Angular', marks: 5 },
  { unitName: 'GraphQL', marks: 10 },
  { unitName: 'React', marks: 2 },
];

const UnitMarksChart = () => {
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
        <Bar dataKey="marks" barSize={20} fill="#7e22ceaf" />
        <Line
          type="monotone"
          dataKey="marks"
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
