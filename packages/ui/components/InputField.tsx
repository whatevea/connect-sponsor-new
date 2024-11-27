import React from "react";

import Input, { InputProps } from "@mui/material/Input";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import InputLabel, { InputLabelProps } from "@mui/material/InputLabel";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type Props = FormControlProps | InputLabelProps | InputProps;

type InputFieldProps = Props & {
  border?: boolean;
  label?: string;
  type?: string;
  placeholder?: string;
};

export const InputField = ({
  label,
  border = false,
  placeholder = "",
  type,
  ...props
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl focused variant="standard" {...(props as FormControlProps)}>
      <InputLabel htmlFor="component-simple" {...(props as InputLabelProps)}>
        {label}
      </InputLabel>
      <Input
        id="component-simple"
        placeholder={placeholder}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        {...(props as InputProps)}
        sx={{
          borderRadius: border ? "12px" : "9px",
          border: border ? ".8px solid #D0D0D0" : "none",
          fontWeight: 500,
          fontSize: "16px",
          backgroundColor: "#fff",
          padding: "10px",
          color: "black",

          "& .MuiInputBase-input::placeholder": {
            color: "#333333",
            fontSize: "14px",
          },
        }}
        endAdornment={
          type === "password" ? (
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                sx={{ padding: 0 }}
              >
                {showPassword ? (
                  <VisibilityOff fontSize="small" />
                ) : (
                  <Visibility fontSize="small" />
                )}
              </IconButton>
            </InputAdornment>
          ) : null
        }
      />
    </FormControl>
  );
};
