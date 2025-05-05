import React from 'react';
import ThemeToggle from '../components/ThemeToggle';
import EMICalculatorForm from '../components/EMICalculatorForm';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <ThemeToggle />
      <Typography variant="h4" gutterBottom align="center">
        Loan Calculator Dashboard
      </Typography>
      <EMICalculatorForm />
    </Container>
  );
};

export default Home;
