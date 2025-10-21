import { SiteHeader } from "@/components/site-header";
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <InputGroup>
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput />
        </InputGroup>
        {/* <DataTable data={data} /> */}
      </div>
    </>
  );
}
