// ==========================================
// AI ASSISTANT - GS NYIRARUKOBWA Assistant Ai
// CHATGPT-STYLE CONVERSATIONAL AI
// Professional • Casual • Friendly • Humorous
// ==========================================

// ==========================================
// COMPLETE KNOWLEDGE BASE
// ==========================================
const AIKnowledgeBase = {
    school: {
        name: 'G.S Nyirarukobwa',
        fullName: 'Groupe Scolaire Nyirarukobwa',
        founded: '1974',
        location: 'Ntarama Sector, Kanzenze Cell, Bugesera District, Eastern Province, Rwanda',
        coordinates: '2.078193° S, 30.090682° E',
        elevation: '1,437 metres above sea level',
        levels: ['Nursery', 'Lower Primary', 'Upper Primary', 'O-Level'],
        type: 'Public School',
        motto: 'Learning Today. Building Tomorrow.',
        slogan: 'Knowledge. Culture. Success.',
        headTeacher: 'NKUNDINGABO Theophile',
        formerDirector: 'Yankurije Antoine (2013)',
        studentCount: {
            total: '1,230+ (1,023 Primary + 210 Secondary as of 2022)',
            girls: '406+ (as of 2013)',
            boys: '399+ (as of 2013)'
        },
        description: 'G.S Nyirarukobwa is a public school in Bugesera District that has been serving the community with quality education since 1974. The school offers education from Nursery through O-Level and has embraced educational technology through partnerships with ISOC Rwanda and Airtel Rwanda. Previously the lowest ranked primary school in the district, it is now the highest ranked.',
        phone: '[School Phone Number]',
        email: '[School Email]',
        address: 'Ntarama Sector, Kanzenze Cell, Bugesera District, Eastern Province, Rwanda'
    },
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
    history: [
        { year: '1974', event: 'École Primaire Nyirarukobwa was founded' },
        { year: '2013', event: 'Airtel Rwanda renovated the school with a 20 million Franc investment — covering roofs of 11 classrooms, doors, windows, benches for 200 students, three water tanks, and toilet construction' },
        { year: '2013', event: 'ISOC Rwanda Chapter provided a $10,000 grant to bring connectivity to the school, purchasing five computers' },
        { year: '2015', event: 'Partnership with ISOC Rwanda began — the school received four computers and a printer, which facilitated test preparation and improved student performance' },
        { year: '2020', event: 'First Safer Internet Day in Rwanda celebrated at G.S Nyirarukobwa with the slogan "Together for a better internet"' },
        { year: '2021', event: 'Smart Teacher Project launched — 10 teachers received smartphones and training on how to use them effectively' },
        { year: '2024', event: 'Safer Internet Day 2024 hosted with the theme "Promoting personal accountability for a constructive internet atmosphere" — Scratch programming competition held, winners awarded' },
        { year: '2024', event: 'Global Encryption Day celebrated at the school' },
        { year: '2025', event: 'Digital Parenting Training held at the school — two-week training on digital parenting and online safety' }
    ],
    staff: {
        headTeacher: { name: 'NKUNDINGABO Theophile', role: 'Head Teacher' },
        dos: { name: '[DOS Name]', role: 'Director of Studies' },
        dod: { name: '[DOD Name]', role: 'Director of Discipline' },
        teachers: [
            { name: 'MUHIRE Jean de la Croix', subject: 'Science Teacher' },
            { name: 'NYIRAHAKIZIMANA Jeanisse', subject: 'Teacher' },
            { name: 'NTABWOBA Jean Paul', subject: 'Teacher' },
            { name: 'Elasto Hagumimana', subject: 'Teacher - Awarded Best Teacher for Scratch Programming Competitions' }
        ],
        formerStaff: [
            { name: 'Yankurije Antoine', role: 'Former Director (2013)' }
        ]
    },
    academics: {
        nursery: { description: 'Early childhood education focusing on foundational skills, socialization, and cognitive development.', activities: ['Play-based learning', 'Arts and crafts', 'Storytelling', 'Basic numeracy and literacy'] },
        lowerPrimary: { description: 'Building strong foundations in literacy, numeracy, and social skills.', subjects: ['Mathematics', 'English', 'Kinyarwanda', 'Science', 'Social Studies', 'Physical Education'] },
        upperPrimary: { description: 'Strengthening core academic subjects and developing critical thinking skills.', subjects: ['Mathematics', 'English', 'Kinyarwanda', 'Science', 'Social Studies', 'ICT'] },
        oLevel: { description: 'Preparing students for higher education and future careers.', subjects: ['Mathematics', 'English', 'Kinyarwanda', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'ICT'] }
    },
    admissions: {
        requirements: ['Birth certificate', 'Previous school report (if applicable)', 'Medical records', 'Parent/guardian identification', 'SDMS Code'],
        process: 'Visit the Apply section to complete the online application form. You will need the student\'s SDMS Code.',
        fees: 'Please contact the school administration for current fee structure.',
        documents: 'Birth certificate, previous school report, medical records, parent/guardian identification, and SDMS Code.'
    },
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
    partners: [
        { name: 'ISOC Rwanda Chapter', contribution: 'Digital Library, smartphones (10 teachers), teacher training, ICT workshops, Safer Internet Day events, $10,000 grant, 4 computers + printer, Global Encryption Day, Digital Literacy training' },
        { name: 'Airtel Rwanda', contribution: '20 Million Franc school renovation (2013) — 11 classrooms, doors, windows, benches for 200 students, 3 water tanks, toilets, promised library, fence, and playground' },
        { name: 'MINEDUC', contribution: 'Education policy and support' },
        { name: 'Bugesera District', contribution: 'Local government support and education oversight' },
        { name: 'Rwanda Investigation Bureau (RIB)', contribution: 'Safer Internet Day participation and cybercrime awareness' },
        { name: 'UNICEF', contribution: 'SDMS implementation support' }
    ],
    achievements: [
        { title: 'School Ranking Improvement', description: 'Previously the lowest ranked primary school in Bugesera District, the school is now the highest ranked. Test scores and enrollment increased significantly after connectivity was introduced.' },
        { title: 'Academic Excellence', description: 'Consistent improvement in performance in national examinations. The school has shown remarkable progress in student achievement.' },
        { title: 'Safer Internet Day Host', description: 'Hosted Safer Internet Day 2020 (the first in Rwanda), 2024, and 2025. A recognized leader in digital literacy and online safety.' },
        { title: 'Global Encryption Day Host', description: 'Hosted Global Encryption Day 2024 with ISOC Rwanda, promoting data protection and online privacy.' },
        { title: 'Scratch Programming Competition', description: 'School-based competition held, with winners awarded at Safer Internet Day 2024. Teacher Elasto Hagumimana recognized for helping students in Scratch competitions.' },
        { title: 'Digital Literacy Pioneer', description: 'One of the first schools in Bugesera District to embrace ICT. Teachers trained in ICT tools and digital literacy.' },
        { title: 'Teacher Recognition', description: 'Teacher Elasto Hagumimana awarded Best Teacher for efforts in Scratch programming competitions.' }
    ],
    infrastructure: {
        classrooms: { count: 11, details: 'With new roofs (renovated 2013)' },
        benches: { count: '200+', details: 'Seating for students (renovated 2013)' },
        waterTanks: { count: 3, details: 'Clean water supply — one new tank recently added' },
        toilets: { details: 'New toilet facilities constructed (2013)' },
        computerLab: { count: '5+', details: '5 computers (initial setup through ISOC grant) + 4 computers + printer from ISOC partnership' },
        digitalLibrary: { details: 'Offline digital educational resources — no internet required' },
        planned: ['Library (promised by Airtel)', 'Fencing / perimeter wall (promised by Airtel)', 'Playground (promised by Airtel)']
    },
    technology: [
        { name: 'Digital Library', description: 'Offline digital educational resources reducing bandwidth costs. Provides free access to quality education.' },
        { name: 'Computer Lab', description: '5 computers set up through ISOC grant + 4 computers + printer from ISOC partnership. Used for administrative and educational activities.' },
        { name: 'Smart Teacher Project', description: '10 teachers received smartphones and training (2021). Helped teachers access information, prepare lessons, and use the Digital Library.' },
        { name: 'WhatsApp Group', description: 'All teachers connected for easy communication — 100% of teachers are in the group.' },
        { name: 'Safer Internet Day', description: 'Annual event promoting responsible internet usage since 2020. Hosted the first SID in Rwanda.' },
        { name: 'Global Encryption Day', description: 'School participated in 2024, promoting data protection and online privacy.' },
        { name: 'Digital Literacy Training', description: 'Ongoing training for teachers and students. Teachers trained in ICT tools, Google Forms, Google Sheets, and CAMIS for school reports.' },
        { name: 'Scratch Programming Competition', description: 'School-based competition held for students, with winners awarded at Safer Internet Day 2024.' },
        { name: 'Safer Internet Club', description: 'Student-led club promoting digital literacy and online safety.' }
    ],
    faq: [
        { question: 'Where is the school located?', answer: 'Ntarama Sector, Kanzenze Cell, Bugesera District, Eastern Province, Rwanda.' },
        { question: 'What levels does the school offer?', answer: 'We offer Nursery, Lower Primary, Upper Primary, and O-Level.' },
        { question: 'How can I apply?', answer: 'Visit our Apply section to complete the online application form. You\'ll need the student\'s SDMS Code.' },
        { question: 'What documents are needed for admission?', answer: 'Birth certificate, previous school report, medical records, parent/guardian identification, and SDMS Code.' },
        { question: 'What are the school fees?', answer: 'Please contact the school administration for current fee structure.' },
        { question: 'How can I contact the school?', answer: 'You can visit the school at Ntarama Sector, Kanzenze Cell, Bugesera District, or use the contact section on the website.' },
        { question: 'What activities does the school have?', answer: 'We offer sports, clubs, cultural activities, and various student events throughout the year.' },
        { question: 'What is SDMS and why do I need it?', answer: 'SDMS (School Data Management System) is a system by the Ministry of Education to track student records. It\'s required for all students in Rwanda.' },
        { question: 'Who is the Head Teacher?', answer: 'NKUNDINGABO Theophile is the Head Teacher.' },
        { question: 'When was the school founded?', answer: 'G.S Nyirarukobwa was founded in 1974.' },
        { question: 'What is the school\'s mission?', answer: 'To provide quality education that prepares students for the future.' },
        { question: 'What is the school\'s vision?', answer: 'To be a center of academic excellence and character development.' },
        { question: 'How many students does the school have?', answer: 'The school has over 1,230 students — 1,023 primary and 210 secondary as of 2022.' },
        { question: 'What partners does the school have?', answer: 'ISOC Rwanda, Airtel Rwanda, MINEDUC, Bugesera District, Rwanda Investigation Bureau, and UNICEF.' },
        { question: 'What technology does the school have?', answer: 'We have a Digital Library, Computer Lab, Smart Teacher Project, Safer Internet Club, and participate in Safer Internet Day and Global Encryption Day.' },
        { question: 'What is the school\'s ranking?', answer: 'The school was previously the lowest ranked primary school in Bugesera District but is now the highest ranked.' },
        { question: 'Who is the best teacher at the school?', answer: 'Elasto Hagumimana was awarded Best Teacher for his efforts in helping students with Scratch programming competitions.' }
    ]
};

