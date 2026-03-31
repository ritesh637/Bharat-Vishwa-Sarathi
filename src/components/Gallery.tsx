import React, { useState, useEffect, useCallback } from "react";
import { ImageType } from "../lib/galleryData";

// Define German Language Proficiency Certificate images (8 cards)
const certificationImages: ImageType[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615519/testimonial-5_t7xbhp.jpg",
    alt: "Goethe-Zertifikat A1"
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615519/testimonial-2_kw04jx.jpg",
    alt: "Goethe-Zertifikat A2"
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615519/testimonial-7_grgrln.jpg",
    alt: "Goethe-Zertifikat B1"
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615519/testimonial-3_p9bcjf.jpg",
    alt: "Goethe-Zertifikat B2"
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615519/testimonial-6_plflxr.jpg",
    alt: "Goethe-Zertifikat C1"
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615519/testimonial-4_jvztpk.jpg",
    alt: "Goethe-Zertifikat C2"
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615520/testimonial-8_pcnrdn.jpg",
    alt: "Telc Deutsch A1"
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615520/testimonial-1_rbw3f1.jpg",
    alt: "Telc Deutsch B1"
  }
];

// Define placed students images (8 cards)
const placedStudentsImages: ImageType[] = [
  {
    id: 101,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616151/Placed_hocpql.jpg",
    alt: "Student placed in Germany - Rahul Sharma"
  },
  {
    id: 102,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616152/Placed4_xz32rw.jpg",
    alt: "Student placed in Germany - Priya Patel"
  },
  {
    id: 103,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616152/Placed3_znewwu.jpg",
    alt: "Student placed in Germany - Amit Kumar"
  },
  {
    id: 104,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616152/Placed1_w08r9q.jpg",
    alt: "Student placed in Germany - Neha Singh"
  },
  {
    id: 105,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616152/Placed6_gd7qpi.jpg",
    alt: "Student placed in Germany - Vikram Mehta"
  },
  {
    id: 106,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616152/Placed2_sa3kox.jpg",
    alt: "Student placed in Germany - Anjali Gupta"
  },
  {
    id: 107,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616152/Placed7_ycsftx.jpg",
    alt: "Student placed in Germany - Rajesh Khanna"
  },
  {
    id: 108,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774616153/Placed8_jwggzb.jpg",
    alt: "Student placed in Germany - Pooja Verma"
  }
];

