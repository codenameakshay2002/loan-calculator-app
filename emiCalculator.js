// Formula: EMI = [P x R x (1+R)^N] / [(1+R)^N – 1]
// P = Principal loan amount
// R = Monthly interest rate
// N = Loan tenure in months

export const calculateEMI = (principal, annualRate, tenureMonths) => {
    if (!principal || !annualRate || !tenureMonths) return 0;
  
    const monthlyRate = annualRate / 12 / 100;
    const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths);
    const denominator = Math.pow(1 + monthlyRate, tenureMonths) - 1;
    const emi = numerator / denominator;
  
    return parseFloat(emi.toFixed(2));
  };
  