// ==========================================
// JOKE DATABASE - SCHOOL APPROPRIATE
// ==========================================
const JOKES = [
    { q: 'Why did the student bring a ladder to school?', a: 'Because they wanted to go to high school!' },
    { q: 'What did the teacher say to the student who ate his homework?', a: 'I hope you found it tasty!' },
    { q: 'Why is the math book so sad?', a: 'Because it has too many problems.' },
    { q: 'Why did the student study on the airplane?', a: 'Because they wanted a higher education!' },
    { q: 'What do you call a sleeping dinosaur?', a: 'A dino-snore!' },
    { q: 'Why did the teacher wear sunglasses?', a: 'Because the students were so bright!' },
    { q: 'What is a teacher\'s favorite nation?', a: 'Explanation!' },
    { q: 'Why did the student put his homework in the blender?', a: 'To make a smoothie — a smooth transition to the next grade!' },
    { q: 'What do you call a fake noodle?', a: 'An impasta!' },
    { q: 'Why don\'t scientists trust atoms?', a: 'Because they make up everything!' },
    { q: 'What did the zero say to the eight?', a: 'Nice belt!' },
    { q: 'Why did the student take a pencil to bed?', a: 'To draw the curtains!' },
    { q: 'What is the best thing about living in Rwanda?', a: 'The beautiful hills, the friendly people, and the delicious food!' },
    { q: 'Why did the computer go to school?', a: 'To get a better education — it wanted to be a mainframe!' },
    { q: 'What do you call a cow with no legs?', a: 'Ground beef!' }
];

