"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useRef, useState } from "react";

import { gallery } from "@/content/site";

export function GalleryGrid() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex === null ? null : gallery[selectedIndex];

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
        onClose={closeGallery}
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
              <Image src={selectedImage.src} alt={selectedImage.alt} fill sizes="90vw" />
            </div>
            <p>{selectedImage.caption}</p>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
