type HeaInfo = {
  fs: number
  format: number
  gain: number
  baseline: number
}

export function parseHea(text: string): HeaInfo {
  const lines = text.trim().split("\n")

  // line 1
  const header = lines[0].trim().split(/\s+/)
  const fs = Number(header[2])

  // line 2
  const sig = lines[1].trim().split(/\s+/)
  const format = Number(sig[1])     // usually 16
  const gain = Number(sig[2]) || 200
  const baseline = Number(sig[4]) || 0

  return { fs, format, gain, baseline }
}

export function parseDat(
  buffer: ArrayBuffer,
  hea: HeaInfo
): number[] {
  if (hea.format !== 212) {
    console.error("Only format 212 supported")
    console.log(hea.format)
  }

  const bytes = new Uint8Array(buffer)
  const signal: number[] = []

  for (let i = 0; i + 2 < bytes.length; i += 3) {
    const b0 = bytes[i]
    const b1 = bytes[i + 1]
    const b2 = bytes[i + 2]

    // sample 1 (12-bit signed)
    let s1 = ((b1 & 0x0f) << 8) | b0
    if (s1 & 0x800) s1 -= 4096

    // sample 2 (12-bit signed)
    let s2 = ((b1 & 0xf0) << 4) | b2
    if (s2 & 0x800) s2 -= 4096

    // scale using gain & baseline from .hea
    signal.push(
      (s1 - hea.baseline) / hea.gain,
      (s2 - hea.baseline) / hea.gain
    )
  }

  return signal
}