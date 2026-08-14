'use client'

import { useState, useRef, useEffect } from 'react'

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m the G.S Nyirarukobwa AI Assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Knowledge base
  const knowledge = {
    school: {
      name: 'G.S Nyirarukobwa',
      founded: '2005',
      location: 'Nyirarukobwa, Rwanda',
      levels: ['Nursery', 'Lower Primary', 'Upper Primary', 'O-Level'],
      mission: 'To provide quality education that prepares students for the future.',
      vision: 'To be a center of academic excellence and character development.',
      motto: 'Learning Today. Building Tomorrow.'
    },
    contact: {
      phone: '[School Phone Number]',
      email: '[School Email]',
      address: '[School Address]'
    },
    faq: [
      { q: 'where is the school located', a: 'The school is located at [School Address].' },
      { q: 'what levels does the school offer', a: 'We offer Nursery, Lower Primary, Upper Primary, and O-Level.' },
      { q: 'how can i apply', a: 'Visit our Apply section to complete the online application form.' },
      { q: 'how can i contact the school', a: 'Call us at [School Phone Number] or email [School Email].' },
    ]
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (question) => {
    const lower = question.toLowerCase()
    
    // Check FAQ
    for (const faq of knowledge.faq) {
      if (lower.includes(faq.q)) {
        return faq.a
      }
    }
    
    // Check contact
    if (lower.includes('phone') || lower.includes('call')) {
      return knowledge.contact.phone
    }
    if (lower.includes('email')) {
      return knowledge.contact.email
    }
    if (lower.includes('address') || lower.includes('location')) {
      return knowledge.contact.address
    }
    
    // Check school info
    if (lower.includes('mission')) return knowledge.school.mission
    if (lower.includes('vision')) return knowledge.school.vision
    if (lower.includes('motto')) return knowledge.school.motto
    if (lower.includes('history') || lower.includes('founded')) {
      return `G.S Nyirarukobwa was founded in ${knowledge.school.founded}.`
    }
    if (lower.includes('levels') || lower.includes('classes')) {
      return `We offer: ${knowledge.school.levels.join(', ')}.`
    }
    
    // Greetings
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
      return 'Hello! Welcome to G.S Nyirarukobwa. How can I assist you today?'
    }
    if (lower.includes('thank')) {
      return "You're welcome! Is there anything else I can help with?"
    }
    
    // Generic
    const generic = [
      "That's a great question. Could you please rephrase or be more specific?",
      "I'm here to help with information about G.S Nyirarukobwa. What would you like to know?",
      "I appreciate your question. Could you tell me more about what you're looking for?"
    ]
    return generic[Math.floor(Math.random() * generic.length)]
  }

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    // Simulate thinking
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500))

    const response = getResponse(userMessage)
    setMessages(prev => [...prev, { role: 'assistant', content: response }])
    setIsLoading(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage()
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan to-royal-blue text-white p-4 rounded-full shadow-2xl hover:scale-110 transition"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-navy/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-4 border-b border-white/10 bg-royal-blue/30">
            <h3 className="font-semibold text-cyan">G.S Nyirarukobwa AI</h3>
            <p className="text-xs text-white/40">Ask me anything about the school</p>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl ${
                    msg.role === 'user'
                      ? 'bg-cyan/20 text-white rounded-br-none'
                      : 'bg-white/5 text-white/90 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-xl rounded-bl-none">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-cyan rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-cyan rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                    <span className="w-2 h-2 bg-cyan rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-white/10 bg-royal-blue/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask a question..."
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-cyan focus:outline-none transition text-white text-sm"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-cyan text-navy rounded-lg hover:bg-cyan/80 transition disabled:opacity-50"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
