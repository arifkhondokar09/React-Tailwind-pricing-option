import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const StudentBarChart = () => {
  const studentMarks = [
    { name: "Arif", math: 92 },
    { name: "Sumaiya", math: 81 },
    { name: "Sojib", math: 95 },
    { name: "Walid", math: 60 },
  ];

  return (
    <ResponsiveContainer width={400} height={300}>
      <BarChart data={studentMarks} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="math" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StudentBarChart;
