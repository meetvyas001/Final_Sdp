// src/Pages/ServiceHistory.js
import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const serviceHistory = [
  {
    date: '2025-02-01',
    service: 'Oil Change',
    mechanic: 'John Doe',
    cost: 50,
    notes: 'Changed oil and filter',
  },
  {
    date: '2025-01-15',
    service: 'Brake Repair',
    mechanic: 'Jane Smith',
    cost: 200,
    notes: 'Replaced brake pads',
  },
];

const ServiceHistory = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Service History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Mechanic</TableCell>
              <TableCell>Cost ($)</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceHistory.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.service}</TableCell>
                <TableCell>{entry.mechanic}</TableCell>
                <TableCell>{entry.cost}</TableCell>
                <TableCell>{entry.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ServiceHistory;
