import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Container } from '@material-ui/core';

export default function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              id="standard-basic"
              label="Nome"
              margin="normal"
              fullWidth
            />
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={3}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Data de nascimento"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Hora de nascimento"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="standard-basic"
                label="Cidade"
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="standard-basic"
                label="Estado"
                margin="normal"
                fullWidth
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Button variant="contained" color="primary">
          Cadastrar
        </Button>
      </Container>
    </>
  );
}
