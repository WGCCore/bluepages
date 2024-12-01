import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

const blueTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#90caf9',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const App = () => {
  const [businesses, setBusinesses] = useState([
    {
      name: 'Jamin.Electrical',
      phone: '+61 455949718',
      email: '',
      category: 'Electrical',
      services: 'Electrical',
      comments: [],
    },
    {
      name: 'Dylan',
      phone: '+61 421 726 027',
      email: 'dylan@fomofinance.com.au',
      category: 'Home loans',
      comments: [
        'Suneel: Highly recommend Dylan, We have been using his lending services from 7 years now',
      ],
    },
    {
      name: 'Shiva Blinds',
      phone: '+61 401 508 413',
      email: '',
      category: 'Home improvements',
      services: 'Blinds, Security doors',
      comments: [''],
    },
    {
      name: 'EquityWise',
      phone: '',
      email: '',
      category: 'Real Estate Agent',
      services: 'Rental/Leasing',
      comments: [''],
    },
  ]);

  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const handleSelectBusiness = (index) => {
    setSelectedBusiness(businesses[index]);
  };

  return (
    <ThemeProvider theme={blueTheme}>
      <CssBaseline />
      <Container maxWidth='md' sx={{ mt: 4 }}>
        <Typography variant='h4' color='primary' gutterBottom>
          Business Directory
        </Typography>

        {/* Directory Table */}
        <Typography variant='h6' color='primary' gutterBottom>
          Directory List
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Business/Tradie Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Phone Number</strong>
                </TableCell>
                <TableCell>
                  <strong>Email Address</strong>
                </TableCell>
                <TableCell>
                  <strong>Action</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {businesses.map((business, index) => (
                <TableRow key={index}>
                  <TableCell>{business.name}</TableCell>
                  <TableCell>{business.category}</TableCell>
                  <TableCell>{business.phone}</TableCell>
                  <TableCell>{business.email}</TableCell>
                  <TableCell>
                    <Button
                      variant='outlined'
                      color='primary'
                      onClick={() => handleSelectBusiness(index)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Read-Only Form */}
        {selectedBusiness && (
          <Box
            sx={{
              p: 3,
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography variant='h6' gutterBottom>
              View Business Details
            </Typography>
            <TextField
              readOnly
              fullWidth
              label='Business Name'
              value={selectedBusiness.name}
              InputProps={{
                readOnly: true,
              }}
              margin='normal'
            />
            <TextField
              readOnly
              fullWidth
              label='Phone Number'
              value={selectedBusiness.phone}
              InputProps={{
                readOnly: true,
              }}
              margin='normal'
            />
            <TextField
              readOnly
              fullWidth
              label='Email Address'
              value={selectedBusiness.email}
              InputProps={{
                readOnly: true,
              }}
              margin='normal'
            />
            {selectedBusiness.comments.forEach((element) => {
              <TextField
                readOnly
                fullWidth
                label='Comments'
                value={element}
                margin='normal'
              />;
            })}
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
