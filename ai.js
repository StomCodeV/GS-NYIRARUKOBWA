// ==========================================
// AI ASSISTANT - Madame Marie
// Complete Knowledge Base for G.S Nyirarukobwa
// ==========================================

// ==========================================
// AI KNOWLEDGE BASE
// ==========================================
const AIKnowledgeBase = {
    // ==========================================
    // SCHOOL INFORMATION
    // ==========================================
    school: {
        name: 'G.S Nyirarukobwa',
        fullName: 'Groupe Scolaire Nyirarukobwa',
        founded: '1974',
        location: 'Ntarama Sector, Bugesera District, Eastern Province, Rwanda',
        coordinates: '2.078193° S, 30.090682° E',
        levels: ['Nursery', 'Lower Primary', 'Upper Primary', 'O-Level'],
        type: 'Public School',
        motto: 'Learning Today. Building Tomorrow.',
        slogan: 'Knowledge. Culture. Success.',
        headTeacher: 'NKUNDINGABO Theophile',
        formerDirector: 'Yankurije Antoine (2013)',
        studentCount: {
            total: 1230,
            girls: 406,
            boys: 399
        },
        description: 'G.S Nyirarukobwa is a public school in Bugesera District that has been serving the community with quality education since 1974.'
    },

    // ==========================================
    // MISSION & VISION
    // ==========================================
    mission: {
        kinyarwanda: 'Gutoza abana uburezi no gutanga uburezi bufite ireme, kugira ngo abanyeshuri bazibone mu iterambere mu cyerekezo cy\'u Rwanda cyo kugira ubukungu bushingiye ku bumenyi n\'ikoranabuhanga.',
        english: 'To educate children and provide quality education, so that students can participate in the development of Rwanda\'s vision of having a knowledge-based and technology-driven economy.',
        french: 'Éduquer les enfants et fournir une éducation de qualité, afin que les élèves puissent participer au développement de la vision du Rwanda d\'avoir une économie basée sur la connaissance et la technologie.'
    },
    vision: {
        kinyarwanda: 'Mu myaka itatu (3) 2022-2024 tuzaja twamaze kuvugurura imiterere y\'ikigo kugira ngo kibe ahantu heza habereye kwigira kandi hasigasira umutekano w\'abanyeshuri.',
        english: 'Within three years (2022-2024), we will have renovated the school\'s infrastructure to make it a better place for learning and to ensure the safety of students.',
        french: 'Dans trois ans (2022-2024), nous aurons rénové les infrastructures de l\'école pour en faire un meilleur lieu d\'apprentissage et assurer la sécurité des élèves.'
    },
    values: ['Excellence', 'Discipline', 'Integrity', 'Community', 'Innovation'],

    // ==========================================
    // HISTORY TIMELINE
    // ==========================================
    history: [
        { year: '1974', event: 'École Primaire Nyirarukobwa was founded' },
        { year: '2013', event: 'Airtel Rwanda renovated the school with a 20 million Franc investment, covering roofs of 11 classrooms, doors, windows, benches for 200 students, three water tanks, and toilet construction' },
        { year: '2013', event: 'ISOC Rwanda Chapter provided a $10,000 grant to bring connectivity to the school, purchasing five computers and setting up a computer lab' },
        { year: '2020', event: 'First Safer Internet Day celebrated at G.S Nyirarukobwa' },
        { year: '2021', event: 'Smart Teacher Project launched — 10 teachers received smartphones and training' },
        { year: '2024', event: 'Global Encryption Day celebrated at the school' },
        { year: '2024', event: 'Safer Internet Day 2024 hosted with theme "Promoting personal accountability for a constructive internet atmosphere"' },
        { year: '2025', event: 'Digital Parenting Training held at the school' }
    ],

    // ==========================================
    // STAFF
    // ==========================================
    staff: {
        headTeacher: { name: 'NKUNDINGABO Theophile', role: 'Head Teacher' },
        dos: { name: '[DOS Name]', role: 'Director of Studies' },
        dod: { name: '[DOD Name]', role: 'Director of Discipline' },
        teachers: [
            { name: 'MUHIRE Jean de la Croix', subject: 'Science Teacher' },
            { name: 'NYIRAHAKIZIMANA Jeanisse', subject: 'Teacher' },
            { name: 'NTABWOBA Jean Paul', subject: 'Teacher' },
            { name: 'Nzayisenga Obed', subject: 'Teacher' }
        ],
        formerStaff: [
            { name: 'Yankurije Antoine', role: 'Former Director (2013)' }
        ]
    },

    // ==========================================
    // ACADEMICS
    // ==========================================
    academics: {
        nursery: {
            description: 'Early childhood education focusing on foundational skills, socialization, and cognitive development.',
            activities: ['Play-based learning', 'Arts and crafts', 'Storytelling', 'Basic numeracy and literacy']
        },
        lowerPrimary: {
            description: 'Building strong foundations in literacy, numeracy, and social skills.',
            subjects: ['Mathematics', 'English', 'Kinyarwanda', 'Science', 'Social Studies', 'Physical Education']
        },
        upperPrimary: {
            description: 'Strengthening core academic subjects and developing critical thinking skills.',
            subjects: ['Mathematics', 'English', 'Kinyarwanda', 'Science', 'Social Studies', 'ICT']
        },
        oLevel: {
            description: 'Preparing students for higher education and future careers.',
            subjects: ['Mathematics', 'English', 'Kinyarwanda', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'ICT']
        }
    },

    // ==========================================
    // ADMISSIONS
    // ==========================================
    admissions: {
        requirements: [
            'Birth certificate',
            'Previous school report (if applicable)',
            'Medical records',
            'Parent/guardian identification',
            'SDMS Code'
        ],
        process: 'Visit the Apply section to complete the online application form. You will need the student\'s SDMS Code.',
        fees: 'Please contact the school administration for current fee structure.',
        documents: 'Birth certificate, previous school report, medical records, parent/guardian identification, and SDMS Code.'
    },

    // ==========================================
    // CONTACT
    // ==========================================
    contact: {
        phone: '[School Phone Number]',
        email: '[School Email]',
        address: 'Ntarama Sector, Bugesera District, Eastern Province, Rwanda',
        mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.1014922726688!2d30.090682061751547!3d-2.078193123410155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dcabbf780ff707%3A0xbeeb8f8e5bf6795e!2sNyirarukobwa%20Primary%20School!5e1!3m2!1sen!2srw!4v1787040623292!5m2!1sen!2srw'
    },

    // ==========================================
    // SDMS INFORMATION
    // ==========================================
    sdms: {
        name: 'School Data Management System',
        description: 'A system by the Ministry of Education to track student records across Rwanda.',
        website: 'https://sdms.gov.rw',
        importance: 'SDMS is required for all students in Rwanda. It helps schools manage enrollment, grants, and student data.',
        purpose: 'Streamlines the collection, storage, and analysis of educational data across Rwanda.',
        benefits: [
            'Real-time student enrollment data, disaggregated by gender',
            'Enables schools to request capitation grants and school feeding funds',
            'Reduces paperwork and saves teachers\' time',
            'Helps schools comply with national education standards'
        ]
    },

    // ==========================================
    // PARTNERS
    // ==========================================
    partners: [
        { name: 'ISOC Rwanda Chapter', contribution: 'Digital Library, smartphones, teacher training, ICT workshops, Safer Internet Day events' },
        { name: 'Airtel Rwanda', contribution: '20 Million Franc school renovation (2013), 11 classrooms, doors, windows, benches, water tanks, toilets' },
        { name: 'MINEDUC', contribution: 'Education policy and support' },
        { name: 'Bugesera District', contribution: 'Local government support and education oversight' },
        { name: 'Rwanda Investigation Bureau (RIB)', contribution: 'Safer Internet Day participation and cybercrime awareness' },
        { name: 'UNICEF', contribution: 'SDMS implementation support' }
    ],

    // ==========================================
    // ACHIEVEMENTS
    // ==========================================
    achievements: [
        { title: 'Academic Excellence', description: 'Consistent performance in national examinations, improved school ranking, test scores, and enrollment.' },
        { title: 'Sports Achievements', description: 'Winner of district sports competitions 2019, 2021, 2023. Active participation in school competitions.' },
        { title: 'Digital Innovation', description: 'Pioneered digital learning initiatives in Bugesera District. School-based Scratch programming competition.' },
        { title: 'Teacher Recognition', description: 'Teacher recognized for leveraging ICT in teaching. Leader in educational technology.' },
        { title: 'Global Participation', description: 'Safer Internet Day (2020, 2024) and Global Encryption Day (2024) host school.' },
        { title: 'Digital Literacy Pioneer', description: 'One of the first schools in Bugesera District to embrace ICT and digital literacy.' }
    ],

    // ==========================================
    // INFRASTRUCTURE
    // ==========================================
    infrastructure: {
        classrooms: { count: 11, details: 'With new roofs (renovated 2013)' },
        benches: { count: '200+', details: 'Seating for students' },
        waterTanks: { count: 3, details: 'Clean water supply' },
        toilets: { details: 'New toilet facilities constructed' },
        computerLab: { count: 5, details: 'Computers (initial setup through ISOC grant)' },
        digitalLibrary: { details: 'Offline digital educational resources' },
        planned: ['Library (promised by Airtel)', 'Fencing / perimeter wall (promised by Airtel)', 'Playground (promised by Airtel)']
    },

    // ==========================================
    // TECHNOLOGY INITIATIVES
    // ==========================================
    technology: [
        { name: 'Digital Library', description: 'Offline digital educational resources reducing bandwidth costs' },
        { name: 'Computer Lab', description: '5 computers set up through ISOC grant' },
        { name: 'Smart Teacher Project', description: '10 teachers received smartphones and training (2021)' },
        { name: 'WhatsApp Group', description: 'All teachers connected for easy communication' },
        { name: 'Safer Internet Day', description: 'Annual event promoting responsible internet usage since 2020' },
        { name: 'Global Encryption Day', description: 'School participated in 2024' },
        { name: 'Digital Literacy Training', description: 'Ongoing training for teachers and students' },
        { name: 'Scratch Programming Competition', description: 'School-based competition held for students' }
    ],

    // ==========================================
    // FAQ
    // ==========================================
    faq: [
        { question: 'Where is the school located?', answer: 'Ntarama Sector, Bugesera District, Eastern Province, Rwanda.' },
        { question: 'What levels does the school offer?', answer: 'We offer Nursery, Lower Primary, Upper Primary, and O-Level.' },
        { question: 'How can I apply?', answer: 'Visit our Apply section to complete the online application form. You\'ll need the student\'s SDMS Code.' },
        { question: 'What documents are needed for admission?', answer: 'Birth certificate, previous school report, medical records, parent/guardian identification, and SDMS Code.' },
        { question: 'What are the school fees?', answer: 'Please contact the school administration for current fee structure.' },
        { question: 'How can I contact the school?', answer: 'You can visit the school at Ntarama Sector, Bugesera District, or use the contact section on the website.' },
        { question: 'What activities does the school have?', answer: 'We offer sports, clubs, cultural activities, and various student events throughout the year.' },
        { question: 'What is SDMS and why do I need it?', answer: 'SDMS (School Data Management System) is a system by the Ministry of Education to track student records. It\'s required for all students in Rwanda.' },
        { question: 'Who is the Head Teacher?', answer: 'NKUNDINGABO Theophile is the Head Teacher.' },
        { question: 'When was the school founded?', answer: 'G.S Nyirarukobwa was founded in 1974.' },
        { question: 'What is the school\'s mission?', answer: 'To provide quality education that prepares students for the future.' },
        { question: 'What is the school\'s vision?', answer: 'To be a center of academic excellence and character development.' },
        { question: 'How many students does the school have?', answer: 'The school has over 1,230 students.' },
        { question: 'What partners does the school have?', answer: 'ISOC Rwanda, Airtel Rwanda, MINEDUC, Bugesera District, Rwanda Investigation Bureau, and UNICEF.' }
    ]
};

