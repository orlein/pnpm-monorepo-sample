import Button, { ButtonProps } from "@mui/material/Button";

export default function MuiButton(props: ButtonProps) {
  return <Button {...props}>{props.children}</Button>;
}
