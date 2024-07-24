import { TableDemo } from "@/app/(inside)/table-demo";
import { MuiButton, PrimeReactButton, ShadcnButton } from "@sample/components";

export default function Home() {
  return (
    <>
      <TableDemo />
      <div className="w-fit">
        <div className="flex flex-col gap-4">
          <MuiButton>MuiButton</MuiButton>
          <PrimeReactButton label="PrimeReactButton" />
          <ShadcnButton variant={"default"}>ShadcnButton</ShadcnButton>
          <ShadcnButton variant={"secondary"}>ShadcnButton</ShadcnButton>
        </div>
      </div>
    </>
  );
}
