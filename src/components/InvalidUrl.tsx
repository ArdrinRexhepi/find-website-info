import { AlertCircle, ArrowLeft } from "lucide-react";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const InvalidUrl = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900/85">
      <div className="max-w-2xl w-full bg-zinc-300/85 shadow-lg rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <AlertCircle className="text-red-500" size={75} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Invalid URL</h1>
        <p className="text-gray-800 mb-5">
          The URL you entered is not valid. Please check and try again.
        </p>
        <Button variant="default" asChild>
          <Link href="/" prefetch={true}>
            <ArrowLeft size={4} /> Go to main page
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default InvalidUrl;
