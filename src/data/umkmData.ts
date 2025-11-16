export interface Address {
    streetName: string;
    number: string;
    city: string;
    postalCode: number;
    longitude: number;
    latitude: number;
    embed: string;
}

export interface OperatingHours {
    day: string;
    isOpen: boolean;
    hours: string;
}

export interface Product {
    name: string;
    price: number;
    image: string;
}

export interface SmallBusiness {
    id: string;
    businessName: string;
    type: string;
    description: string;
    foundedYear: number;
    ownerName: string;
    phoneNumber: string;
    email: string;
    address: Address;
    operatingHours: OperatingHours[];
    products: Product[];
    category: string;
    logo: string;
    gallery: string[];
    video: string;
    socialMedia: { [key: string]: string } | never[];
    ratings: number;
    paymentMethods: string[];
    shippingMethods: string[];
    targetCustomers: string[];
    createdAt: {
        day: string;
        date: number;
        month: string;
        year: number;
        hours: string;
    };
}

// Data dummy (menggunakan 3 data pertama untuk ringkasan)
// Masukkan data JSON 10 UMKM Anda di sini, pastikan formatnya benar
// Contoh data pertama (Kedai Kopi Senja):
export const smallBusinessData: SmallBusiness[] = [
    {
        id: "1",
        businessName: "Setia Laundry",
        type: "Laundry",
        description:
            "Setia Laundry menyediakan jasa laundry kiloan dan satuan dengan harga terjangkau untuk orang dewasa dan pekerja. Buka setiap hari dari pagi hingga malam.",
        foundedYear: 0,
        ownerName: "Heri Setiawan",
        phoneNumber: "082126666754",
        email: "sunartisetiawan2@gmail.com",
        address: {
            streetName: "Taruna",
            number: "10a",
            city: "Jakarta Pusat",
            postalCode: 10650,
            longitude: -6.1601255,
            latitude: 106.8598526,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.923770565865!2d106.8597029028102!3d-6.160168217025901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f50865e36017%3A0x7d8950b44a08a807!2sSetia%20Wash%20Laundry!5e0!3m2!1sid!2sid!4v1762061882929!5m2!1sid!2sid",
        },
        operatingHours: [
            {
                day: "Senin",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Selasa",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Rabu",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Kamis",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Jumat",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Sabtu",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Minggu",
                isOpen: true,
                hours: "07:00-20:00",
            },
        ],
        products: [
            {
                name: "Kiloan",
                price: 7000,
                image: "/images/setia_laundry/image1.webp",
            },
            {
                name: "Jas",
                price: 35000,
                image: "/images/setia_laundry/image2.webp",
            },
            {
                name: "Toga",
                price: 20000,
                image: "/images/setia_laundry/image0.webp",
            },
        ],
        category: "Jasa",
        logo: "/images/setia_laundry/image2.webp",
        gallery: [],
        video: "",
        socialMedia: [],
        ratings: 0,
        paymentMethods: ["Cash", "Qris"],
        shippingMethods: ["Gojek", "Take in", "Delivery"],
        targetCustomers: ["Orang Dewasa", "Pekerja"],
        createdAt: {
            day: "Senin",
            date: 20,
            month: "Oktober",
            year: 2025,
            hours: "21:29",
        },
    },
    {
        id: "2",
        businessName: "Kopi Sejuta Jiwa",
        type: "Kedai Kopi",
        description:
            "Kopi Sejuta Jiwa menawarkan berbagai varian es kopi kekinian dengan harga ekonomis yang cocok untuk remaja sekolah dan pekerja kantoran. Buka weekdays pagi hingga sore.",
        foundedYear: 0,
        ownerName: "Kak Niko",
        phoneNumber: "",
        email: "",
        address: {
            streetName: "Jl. Budi Utomo",
            number: "No.13",
            city: "Jakarta Pusat",
            postalCode: 10710,
            longitude: -6.1674252,
            latitude: 106.8363919,
            embed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d701.2245936293085!2d106.83621430890427!3d-6.16752510600077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1762062085285!5m2!1sid!2sid",
        },
        operatingHours: [
            {
                day: "Senin",
                isOpen: true,
                hours: "07:00-15:00",
            },
            {
                day: "Selasa",
                isOpen: true,
                hours: "07:00-15:00",
            },
            {
                day: "Rabu",
                isOpen: true,
                hours: "07:00-15:00",
            },
            {
                day: "Kamis",
                isOpen: true,
                hours: "07:00-15:00",
            },
            {
                day: "Jumat",
                isOpen: true,
                hours: "07:00-15:00",
            },
            {
                day: "Sabtu",
                isOpen: false,
                hours: "09:00-18:00",
            },
            {
                day: "Minggu",
                isOpen: false,
                hours: "",
            },
        ],
        products: [
            {
                name: "Es Kopi Sejuta Video",
                price: 8000,
                image: "/images/kopi_sejuta_jiwa/image4.webp",
            },
            {
                name: "Es Kopi Butterscotch",
                price: 10000,
                image: "/images/kopi_sejuta_jiwa/image5.webp",
            },
            {
                name: "Es Kopi Hazelnut",
                price: 0,
                image: "/images/kopi_sejuta_jiwa/image6.webp",
            },
        ],
        category: "Makanan & Minuman",
        logo: "/images/kopi_sejuta_jiwa/image0.webp",
        gallery: [],
        video: "",
        socialMedia: { instagram: "@sejutajiwa.id" },
        ratings: 0,
        paymentMethods: ["Cash", "Qris"],
        shippingMethods: [],
        targetCustomers: ["Remaja sekolah", "Pekerja Kantoran"],
        createdAt: {
            day: "Rabu",
            date: 22,
            month: "Oktober",
            year: 2025,
            hours: "17:08",
        },
    },
    {
        id: "3",
        businessName: "Kartika Photocopy",
        type: "Fotokopi & Percetakan",
        description:
            "Kartika Photocopy menyediakan jasa fotokopi dan ATK terlengkap sejak 1987. Menawarkan berbagai alat tulis dan perlengkapan kantor dengan harga kompetitif.",
        foundedYear: 1987,
        ownerName: "Sriyanto",
        phoneNumber: "0",
        email: "",
        address: {
            streetName: "Jl. Budi Utomo",
            number: "No.9",
            city: "Jakarta Pusat",
            postalCode: 10710,
            longitude: -6.1667827,
            latitude: 106.8384728,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6825514658412!2d106.8376335313828!3d-6.166872309007498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c01d196175%3A0xd479dc8f321a777!2sFotocopy%20Kartika!5e0!3m2!1sid!2sid!4v1762062249756!5m2!1sid!2sid",
        },
        operatingHours: [
            {
                day: "Senin",
                isOpen: true,
                hours: "07:30-16:00",
            },
            {
                day: "Selasa",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Rabu",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Kamis",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Jumat",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Sabtu",
                isOpen: true,
                hours: "09:00-18:00",
            },
            {
                day: "Minggu",
                isOpen: false,
                hours: "",
            },
        ],
        products: [
            {
                name: "Lakban Hitam 1 inch",
                price: 12500,
                image: "/images/fotokopi_kartika/image2.webp",
            },
            {
                name: "Gembok Nishio",
                price: 15000,
                image: "/images/fotokopi_kartika/image1.webp",
            },
            {
                name: "Pulpen Faster",
                price: 5000,
                image: "/images/fotokopi_kartika/image3.webp",
            },
        ],
        category: "Jasa",
        logo: "/images/fotokopi_kartika/image0.webp",
        gallery: [],
        video: "",
        socialMedia: [],
        ratings: 0,
        paymentMethods: ["Qris", "Cash", "Transfer"],
        shippingMethods: [],
        targetCustomers: ["Umum"],
        createdAt: {
            day: "Rabu",
            date: 22,
            month: "Oktober",
            year: 2025,
            hours: "15:40",
        },
    },
    {
        id: "4",
        businessName: "Toko Dian",
        type: "Toko Kelontong",
        description:
            "Toko Dian merupakan toko kelontong yang menyediakan kebutuhan sehari-hari sejak 1982. Buka pagi hingga sore dengan berbagai produk makanan dan minuman.",
        foundedYear: 1982,
        ownerName: "Arif",
        phoneNumber: "0",
        email: "",
        address: {
            streetName: "Jl. Budi Utomo",
            number: "No.9",
            city: "Jakarta Pusat",
            postalCode: 10710,
            longitude: -6.1667827,
            latitude: 106.8384728,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.92062124547343!2d106.8382311953871!3d-6.166907859169452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c88a7fa9e1%3A0x565e8a098962be6f!2sTOKO%20DIAN!5e0!3m2!1sid!2sid!4v1762062293347!5m2!1sid!2sid",
        },
        operatingHours: [
            {
                day: "Senin",
                isOpen: true,
                hours: "05:00-16:00",
            },
            {
                day: "Selasa",
                isOpen: true,
                hours: "05:00-16:00",
            },
            {
                day: "Rabu",
                isOpen: true,
                hours: "05:00-16:00",
            },
            {
                day: "Kamis",
                isOpen: true,
                hours: "05:00-16:00",
            },
            {
                day: "Jumat",
                isOpen: true,
                hours: "05:00-16:00",
            },
            {
                day: "Sabtu",
                isOpen: true,
                hours: "05:00-16:00",
            },
            {
                day: "Minggu",
                isOpen: false,
                hours: "",
            },
        ],
        products: [
            {
                name: "Iwater",
                price: 1000,
                image: "/images/toko_dian/image1.webp",
            },
            {
                name: "Indofood Racik Sayur Asem",
                price: 2000,
                image: "/images/toko_dian/image4.webp",
            },
            {
                name: "Kapal Api",
                price: 2000,
                image: "/images/toko_dian/image3.webp",
            },
        ],
        category: "Ritel",
        logo: "/images/toko_dian/image0.webp",
        gallery: [],
        video: "",
        socialMedia: [],
        ratings: 0,
        paymentMethods: ["Cash", "Qris"],
        shippingMethods: [],
        targetCustomers: ["Remaja", "Umum"],
        createdAt: {
            day: "Rabu",
            date: 22,
            month: "Oktober",
            year: 2025,
            hours: "15:30",
        },
    },
    {
        id: "5",
        businessName: "Ketan Susu Mba Aam",
        type: "Kedai Dessert",
        description:
            "Ketan Susu Mba Aam menyajikan ketan susu dan minuman segar untuk dinikmati sore hingga malam. Tempat nongkrong yang cozy dengan harga terjangkau.",
        foundedYear: 2025,
        ownerName: "Sugiarti",
        phoneNumber: "0",
        email: "",
        address: {
            streetName: "Jl. Lapangan Pors",
            number: "No.6, RT.6/RW.4",
            city: "Jakarta Pusat",
            postalCode: 10650,
            longitude: -6.1624509,
            latitude: 106.8606462,
            embed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d247.92270556816644!2d106.86059130227395!3d-6.162448166392954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDknNDQuOCJTIDEwNsKwNTEnMzguMyJF!5e0!3m2!1sid!2sid!4v1762062430042!5m2!1sid!2sid",
        },
        operatingHours: [
            {
                day: "Senin",
                isOpen: true,
                hours: "16:00-22:00",
            },
            {
                day: "Selasa",
                isOpen: true,
                hours: "16:00-22:00",
            },
            {
                day: "Rabu",
                isOpen: true,
                hours: "16:00-22:00",
            },
            {
                day: "Kamis",
                isOpen: true,
                hours: "16:00-22:00",
            },
            {
                day: "Jumat",
                isOpen: true,
                hours: "16:00-22:00",
            },
            {
                day: "Sabtu",
                isOpen: true,
                hours: "16:00-22:00",
            },
            {
                day: "Minggu",
                isOpen: true,
                hours: "16:00-22:00",
            },
        ],
        products: [
            {
                name: "Es Teh Manis Ijo",
                price: 5000,
                image: "/images/katen_susu_mba_aam/image0.webp",
            },
            {
                name: "Ketan Abon",
                price: 10000,
                image: "/images/katen_susu_mba_aam/image1.webp",
            },
            {
                name: "Ketan Keju Susu Reguler",
                price: 12000,
                image: "/images/katen_susu_mba_aam/image0.webp",
            },
        ],
        category: "Makanan & Minuman",
        logo: "/images/katen_susu_mba_aam/image0.webp",
        gallery: [],
        video: "",
        socialMedia: [],
        ratings: 0,
        paymentMethods: ["Qris", "Cash"],
        shippingMethods: [],
        targetCustomers: ["Umum"],
        createdAt: {
            day: "Kamis",
            date: 24,
            month: "Oktober",
            year: 2025,
            hours: "17:10",
        },
    },
    {
        id: "6",
        businessName: "Nasi Goreng Sedap Malam",
        type: "Warung Makanan",
        description:
            "Nasi Goreng Sedap Malam menghidangkan berbagai menu nasi goreng, mie goreng, dan bihun goreng yang lezat. Buka dari sore hingga dini hari.",
        foundedYear: 2016,
        ownerName: "Waryono",
        phoneNumber: "085717448332",
        email: "",
        address: {
            streetName: "Jl. Utan Panjang 3",
            number: "No. 9",
            city: "Jakarta Pusat",
            postalCode: 10640,
            longitude: -6.1681812,
            latitude: 106.8461867,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.6258696150535!2d106.8514243307813!3d-6.168226137010223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5a4783a1d89%3A0x6af67b90609f5c7b!2sNasi%20Goreng%20Sedap%20Malam!5e0!3m2!1sid!2sid!4v1762062697002!5m2!1sid!2sid",
        },
        operatingHours: [
            {
                day: "Senin",
                isOpen: true,
                hours: "16:00-02:00",
            },
            {
                day: "Selasa",
                isOpen: true,
                hours: "16:00-02:00",
            },
            {
                day: "Rabu",
                isOpen: true,
                hours: "16:00-02:00",
            },
            {
                day: "Kamis",
                isOpen: true,
                hours: "16:00-02:00",
            },
            {
                day: "Jumat",
                isOpen: true,
                hours: "16:00-02:00",
            },
            {
                day: "Sabtu",
                isOpen: true,
                hours: "16:00-02:00",
            },
            {
                day: "Minggu",
                isOpen: true,
                hours: "16:00-02:00",
            },
        ],
        products: [
            {
                name: "Nasi Goreng Ayam",
                price: 20000,
                image: "/images/nasi_goreng_sedap_malam/image1.webp",
            },
            {
                name: "Mie Goreng",
                price: 15000,
                image: "/images/nasi_goreng_sedap_malam/image2.webp",
            },
            {
                name: "Bihun Goreng",
                price: 14000,
                image: "/images/nasi_goreng_sedap_malam/image3.webp",
            },
        ],
        category: "Makanan & Minuman",
        logo: "/images/nasi_goreng_sedap_malam/image0.webp",
        gallery: [],
        video: "",
        socialMedia: [],
        ratings: 4.7,
        paymentMethods: ["Qris", "Cash"],
        shippingMethods: ["Take In", "Delivery"],
        targetCustomers: [],
        createdAt: {
            day: "Jumat",
            date: 25,
            month: "Oktober",
            year: 2025,
            hours: "17:00",
        },
    },
    {
        id: "7",
        businessName: "Rm. Green Vill Raya",
        type: "Restoran Keluarga",
        description:
            "Rm. Green Vill Raya menyajikan masakan rumahan dengan spesialisasi ayam bakar, ayam goreng, dan gulai ikan. Cocok untuk keluarga dan kelompok.",
        foundedYear: 2018,
        ownerName: "Ali Adi Setiyan",
        phoneNumber: "085100878772",
        email: "",
        address: {
            streetName: "Jl. Budi Utomo",
            number: "No.9",
            city: "Jakarta Pusat",
            postalCode: 10710,
            longitude: -6.1668641,
            latitude: 106.8359485,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.84124348996386!2d106.83813438945398!3d-6.166906790787725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c88a8d69cf%3A0x15c766b066deb452!2sRm.%20Green%20Vill%20Raya!5e0!3m2!1sid!2sid!4v1762062757496!5m2!1sid!2sid",
        },
        operatingHours: [
            {
                day: "Senin",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Selasa",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Rabu",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Kamis",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Jumat",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Sabtu",
                isOpen: true,
                hours: "07:00-20:00",
            },
            {
                day: "Minggu",
                isOpen: true,
                hours: "07:00-20:00",
            },
        ],
        products: [
            {
                name: "Ayam Bakar",
                price: 25000,
                image: "/images/rm_green_vill_raya/image1.webp",
            },
            {
                name: "Ayam Goreng",
                price: 27000,
                image: "/images/rm_green_vill_raya/image2.webp",
            },
            {
                name: "Gulai Ikan",
                price: 30000,
                image: "/images/rm_green_vill_raya/image3.webp",
            },
        ],
        category: "Makanan & Minuman",
        logo: "/images/rm_green_vill_raya/image0.webp",
        gallery: [],
        video: "",
        socialMedia: [],
        ratings: 4.4,
        paymentMethods: ["Cash"],
        shippingMethods: ["Take In", "Delivery"],
        targetCustomers: ["Umum"],
        createdAt: {
            day: "Sabtu",
            date: 26,
            month: "Oktober",
            year: 2025,
            hours: "14:00",
        },
    },
    {
        id: "8",
        businessName: "Citra Photocopy",
        type: "Fotokopi & Percetakan",
        description:
            "Citra Photocopy memberikan layanan fotokopi dan ATK 24 jam dengan harga terjangkau. Lengkap dengan berbagai kebutuhan alat tulis dan percetakan.",
        foundedYear: 2020,
        ownerName: "Citra",
        phoneNumber: "082111076484",
        email: "",
        address: {
            streetName: "Jl. Taruna Raya",
            number: "No.3 RT.2/RW.3",
            city: "Jakarta Pusat",
            postalCode: 10650,
            longitude: -6.1603814,
            latitude: 106.8585098,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.92366797290174!2d106.86080373823643!3d-6.160387884848431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5bfabf7b4d5%3A0xa54f9651737bbef3!2sCitra%20Fotocopy!5e0!3m2!1sid!2sid!4v1762062858259!5m2!1sid!2sid",
        },
        operatingHours: [
            {
                day: "Senin",
                isOpen: true,
                hours: "06:00-24:00",
            },
            {
                day: "Selasa",
                isOpen: true,
                hours: "06:00-24:00",
            },
            {
                day: "Rabu",
                isOpen: true,
                hours: "06:00-24:00",
            },
            {
                day: "Kamis",
                isOpen: true,
                hours: "06:00-24:00",
            },
            {
                day: "Jumat",
                isOpen: true,
                hours: "06:00-24:00",
            },
            {
                day: "Sabtu",
                isOpen: true,
                hours: "06:00-24:00",
            },
            {
                day: "Minggu",
                isOpen: true,
                hours: "06:00-24:00",
            },
        ],
        products: [
            {
                name: "Karton",
                price: 5000,
                image: "/images/citra_photocopy/image1.webp",
            },
            {
                name: "Pulpen Joyko",
                price: 7000,
                image: "/images/citra_photocopy/image2.webp",
            },
            {
                name: "Print",
                price: 2000,
                image: "/images/citra_photocopy/image0.webp",
            },
        ],
        category: "Jasa",
        logo: "/images/citra_photocopy/image3.webp",
        gallery: [],
        video: "",
        socialMedia: [],
        ratings: 5,
        paymentMethods: ["Cash", "Qris"],
        shippingMethods: ["Take In"],
        targetCustomers: ["Umum", "Remaja Sekolah"],
        createdAt: {
            day: "Minggu",
            date: 27,
            month: "Oktober",
            year: 2025,
            hours: "15:40",
        },
    },
    {
        id: "9",
        businessName: "SGER Serdang Baru",
        type: "Kedai Minuman",
        description:
            "SGER Serdang Baru menawarkan minuman kekinian seperti jeruk genit, thai tea, dan es kopi gula aren. Tempat nongkrong yang nyaman sepanjang hari.",
        foundedYear: 2022,
        ownerName: "Danis Maulana",
        phoneNumber: "081212201168",
        email: "",
        address: {
            streetName: "Jl. Serdang Baru I",
            number: "No. 37 RT.2/RW.5",
            city: "Jakarta Pusat",
            postalCode: 10650,
            longitude: 0,
            latitude: 0,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6671.323012698116!2d106.85708797702777!3d-6.1585530703616955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f513f790d595%3A0x9d14c3b8d424ccdd!2sSGER%20Serdang%20Baru!5e0!3m2!1sid!2sid!4v1762062956034!5m2!1sid!2sid",
        },
        operatingHours: [
            {
                day: "Senin",
                isOpen: true,
                hours: "10:00-21:00",
            },
            {
                day: "Selasa",
                isOpen: true,
                hours: "10:00-21:00",
            },
            {
                day: "Rabu",
                isOpen: true,
                hours: "10:00-21:00",
            },
            {
                day: "Kamis",
                isOpen: true,
                hours: "10:00-21:00",
            },
            {
                day: "Jumat",
                isOpen: true,
                hours: "10:00-21:00",
            },
            {
                day: "Sabtu",
                isOpen: true,
                hours: "10:00-21:00",
            },
            {
                day: "Minggu",
                isOpen: true,
                hours: "10:00-21:00",
            },
        ],
        products: [
            {
                name: "Jeruk Genit",
                price: 8000,
                image: "/images/sger_serdang_baru/image1.webp",
            },
            {
                name: "Thai Tea Baper",
                price: 10000,
                image: "/images/sger_serdang_baru/image2.webp",
            },
            {
                name: "Es Kopi Gula Aren",
                price: 12000,
                image: "/images/sger_serdang_baru/image3.webp",
            },
        ],
        category: "Makanan & Minuman",
        logo: "/images/sger_serdang_baru/image0.webp",
        gallery: [],
        video: "",
        socialMedia: [],
        ratings: 4.5,
        paymentMethods: ["Cash", "Qris"],
        shippingMethods: ["Delivery", "Take In"],
        targetCustomers: ["Umum"],
        createdAt: {
            day: "Senin",
            date: 28,
            month: "Oktober",
            year: 2025,
            hours: "19:20",
        },
    },
    {
        id: "10",
        businessName: "Hisana Bendungan Jago",
        type: "Restoran Keluarga",
        description:
            "Hisana Bendungan Jago menghidangkan menu ayam cebar, geprek, dan goreng dengan nasi. Restoran keluarga yang buka dari pagi hingga malam.",
        foundedYear: 2016,
        ownerName: "-",
        phoneNumber: "08958075242",
        email: "",
        address: {
            streetName: "Jl. Bendungan Jago Raya",
            number: "RT.5/RW.3",
            city: "Jakarta Pusat",
            postalCode: 10650,
            longitude: -6.1616296,
            latitude: 106.84237,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.9345441241157!2d106.85623923028439!3d-6.160684114829251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5a447464dc9%3A0x9830cdad836b3b6b!2sHisana%20Bendungan%20Jago!5e0!3m2!1sid!2sid!4v1762063070352!5m2!1sid!2sid",
        },
        operatingHours: [
            {
                day: "Senin",
                isOpen: true,
                hours: "06:00-22:00",
            },
            {
                day: "Selasa",
                isOpen: true,
                hours: "06:00-22:00",
            },
            {
                day: "Rabu",
                isOpen: true,
                hours: "06:00-22:00",
            },
            {
                day: "Kamis",
                isOpen: true,
                hours: "06:00-22:00",
            },
            {
                day: "Jumat",
                isOpen: true,
                hours: "06:00-22:00",
            },
            {
                day: "Sabtu",
                isOpen: true,
                hours: "06:00-22:00",
            },
            {
                day: "Minggu",
                isOpen: true,
                hours: "06:00-22:00",
            },
        ],
        products: [
            {
                name: "Ayam Cebar (Celup Bakar)",
                price: 12000,
                image: "/images/hisana/image1.webp",
            },
            {
                name: "Paket Geprek Sayap",
                price: 17000,
                image: "/images/hisana/image2.webp",
            },
            {
                name: "Ayam Goreng Dada + Nasi",
                price: 16000,
                image: "/images/hisana/image3.webp",
            },
        ],
        category: "Makanan & Minuman",
        logo: "/images/hisana/image0.webp",
        gallery: [],
        video: "",
        socialMedia: [],
        ratings: 4.5,
        paymentMethods: ["Cash"],
        shippingMethods: ["Take In", "Delivery"],
        targetCustomers: ["Umum", "Keluarga"],
        createdAt: {
            day: "Senin",
            date: 28,
            month: "Oktober",
            year: 2025,
            hours: "13:20",
        },
    },
    {
        id: "11",
        businessName: "B.O.S Laundry",
        type: "Laundry",
        description:
            "B.O.S Laundry memberikan layanan laundry kiloan 1 hari selesai, setrika kilat, dan shoes cleaning. Layanan 24 jam untuk kebutuhan keluarga.",
        foundedYear: 2022,
        ownerName: "Yudha Al Janata",
        phoneNumber: "081218969929",
        email: "",
        address: {
            streetName: "Jl. Serdang Baru Raya",
            number: "No. 43C",
            city: "Jakarta Pusat",
            postalCode: 10640,
            longitude: -6.1598436,
            latitude: 106.8425655,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15867.106648973448!2d106.84776021487255!3d-6.160658907735616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f57a6e4573d3%3A0xa034cdeb7562ffb3!2sB.O.S%20LAUNDRY%20%7C%20Laundry%20Kemayoran!5e0!3m2!1sid!2sid!4v1762063135511!5m2!1sid!2sid",
        },
        operatingHours: [
            {
                day: "Senin",
                isOpen: true,
                hours: "00:00-24:00",
            },
            {
                day: "Selasa",
                isOpen: true,
                hours: "00:00-24:00",
            },
            {
                day: "Rabu",
                isOpen: true,
                hours: "00:00-24:00",
            },
            {
                day: "Kamis",
                isOpen: true,
                hours: "00:00-24:00",
            },
            {
                day: "Jumat",
                isOpen: true,
                hours: "00:00-24:00",
            },
            {
                day: "Sabtu",
                isOpen: true,
                hours: "00:00-24:00",
            },
            {
                day: "Minggu",
                isOpen: true,
                hours: "00:00-24:00",
            },
        ],
        products: [
            {
                name: "Kiloan 1 Hari Selesai",
                price: 7000,
                image: "/images/bos_laundry/image3.webp",
            },
            {
                name: "Setrika 4 Jam Selesai",
                price: 9000,
                image: "/images/bos_laundry/image2.webp",
            },
            {
                name: "Shoes Cleaning",
                price: 45000,
                image: "/images/bos_laundry/image1.webp",
            },
        ],
        category: "Jasa",
        logo: "/images/bos_laundry/image0.webp",
        gallery: [],
        video: "",
        socialMedia: { instagram: "@bos_laundry" },
        ratings: 4.9,
        paymentMethods: ["Cash"],
        shippingMethods: ["Delivery", "Take In"],
        targetCustomers: ["Keluarga"],
        createdAt: {
            day: "Selasa",
            date: 29,
            month: "Oktober",
            year: 2025,
            hours: "17:08",
        },
    },
    {
        id: "12",
        businessName: "Foto Copy Annisa Digital Printing",
        type: "Fotokopi & Percetakan",
        description:
            "Foto Copy Annisa Digital Printing menyediakan jasa print, fotokopi, dan ATK dengan harga murah. Terbuka dari pagi hingga malam untuk remaja sekolah.",
        foundedYear: 2021,
        ownerName: "Annisa",
        phoneNumber: "081296121404",
        email: "",
        address: {
            streetName: "Jl. Harapan Jaya Raya",
            number: "No.2 RT.3/RW.4",
            city: "Jakarta Pusat",
            postalCode: 10640,
            longitude: -6.1684087,
            latitude: 106.8630923,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7933.455449903367!2d106.85692827218261!3d-6.167203948095878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5a9bb9b4b23%3A0x4893aeefc24540c3!2sFoto%20Copy%20Annisa%20Digital%20Printing!5e0!3m2!1sid!2sid!4v1762063180981!5m2!1sid!2sid",
        },
        operatingHours: [
            {
                day: "Senin",
                isOpen: true,
                hours: "05:50-21:30",
            },
            {
                day: "Selasa",
                isOpen: true,
                hours: "05:50-21:30",
            },
            {
                day: "Rabu",
                isOpen: true,
                hours: "05:50-21:30",
            },
            {
                day: "Kamis",
                isOpen: true,
                hours: "05:50-21:30",
            },
            {
                day: "Jumat",
                isOpen: true,
                hours: "05:50-21:30",
            },
            {
                day: "Sabtu",
                isOpen: true,
                hours: "05:50-21:30",
            },
            {
                day: "Minggu",
                isOpen: true,
                hours: "05:50-21:30",
            },
        ],
        products: [
            {
                name: "Print",
                price: 1000,
                image: "/images/photocopy_annisa_digital_printing/image1.webp",
            },
            {
                name: "Double Tip",
                price: 4000,
                image: "/images/photocopy_annisa_digital_printing/image2.webp",
            },
            {
                name: "Penggaris 30cm",
                price: 5000,
                image: "/images/photocopy_annisa_digital_printing/image3.webp",
            },
        ],
        category: "Jasa",
        logo: "/images/photocopy_annisa_digital_printing/image0.webp",
        gallery: [],
        video: "",
        socialMedia: [],
        ratings: 4.1,
        paymentMethods: ["Cash", "Qris"],
        shippingMethods: ["Take In"],
        targetCustomers: ["Remaja Sekolah"],
        createdAt: {
            day: "Rabu",
            date: 30,
            month: "Oktober",
            year: 2025,
            hours: "16:20",
        },
    },
];
