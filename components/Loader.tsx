import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoaderCircle } from "lucide-react";

const Loader = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-zoo-teal-700 flex items-center justify-center">
        <div className="flex justify-center items-center py-10">
          <LoaderCircle className="h-12 w-12 animate-spin text-white" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Loader;