// ==========================================
// FUN FACTS ABOUT RWANDA & SCHOOL
// ==========================================
const FUN_FACTS = [
    'Rwanda is known as the "Land of a Thousand Hills" — it\'s one of the most beautiful countries in Africa!',
    'G.S Nyirarukobwa is located at 1,437 metres above sea level, which is higher than the Eiffel Tower is tall!',
    'The school has been serving students since 1974 — that\'s over 50 years of quality education!',
    'Rwanda was the first country in the world to have a majority of women in parliament!',
    'The school has a Digital Library that doesn\'t need internet — it works offline!',
    'In 2013, Airtel Rwanda invested 20 million Francs to renovate G.S Nyirarukobwa — that\'s a lot of love for education!',
    'The school hosts Safer Internet Day events to teach students about online safety and digital literacy.',
    'G.S Nyirarukobwa was previously the lowest ranked primary school in Bugesera District — now it\'s the highest ranked!'
];

// ==========================================
// AI ASSISTANT CLASS - CHATGPT STYLE
// ==========================================
class SchoolAIAssistant {
    constructor() {
        this.memory = [];
        this.knowledgeBase = AIKnowledgeBase;
        this.userName = null;
        this.userRole = null; // parent, student, visitor, teacher, alumni
        this.conversationCount = 0;
        this.userPreferences = {
            tone: 'friendly', // friendly, professional, casual, humorous
            language: 'en'
        };
        this.avatar = 'https://i.postimg.cc/zfn1bpyP/GS-NYIRARUKOBWA-Assistant-Ai.png';
        this.name = 'GS NYIRARUKOBWA Assistant Ai';
        this.questionPatterns = {};
        this.responseHistory = [];
        this.userMood = 'neutral';
        this.lastJokeTime = 0;
        this.jokesUsed = [];
        this.factsUsed = [];
    }

    // ==========================================
    // GET AVATAR & NAME
    // ==========================================
    getAvatar() { return this.avatar; }
    getName() { return this.name; }

