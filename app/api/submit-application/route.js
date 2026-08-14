import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const data = await request.json()
    
    // Validate required fields
    const required = ['parentName', 'phone', 'studentName', 'studentDOB', 'studentGender', 'levelApplying']
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Google Apps Script Web App URL
    // Create a Google Apps Script and deploy it as a web app
    // Replace with your actual URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || 'YOUR_GOOGLE_SCRIPT_URL'

    // Send to Google Sheets via Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Failed to send to Google Sheets')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Application submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    )
  }
}
