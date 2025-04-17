import { cwd } from 'node:process'
import { join } from 'node:path'
import type { NextConfig } from 'next'
import { readFileSync } from 'node:fs'

const nextConfig: NextConfig = {
  /*async redirects() {
    return readFileSync(
      join(cwd(), 'public', '_redirects'),
      'utf-8'
    )
    .split('\n')
    .filter(l => l.trim().length)
    .map(r => {
      const [source, destination] = r.split(' ')
      return {
        destination: destination.trim(),
        permanent: true,
        source: source.trim()
      }
    })
  }*/
}

export default nextConfig