    // ==========================================
    // MAIN PROCESSING PIPELINE
    // ==========================================
    process(question) {
        const startTime = Date.now();
        this.conversationCount++;
        const lower = question.toLowerCase().trim();
        const reasoning = [];

        // === STEP 1: Detect user mood/tone ===
        const tone = this.detectTone(lower);
        reasoning.push(`🎭 Tone detected: ${tone}`);
        this.userMood = tone;

        // === STEP 2: Detect if it's a greeting ===
        if (this.isGreeting(lower)) {
            return this.handleGreeting(question, reasoning);
        }

        // === STEP 3: Detect if it's a farewell ===
        if (this.isFarewell(lower)) {
            return this.handleFarewell(reasoning);
        }

        // === STEP 4: Detect if it's a joke request ===
        if (this.isJokeRequest(lower)) {
            return this.handleJoke(reasoning);
        }

        // === STEP 5: Detect if it's a fun fact request ===
        if (this.isFunFactRequest(lower)) {
            return this.handleFunFact(reasoning);
        }

        // === STEP 6: Detect if it's about the school ===
        if (this.isSchoolQuestion(lower)) {
            return this.handleSchoolQuestion(question, lower, reasoning);
        }

        // === STEP 7: Detect emotional/feeling questions ===
        if (this.isEmotionalQuestion(lower)) {
            return this.handleEmotionalResponse(lower, reasoning);
        }

        // === STEP 8: Detect casual chat ===
        if (this.isCasualChat(lower)) {
            return this.handleCasualChat(question, lower, reasoning);
        }

        // === STEP 9: Detect if it's a 'how are you' type ===
        if (this.isHowAreYou(lower)) {
            return this.handleHowAreYou(reasoning);
        }

        // === STEP 10: Detect if it's about the user (personal) ===
        if (this.isAboutUser(lower)) {
            return this.handleAboutUser(question, lower, reasoning);
        }

        // === STEP 11: Search knowledge base for school info ===
        const result = this.searchKnowledgeBase(lower);
        if (result.answer) {
            reasoning.push('📚 Found in knowledge base');
            return this.formatResponse(result.answer, 'informative', reasoning);
        }

        // === STEP 12: Default response ===
        return this.handleUnknown(question, reasoning);
    }

    // ==========================================
    // DETECT TONE
    // ==========================================
    detectTone(text) {
        const casualWords = ['hey', 'yo', 'sup', 'dude', 'bro', 'man', 'cool', 'awesome', 'lol', 'haha', 'hehe'];
        const professionalWords = ['regarding', 'pertains', 'inquiry', 'kindly', 'request', 'appreciate', 'insight', 'clarify'];
        const emotionalWords = ['sad', 'happy', 'excited', 'worried', 'stressed', 'tired', 'angry', 'frustrated', 'nervous', 'scared', 'lonely', 'proud', 'grateful'];

        if (casualWords.some(w => text.includes(w))) return 'casual';
        if (professionalWords.some(w => text.includes(w))) return 'professional';
        if (emotionalWords.some(w => text.includes(w))) return 'emotional';
        if (text.includes('joke') || text.includes('funny') || text.includes('haha')) return 'humorous';
        return 'friendly';
    }

    // ==========================================
    // DETECTION FUNCTIONS
    // ==========================================
    isGreeting(text) {
        const greetings = ['hello', 'hi', 'hey', 'bonjour', 'muraho', 'good morning', 'good afternoon', 'good evening', 'yo', 'sup'];
        return greetings.some(g => text.includes(g));
    }

    isFarewell(text) {
        const farewells = ['bye', 'goodbye', 'see you', 'later', 'good night', 'bonsoir', 'murabeho'];
        return farewells.some(f => text.includes(f));
    }

    isJokeRequest(text) {
        const jokeWords = ['joke', 'funny', 'humor', 'make me laugh', 'tell me a joke', 'crack me up', 'laugh'];
        return jokeWords.some(w => text.includes(w));
    }

    isFunFactRequest(text) {
        const factWords = ['fact', 'interesting', 'did you know', 'tell me something', 'knowledge', 'trivia', 'cool fact'];
        return factWords.some(w => text.includes(w));
    }

    isSchoolQuestion(text) {
        const schoolWords = ['school', 'student', 'teacher', 'class', 'grade', 'level', 'subject', 'nursery', 'primary',
            'secondary', 'o-level', 'exam', 'test', 'study', 'homework', 'admission', 'apply', 'application', 'fee',
            'tuition', 'library', 'computer', 'digital', 'internet', 'history', 'mission', 'vision', 'value', 'partner',
            'achievement', 'award', 'ranking', 'head teacher', 'director', 'staff', 'parent', 'infrastructure', 'building',
            'sport', 'club', 'event', 'safer internet', 'encryption'
        ];
        return schoolWords.some(w => text.includes(w));
    }

    isEmotionalQuestion(text) {
        const emotions = ['sad', 'happy', 'excited', 'worried', 'stressed', 'tired', 'angry', 'frustrated', 'nervous',
            'scared', 'lonely', 'proud', 'grateful', 'feeling', 'feeling like', 'depressed', 'anxious', 'overwhelmed'
        ];
        return emotions.some(e => text.includes(e));
    }

    isCasualChat(text) {
        const casual = ['what\'s up', 'whats up', 'how is', 'how\'s', 'what are you doing', 'what do you think', 'tell me about yourself', 'who are you', 'what are you', 'what can you do', 'what do you like', 'what\'s your favorite', 'whats your favorite', 'do you like', 'are you', 'why'];
        return casual.some(c => text.includes(c));
    }