// ==========================================
// AI ASSISTANT CLASS
// ==========================================
class SchoolAIAssistant {
    constructor() {
        this.memory = [];
        this.knowledgeBase = AIKnowledgeBase;
        this.userName = null;
        this.conversationCount = 0;
        this.avatar = 'https://i.postimg.cc/zfn1bpyP/GS-NYIRARUKOBWA-Assistant-Ai.png';
    }

    // ==========================================
    // GET AVATAR URL
    // ==========================================
    getAvatar() {
        return this.avatar;
    }

    // ==========================================
    // PROCESS QUESTION
    // ==========================================
    process(question) {
        const lower = question.toLowerCase();
        const reasoning = [];
        this.conversationCount++;

        reasoning.push('🔍 Analyzing question...');
        const intent = this.classifyIntent(lower);
        reasoning.push(`📌 Intent identified: ${intent}`);

        const entities = this.extractEntities(lower);
        if (entities.length > 0) {
            reasoning.push(`🏷️ Entities found: ${entities.join(', ')}`);
        }

        reasoning.push('📚 Searching knowledge base...');
        const result = this.search(lower, intent);

        if (result.confidence > 0.7) {
            reasoning.push(`📖 Found relevant match (${Math.round(result.confidence * 100)}% confidence)`);
        } else {
            reasoning.push('📖 No direct match found, using fallback');
        }

        reasoning.push('💭 Generating response...');
        const response = this.generateResponse(question, intent, result);
        reasoning.push('✅ Response ready');

        this.memory.push({
            question: question,
            response: response,
            intent: intent,
            timestamp: new Date().toISOString()
        });

        if (this.memory.length > 50) {
            this.memory = this.memory.slice(-50);
        }

        return {
            response: response,
            reasoning: reasoning,
            intent: intent,
            confidence: result.confidence || 0,
            fromMemory: result.fromMemory || false
        };
    }

