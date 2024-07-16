import { Button, ButtonProps } from "primereact/button";

export default function PRButton(props: ButtonProps) {
  return <Button {...props}>{props.children}</Button>;
}
