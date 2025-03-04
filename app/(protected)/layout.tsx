import { ReactNode } from "react";
import { Navbar } from "@/app/(protected)/_components/navbar";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-gradient-to-b from-sky-400  to-blue-800">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default ProtectedLayout;