    // ==========================================
    // CLASSIFY INTENT
    // ==========================================
    classifyIntent(text) {
        const intents = {
            greeting: ['hello', 'hi', 'hey', 'bonjour', 'good morning', 'good afternoon', 'muraho', 'mbese'],
            location: ['where', 'location', 'address', 'find', 'located', 'place', 'area'],
            levels: ['levels', 'classes', 'grades', 'offer', 'nursery', 'primary', 'secondary', 'o-level', 'programs'],
            application: ['apply', 'application', 'register', 'admission', 'enroll', 'how to apply'],
            documents: ['documents', 'paper', 'requirements', 'needed', 'required', 'files'],
            fees: ['fee', 'cost', 'payment', 'tuition', 'price', 'money'],
            contact: ['contact', 'call', 'phone', 'email', 'reach', 'number', 'whatsapp'],
            activities: ['activities', 'sports', 'clubs', 'events', 'programs', 'after school'],
            staff: ['staff', 'teacher', 'head teacher', 'director', 'principal', 'dos', 'dod', 'school leader'],
            history: ['history', 'founded', 'started', 'beginning', 'established', 'origin'],
            mission: ['mission', 'vision', 'values', 'goal', 'purpose', 'aim'],
            achievements: ['achievement', 'award', 'success', 'excellence', 'trophy', 'win'],
            thanks: ['thank', 'thanks', 'appreciate', 'merci'],
            about: ['about', 'tell me', 'information', 'overview', 'describe'],
            sdms: ['sdms', 'data management', 'student data', 'system', 'registration code'],
            students: ['students', 'pupils', 'learners', 'enrollment', 'how many students'],
            partners: ['partners', 'sponsors', 'support', 'collaboration', 'isoc', 'airtel', 'mineduc'],
            infrastructure: ['infrastructure', 'buildings', 'classrooms', 'facilities', 'toilets', 'library'],
            technology: ['technology', 'computer', 'digital', 'internet', 'it', 'computers', 'software']
        };

        for (const [intent, keywords] of Object.entries(intents)) {
            if (keywords.some(k => text.includes(k))) {
                return intent;
            }
        }
        return 'general';
    }

