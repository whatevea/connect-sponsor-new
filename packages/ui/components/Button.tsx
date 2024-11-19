import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export const Button = ({ children, ...props }: MuiButtonProps) => {
  return <MuiButton {...props}>{children}</MuiButton>;
};
