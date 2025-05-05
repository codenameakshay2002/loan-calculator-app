import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AmortizationTable = ({ schedule }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>EMI (₹)</TableCell>
            <TableCell>Principal (₹)</TableCell>
            <TableCell>Interest (₹)</TableCell>
            <TableCell>Balance (₹)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((row) => (
            <TableRow key={row.month}>
              <TableCell>{row.month}</TableCell>
              <TableCell>{row.emi}</TableCell>
              <TableCell>{row.principal}</TableCell>
              <TableCell>{row.interest}</TableCell>
              <TableCell>{row.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AmortizationTable;

