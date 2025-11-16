"use client";
// src/pages/DetailSmallBusinessPage.tsx
// import { useParams } from "react-router-dom";
import { useParams } from "next/navigation";
import { smallBusinessData } from "@/data/umkmData";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageWithSkeleton } from "@/components/image-with-skeleton";

export default function DetailSmallBusinessPage() {
  const { id } = useParams<{ id: string }>();
  const business = smallBusinessData.find((item) => item.id === id);

  if (!business) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-semibold text-secondary-foreground">
          SmallBusiness tidak ditemukan
        </h1>
        <p className="text-foreground mt-2">
          Periksa kembali ID yang kamu akses.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden">
        <div className="p-4 border-b bg-background flex items-center">
          <Link
            href={"/"}
            className="flex items-center gap-2 text-foreground hover:text-secondary-foreground transition"
          >
            <ArrowLeft />
            <span>Kembali</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-background flex items-center justify-center">
            <ImageWithSkeleton
              src={business.logo}
              alt={business.businessName}
              height={2000}
              width={2000}
              className="object-cover w-48 h-48 m-6 rounded-xl"
              skeletonClassName="w-48 h-48 m-6 rounded-xl"
            />
          </div>

          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold text-secondary-foreground mb-2">
              {business.businessName}
            </h1>
            <p className="text-foreground italic mb-2">{business.type}</p>
            <p className="text-secondary-foreground mb-4">
              {business.description}
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-foreground">
              <p>
                Tahun berdiri:{" "}
                {business.foundedYear && business.foundedYear > 0
                  ? business.foundedYear
                  : "Tidak diketahui"}
              </p>
              {" | "}
              <p>Pemilik: {business.ownerName}</p>
              {" | "}
              <p>
                Rating: ⭐{" "}
                {business.ratings && business.ratings > 0
                  ? business.ratings.toFixed(1)
                  : "Belum ada rating"}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t p-6">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-4">
            Produk Unggulan
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {business.products.map((product, index) => (
              <div key={index} className="bg-background rounded-xl shadow p-4">
                <ImageWithSkeleton
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={160}
                  className="object-cover w-full h-40 rounded-lg mb-3"
                  skeletonClassName="w-full h-40 rounded-lg mb-3"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-foreground mt-1">
                  Rp{product.price.toLocaleString("id-ID")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t p-6">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">
            Alamat
          </h2>
          <p className="text-secondary-foreground">
            {business.address.streetName} No. {business.address.number},{" "}
            {business.address.city}, {business.address.postalCode}
          </p>
          <br />
          {/* <SmallBusinessMap
            lat={business.address.latitude}
            lng={business.address.longitude}
            nama={business.businessName}
          /> */}
          <iframe
            src={business.address.embed}
            width="600"
            height="450"
            className="border-0 rounded-lg w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="border-t p-6">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">
            Jam Operasional
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-secondary-foreground">
            {business.operatingHours.map((schedule, i) => (
              <p key={i}>
                {schedule.day.charAt(0).toUpperCase() + schedule.day.slice(1)}:{" "}
                {schedule.isOpen ? schedule.hours : "Tutup"}
              </p>
            ))}
          </div>
        </div>

        <div className="border-t p-6">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">
            Sosial Media
          </h2>
          <ul className="text-secondary-foreground">
            {Object.entries(business.socialMedia).map(
              ([platform, handle], i) => (
                <li key={i}>
                  <span className="capitalize">{platform}: </span>
                  <a
                    href={`https://${handle.replace("@", "instagram.com/")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {handle}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="border-t p-6 text-sm text-foreground text-right">
          Terdaftar sejak {business.createdAt.day} {business.createdAt.month}{" "}
          {business.createdAt.year} • {business.createdAt.hours}
        </div>
      </div>
    </div>
  );
}
