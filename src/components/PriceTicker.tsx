import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PriceTicker = () => {
  const [price, setPrice] = useState(0.00042069);
  const [change, setChange] = useState(0);
  const [isPositive, setIsPositive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const changePercent = (Math.random() - 0.5) * 10; // -5% to +5%
      const newPrice = price * (1 + changePercent / 100);
      setPrice(newPrice);
      setChange(changePercent);
      setIsPositive(changePercent >= 0);
    }, 3000);

    return () => clearInterval(interval);
  }, [price]);

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">FLEEK/USDT</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">
              ${price.toFixed(8)}
            </span>
            <div className={`flex items-center gap-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span className="font-medium">
                {isPositive ? '+' : ''}{change.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">24h Volume</p>
          <p className="text-lg font-semibold text-foreground">$420,690</p>
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;