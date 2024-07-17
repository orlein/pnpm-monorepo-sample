import { PropsWithChildren } from "react";

export default function InsideLayout(props: PropsWithChildren) {
  return (
    <div>
      <p>Inside Layout</p>
      {props.children}
    </div>
  );
}
