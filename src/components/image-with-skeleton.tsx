"use client";

import { useState, useEffect } from "react";
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
  src,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isCached, setIsCached] = useState(false);

  useEffect(() => {
    const checkImageCache = () => {
      if (typeof window === "undefined" || !src) return;

      const imageUrl = typeof src === "string" ? src : (src as any)?.src || "";

      if (!imageUrl) return;

      const img = new window.Image();
      img.src = imageUrl;

      if (img.complete) {
        setIsCached(true);
        setIsLoading(false);
        return;
      }

      img.onload = () => {
        setIsCached(true);
        setIsLoading(false);
      };

      img.onerror = () => {
        setIsLoading(false);
      };
    };

    checkImageCache();
  }, [src]);

  return (
    <div className="relative inline-block w-full">
      {isLoading && !isCached && (
        <Skeleton
          className={cn(
            "absolute inset-0 z-10 w-full h-full",
            skeletonClassName || className,
          )}
        />
      )}
      <Image
        {...props}
        src={src}
        className={cn(className, isLoading && !isCached && "opacity-0")}
        onLoad={(e) => {
          setIsLoading(false);
          setIsCached(true);
          onLoad?.(e);
        }}
        onLoadingComplete={(img) => {
          setIsLoading(false);
          setIsCached(true);

          if (
            "onLoadingComplete" in props &&
            typeof (props as any).onLoad === "function"
          ) {
            (props as any).onLoadingComplete(img);
          }
        }}
        style={{
          transition: isCached ? "none" : "opacity 0.3s ease-in-out",
          ...props.style,
        }}
      />
    </div>
  );
}
