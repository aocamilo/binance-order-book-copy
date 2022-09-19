import { Container, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import { decimalAggregatorOptions } from '../../constants';
import { useConfigContext } from '../contexts';

const SelectComponent = () => {
  const { decimalAggregation, changeDecimalAggregation } = useConfigContext();
  const [decimalAggregator, setDecimalAggregator] = useState(decimalAggregation);

  const handleChange = (event: SelectChangeEvent) => {
    setDecimalAggregator(Number(event.target.value));
    changeDecimalAggregation(Number(event.target.value));
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'reverse-row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        maxWidth: 320,
        padding: 0,
        wrap: 'nowrap',
      }}
    >
      <FormControl variant="standard" sx={{ m: 1 }}>
        <Select
          id="decimal-place-aggregator-select"
          value={decimalAggregator.toString()}
          onChange={handleChange}
          data-testid="select-input"
        >
          {decimalAggregatorOptions.map((option) => (
            <MenuItem key={`agg-select-${option}`} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default SelectComponent;
