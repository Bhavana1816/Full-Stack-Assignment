import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Mon", value: 100 },
  { name: "Tue", value: 200 },
  { name: "Wed", value: 150 },
];

function RevenueChart() {
  return (
    <div>
      <h3>Revenue Chart</h3>
      <LineChart width={300} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="value" />
      </LineChart>
    </div>
  );
}

export default RevenueChart;