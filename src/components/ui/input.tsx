import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
  currency?: string;
  wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      startIcon,
      endIcon,
      currency,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    const StartIcon = startIcon;
    const EndIcon = endIcon;
    return (
      <div className={cn("relative w-full", wrapperClassName)}>
        {StartIcon && (
          <div className="absolute left-2 top-1/2 -translate-y-1/2 transform">
            <StartIcon size={18} className="text-muted-foreground" />
          </div>
        )}

        <input
          type={type}
          className={cn(
            `h-9 w-full rounded-md border p-3 text-base text-gray-900 outline-none transition-all focus-within:border-purple-7  00 focus:border-transparent focus:ring-[3px] focus:ring-purple-700/50 disabled:cursor-not-allowed disabled:bg-gray-100 data-[error]:border-transparent data-[error]:ring-[3px] data-[error]:ring-red-400 sm:text-sm`,
            startIcon ? "pl-8" : "",
            endIcon ? "pr-8" : "",
            currency ? "pr-8" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
            <EndIcon className="text-muted-foreground" size={18} />
          </div>
        )}
        {currency && (
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500">
            {currency}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
