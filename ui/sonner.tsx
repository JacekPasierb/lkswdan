"use client";

import {Toaster as SonnerToaster} from "sonner";

import {cn} from "@/lib/cn";

type ToasterProps = React.ComponentProps<typeof SonnerToaster>;

export function Toaster({className, ...props}: ToasterProps) {
  return (
    <SonnerToaster
      className={cn("toaster group", className)}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-black group-[.toaster]:text-white group-[.toaster]:border-white/10 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-white/70",
          actionButton: "group-[.toast]:bg-white group-[.toast]:text-black",
          cancelButton: "group-[.toast]:bg-white/10 group-[.toast]:text-white",
        },
      }}
      {...props}
    />
  );
}
