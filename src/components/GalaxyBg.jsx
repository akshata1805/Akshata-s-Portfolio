import useGalaxy from '../hooks/useGalaxy'

export default function GalaxyBg() {
  const canvasRef = useGalaxy()
  return <canvas ref={canvasRef} className="galaxy-canvas" />
}