    // ==========================================
    // EXTRACT ENTITIES
    // ==========================================
    extractEntities(text) {
        const entities = [];
        const levels = ['nursery', 'primary', 'lower primary', 'upper primary', 'o-level', 'secondary'];
        levels.forEach(level => {
            if (text.includes(level)) entities.push(level);
        });
        const roles = ['head teacher', 'dos', 'dod', 'director', 'teacher', 'principal'];
        roles.forEach(role => {
            if (text.includes(role)) entities.push(role);
        });
        const names = ['nkundingabo', 'theophile', 'muhire', 'nyirahakizimana'];
        names.forEach(name => {
            if (text.includes(name)) entities.push(name);
        });
        const partners = ['isoc', 'airtel', 'mineduc', 'unicef', 'bugesera'];
        partners.forEach(partner => {
            if (text.includes(partner)) entities.push(partner);
        });
        return entities;
    }

    // ==========================================
    // SEARCH KNOWLEDGE BASE
    // ==========================================
    search(text, intent) {
        for (const faq of this.knowledgeBase.faq) {
            const questionWords = faq.question.toLowerCase().split(' ');
            if (questionWords.some(word => text.includes(word))) {
                return { answer: faq.answer, confidence: 0.9 };
            }
        }

        const school = this.knowledgeBase.school;
        const contact = this.knowledgeBase.contact;
        const sdms = this.knowledgeBase.sdms;
        const admissions = this.knowledgeBase.admissions;
        const academics = this.knowledgeBase.academics;
        const staff = this.knowledgeBase.staff;
        const partners = this.knowledgeBase.partners;

        if (text.includes('mission')) {
            return { answer: school.mission.english + ' (' + school.mission.kinyarwanda + ')', confidence: 0.9 };
        }
        if (text.includes('vision')) {
            return { answer: school.vision.english + ' (' + school.vision.kinyarwanda + ')', confidence: 0.9 };
        }
        if (text.includes('history')) {
            const historyText = this.knowledgeBase.history.map(h => `${h.year}: ${h.event}`).join('. ');
            return { answer: historyText, confidence: 0.9 };
        }
        if (text.includes('motto')) {
            return { answer: school.motto, confidence: 0.9 };
        }
        if (text.includes('slogan')) {
            return { answer: school.slogan, confidence: 0.9 };
        }
        if (text.includes('head teacher') || text.includes('director')) {
            return { answer: `The Head Teacher is ${staff.headTeacher.name}.`, confidence: 0.9 };
        }
        if (text.includes('founded') || text.includes('started')) {
            return { answer: `The school was founded in ${school.founded}.`, confidence: 0.9 };
        }
        if (text.includes('students') || text.includes('how many students')) {
            return {
                answer: `The school has ${school.studentCount.total}+ students — ${school.studentCount.girls} girls and ${school.studentCount.boys} boys.`,
                confidence: 0.9
            };
        }

        for (const [level, info] of Object.entries(academics)) {
            if (text.includes(level)) {
                return { answer: info.description, confidence: 0.85 };
            }
        }

        if (text.includes('document') || text.includes('required') || text.includes('needed')) {
            return { answer: admissions.documents, confidence: 0.85 };
        }
        if (text.includes('process') || text.includes('apply')) {
            return { answer: admissions.process, confidence: 0.85 };
        }
        if (text.includes('fee') || text.includes('cost') || text.includes('tuition')) {
            return { answer: admissions.fees, confidence: 0.7 };
        }

        if (text.includes('sdms')) {
            return { answer: `${sdms.description} It is required for all students in Rwanda. Learn more at ${sdms.website}`, confidence: 0.95 };
        }

        if (text.includes('phone') || text.includes('call') || text.includes('number')) {
            return { answer: contact.phone, confidence: 0.85 };
        }
        if (text.includes('email')) {
            return { answer: contact.email, confidence: 0.85 };
        }
        if (text.includes('address') || text.includes('location')) {
            return { answer: contact.address, confidence: 0.85 };
        }

        if (text.includes('partners') || text.includes('sponsors') || text.includes('isoc') || text.includes('airtel')) {
            const partnerText = partners.map(p => `${p.name}: ${p.contribution}`).join('. ');
            return { answer: partnerText, confidence: 0.85 };
        }

        if (text.includes('achievement') || text.includes('award') || text.includes('success')) {
            const achievementText = this.knowledgeBase.achievements.map(a => `${a.title}: ${a.description}`).join('. ');
            return { answer: achievementText, confidence: 0.8 };
        }

        if (text.includes('technology') || text.includes('computer') || text.includes('digital')) {
            const techText = this.knowledgeBase.technology.map(t => `${t.name}: ${t.description}`).join('. ');
            return { answer: techText, confidence: 0.85 };
        }

        if (text.includes('infrastructure') || text.includes('classrooms') || text.includes('facilities')) {
            const infra = this.knowledgeBase.infrastructure;
            let infraText = `Classrooms: ${infra.classrooms.count} (${infra.classrooms.details}). `;
            infraText += `Benches: ${infra.benches.count}. `;
            infraText += `Water tanks: ${infra.waterTanks.count}. `;
            infraText += `Computer lab: ${infra.computerLab.count} computers. `;
            infraText += `Digital Library: ${infra.digitalLibrary.details}.`;
            return { answer: infraText, confidence: 0.85 };
        }

        if (text.includes('teachers') || text.includes('staff')) {
            const teacherNames = staff.teachers.map(t => t.name).join(', ');
            return { answer: `Our teachers include: ${teacherNames}. The Head Teacher is ${staff.headTeacher.name}.`, confidence: 0.85 };
        }

        if (text.includes('activities') || text.includes('sports') || text.includes('clubs')) {
            return {
                answer: 'We offer sports (football, basketball, athletics), clubs (Scratch programming, debate, culture), and various student events throughout the year. We also participate in district sports competitions.',
                confidence: 0.8
            };
        }

        return { answer: null, confidence: 0 };
    }

