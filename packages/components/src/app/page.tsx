import { default as MuiButton } from "@/components/mui/button";
import { default as PrimeReactButton } from "@/components/primereact/button";
import { Button as ShadcnButton } from "@/components/shadcn/button";

export default function Home() {
  return (
    <div>
      <ShadcnButton>Button from Shadcn</ShadcnButton>
      <MuiButton>Button from Mui</MuiButton>
      <PrimeReactButton>Button from PrimeReact</PrimeReactButton>
    </div>
  );
}
