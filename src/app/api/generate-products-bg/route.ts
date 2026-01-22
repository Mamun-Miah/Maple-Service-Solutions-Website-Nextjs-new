import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'
import path from 'path'

// Enterprise prompts - ASCII only
const PROMPTS = {
  heroLight: 'Abstract digital infrastructure network flows. Clean lines. Minimal grid. Soft blue tones. No text.',
  heroDark: 'Dark infrastructure with thin luminous pathways. Deep base. Purple/indigo accents. Minimal structure. No text.',
  gridLight: 'Ultra-subtle enterprise cloud texture. Very low contrast. Faint grid. Soft gradients. No patterns. No text.',
  gridDark: 'Dark infrastructure texture. Faint network depth. Almost invisible lines. Indigo accents. No text.'
}

// Ensure output directory exists
const outputDir = path.join(process.cwd(), 'public', 'backgrounds', 'products')
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

async function generateImage(prompt: string, filename: string) {
  try {
    console.log(`Generating ${filename}...`)
    const zai = await ZAI.create()

    // Use the exact size format from skill documentation
    const response = await zai.images.generations.create({
      prompt: prompt,
      size: '1440x720' // Supported wide landscape size (not 4096x2304)
    })

    if (!response.data || !response.data[0] || !response.data[0].base64) {
      throw new Error('Invalid response from image generation API')
    }

    const imageBase64 = response.data[0].base64
    const buffer = Buffer.from(imageBase64, 'base64')
    const outputPath = path.join(outputDir, filename)
    fs.writeFileSync(outputPath, buffer)

    console.log(`Generated ${filename}`)

    return {
      success: true,
      filename,
      path: `/backgrounds/${filename}`,
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
        { error: 'Invalid image type. Must be one of: heroLight, heroDark, gridLight, gridDark' },
        { status: 400 }
      )
    }

    const prompt = PROMPTS[image as keyof typeof PROMPTS]
    const filename = `products-${image}.png`

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
    }, { status: 200 })

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
    message: 'Products Background Generation API',
    creativeDirection: 'Systems at Work',
    availableImages: Object.keys(PROMPTS),
    usage: {
      method: 'POST',
      body: { image: 'heroLight | heroDark | gridLight | gridDark' }
    }
  })
}