    isHowAreYou(text) {
        const how = ['how are you', 'how are ya', 'how you doing', 'how do you do', 'how\'s it going', 'how is it going', 'how have you been'];
        return how.some(h => text.includes(h));
    }

    isAboutUser(text) {
        const about = ['my name is', 'i am', 'i\'m', 'my name', 'call me', 'i study', 'i work', 'i live', 'i want to', 'i need', 'i have a'];
        return about.some(a => text.includes(a));
    }

    // ==========================================
    // HANDLERS - VARIOUS RESPONSE TYPES
    // ==========================================

    handleGreeting(question, reasoning) {
        const hour = new Date().getHours();
        let timeGreeting = 'Hello';
        let emoji = '👋';
        if (hour >= 5 && hour < 12) { timeGreeting = 'Good morning';
            emoji = '🌅'; } else if (hour >= 12 && hour < 17) { timeGreeting = 'Good afternoon';
            emoji = '☀️'; } else if (hour >= 17 && hour < 21) { timeGreeting = 'Good evening';
            emoji = '🌆'; } else { timeGreeting = 'Hello';
            emoji = '🌙'; }

        const greetings = [
            `${timeGreeting}! ${emoji} I'm ${this.name}, your friendly AI assistant for G.S Nyirarukobwa. How can I help you today?`,
            `${timeGreeting}! ${emoji} Welcome! I'm here to help with anything about G.S Nyirarukobwa — history, academics, staff, admissions, you name it! What brings you here?`,
            `${timeGreeting}! ${emoji} Great to see you! I'm ${this.name}. Feel free to ask me anything about our school. What would you like to know?`,
            `${timeGreeting}! ${emoji} Hey there! I'm your school AI assistant. Ready to help with information, chat, or even crack a joke if you need a smile! 😄`
        ];
        reasoning.push('💬 Greeting response generated');
        return {
            response: greetings[Math.floor(Math.random() * greetings.length)],
            reasoning: reasoning,
            intent: 'greeting',
            confidence: 1,
            tone: 'friendly'
        };
    }

    handleFarewell(reasoning) {
        const farewells = [
            "Bye! 👋 It was great chatting with you. Come back anytime if you have more questions about G.S Nyirarukobwa!",
            "See you later! 😊 Remember, I'm always here if you need information about the school. Take care!",
            "Goodbye! 🌟 Thanks for stopping by. Wishing you a wonderful day!",
            "Murabeho! 👋 It was a pleasure talking to you. Visit us again soon!",
            "Catch you later! 😄 Stay curious and keep learning!"
        ];
        reasoning.push('👋 Farewell response generated');
        return {
            response: farewells[Math.floor(Math.random() * farewells.length)],
            reasoning: reasoning,
            intent: 'farewell',
            confidence: 1,
            tone: 'friendly'
        };
    }

    handleJoke(reasoning) {
        // Get a fresh joke
        let availableJokes = JOKES.filter(j => !this.jokesUsed.includes(j.q));
        if (availableJokes.length === 0) {
            this.jokesUsed = [];
            availableJokes = JOKES;
        }
        const joke = availableJokes[Math.floor(Math.random() * availableJokes.length)];
        this.jokesUsed.push(joke.q);

        const intro = [
            "Here's a joke for you! 😄",
            "You asked for it! 😂",
            "Ready for a laugh? 😄",
            "Okay, here goes! 🤣"
        ];
        reasoning.push('😂 Joke generated');
        return {
            response: `${intro[Math.floor(Math.random() * intro.length)]} ${joke.q} ... ${joke.a}`,
            reasoning: reasoning,
            intent: 'joke',
            confidence: 1,
            tone: 'humorous'
        };
    }

    handleFunFact(reasoning) {
        let availableFacts = FUN_FACTS.filter(f => !this.factsUsed.includes(f));
        if (availableFacts.length === 0) {
            this.factsUsed = [];
            availableFacts = FUN_FACTS;
        }
        const fact = availableFacts[Math.floor(Math.random() * availableFacts.length)];
        this.factsUsed.push(fact);

        const intro = [
            "Here's an interesting fact for you! 📚",
            "Did you know? 🤔",
            "Cool fact coming your way! 💡",
            "Here's something fascinating! 🌟"
        ];
        reasoning.push('💡 Fun fact generated');
        return {
            response: `${intro[Math.floor(Math.random() * intro.length)]} ${fact}`,
            reasoning: reasoning,
            intent: 'fun_fact',
            confidence: 1,
            tone: 'informative'
        };
    }

    handleSchoolQuestion(question, lower, reasoning) {
        const result = this.searchKnowledgeBase(lower);
        if (result.answer) {
            reasoning.push('📚 Found in knowledge base');
            return this.formatResponse(result.answer, 'informative', reasoning);
        }
        // Fallback if no direct match
        return this.handleUnknown(question, reasoning);
    }

