// CONTENT CONFIGURATION
// Edit this file to update all site content without touching HTML

const SITE_CONTENT = {
    // Hero Section
    hero: {
        title: "Restoring Wholeness. Building Abundance.",
        subtitle: "A holistic community action program providing grief support, trauma & addiction therapy, and empowerment services for individuals and families in Phoenix, Arizona.",
        cta1: {
            text: "Join Our Community",
            link: "#membership"
        },
        cta2: {
            text: "Explore Services",
            link: "#services"
        }
    },

    // About Section
    about: {
        title: "About Our Journey",
        subtitle: "Restoring Wholeness. Building Abundance.",
        mission: "To empower individuals and families to break cycles of pain and limitation by providing holistic healing, community resources, and transformational support that restore self-worth and create generational abundance.",
        
        philosophy: [
            {
                icon: "🌱",
                title: "Wholeness Within",
                description: "We believe true abundance begins within — through authenticity, healing, and alignment with divine purpose."
            },
            {
                icon: "💫",
                title: "Compassionate Action",
                description: "Our work centers on restoring wholeness through trauma-informed, compassionate community support."
            },
            {
                icon: "🌊",
                title: "Generational Impact",
                description: "We equip people to build lives of intention, freedom, and abundance that transform generations."
            }
        ],

        founder: {
            name: "Shronda Jeanine",
            bio: "Shronda Jeanine is a community advocate, speaker, and mentor dedicated to helping people reclaim their worth, heal from trauma, and step into abundance. Her approach blends spiritual guidance, practical tools, and community action to create sustainable transformation. With years of experience in trauma-informed care and holistic wellness, Shronda has helped countless individuals and families break free from cycles of pain and build lives rooted in purpose and peace."
        },

        values: [
            {
                title: "Compassion",
                description: "Meeting people where they are with empathy and understanding"
            },
            {
                title: "Authenticity",
                description: "Creating safe spaces for honest expression and genuine connection"
            },
            {
                title: "Empowerment",
                description: "Equipping individuals with tools for lasting transformation"
            },
            {
                title: "Community",
                description: "Building networks of mutual support and collective healing"
            },
            {
                title: "Abundance",
                description: "Believing in the possibility of wholeness and prosperity for all"
            },
            {
                title: "Action",
                description: "Turning compassion into tangible support and resources"
            }
        ]
    },

    // Services Section
    services: {
        title: "Our Services",
        subtitle: "Holistic healing programs tailored to your journey",
        
        offerings: [
            {
                icon: "🧘",
                title: "Group Healing Sessions",
                description: "Facilitated circles for grief support, trauma processing, and addiction recovery in a safe, compassionate environment.",
                price: "Sliding scale available"
            },
            {
                icon: "💬",
                title: "Personal Coaching",
                description: "One-on-one guidance for navigating life transitions, building self-worth, and creating sustainable change.",
                price: "From $75/session"
            },
            {
                icon: "🆘",
                title: "Crisis Support",
                description: "Immediate compassionate support during moments of acute distress or emergency situations.",
                price: "Available 24/7"
            },
            {
                icon: "🌿",
                title: "Wellness Programs",
                description: "Meditation, breathwork, nutrition guidance, and holistic practices for mind-body-spirit integration.",
                price: "Included in membership"
            },
            {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Circles",
                description: "Dedicated support for families navigating addiction, loss, or intergenerational trauma together.",
                price: "Group sessions available"
            },
            {
                icon: "📚",
                title: "Online Courses",
                description: "Self-paced learning on topics like self-forgiveness, boundary-setting, and building abundance mindsets.",
                price: "Member discounts"
            }
        ]
    },

    // Membership Section
    membership: {
        title: "Join Our Healing Community",
        subtitle: "Choose a membership tier that supports your journey",
        
        tiers: [
            {
                name: "Essence",
                price: "$25",
                period: "month",
                description: "Essential healing resources",
                features: [
                    "Monthly group healing session",
                    "Access to meditation library",
                    "Community forum access",
                    "Monthly newsletter",
                    "Course discounts (15%)"
                ]
            },
            {
                name: "Harmony",
                price: "$75",
                period: "month",
                description: "Enhanced support & coaching",
                featured: true,
                features: [
                    "All Essence benefits",
                    "Bi-weekly group sessions",
                    "One 1:1 coaching session/month",
                    "Priority crisis support",
                    "Course discounts (30%)",
                    "Exclusive workshops"
                ]
            },
            {
                name: "Majestic Life",
                price: "$150",
                period: "month",
                description: "Exclusive premium access",
                features: [
                    "All Harmony benefits",
                    "Weekly group sessions",
                    "Two 1:1 coaching sessions/month",
                    "24/7 crisis support line",
                    "Free course access",
                    "Retreat discounts",
                    "Personal wellness plan"
                ]
            }
        ]
    },

    // Community Section
    community: {
        title: "Community Action",
        subtitle: "Programs that bring healing and practical support to our neighbors",
        
        programs: [
            {
                title: "Healing Garden Project",
                description: "A community garden where members grow fresh produce, learn sustainable practices, and find peace in nature.",
                image: "🌻"
            },
            {
                title: "Family Support Circles",
                description: "Regular gatherings for families to share experiences, resources, and mutual support in a judgment-free space.",
                image: "🤝"
            },
            {
                title: "Meditation & Movement",
                description: "Free weekly sessions combining mindfulness, yoga, and breathwork for community wellness.",
                image: "🧘‍♀️"
            },
            {
                title: "Resource Drives",
                description: "Donation and distribution events providing essentials like food, clothing, and hygiene products to those in need.",
                image: "🎁"
            }
        ]
    },

    // Blog Section
    blog: {
        title: "Latest Insights",
        subtitle: "Reflections on healing, growth, and transformation",
        
        posts: [
            {
                date: "November 8, 2025",
                title: "The Path to Self-Forgiveness",
                excerpt: "Exploring how releasing self-judgment opens the door to genuine healing and peace.",
                icon: "🌿",
                link: "#blog"
            },
            {
                date: "November 5, 2025",
                title: "Breaking Generational Trauma",
                excerpt: "Understanding how our healing creates ripples of transformation for future generations.",
                icon: "🦋",
                link: "#blog"
            },
            {
                date: "November 1, 2025",
                title: "Mindfulness in Recovery",
                excerpt: "Practical techniques for staying present and grounded during the recovery journey.",
                icon: "🌊",
                link: "#blog"
            }
        ]
    },

    // Testimonials
    testimonials: [
        {
            quote: "Shronda Jeanine & Company helped me find peace again after years of struggling. The guidance and care I received changed my life completely.",
            author: "Community Member"
        },
        {
            quote: "The family circles created a safe space where I could be honest and heal with others who truly understood my journey.",
            author: "Eboni M."
        },
        {
            quote: "Their coaching helped me rebuild my confidence and take steps toward abundance — not just financially but spiritually and emotionally.",
            author: "Anonymous"
        }
    ],

    // Contact Info
    contact: {
        title: "Ready to Begin Your Healing Journey?",
        subtitle: "Book a session or reach out for immediate support",
        email: "shrondajeanine@shrondajeanineco.com",
        phone: "(602) 902-2677",
        location: "Phoenix, Arizona",
        crisis: {
            local: "(602) 902-2677",
            national: "988"
        }
    }
};
