import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useInView } from "react-intersection-observer";

const PricingPieChart = () => {
  const pieChartData = [
    { name: "Basic Plan", value: 150 },
    { name: "Standard Plan", value: 250 },
    { name: "Premium Plan", value: 100 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensure the animation triggers only once
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  const [animate, setAnimate] = useState(false);

  React.useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Membership Distribution by Plan</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={animate ? pieChartData : []} // Render data only when animate is true
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            isAnimationActive={animate} // Animation starts only when animate is true
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PricingPieChart;
