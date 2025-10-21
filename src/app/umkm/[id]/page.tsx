// app/umkm/[id]/page.tsx
"use client"; // Pastikan ini ada jika menggunakan App Router

import React from "react";
import { umkmData, UMKM } from "@/data/umkmData"; // Import data yang sudah Anda buat
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  DollarSign,
  Star,
  ArrowLeft,
  Instagram,
} from "lucide-react";
import { useParams } from "next/navigation";
// import { useRouter } from 'next/navigation'; // Jika ingin mengarahkan kembali

// Definisikan tipe untuk props yang diterima dari route params
interface UMKMDetailPageProps {
  params: {
    id: number; // ID diambil dari folder [id]
  };
}

// Fungsi untuk format mata uang Rupiah
const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
};

// --- KOMPONEN UTAMA ---
const UMKMDetailPage: React.FC<UMKMDetailPageProps> = () => {
  // const router = useRouter();

  // 1. Ambil ID dari params dan konversi ke number (index array)

  const { id: umkmId } = useParams();
  const umkm = umkmData[umkmId];

  if (isNaN(umkmId) || !umkm) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold">UMKM Tidak Ditemukan</h1>
        <p className="text-muted-foreground">
          ID UMKM tidak valid atau data tidak ada.
        </p>
        <Button onClick={() => window.history.back()} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Direktori
        </Button>
      </div>
    );
  }

  // Menentukan status operasional saat ini (simulasi)
  const today = new Date()
    .toLocaleDateString("id-ID", { weekday: "long" })
    .toLowerCase();
  const todayOp = umkm.operasional.find((op) => op.hari === today);
  const isOpen = todayOp?.operasional;
  const statusColor = isOpen
    ? "bg-green-500 hover:bg-green-600"
    : "bg-red-500 hover:bg-red-600";
  const statusText = isOpen ? `BUKA | ${todayOp?.jam}` : "TUTUP";

  // URL Map Embed (Placeholder)
  const mapUrl = `https://maps.google.com/maps?q=${umkm.alamat.altitude},${umkm.alamat.longitude}&z=15&output=embed`;

  // --- SUB-KOMPONEN ---

  const GallerySection = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Galeri Foto</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {umkm.galery.map((img, index) => (
          // Dalam proyek nyata, ganti <img> dengan komponen <Image> Next.js
          <img
            key={index}
            src={img}
            alt={`Foto ${umkm.nama_usaha} ${index + 1}`}
            className="w-full h-32 object-cover rounded-lg shadow-md transition-transform hover:scale-[1.02]"
          />
        ))}
      </div>
    </div>
  );

  const ProductSection = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <DollarSign className="mr-2 h-5 w-5 text-primary" /> Produk/Menu
          Populer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {umkm.nama_produk.map((produk, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b last:border-b-0"
            >
              <span className="font-medium">{produk.nama}</span>
              <span className="text-primary font-bold">
                {formatRupiah(produk.harga)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const OperasionalSection = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="mr-2 h-5 w-5 text-primary" /> Jam Operasional
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {umkm.operasional.map((op, index) => (
            <div key={index} className="flex justify-between">
              <span
                className={`capitalize ${op.operasional ? "font-medium" : "text-muted-foreground line-through"}`}
              >
                {op.hari}
              </span>
              <span
                className={
                  op.operasional
                    ? "text-foreground"
                    : "text-red-500 font-medium"
                }
              >
                {op.operasional ? op.jam : "Tutup"}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  // --- TAMPILAN PAGE ---
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-6 space-x-2">
        <Button variant="ghost" onClick={() => window.history.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          {umkm.nama_usaha}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom Kiri: Informasi Utama dan Galeri */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header Utama */}
          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Ganti dengan Logo UMKM yang sebenarnya */}
                <span className="text-xl font-bold">
                  {umkm.nama_usaha.slice(0, 1)}
                </span>
              </div>
              <div>
                <h2 className="text-4xl font-bold">{umkm.nama_usaha}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {umkm.kategori}
                  </Badge>
                  <Badge className={`${statusColor}`}>{statusText}</Badge>
                </div>
              </div>
            </div>

            {/* Rating dan Deskripsi Singkat */}
            <div className="flex items-center space-x-4 text-lg font-medium mb-4">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span>
                {umkm.ratings.rata_rata} ({umkm.ratings.jumlah_review} reviews)
              </span>
            </div>

            <p className="text-lg text-muted-foreground">{umkm.deskripsi}</p>
          </Card>

          {/* Galeri */}
          <Card className="p-6">
            <GallerySection />
          </Card>

          {/* Embed Peta Lokasi (Wajib) */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-primary" /> Lokasi UMKM
            </h2>
            <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden">
              {/* Simulasi embed map */}
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
                Map Embed Placeholder
              </div>
            </div>
            <p className="font-medium">
              {umkm.alamat.nama_jalan} No. {umkm.alamat.nomor},{" "}
              {umkm.alamat.kota} {umkm.alamat.kode_pos}
            </p>
          </Card>
        </div>

        {/* Kolom Kanan: Detail & Kontak */}
        <div className="lg:col-span-1 space-y-8">
          {/* Kontak Cepat */}
          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Kontak & Akses</h2>
            <Button className="w-full bg-green-500 hover:bg-green-600">
              <Phone className="mr-2 h-4 w-4" /> Hubungi via Telepon
            </Button>
            <Button className="w-full" variant="outline" asChild>
              <a href={`mailto:${umkm.alamat_email}`}>
                <Mail className="mr-2 h-4 w-4" /> Kirim Email
              </a>
            </Button>
            {umkm.sosial_media.instagram && (
              <Button className="w-full" variant="secondary" asChild>
                <a
                  href={`https://instagram.com/${umkm.sosial_media.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-4 w-4" /> Instagram
                </a>
              </Button>
            )}
          </Card>

          {/* Jam Operasional */}
          <OperasionalSection />

          {/* Produk Populer */}
          <ProductSection />

          {/* Info Tambahan */}
          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Layanan Lainnya</h2>
            <div className="flex flex-wrap gap-2">
              <h3 className="w-full text-sm font-medium text-muted-foreground">
                Pembayaran
              </h3>
              {umkm.pembayaran.map((p) => (
                <Badge key={p} variant="default">
                  {p}
                </Badge>
              ))}
            </div>
            <Separator />
            <div className="flex flex-wrap gap-2">
              <h3 className="w-full text-sm font-medium text-muted-foreground">
                Pengiriman
              </h3>
              {umkm.pengiriman.map((p) => (
                <Badge key={p} variant="outline">
                  {p}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UMKMDetailPage;
