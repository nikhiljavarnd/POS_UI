import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { useField } from "formik";

const DropdownWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">
        {configTextField.label}
      </InputLabel>
      <Select {...configTextField} labelId="demo-simple-select-label">
        {configTextField.options.map((option) => {
          return <MenuItem value={option.value}>{option.name}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default DropdownWrapper;
