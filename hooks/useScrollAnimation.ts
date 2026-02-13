import { useEffect, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  animation: gsap.TweenVars,
  options: ScrollAnimationOptions = {}
) => {
  useEffect(() => {
    if (!elementRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(elementRef.current!, {
        ...animation,
        scrollTrigger: {
          trigger: options.trigger?.current || elementRef.current,
          start: options.start || 'top 80%',
          end: options.end,
          scrub: options.scrub,
          markers: options.markers,
          onEnter: options.onEnter,
          onLeave: options.onLeave,
        },
      })
    })

    return () => ctx.revert()
  }, [elementRef, animation, options])
}