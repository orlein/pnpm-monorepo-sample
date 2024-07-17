import { PropsWithChildren } from "react";

export default function LoginLayout(props: PropsWithChildren) {
  return (
    <div>
      <p>Login Outside Layout</p>
      {props.children}
    </div>
  );
}
