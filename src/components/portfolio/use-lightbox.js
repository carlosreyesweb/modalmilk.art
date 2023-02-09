import { useState } from 'react'

export function useLightbox(illustrations) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const slides = illustrations.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }))

  function openLightbox(index) {
    setIndex(index)
    setOpen(true)
  }

  function closeLightbox() {
    setOpen(false)
  }

  return { open, index, slides, openLightbox, closeLightbox }
}
