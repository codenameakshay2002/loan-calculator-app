import { useState, useEffect } from 'react';
import { calculateEMI } from '../utils/emiCalculator';

const useEMICalculator = (principal, rate, tenure) => {
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const calculated = calculateEMI(principal, rate, tenure);
    setEmi(calculated);
  }, [principal, rate, tenure]);

  return emi;
};

export default useEMICalculator;
