"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { gallery } from "@/content/site";

export function GalleryGrid() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex === null ? null : gallery[selectedIndex];
  const thumbnailRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    thumbnailRef.current?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [selectedIndex]);

  function navigateGallery(direction: number) {
    setSelectedIndex((index) => index === null ? null : (index + direction + gallery.length) % gallery.length);
  }

  function openGallery(index: number) {
    setSelectedIndex(index);
    requestAnimationFrame(() => dialogRef.current?.showModal());
  }

  function closeGallery() {
    dialogRef.current?.close();
    setSelectedIndex(null);
  }

  return (
    <>
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <figure key={item.src} className={`gallery-item gallery-item-${index + 1}`}>
            <button
              type="button"
              className="gallery-expand"
              aria-label={`Ampliar imagem: ${item.caption}`}
              onClick={() => openGallery(index)}
            >
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
            </button>
            <figcaption><span>0{index + 1}</span>{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="gallery-dialog"
        aria-label={selectedImage ? `Imagem ampliada: ${selectedImage.caption}` : "Imagem ampliada"}
        onClose={() => setSelectedIndex(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            navigateGallery(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeGallery();
        }}
      >
        {selectedImage ? (
          <div className="gallery-dialog-content">
            <button type="button" className="gallery-dialog-close" aria-label="Fechar imagem ampliada" onClick={closeGallery}>
              <X aria-hidden="true" />
            </button>
            <div className="gallery-dialog-image">
              <Image key={selectedImage.src} src={selectedImage.src} alt={selectedImage.alt} fill sizes="(max-width: 1152px) 90vw, 1120px" />
              <button type="button" className="gallery-dialog-nav gallery-dialog-prev" aria-label="Imagem anterior" onClick={() => navigateGallery(-1)}>
                <ChevronLeft aria-hidden="true" />
              </button>
              <button type="button" className="gallery-dialog-nav gallery-dialog-next" aria-label="Próxima imagem" onClick={() => navigateGallery(1)}>
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
            <p aria-live="polite">{selectedIndex! + 1} / {gallery.length} — {selectedImage.caption}</p>
            <div className="gallery-dialog-thumbnails" role="group" aria-label="Selecionar imagem">
              {gallery.map((item, index) => (
                <button
                  key={item.src}
                  ref={index === selectedIndex ? thumbnailRef : null}
                  type="button"
                  className="gallery-dialog-thumbnail"
                  aria-label={`Ver imagem ${index + 1}: ${item.caption}`}
                  aria-pressed={index === selectedIndex}
                  onClick={() => setSelectedIndex(index)}
                >
                  <Image src={item.src} alt="" fill sizes="80px" />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
