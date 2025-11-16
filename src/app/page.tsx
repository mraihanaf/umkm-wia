"use client";
import { SiteHeader } from "@/components/site-header";
import { ImageWithSkeleton } from "@/components/image-with-skeleton";
import { smallBusinessData } from "@/data/umkmData";
import { DataTable } from "@/components/data-table";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const animated = sessionStorage.getItem("homeHeadingAnimated") === "true";
    if (animated) {
      setHasAnimated(true);
    } else {
      sessionStorage.setItem("homeHeadingAnimated", "true");
    }
  }, []);

  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <div className="grid items-start min-h-screen gap-12 py-20 sm:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-6 flex-wrap-reverse">
          <div className="space-y-2 text-center lg:text-left grid place-content-center">
            {mounted && hasAnimated ? (
              <>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Temukan <span className="text-primary">UMKM</span> Terbaik di
                  Sekitar Kita
                </h1>
                <p>
                  Kenali pelaku usaha yang membangun ekonomi kecil dari
                  lingkungan kita sendiri.
                </p>
              </>
            ) : (
              <>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-5xl font-bold"
                >
                  Temukan <span className="text-primary">UMKM</span> Terbaik di
                  Sekitar Kita
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Kenali pelaku usaha yang membangun ekonomi kecil dari
                  lingkungan kita sendiri.
                </motion.p>
              </>
            )}
          </div>
          <ImageWithSkeleton
            src={"/hero.webp"}
            alt=""
            width={2000}
            height={2000}
            className="hidden lg:block rounded-md"
            skeletonClassName="rounded-md"
          />
        </div>
        <DataTable data={smallBusinessData} />
      </div>
    </div>
  );
}
