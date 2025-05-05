import React from 'react';
import { MenuItem, TextField, Typography, Box } from '@mui/material';
import useExchangeRates from '../hooks/useExchangeRates';
import { useCurrency } from '../context/CurrencyContext'; // ✅ use context

const CurrencyConverter = ({ amount }) => {
  const { currency, setCurrency } = useCurrency(); // ✅ get from context
  const { rates, error } = useExchangeRates('INR');

  const converted = rates[currency] ? (amount * rates[currency]).toFixed(2) : 0;

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6">Converted EMI</Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          select
          label="Currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)} // ✅ update context
          size="small"
        >
          {['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'].map((cur) => (
            <MenuItem key={cur} value={cur}>
              {cur}
            </MenuItem>
          ))}
        </TextField>

        <Typography variant="body1">
          {error ? error : `${currency} ${converted}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CurrencyConverter;
