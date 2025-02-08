"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ShimmerButton } from "./magicui/shimmer-button";
import { useRouter } from "next/navigation";

export default function LinkForm() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the URL to your backend for processing
    console.log("Submitted URL:", url);
    // Reset the input field
    setUrl("");
    router.push(`/${url.trim()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center gap-2 flex-col sm:flex-row">
      <Input
        type="url"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        className="flex-grow rounded-xl p-6"
      />
      <ShimmerButton type="submit" shimmerColor="#ffffff" background="#3b0764">
        Analyze
      </ShimmerButton>
    </form>
  );
}