    handleEmotionalResponse(lower, reasoning) {
        const responses = {
            sad: [
                "I'm sorry to hear that you're feeling sad. 😔 Remember, G.S Nyirarukobwa is a community that cares. If you're a student, please talk to a teacher or counselor. We're here for you! 💙",
                "Feeling down is never easy. 😔 Just know that you're not alone. The school community is here to support you. Is there anything specific I can help with?",
                "Sending you a virtual hug! 🤗 If you need to talk to someone at school, please reach out to a teacher or the Head Teacher. We care about you."
            ],
            happy: [
                "That's wonderful to hear! 😊 Happiness is contagious. What's making you so happy today?",
                "I'm so glad you're happy! 😄 That energy is exactly what we love to see at G.S Nyirarukobwa!",
                "Awesome! 😃 Keep that positive energy going! Is there anything school-related you'd like to know while you're in a good mood?"
            ],
            excited: [
                "That's exciting! 🎉 What's got you so pumped?",
                "I love the energy! 😄 Whatever you're excited about, I hope it goes great!",
                "Exciting times! 🚀 Tell me more about what's making you so excited!"
            ],
            stressed: [
                "Take a deep breath. 😊 You've got this! If it's about school work, remember that G.S Nyirarukobwa has great teachers who can help you.",
                "Stress is tough, but you're tougher! 💪 Remember to take breaks and ask for help if you need it.",
                "I understand that feeling. 😔 Take it one step at a time. The school is here to support you."
            ],
            tired: [
                "I know that feeling! 😴 Make sure you get some rest. School is important, but so is your health!",
                "Take a break! 😴 You deserve it. A well-rested mind learns better.",
                "Tired? 😴 Get some sleep, drink some water, and tackle it tomorrow with fresh energy!"
            ],
            proud: [
                "That's amazing! 🏆 You should be proud of yourself! We're proud of you too!",
                "Congratulations! 🎉 That's something to celebrate!",
                "Proud moments like these are what make the school community so special! 🌟"
            ]
        };

        let mood = 'neutral';
        if (lower.includes('sad') || lower.includes('depressed')) mood = 'sad';
        else if (lower.includes('happy') || lower.includes('glad')) mood = 'happy';
        else if (lower.includes('excited') || lower.includes('pumped') || lower.includes('thrilled')) mood = 'excited';
        else if (lower.includes('stress') || lower.includes('anxious') || lower.includes('overwhelm')) mood = 'stressed';
        else if (lower.includes('tired') || lower.includes('exhausted') || lower.includes('sleepy')) mood = 'tired';
        else if (lower.includes('proud') || lower.includes('accomplish') || lower.includes('achieve')) mood = 'proud';

        if (responses[mood]) {
            reasoning.push(`❤️ Emotional response for mood: ${mood}`);
            return {
                response: responses[mood][Math.floor(Math.random() * responses[mood].length)],
                reasoning: reasoning,
                intent: 'emotional',
                confidence: 1,
                tone: 'empathetic'
            };
        }

        return this.handleUnknown('', reasoning);
    }

    handleCasualChat(question, lower, reasoning) {
        const casualResponses = [
            "That's a cool question! 😎 Is there something specific about G.S Nyirarukobwa you'd like to know?",
            "Great chat! 🤗 I'm here for school info, jokes, fun facts, or just a friendly conversation. What would you like to talk about?",
            "I'm an AI assistant, but I try my best to be a good conversationalist! 😊 What's on your mind today?",
            "I love chatting with visitors! 😄 Whether you're a parent, student, or just curious about G.S Nyirarukobwa, I'm here to help."
        ];

        // Check if they're asking about what I can do
        if (lower.includes('what can you do') || lower.includes('what are you') || lower.includes('who are you')) {
            return {
                response: "Great question! 😊 I'm ${this.name}, your AI assistant for G.S Nyirarukobwa. I can:\n\n📚 Answer questions about the school's history, academics, staff, and achievements\n🎓 Help with admissions and application information\n💡 Share fun facts and jokes\n🗣️ Chat with you about anything school-related\n💬 Provide support and information in English, Kinyarwanda, or French\n\nWhat would you like to know today?",
                reasoning: reasoning,
                intent: 'about_ai',
                confidence: 1,
                tone: 'friendly'
            };
        }

        reasoning.push('💬 Casual chat response');
        return {
            response: casualResponses[Math.floor(Math.random() * casualResponses.length)],
            reasoning: reasoning,
            intent: 'casual',
            confidence: 0.8,
            tone: 'friendly'
        };
    }

    handleHowAreYou(reasoning) {
        const responses = [
            "I'm doing great, thanks for asking! 😊 I'm here and ready to help with anything about G.S Nyirarukobwa. How about you?",
            "I'm fantastic! 😄 It's always a good day when I get to chat with someone about our wonderful school. What's new with you?",
            "I'm doing well, thank you! 😊 A bit busy helping people learn about G.S Nyirarukobwa, but that's what I'm here for!",
            "I'm excellent! 🌟 Every day is a good day when I get to share information about the school. What brings you here today?"
        ];
        reasoning.push('💬 How are you response');
        return {
            response: responses[Math.floor(Math.random() * responses.length)],
            reasoning: reasoning,
            intent: 'how_are_you',
            confidence: 1,
            tone: 'friendly'
        };
    }

