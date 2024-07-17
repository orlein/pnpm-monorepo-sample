import { MuiButton, PrimeReactButton, ShadcnButton } from "@sample/components";

export default function Home() {
  return (
    <div className="bg-slate-600 w-fit">
      <div className="flex flex-col gap-4">
        <MuiButton>MuiButton</MuiButton>
        <PrimeReactButton label="PrimeReactButton" />
        <ShadcnButton variant={"default"}>ShadcnButton</ShadcnButton>
        <ShadcnButton variant={"secondary"}>ShadcnButton</ShadcnButton>
      </div>
    </div>
  );
}
