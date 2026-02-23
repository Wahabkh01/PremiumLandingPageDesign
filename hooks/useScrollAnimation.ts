import { useEffect, RefObject } from 'react'

interface ScrollAnimationOptions {
  trigger?: RefObject<HTMLElement>
  start?: string
  end?: string
  scrub?: boolean
  markers?: boolean
  onEnter?: () => void
  onLeave?: () => void
}

export const useScrollAnimation = (
  elementRef: RefObject<HTMLElement>,
  // kept as any to avoid tying to GSAP types
  animation: any,
  options: ScrollAnimationOptions = {}
) => {
  // No-op hook for static site: intentionally does not create animations.
  useEffect(() => {
    // Intentionally empty to keep the same API surface.
  }, [elementRef, animation, options])
}