// Define gallery images (8 cards)
const galleryImages: ImageType[] = [
  {
    id: 201,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615774/testimonial-9_eshrh2.png",
    alt: "Training session in progress"
  },
  {
    id: 202,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615775/testimonial-11_vajckg.png",
    alt: "Classroom training"
  },
  {
    id: 203,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615775/testimonial-10_jlfmgg.png",
    alt: "Practical driving session"
  },
  {
    id: 204,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615775/testimonial-12_ant1bw.png",
    alt: "Workshop activities"
  },
  {
    id: 205,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615776/testimonial-15_wkhkwu.jpg",
    alt: "Group discussion"
  },
  {
    id: 206,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615776/testimonial-13_ymvu52.png",
    alt: "Facility tour"
  },
  {
    id: 207,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615776/testimonial-14_xxj3u9.png",
    alt: "Student interaction"
  },
  {
    id: 208,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615777/testimonial-18_ppkbcw.png",
    alt: "Training equipment"
  },
  {
    id: 201,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615777/testimonial-16_xtr2db.png",
    alt: "Training session in progress"
  },
  {
    id: 202,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615781/testimonial-19_d9ciab.png",
    alt: "Classroom training"
  },
  {
    id: 203,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615779/testimonial-17_gjfmfz.png",
    alt: "Practical driving session"
  },
  {
    id: 204,
    src: "https://res.cloudinary.com/deu6avikv/image/upload/v1774615783/testimonial-20_e17ues.png",
    alt: "Workshop activities"
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImagesArray, setSelectedImagesArray] = useState<ImageType[]>(
    [],
  );
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [loading, setLoading] = useState<number | null>(null);

  // Find current image index
  useEffect(() => {
    if (selectedImage && selectedImagesArray.length > 0) {
      const index = selectedImagesArray.findIndex(
        (img) => img.src === selectedImage,
      );
      setSelectedIndex(index);
    } else {
      setSelectedIndex(-1);
    }
  }, [selectedImage, selectedImagesArray]);

  // Navigate to previous image
  const goToPrevious = useCallback(() => {
    if (selectedIndex > 0) {
      setSelectedImage(selectedImagesArray[selectedIndex - 1].src);
      setLoading(selectedImagesArray[selectedIndex - 1].id);
    }
  }, [selectedIndex, selectedImagesArray]);

  // Navigate to next image
  const goToNext = useCallback(() => {
    if (selectedIndex < selectedImagesArray.length - 1) {
      setSelectedImage(selectedImagesArray[selectedIndex + 1].src);
      setLoading(selectedImagesArray[selectedIndex + 1].id);
    }
  }, [selectedIndex, selectedImagesArray]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, goToPrevious, goToNext]);

  // Close lightbox with Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleEsc);

    // Prevent body scroll when lightbox is open
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  // Handle image load
  const handleImageLoad = useCallback((id: number) => {
    setLoading(null);
  }, []);

  const handleImageClick = useCallback(
    (src: string, id: number, imagesArray: ImageType[]) => {
      setSelectedImage(src);
      setSelectedImagesArray(imagesArray);
      setLoading(id);
    },
    [],
  );

  const handleCloseLightbox = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage(null);
  }, []);

  // Render image grid component
  const renderImageGrid = (
    images: ImageType[],
    title: string,
    subtitle: string,
    gradientFrom: string,
    gradientTo: string,
  ) => (
    <div className="mb-16 sm:mb-20 md:mb-24">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold bg-gradient-to-r from-[#F7921C] to-[#069247] bg-clip-text text-transparent mb-3 md:mb-4 inline-block relative"
        >
          {title}
          <div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#F7921C] to-[#069247]"
          ></div>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2 leading-relaxed font-light">
          {subtitle}
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
        {images.map((img) => (
          <div
            key={img.id}
            className="group relative overflow-hidden horizental-xl sm:horizental-2xl shadow-lg border border-[rgba(247,146,28,0.1)] cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-xl active:scale-95 sm:active:scale-100"
            onClick={() => handleImageClick(img.src, img.id, images)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleImageClick(img.src, img.id, images);
              }
            }}
            aria-label={`View ${title.toLowerCase()} image ${img.id}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            {loading === img.id && selectedImagesArray === images && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-[#F7921C] border-t-transparent horizental-full animate-spin"></div>
              </div>
            )}
            <img
              src={img.src}
              alt={`${title} image ${img.id}`}
              className={`w-full h-72 sm:h-80 md:h-96 lg:h-[420px] object-cover group-hover:scale-110 transition-transform duration-500 ease-out ${loading === img.id && selectedImagesArray === images ? "opacity-0" : "opacity-100"}`}
              loading="lazy"
              onLoad={() => handleImageLoad(img.id)}
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/800x600?text=Image+Not+Found";
                setLoading(null);
              }}
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20 pointer-events-none">
              <span className="text-white text-xs sm:text-sm md:text-base font-semibold px-3 py-1.5 sm:px-4 sm:py-2 horizental-full bg-gradient-to-r from-[#F7921C] to-[#069247] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 whitespace-nowrap">
                View Image
              </span>
            </div>
            {/* Decorative corner accent */}
            <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t-2 border-l-2 border-[#F7921C]/50 horizental-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b-2 border-r-2 border-[#069247]/50 horizental-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBFBFC] to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 animate-fadeIn">
        {/* German Language Proficiency Certificate Section */}
        {renderImageGrid(
          certificationImages,
          "German Language Proficiency Certificate",
          "Recognized achievements and accredited credentials from Goethe-Institut and Telc",
          "#F7921C",
          "#069247",
        )}

        {/* Students Placed in Germany (Training Phase) Section */}
        {renderImageGrid(
          placedStudentsImages,
          "Students Placed in Germany (Training Phase)",
          "Successfully placed candidates are now undergoing advanced driver training in Germany",
          "#F7921C",
          "#069247",
        )}

        {/* Our Gallery Section */}
        {renderImageGrid(
          galleryImages,
          "Our Gallery",
          "Explore our training, facilities, and success moments",
          "#F7921C",
          "#069247",
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-3 sm:p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          {/* Left Navigation Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            disabled={selectedIndex === 0}
            className={`absolute left-4 sm:left-6 md:left-8 lg:left-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 horizental-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 z-10 ${selectedIndex === 0 ? "opacity-30 cursor-not-allowed hover:scale-100" : "cursor-pointer"}`}
            aria-label="Previous image"
          >
            ❮
          </button>

          <div className="relative max-w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] w-auto h-auto horizental-xl sm:horizental-2xl shadow-2xl border-2 border-white/20 object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={handleCloseLightbox}
              className="absolute -top-8 -right-2 sm:-top-10 sm:-right-10 md:-top-12 md:-right-12 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 horizental-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close preview"
            >
              ✕
            </button>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            disabled={selectedIndex === selectedImagesArray.length - 1}
            className={`absolute right-4 sm:right-6 md:right-8 lg:right-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 horizental-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 z-10 ${selectedIndex === selectedImagesArray.length - 1 ? "opacity-30 cursor-not-allowed hover:scale-100" : "cursor-pointer"}`}
            aria-label="Next image"
          >
            ❯
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 sm:px-4 sm:py-2 horizental-full text-xs sm:text-sm backdrop-blur-sm">
            {selectedIndex + 1} / {selectedImagesArray.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;