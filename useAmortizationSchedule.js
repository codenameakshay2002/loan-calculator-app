import { useState, useEffect } from 'react';
import { generateAmortizationSchedule } from '../utils/amortizationSchedule';

const useAmortizationSchedule = (principal, rate, tenure) => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const result = generateAmortizationSchedule(principal, rate, tenure);
    setSchedule(result);
  }, [principal, rate, tenure]);

  return schedule;
};

export default useAmortizationSchedule;
