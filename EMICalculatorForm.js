import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import useEMICalculator from '../hooks/useEMICalculator';
import useAmortizationSchedule from '../hooks/useAmortizationSchedule';
import AmortizationTable from './AmortizationTable';
import CurrencyConverter from './CurrencyConverter'; // ✅ import here

const EMICalculatorForm = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');

  const emi = useEMICalculator(Number(principal), Number(rate), Number(tenure));
  const schedule = useAmortizationSchedule(Number(principal), Number(rate), Number(tenure));

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Loan Amount (₹)"
        type="number"
        value={principal}
        onChange={e => setPrincipal(e.target.value)}
        fullWidth
      />
      <TextField
        label="Annual Interest Rate (%)"
        type="number"
        value={rate}
        onChange={e => setRate(e.target.value)}
        fullWidth
      />
      <TextField
        label="Loan Tenure (Months)"
        type="number"
        value={tenure}
        onChange={e => setTenure(e.target.value)}
        fullWidth
      />

      <Typography variant="h6" align="center">
        EMI: ₹{emi}
      </Typography>

      {/* ✅ Add currency converter below EMI */}
      {emi > 0 && <CurrencyConverter amount={emi} />}

      {/* ✅ Add amortization table if EMI is calculated */}
      {emi > 0 && schedule.length > 0 && (
        <AmortizationTable schedule={schedule} />
      )}
    </Box>
  );
};

export default EMICalculatorForm;
