import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'bfe2094f2c9a94e150498d71'; // 🔁 Replace this with your actual key

const useExchangeRates = (base = 'INR') => {
  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base}`);
        setRates(res.data.conversion_rates || {});
      } catch (err) {
        setError('Failed to fetch exchange rates');
      }
    };

    fetchRates();
  }, [base]);

  return { rates, error };
};

export default useExchangeRates;
