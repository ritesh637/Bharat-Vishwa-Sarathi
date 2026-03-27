export type ImageType = {
  id: number;
  src: string;
  alt?: string; 
};

// Certification Images (Cloudinary)
export const certificationImages: ImageType[] = [
  { id: 1, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615519/testimonial-5_t7xbhp.jpg" },
  { id: 2, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615519/testimonial-2_kw04jx.jpg" },
  { id: 3, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615519/testimonial-7_grgrln.jpg" },
  { id: 4, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615519/testimonial-3_p9bcjf.jpg" },
  { id: 5, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615519/testimonial-6_plflxr.jpg" },
  { id: 6, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615519/testimonial-4_jvztpk.jpg" },
  { id: 7, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615520/testimonial-8_pcnrdn.jpg" },
  { id: 8, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615520/testimonial-1_rbw3f1.jpg" },
];

// Placed Students Images (Cloudinary)
export const placedStudentsImages: ImageType[] = [
  { id: 101, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616151/Placed_hocpql.jpg" },
  { id: 102, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616152/Placed4_xz32rw.jpg" },
  { id: 103, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616152/Placed3_znewwu.jpg" },
  { id: 104, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616152/Placed1_w08r9q.jpg" },
  { id: 105, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616152/Placed6_gd7qpi.jpg" },
  { id: 106, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616152/Placed2_sa3kox.jpg" },
  { id: 107, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616152/Placed7_ycsftx.jpg" },
  { id: 108, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616153/Placed8_jwggzb.jpg" },
];

// Gallery Images (Cloudinary)
export const galleryImages: ImageType[] = [
  { id: 201, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615774/testimonial-9_eshrh2.png" },
  { id: 202, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615775/testimonial-11_vajckg.png" },
  { id: 203, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615775/testimonial-10_jlfmgg.png" },
  { id: 204, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615775/testimonial-12_ant1bw.png" },
  { id: 205, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615776/testimonial-15_wkhkwu.jpg" },
  { id: 206, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615776/testimonial-13_ymvu52.png" },
  { id: 207, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615776/testimonial-14_xxj3u9.png" },
  { id: 208, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615777/testimonial-18_ppkbcw.png" },
  { id: 209, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615777/testimonial-16_xtr2db.png" },
  { id: 210, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615781/testimonial-19_d9ciab.png" },
  { id: 211, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615779/testimonial-17_gjfmfz.png" },
  { id: 212, src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615783/testimonial-20_e17ues.png" },
];

// Combined array for Hero slider — all gallery images from all sections
export const allGalleryImages: ImageType[] = [
  ...certificationImages,
  ...placedStudentsImages,
  ...galleryImages,
];

// Array of strings expected by Hero component
export const testimonialImages: string[] = allGalleryImages.map((img) => img.src);
