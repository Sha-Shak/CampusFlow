import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import industriesData from '../../assets/industriesList.json';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const SelectIndustry = () => {
  const industries = industriesData.industries;

  const option = industries.map((industry) => {
    return industry;
  });

  console.log(option);
  return (
    <div className="p-24">
      <Autocomplete
        multiple
        options={option}
        // limitTags={4}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </li>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Project Category"
            placeholder="Select Category"
          />
        )}
      />
    </div>
  );
};

export default SelectIndustry;
