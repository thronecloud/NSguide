export const quizQuestions = [
    {
        id: 1,
        question: "Your ideal Saturday night is:",
        options: [
            { text: "Hacking together a script with friends.", score: 10 },
            { text: "Exploring a new city's nightlife.", score: 0 },
            { text: "Reading a book by the beach.", score: 5 }
        ]
    },
    {
        id: 2,
        question: "When it comes to your diet, you prefer:",
        options: [
            { text: "Perfectly optimized, clean meals (like Blueprint) so I don't have to think.", score: 10 },
            { text: "Cooking my own elaborate recipes.", score: 0 },
            { text: "Trying a new restaurant every night.", score: 0 }
        ]
    },
    {
        id: 3,
        question: "Your current career focus is:",
        options: [
            { text: "Building a startup, crypto protocol, or AI tool.", score: 10 },
            { text: "I'm a remote worker just looking for a change of scenery.", score: 5 },
            { text: "Climbing the corporate ladder in traditional finance.", score: 0 }
        ]
    },
    {
        id: 4,
        question: "If you notice the community is missing a specific resource, club, or event, what's your first instinct?",
        options: [
            { text: "I’m instantly organizing it, hosting it, and inviting everyone. Let's go.", score: 10 },
            { text: "I’ll definitely show up and participate if someone else gets it started.", score: 5 },
            { text: "It's the administration's job to figure that out and provide the programming.", score: 0 }
        ]
    },
    {
        id: 5,
        question: "Your stance on fitness is:",
        options: [
            { text: "Health is wealth; I track my metrics and optimize.", score: 10 },
            { text: "I try to work out a few times a week.", score: 5 },
            { text: "It's not a priority right now.", score: 0 }
        ]
    },
    {
        id: 6,
        question: "How important is a bustling, finished city infrastructure to you?",
        options: [
            { text: "Don't care, as long as the internet is fast.", score: 10 },
            { text: "Nice to have, but not a dealbreaker.", score: 5 },
            { text: "Essential. Empty buildings freak me out.", score: 0 }
        ]
    },
    {
        id: 7,
        question: "Your primary goal for the next 3 months is:",
        options: [
            { text: "Shipping a product or mastering a hard technical skill.", score: 10 },
            { text: "Making some new friends and relaxing / avoiding burnout.", score: 5 },
            { text: "Traveling entirely for leisure and seeing the world.", score: 0 }
        ]
    },
    {
        id: 8,
        question: "How do you prefer to learn a hard new skill (like AI engineering)?",
        options: [
            { text: "Throw me in a hackathon with smart peers. I learn best by building and breaking things.", score: 10 },
            { text: "Give me a few good tutorials and some quiet time to practice alone.", score: 5 },
            { text: "I need a structured syllabus, a clear timeline, and a seasoned professor grading me.", score: 0 }
        ]
    },
    {
        id: 9,
        question: "How do you feel about living, eating, and working under the exact same roof as 250+ other founders and builders?",
        options: [
            { text: "It’s my ultimate dream. I feed off that constant, high-energy collaboration.", score: 10 },
            { text: "I like it, but I’ll definitely need to retreat to my room daily for private decompression time.", score: 5 },
            { text: "Sounds exhausting. I need a massive separation between my work environment and my personal life.", score: 0 }
        ]
    },
    {
        id: 10,
        question: "When someone mentions \"Network States\" or \"Techno-capitalism\", you think:",
        options: [
            { text: "Let's fucking go.", score: 10 },
            { text: "It sounds interesting, I'd like to learn more.", score: 5 },
            { text: "Sounds like a dystopian cult.", score: 0 }
        ]
    }
];

export function getQuizResult(score) {
    // Max score is 100
    if (score >= 85) {
        return {
            title: "The Founder (Perfect Fit)",
            description: "Pack your bags. You are exactly who Network School was built for. You thrive on autonomy, peer-to-peer learning, and high-intensity building. You won't care about the isolation of Forest City because your focus is entirely on your startup, your fitness, and the community.",
            callToAction: "Apply for the Fellowship",
            link: "https://ns.com",
            statusColor: "var(--color-accent)"
        };
    } else if (score >= 50) {
        return {
            title: "The Explorer (Solid Fit)",
            description: "You'll likely have a great time here, but you should temper your expectations. The community will be fantastic for you, but you might occasionally struggle with the isolation, the unstructured schedule, or the lack of traditional city infrastructure. Come for 30 days before committing to a year.",
            callToAction: "Read What to Expect",
            link: "#faq-where-located",
            statusColor: "#4caf50" // A nice supportive green
        };
    } else {
        return {
            title: "The Urbanite (Probably Not For You)",
            description: "Honestly... you might hate it here. And that's okay! If you need constant city energy, massive social separation from your workspace, or traditional vacation amenities, the intensity of Network School isn't the right vibe for you right now.",
            callToAction: "Read the Downsides",
            link: "#faq-downsides",
            statusColor: "#f44336" // Red warning
        };
    }
}
