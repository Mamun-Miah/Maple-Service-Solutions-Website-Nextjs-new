import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'
import path from 'path'

// NEW CREATIVE DIRECTION: "Living Craft — Invisible Intelligence"
// Concept: Motion-inspired, Apple + Linear + OpenAI + high-end architecture studio

// STRICT SAFETY RULES (MUST BE INCLUDED VERBATIM IN EVERY PROMPT)
const SAFETY_RULES = `
ABSOLUTE RULE:
No text. No letters. No numbers. No symbols. No signage. No watermarks. No character-like shapes. No icons. No UI elements. No people. No objects.

This prevents text artifacts forever.
`

// New prompts with creative direction
const PROMPTS = {
  heroLight: `
Create a high-end abstract image representing invisible intelligence and craftsmanship for a Services page of a global technology product studio.

STYLE:
Architectural.
Directional.
Minimal.
Premium.

CONCEPT:
Soft luminous energy lines flowing diagonally across space,
like long-exposure light photography captured inside a modern studio.

The lines must feel:
- intelligent
- intentional
- calm
- controlled

They must NOT look decorative or neon.

COMPOSITION:
- Large open negative space (70% empty)
- Few flowing light ribbons (2–4 only)
- Wide curves, no sharp edges
- No symmetry
- No center focus

COLOR PALETTE:
Base background: #F7F6FF
Secondary haze: #F0F1FF
Light energy lines: extremely subtle indigo #4F46E5
Supporting glow: faint violet #A78BFA
Opacity extremely low (5–12%)

TEXTURE:
Soft cinematic grain (2%)
Light bloom only where ribbons overlap

MOOD:
Calm intelligence
Design mastery
Premium studio
Confidence without noise

QUALITY:
Ultra-high detail
Soft lighting
No contrast spikes

OUTPUT:
4096×2304 PNG

${SAFETY_RULES}
`,

  heroDark: `
Create a cinematic dark abstract image representing invisible systems and intelligent services for a premium Services page.

STYLE:
Cinematic noir.
Architectural lighting.
High-end technology studio.

CONCEPT:
Dim flowing energy paths moving through darkness,
as if light is bending around invisible structures.

Visual should feel like:
- advanced engineering
- unseen infrastructure
- quiet power
- minimal
- mature

COMPOSITION:
- Deep dark base
- Soft directional light flows
- No glowing blobs
- No strong contrast
- No central object

COLOR PALETTE:
Base: #06081A
Depth layers: #0A0E24
Energy glow: indigo #818CF8 at very low opacity
Accent glow: violet #A78BFA extremely subtle

TEXTURE:
Fine film grain (4%)
Soft vignette

MOOD:
Powerful
Minimal
Mature
Premium

QUALITY:
No random patterns
Intentional design
High-end feel

OUTPUT:
4096×2304 PNG

${SAFETY_RULES}
`,

  sectionLight: `
Create an ultra-subtle background texture inspired by airflow and magnetic field visualization.

ABSOLUTE RULE:
No text, no letters, no numbers, no symbols, no signage, no watermark, no UI, no people, no objects.

STYLE:
Barely visible.
Almost invisible.

CONCEPT:
Soft curved flow lines that fade into background.
Opacity extremely low (3–6%).
No repeating pattern.
No sharp lines.

Must support text without distraction.

COLOR:
#F7F6FF base
Flow lines slightly darker (#EAE7FF)

TEXTURE:
Very soft noise.

PURPOSE:
Must sit behind service cards and process blocks.

OUTPUT:
4096×2304 PNG

${SAFETY_RULES}
`,

  sectionDark: `
Create a dark background texture inspired by invisible force fields.

ABSOLUTE RULE:
No text, no letters, no numbers, no symbols, no signage, no watermark, no UI, no people, no objects.

STYLE:
Sophisticated.
Technical.
Elegant.

CONCEPT:
Very faint flowing lines in background.
Barely perceptible.
Almost disappears unless looked carefully.

COLOR:
#06081A base
Flow hint using #A78BFA at 3–5% opacity

TEXTURE:
Film grain 4%.
Soft vignette.

MOOD:
Sophisticated
Technical
Elegant

OUTPUT:
4096×2304 PNG

${SAFETY_RULES}
`
}

// Ensure output directory exists
const outputDir = path.join(process.cwd(), 'public', 'backgrounds', 'services')

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

async function generateImage(prompt: string, filename: string) {
  try {
    const zai = await ZAI.create()

    const response = await zai.images.generations.create({
      prompt,
      size: '1440x720' // Using supported size for backgrounds
    })

    if (!response.data || !response.data[0] || !response.data[0].base64) {
      throw new Error('Invalid response from image generation API')
    }

    const imageBase64 = response.data[0].base64
    const buffer = Buffer.from(imageBase64, 'base64')
    const outputPath = path.join(outputDir, filename)

    fs.writeFileSync(outputPath, buffer)

    return {
      success: true,
      filename,
      path: `/backgrounds/services/${filename}`,
      size: buffer.length
    }
  } catch (error) {
    console.error(`Error generating ${filename}:`, error)
    return {
      success: false,
      filename,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json()

    if (!image || !PROMPTS[image as keyof typeof PROMPTS]) {
      return NextResponse.json(
        { error: 'Invalid image type. Must be one of: heroLight, heroDark, sectionLight, sectionDark' },
        { status: 400 }
      )
    }

    const prompt = PROMPTS[image as keyof typeof PROMPTS]
    const filename = `${image}.png`

    const result = await generateImage(prompt, filename)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to generate image' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      filename: result.filename,
      path: result.path,
      size: result.size
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Services Background Generation API',
    creativeDirection: 'Living Craft — Invisible Intelligence',
    availableImages: Object.keys(PROMPTS),
    usage: {
      method: 'POST',
      body: {
        image: 'heroLight | heroDark | sectionLight | sectionDark'
      }
    }
  })
}
