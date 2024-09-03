import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const ProgressChart = () => {

    const progressData = [
        { week: "Week 1", weight: 150 },
   
        { week: "Week 3", weight: 148 },
       
        { week: "Week 5", weight: 142 },
   
        { week: "Week 7", weight: 137 },
       
        { week: "Week 9", weight: 132 },
       
        { week: "Week 11", weight: 129 },
        { week: "Week 12", weight: 125 },
      ];
      
    return (
        <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Weight Loss Progress</h2>

<ResponsiveContainer width="100%" height={400}>
        <LineChart data={progressData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis domain={[100,150]} />
          <Tooltip />
          <Line type="monotone" dataKey="weight" stroke="#007BFF" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
                
        </div>
    );
};

export default ProgressChart;