    handleAboutUser(question, lower, reasoning) {
        if (lower.includes('my name is') || lower.includes('i am') || lower.includes('i\'m') || lower.includes('call me')) {
            const nameMatch = question.match(/my name is (\w+)|i am (\w+)|i'm (\w+)|call me (\w+)/i);
            if (nameMatch) {
                const name = nameMatch[1] || nameMatch[2] || nameMatch[3] || nameMatch[4] || 'friend';
                this.userName = name;
                return {
                    response: `Nice to meet you, ${name}! 👋 I'm ${this.name}. Welcome to G.S Nyirarukobwa's website! How can I assist you today? 😊`,
                    reasoning: reasoning,
                    intent: 'user_intro',
                    confidence: 1,
                    tone: 'friendly'
                };
            }
        }
        return this.handleUnknown(question, reasoning);
    }

    handleUnknown(question, reasoning) {
        const responses = [
            "That's a great question! 😊 I want to make sure I give you the best answer. Could you rephrase or tell me more about what you're looking for? I know a lot about G.S Nyirarukobwa!",
            "Hmm, I'm not sure I fully understood that. 🤔 I'm an AI assistant for G.S Nyirarukobwa. I can help with information about the school, joke around, or just have a friendly chat. What would you like to know?",
            "I appreciate your question! 😊 I'm here to help with anything about G.S Nyirarukobwa — history, academics, staff, admissions, achievements, and more. Could you be a bit more specific?",
            "Interesting question! 🤔 Let me think... I'm best at answering questions about G.S Nyirarukobwa. If you're asking about something else, I'll try my best anyway! What specific information are you looking for?"
        ];
        reasoning.push('❓ Unknown query - using fallback');
        return {
            response: responses[Math.floor(Math.random() * responses.length)],
            reasoning: reasoning,
            intent: 'unknown',
            confidence: 0.3,
            tone: 'helpful'
        };
    }

    // ==========================================
    // FORMAT RESPONSE WITH PERSONALITY
    // ==========================================
    formatResponse(answer, type, reasoning) {
        // Add personality to the response based on type
        if (type === 'informative') {
            const intros = [
                'Great question! Let me share what I know:',
                'I\'d be happy to help with that!',
                'That\'s an important topic. Here\'s what I can tell you:',
                'I love talking about this!'
            ];
            return {
                response: `${intros[Math.floor(Math.random() * intros.length)]} ${answer}`,
                reasoning: reasoning,
                intent: 'informative',
                confidence: 0.9,
                tone: 'informative'
            };
        }
        return {
            response: answer,
            reasoning: reasoning,
            intent: 'response',
            confidence: 0.9,
            tone: 'friendly'
        };
    }

    // ==========================================
    // SEARCH KNOWLEDGE BASE
    // ==========================================
    searchKnowledgeBase(text) {
        // Check FAQ first
        for (const faq of this.knowledgeBase.faq) {
            const questionWords = faq.question.toLowerCase().split(' ');
            if (questionWords.some(word => text.includes(word))) {
                return { answer: faq.answer, confidence: 0.9 };
            }
        }

        const school = this.knowledgeBase.school;
        const sdms = this.knowledgeBase.sdms;
        const admissions = this.knowledgeBase.admissions;
        const academics = this.knowledgeBase.academics;
        const staff = this.knowledgeBase.staff;
        const partners = this.knowledgeBase.partners;
        const achievements = this.knowledgeBase.achievements;
        const technology = this.knowledgeBase.technology;
        const infrastructure = this.knowledgeBase.infrastructure;
        const history = this.knowledgeBase.history;

        // Mission & Vision
        if (text.includes('mission')) {
            return { answer: school.mission.english + ' (' + school.mission.kinyarwanda + ')', confidence: 0.95 };
        }
        if (text.includes('vision')) {
            return { answer: school.vision.english + ' (' + school.vision.kinyarwanda + ')', confidence: 0.95 };
        }

        // History
        if (text.includes('history') || text.includes('founded') || text.includes('when was')) {
            const historyText = history.map(h => `${h.year}: ${h.event}`).join('. ');
            return { answer: historyText, confidence: 0.95 };
        }

        // Motto & Slogan
        if (text.includes('motto')) {
            return { answer: `The school motto is "${school.motto}".`, confidence: 0.95 };
        }
        if (text.includes('slogan')) {
            return { answer: `The school slogan is "${school.slogan}".`, confidence: 0.95 };
        }

        // Ranking
        if (text.includes('ranking') || text.includes('rank') || text.includes('best') || text.includes('performance')) {
            return {
                answer: 'The school was previously the lowest ranked primary school in Bugesera District. After the introduction of connectivity and ICT initiatives, it is now the highest ranked primary school in the district. Test scores and enrollment have increased significantly.',
                confidence: 0.9
            };
        }

        // Staff
        if (text.includes('head teacher') || text.includes('director') || text.includes('principal')) {
            return { answer: `The Head Teacher is ${staff.headTeacher.name}. The former Director (2013) was ${staff.formerStaff[0].name}.`, confidence: 0.95 };
        }
        if (text.includes('teacher') || text.includes('staff')) {
            const teacherNames = staff.teachers.map(t => `${t.name} (${t.subject})`).join(', ');
            return { answer: `Our teachers include: ${teacherNames}. The Head Teacher is ${staff.headTeacher.name}.`, confidence: 0.9 };
        }
        if (text.includes('elasto') || text.includes('hagumimana')) {
            return { answer: 'Elasto Hagumimana is a teacher at G.S Nyirarukobwa who was awarded Best Teacher for his efforts in helping students participate in Scratch programming competitions.', confidence: 0.95 };
        }

        // Students
        if (text.includes('students') || text.includes('how many students') || text.includes('population')) {
            return {
                answer: `The school has ${school.studentCount.total} students — 1,023 primary and 210 secondary as of 2022. In 2013, there were 805 students with 406 girls and 399 boys.`,
                confidence: 0.9
            };
        }

        // Academics
        for (const [level, info] of Object.entries(academics)) {
            if (text.includes(level)) {
                return { answer: info.description, confidence: 0.85 };
            }
        }

        // Admissions
        if (text.includes('document') || text.includes('required') || text.includes('needed') || text.includes('certificate')) {
            return { answer: admissions.documents, confidence: 0.9 };
        }
        if (text.includes('process') || text.includes('apply')) {
            return { answer: admissions.process, confidence: 0.9 };
        }
        if (text.includes('fee') || text.includes('cost') || text.includes('tuition')) {
            return { answer: admissions.fees, confidence: 0.8 };
        }

        // SDMS
        if (text.includes('sdms')) {
            return { answer: `${sdms.description} It is required for all students in Rwanda. Learn more at ${sdms.website}`, confidence: 0.95 };
        }

        // Contact
        if (text.includes('phone') || text.includes('call') || text.includes('number')) {
            return { answer: school.phone, confidence: 0.85 };
        }
        if (text.includes('email')) {
            return { answer: school.email, confidence: 0.85 };
        }
        if (text.includes('address') || text.includes('location')) {
            return { answer: school.address, confidence: 0.95 };
        }

        // Partners
        if (text.includes('partners') || text.includes('sponsors') || text.includes('isoc') || text.includes('airtel')) {
            const partnerText = partners.map(p => `${p.name}: ${p.contribution}`).join('. ');
            return { answer: partnerText, confidence: 0.9 };
        }

        // Achievements
        if (text.includes('achievement') || text.includes('award') || text.includes('success')) {
            const achievementText = achievements.map(a => `${a.title}: ${a.description}`).join('. ');
            return { answer: achievementText, confidence: 0.9 };
        }

        // Technology
        if (text.includes('technology') || text.includes('computer') || text.includes('digital') || text.includes('internet')) {
            const techText = technology.map(t => `${t.name}: ${t.description}`).join('. ');
            return { answer: techText, confidence: 0.9 };
        }

        // Infrastructure
        if (text.includes('infrastructure') || text.includes('classrooms') || text.includes('facilities') || text.includes('water')) {
            const infra = infrastructure;
            let infraText = `Classrooms: ${infra.classrooms.count} (${infra.classrooms.details}). `;
            infraText += `Benches: ${infra.benches.count}. `;
            infraText += `Water tanks: ${infra.waterTanks.count}. `;
            infraText += `Computer lab: ${infra.computerLab.count} computers. `;
            infraText += `Digital Library: ${infra.digitalLibrary.details}.`;
            return { answer: infraText, confidence: 0.9 };
        }

        // Events
        if (text.includes('safer internet') || text.includes('sid')) {
            return {
                answer: 'G.S Nyirarukobwa has been a host of Safer Internet Day since 2020 (the first in Rwanda). The school hosted SID 2024 with the theme "Promoting personal accountability for a constructive internet atmosphere" and SID 2025 with the theme "Together for a Better Internet." The school also celebrated Global Encryption Day in 2024.',
                confidence: 0.95
            };
        }

        return { answer: null, confidence: 0 };
    }

    // ==========================================
    // GET CONVERSATION HISTORY
    // ==========================================
    getHistory() {
        return this.memory.slice(-10);
    }

    // ==========================================
    // GET STATISTICS
    // ==========================================
    getStats() {
        return {
            totalConversations: this.conversationCount,
            memorySize: this.memory.length,
            uniqueQuestions: Object.keys(this.questionPatterns).length,
            topQuestions: Object.entries(this.questionPatterns)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .map(([q, count]) => ({ question: q.substring(0, 30) + '...', count: count })),
            jokesUsed: this.jokesUsed.length,
            factsUsed: this.factsUsed.length,
            userName: this.userName || 'Not set'
        };
    }

    // ==========================================
    // CLEAR MEMORY
    // ==========================================
    clearMemory() {
        this.memory = [];
        this.conversationCount = 0;
        this.questionPatterns = {};
        this.responseHistory = [];
        this.jokesUsed = [];
        this.factsUsed = [];
        this.userName = null;
        return 'Memory cleared successfully! 🧹 I\'ve been reset and I\'m ready for a fresh conversation.';
    }
}

// ==========================================
// EXPORT FOR USE
// ==========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AIKnowledgeBase, SchoolAIAssistant };
}