    // ==========================================
    // GENERATE RESPONSE
    // ==========================================
    generateResponse(question, intent, result) {
        if (result.answer) {
            return result.answer;
        }

        if (intent === 'greeting') {
            const hour = new Date().getHours();
            let greeting = 'Hello';
            if (hour >= 5 && hour < 12) greeting = 'Good morning';
            else if (hour >= 12 && hour < 17) greeting = 'Good afternoon';
            else if (hour >= 17 && hour < 21) greeting = 'Good evening';
            else greeting = 'Hello';
            return `${greeting}! Welcome to G.S Nyirarukobwa. I'm Madame Marie, your AI assistant. How can I help you today?`;
        }

        if (intent === 'thanks') {
            const responses = [
                "You're very welcome! 😊",
                "Happy to help! Is there anything else you'd like to know?",
                "My pleasure! Let me know if you have any other questions.",
                "Thank you for asking! I'm here whenever you need assistance."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }

        const fallbacks = {
            about: "G.S Nyirarukobwa is a public school in Bugesera District offering education from Nursery through O-Level. We focus on academic excellence, character development, and digital innovation.",
            location: "The school is located at Ntarama Sector, Bugesera District, Eastern Province, Rwanda.",
            levels: "We offer Nursery, Lower Primary, Upper Primary, and O-Level education.",
            application: "You can apply online through our Apply section. Just fill in the form and submit it! You'll need the student's SDMS Code.",
            documents: "For admission, you need: birth certificate, previous school report, medical records, parent/guardian identification, and SDMS Code.",
            fees: "For current fee structure, please contact the school administration directly.",
            contact: "You can reach us at our address: Ntarama Sector, Bugesera District, Eastern Province, Rwanda.",
            activities: "We offer sports, clubs, cultural activities, and various student events throughout the year.",
            staff: "Our Head Teacher is NKUNDINGABO Theophile. We also have dedicated teachers including MUHIRE Jean de la Croix, NYIRAHAKIZIMANA Jeanisse, and others.",
            history: "G.S Nyirarukobwa was established in 1974 and has been serving the community with quality education ever since.",
            mission: "Our mission is to provide quality education that prepares students for the future.",
            achievements: "We have achieved excellence in academics, sports, and digital innovation.",
            sdms: "SDMS is the School Data Management System used by the Ministry of Education to track student records. It's required for all students in Rwanda.",
            students: "The school has over 1,230 students.",
            partners: "Our partners include ISOC Rwanda, Airtel Rwanda, MINEDUC, Bugesera District, Rwanda Investigation Bureau, and UNICEF.",
            infrastructure: "The school has 11 classrooms, 200+ benches, 3 water tanks, a computer lab, and a digital library.",
            technology: "We have a Digital Library, Computer Lab, Smart Teacher Project, and participate in Safer Internet Day and Global Encryption Day."
        };

        if (fallbacks[intent]) {
            return fallbacks[intent];
        }

        const generic = [
            "That's a great question! I want to make sure I give you the most accurate information. Could you please rephrase or be more specific?",
            "I'm here to help with information about G.S Nyirarukobwa. I can tell you about our academics, admissions, staff, activities, and more. What would you like to know?",
            "I appreciate your question. Could you tell me more about what specific information you're looking for?",
            "That's an interesting question. I have extensive knowledge about our school. Could you clarify what specific aspect you're interested in?"
        ];
        return generic[Math.floor(Math.random() * generic.length)];
    }

    // ==========================================
    // GET CONVERSATION HISTORY
    // ==========================================
    getHistory() {
        return this.memory.slice(-10);
    }

    // ==========================================
    // CLEAR MEMORY
    // ==========================================
    clearMemory() {
        this.memory = [];
        this.conversationCount = 0;
        return 'Memory cleared successfully.';
    }
}

// ==========================================
// EXPORT FOR USE
// ==========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AIKnowledgeBase, SchoolAIAssistant };
}
