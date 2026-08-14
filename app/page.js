import Hero3D from '@/components/Hero3D'
import Link from 'next/link'
import Image from 'next/image'
import StaffCard from '@/components/StaffCard'
import TestimonialCard from '@/components/TestimonialCard'
import AchievementCard from '@/components/AchievementCard'
import NewsCard from '@/components/NewsCard'
import FAQItem from '@/components/FAQItem'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero3D />

      {/* Quick Intro */}
      <section className="section bg-navy">
        <div className="container text-center">
          <h2 className="section-title gradient-text">
            Welcome to G.S Nyirarukobwa
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            A school that has been shaping young minds from Nursery through O-Level.
            We are proud of our history and excited about our digital future.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="section bg-royal-blue/20">
        <div className="container">
          <h2 className="section-title text-center">Why G.S Nyirarukobwa?</h2>
          <p className="section-subtitle">What makes our school special</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎓', title: 'Quality Education', desc: 'Strong academic foundation from nursery to O-Level.' },
              { icon: '👨‍🏫', title: 'Experienced Teachers', desc: 'Dedicated educators who care about student growth.' },
              { icon: '🌟', title: 'Student Development', desc: 'Focus on both academic and personal character building.' },
              { icon: '🏫', title: 'Safe Environment', desc: 'A nurturing community where students feel valued.' },
            ].map((item, i) => (
              <div key={i} className="glass p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Levels */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Our Academic Levels</h2>
          <p className="section-subtitle">From early years to secondary education</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { level: 'Nursery', desc: 'Early childhood education and foundation building.' },
              { level: 'Lower Primary', desc: 'Building basic literacy, numeracy, and social skills.' },
              { level: 'Upper Primary', desc: 'Strengthening core subjects and critical thinking.' },
              { level: 'O-Level', desc: 'Preparing students for higher education and life.' },
            ].map((item, i) => (
              <div key={i} className="glass p-6 border-l-4 border-cyan">
                <h3 className="text-2xl font-bold text-cyan mb-2">{item.level}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Preview */}
      <section className="section bg-royal-blue/20">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Our Achievements</h2>
            <Link href="/achievements" className="text-cyan hover:text-white transition">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AchievementCard 
              title="Academic Excellence"
              description="Consistent performance in national examinations."
              icon="📚"
            />
            <AchievementCard 
              title="Sports Achievements"
              description="Active participation and success in school competitions."
              icon="⚽"
            />
            <AchievementCard 
              title="Digital Innovation"
              description="One of the first schools in the area to embrace technology."
              icon="💻"
            />
          </div>
        </div>
      </section>

      {/* Staff Preview */}
      <section className="section">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Meet Our Team</h2>
            <Link href="/staff" className="text-cyan hover:text-white transition">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaffCard 
              name="[Head Teacher Name]"
              position="Head Teacher"
              photo="/images/placeholder-staff.jpg"
            />
            <StaffCard 
              name="[DOS Name]"
              position="Director of Studies"
              photo="/images/placeholder-staff.jpg"
            />
            <StaffCard 
              name="[DOD Name]"
              position="Director of Discipline"
              photo="/images/placeholder-staff.jpg"
            />
            <StaffCard 
              name="[Teacher Name]"
              position="Senior Teacher"
              photo="/images/placeholder-staff.jpg"
            />
          </div>
        </div>
      </section>

      {/* Student Voices */}
      <section className="section bg-royal-blue/20">
        <div className="container">
          <h2 className="section-title text-center">What Our Students Say</h2>
          <p className="section-subtitle">Real voices from our school community</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
              name="[Student Name]"
              class="[Class/Year]"
              quote="[Student testimonial quote here]"
              photo="/images/placeholder-student.jpg"
            />
            <TestimonialCard 
              name="[Student Name]"
              class="[Class/Year]"
              quote="[Student testimonial quote here]"
              photo="/images/placeholder-student.jpg"
            />
            <TestimonialCard 
              name="[Student Name]"
              class="[Class/Year]"
              quote="[Student testimonial quote here]"
              photo="/images/placeholder-student.jpg"
            />
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="section">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Latest News</h2>
            <Link href="/news" className="text-cyan hover:text-white transition">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NewsCard 
              title="[News Title]"
              date="[Date]"
              excerpt="[Short description]"
              image="/images/placeholder-news.jpg"
            />
            <NewsCard 
              title="[News Title]"
              date="[Date]"
              excerpt="[Short description]"
              image="/images/placeholder-news.jpg"
            />
            <NewsCard 
              title="[News Title]"
              date="[Date]"
              excerpt="[Short description]"
              image="/images/placeholder-news.jpg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section bg-royal-blue/20">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Frequently Asked Questions</h2>
            <Link href="/faq" className="text-cyan hover:text-white transition">
              View All →
            </Link>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem 
              question="Where is the school located?"
              answer="[School address]"
            />
            <FAQItem 
              question="What levels does the school offer?"
              answer="Nursery, Lower Primary, Upper Primary, and O-Level."
            />
            <FAQItem 
              question="How can I apply?"
              answer="Visit our Apply page to complete the online application form."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container text-center">
          <div className="glass p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our School?</h2>
            <p className="text-white/70 mb-8">
              Apply online today and become part of the G.S Nyirarukobwa community.
            </p>
            <Link href="/apply" className="btn-primary inline-block">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
