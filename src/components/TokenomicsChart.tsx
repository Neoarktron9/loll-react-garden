import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

const data = [
  { name: 'Liquidity Pool', value: 80, color: '#8b5cf6' },
  { name: 'Marketing', value: 10, color: '#ec4899' },
  { name: 'Development', value: 10, color: '#3b82f6' }
];

const TokenomicsChart = () => {
  const chartConfig = {
    liquidity: {
      label: "Liquidity Pool",
      color: "hsl(var(--primary))",
    },
    marketing: {
      label: "Marketing", 
      color: "hsl(var(--secondary))",
    },
    development: {
      label: "Development",
      color: "hsl(var(--accent))",
    },
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-center text-foreground">Token Distribution</h3>
      <div className="h-64">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default TokenomicsChart;