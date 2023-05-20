import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { getCompanyName } from '../../../Services/curnchBase.service';
import CircularProgress from '@mui/material/CircularProgress';
import Chip from '@mui/material/Chip';

export default function CompanyNameAutocomplete({ setThirdPartyApis }) {
  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [suggestedOptions, setSuggestedOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (inputValue.length > 3) fetchOptions(inputValue);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue]);

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const handleAutocompleteChange = (event, newValue) => {
    setSelectedOptions(newValue);
    setThirdPartyApis(newValue.map((option) => option.name));
  };

  const fetchOptions = async (searchValue) => {
    setLoading(true);
    const companyData = await getCompanyName(searchValue);
    if (companyData) {
      const parsedOptions = companyData.entities.map((entity) => ({
        name: entity?.identifier?.value,
        description: entity?.short_description,
      }));
      setSuggestedOptions(parsedOptions);
    } else {
      setSuggestedOptions([]);
    }
    setLoading(false);
  };

  return (
    <Autocomplete
      sx={{ mt: 1 }}
      multiple
      options={suggestedOptions}
      getOptionLabel={(option) => option.name}
      loading={loading}
      onChange={handleAutocompleteChange}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      // value={selectedOptions}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={index}
            variant="outlined"
            label={option.name}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="Third Party API"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {params.InputProps.endAdornment}
                {loading && <CircularProgress color="inherit" size={20} />}
              </>
            ),
          }}
        />
      )}
    />
  );
}
