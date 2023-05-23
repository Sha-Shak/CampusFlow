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

const AssessmentMarksChart = ({ assessmentMarks }) => {
  const data = assessmentMarks;

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
        <Bar dataKey="assessmentMarks" barSize={15} fill="#7e22ceaf">
          <LabelList dataKey="assessmentMarks" position="top" />
        </Bar>
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
