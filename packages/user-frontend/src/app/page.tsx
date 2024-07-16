import { MuiButton, PrimeReactButton, ShadcnButton } from "@sample/components";

export default function Home() {
  return (
    <div className="bg-slate-600">
      <MuiButton>MuiButton</MuiButton>
      <PrimeReactButton label="PrimeReactButton" />
      <ShadcnButton variant={"secondary"}>ShadcnButton</ShadcnButton>
    </div>
  );
}
