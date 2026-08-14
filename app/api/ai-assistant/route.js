import { NextResponse } from 'next/server'

const SCHOOL_INFO = {
  name: 'G.S Nyirarukobwa',
  location: '[School Address]',
  levels: 'Nursery, Lower Primary, Upper Primary, O-Level',
  phone: '[School Phone Number]',
  email: '[School Email]',
  about: 'G.S Nyirarukobwa is a school in Rwanda that offers education from Nursery through O-Level.',
  mission: 'To provide quality education that prepares students for the future.',
  vision: 'To be a center of academic excellence and character development.',
  // Add more verified information here
}

const FAQs = [
  { q: 'Where is the school located?', a: 'The school is located at [School Address].' },
  { q: 'What levels does the school offer?', a: 'The school offers Nursery, Lower Primary, Upper Primary, and O-Level.' },
  { q: 'How can I apply?', a: 'You can apply online through our Apply page. Just fill in the form and submit it.' },
  { q: 'What documents are needed for admission?', a: 'Please contact the school administration for the full list of required documents.' },
  { q: 'How can I contact the school?', a: 'You can call us at [School Phone Number] or email us at [School Email].' },
  { q: 'What activities does the school have?', a: 'The school offers sports, clubs, cultural activities, and various student events.' },
]

export async function POST(request) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Check FAQs first
    const lowerMessage = message.toLowerCase()
    for (const faq of FAQs) {
      const keywords = faq.q.toLowerCase().split(' ')
      const match = keywords.some(word => lowerMessage.includes(word))
      if (match) {
        return NextResponse.json({ reply: faq.a })
      }
    }

    // Generic responses if no match
    const genericResponses = [
      'I\'m here to help. Could you be more specific about your question?',
      'I can tell you about our school, how to apply, our levels, and more. What would you like to know?',
      'That\'s a good question. Please contact the school administration for more detailed information.',
    ]

    const randomResponse = genericResponses[Math.floor(Math.random() * genericResponses.length)]
    
    return NextResponse.json({ 
      reply: randomResponse,
      fallback: true
    })

  } catch (error) {
    console.error('AI Assistant error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
