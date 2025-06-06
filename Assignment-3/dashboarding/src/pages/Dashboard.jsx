import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

// Sample user data
const users = [
  { name: 'Alice', gender: 'Female', marks: 85 },
  { name: 'Bob', gender: 'Male', marks: 45 },
  { name: 'Charlie', gender: 'Male', marks: 72 },
  { name: 'Diana', gender: 'Female', marks: 59 },
  { name: 'Eve', gender: 'Female', marks: 91 },
  { name: 'Frank', gender: 'Male', marks: 38 },
];

// Data for bar chart
const barData = [
  {
    category: 'Pass',
    Male: users.filter(u => u.gender === 'Male' && u.marks >= 50).length,
    Female: users.filter(u => u.gender === 'Female' && u.marks >= 50).length,
  },
  {
    category: 'Fail',
    Male: users.filter(u => u.gender === 'Male' && u.marks < 50).length,
    Female: users.filter(u => u.gender === 'Female' && u.marks < 50).length,
  }
];

// Data for pie chart
const pieData = [
  { name: 'Pass', value: users.filter(u => u.marks >= 50).length },
  { name: 'Fail', value: users.filter(u => u.marks < 50).length },
];

const pieColors = ['#4caf50', '#f44336'];

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Admin Dashboard
      </Typography>

      {/* Chart Section */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        {/* Bar Chart Card */}
        <Paper elevation={3} sx={{ width: '49%', height: 400, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Pass/Fail by Gender
          </Typography>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={barData}>
              <XAxis dataKey="category" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Male" fill="#2196f3" />
              <Bar dataKey="Female" fill="#e91e63" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>

        {/* Pie Chart Card */}
        <Paper elevation={3} sx={{ width: '49%', height: 400, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Total Pass vs Fail
          </Typography>
          <ResponsiveContainer width="100%" height="85%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
