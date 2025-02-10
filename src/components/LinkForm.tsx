"use client";

import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { ShimmerButton } from "./magicui/shimmer-button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function LinkForm() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!isValidUrl(url)) {
      setError("Invalid URL. Please enter a valid website address.");
      return;
    }

    startTransition(() => {
      router.push(`/${url.trim()}`);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center gap-2 flex-col sm:flex-row">
      <div className="w-full">
        <Input
          type="url"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          disabled={loading}
          className="flex-grow rounded-xl p-6"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      <ShimmerButton
        type="submit"
        shimmerColor="#ffffff"
        background="#3b0764"
        disabled={loading}>
        {loading && <Loader2 className="mr-2 animate-spin" size={30} />}
        Analyze
      </ShimmerButton>
    </form>
  );
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}
