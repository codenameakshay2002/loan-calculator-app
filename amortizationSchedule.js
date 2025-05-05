export const generateAmortizationSchedule = (principal, annualRate, tenureMonths) => {
    const schedule = [];
  
    if (!principal || !annualRate || !tenureMonths) return schedule;
  
    const monthlyRate = annualRate / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
                (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  
    let balance = principal;
  
    for (let month = 1; month <= tenureMonths; month++) {
      const interest = balance * monthlyRate;
      const principalComponent = emi - interest;
      balance -= principalComponent;
  
      schedule.push({
        month,
        emi: parseFloat(emi.toFixed(2)),
        principal: parseFloat(principalComponent.toFixed(2)),
        interest: parseFloat(interest.toFixed(2)),
        balance: parseFloat(balance > 0 ? balance.toFixed(2) : 0),
      });
    }
  
    return schedule;
  };
  