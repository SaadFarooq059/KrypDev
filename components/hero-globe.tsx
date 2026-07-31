'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Realistic rotating Earth, purple-tinted, shown as a "half globe"
 * rising from the bottom of the hero (the container crops it).
 */

const TEXTURE_URL = '/cta/earth-blue-marble.jpg'

export default function HeroGlobe() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      38,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    )
    camera.position.set(0, 0.4, 4.2)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const geometry = new THREE.SphereGeometry(1.6, 96, 96)
    const texture = new THREE.TextureLoader().load(TEXTURE_URL)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = 8

    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.85,
      metalness: 0.1,
    })
    const earth = new THREE.Mesh(geometry, material)
    earth.rotation.x = 0.25
    scene.add(earth)

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 96, 96),
      new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        uniforms: {
          glowColor: { value: new THREE.Color(0xc084fc) },
        },
        vertexShader: /* glsl */ `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position * 1.12, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform vec3 glowColor;
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
            gl_FragColor = vec4(glowColor, 1.0) * intensity;
          }
        `,
      }),
    )
    scene.add(atmosphere)

    const key = new THREE.DirectionalLight(0xcabffd, 3.2)
    key.position.set(-2.5, 2.5, 2)
    scene.add(key)

    const fill = new THREE.DirectionalLight(0x7c3aed, 1.1)
    fill.position.set(3, -1, 1)
    scene.add(fill)

    scene.add(new THREE.AmbientLight(0x2b1660, 2.2))

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let raf = 0
    let last = performance.now()

    const animate = (now: number) => {
      const dt = Math.min(now - last, 50)
      last = now
      if (!reduceMotion) earth.rotation.y += dt * 0.00006
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(mount)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      texture.dispose()
      atmosphere.geometry.dispose()
      ;(atmosphere.material as THREE.Material).dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="globe-mount" aria-hidden="true" />
}
