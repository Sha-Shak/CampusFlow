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
  {
    weekName: 'week-1',
    assessmentMarks: 8,
  },
  {
    weekName: 'week-2',
    assessmentMarks: 7,
  },
  {
    weekName: 'week-3',
    assessmentMarks: 9,
  },
  {
    weekName: 'week-4',
    assessmentMarks: 8,
  },
  {
    weekName: 'week-5',
    assessmentMarks: 6,
  },
  {
    weekName: 'week-6',
    assessmentMarks: 8,
  },
];

const AssessmentMarksChart = () => {
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
        <XAxis dataKey="weekName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="assessmentMarks" barSize={15} fill="#7e22ceaf" />
        <Line
          type="monotone"
          dataKey="assessmentMarks"
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

export default AssessmentMarksChart;
