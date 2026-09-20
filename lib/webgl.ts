/**
 * WebGL availability probe.
 *
 * Some browsers ship with hardware acceleration disabled (GPU blocklisted,
 * `--disable-gpu`, headless/sandboxed Chrome, remote desktop sessions). There
 * `new THREE.WebGLRenderer()` throws "Error creating WebGL context", and an
 * uncaught throw inside a `useEffect` tears down the whole React tree.
 *
 * Probe once, cache the answer, and let callers skip the 3D effect instead.
 */

let cached: boolean | null = null

export function isWebGLAvailable(): boolean {
  if (cached !== null) return cached
  if (typeof window === 'undefined') return false

  try {
    const canvas = document.createElement('canvas')
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')

    cached = Boolean(gl)

    // Release the probe context immediately so it does not count against the
    // browser's (small) live-context budget.
    const lose = (gl as WebGLRenderingContext | null)?.getExtension(
      'WEBGL_lose_context',
    )
    lose?.loseContext()
  } catch {
    cached = false
  }

  return cached
}
