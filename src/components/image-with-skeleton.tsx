"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps extends React.ComponentProps<typeof Image> {
  skeletonClassName?: string;
}

export function ImageWithSkeleton({
  className,
  skeletonClassName,
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <Skeleton
          className={cn(
            "absolute inset-0 z-10",
            skeletonClassName || className,
          )}
        />
      )}
      <Image
        {...props}
        className={cn(className, isLoading && "opacity-0")}
        onLoad={(e) => {
          setIsLoading(false);
          onLoad?.(e);
        }}
        style={{
          transition: "opacity 0.3s ease-in-out",
          ...props.style,
        }}
      />
    </div>
  );
}
