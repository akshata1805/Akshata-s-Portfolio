import { useRef, useEffect } from 'react'
import useCursor from '../hooks/useCursor'

export default function Cursor({ theme }) {
  const { moonRef, ringRef, dotRef, trailRef } = useCursor(theme)

  return (
    <>
      <canvas ref={trailRef} className="trail-canvas" />
      <div ref={moonRef} className="cursor-moon" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef}  className="cursor-dot"  />
    </>
  )
}
