import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const generateMockData = () => {
  const data = [];
  let price = 0.00042069;
  
  for (let i = 0; i < 30; i++) {
    const change = (Math.random() - 0.5) * 0.1;
    price = Math.max(0.0001, price * (1 + change));
    data.push({
      time: `Day ${i + 1}`,
      price: price,
      volume: Math.random() * 1000000
    });
  }
  return data;
};

const PriceChart = () => {
  const data = generateMockData();

  const chartConfig = {
    price: {
      label: "Price",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-foreground">FleekcOin Price Chart</h3>
      <div className="h-64">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => `$${value.toFixed(6)}`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default PriceChart;