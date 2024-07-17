import { PropsWithChildren } from "react";

export default function InsideLayout(props: PropsWithChildren) {
  return (
    <div>
      <p>Outside!</p>
      {props.children}
    </div>
  );
}
