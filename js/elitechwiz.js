const { createElement: h, useState } = React;

const el = (tag, props, ...children) => h(tag, props, ...children);

const profile = {
  name: 'EliTechWiz',
  role: 'Web Developer & Civil Engineering Student',
  tagline: 'Building modern, responsive web applications informed by engineering and cybersecurity principles.',
  bio: 'EliTechWiz - Web Developer & Civil Engineering Student with a focus on secure modern web solutions and cybersecurity.',
  email: 'your.email@example.com',
  location: 'Remote worldwide',
  links: [
    { label: 'Portfolio', href: 'https://elitechwiz.site' },
    { label: 'GitHub', href: 'https://github.com/Eliahhango' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eliah-hango-679a32398/' }
  ]
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

const heroPills = ['Security-minded', 'Responsive', 'Performance', 'SEO ready'];

const highlights = [
  {
    title: 'Security-aware builds',
    text: 'Modern web experiences shaped by cybersecurity principles.'
  },
  {
    title: 'Engineering mindset',
    text: 'Structured thinking and clean systems behind every UI.'
  },
  {
    title: 'Performance tuned',
    text: 'Fast load times and smooth interactions by design.'
  }
];

const services = [
  {
    title: 'Custom Websites',
    text: 'Marketing sites, portfolios, and landing pages built to convert.'
  },
  {
    title: 'Web Apps',
    text: 'Interactive React apps with clear UX and scalable UI.'
  },
  {
    title: 'UI Engineering',
    text: 'Component systems and pixel-perfect builds from design.'
  },
  {
    title: 'Optimization',
    text: 'Accessibility, speed, and technical SEO improvements.'
  }
];

const featureHighlights = [
  {
    title: 'Security-first builds',
    text: 'Hardened headers, OWASP-aware checks, and secure-by-default patterns.',
    icon: 'images/plus-shield.png'
  },
  {
    title: 'Performance focus',
    text: 'Core Web Vitals optimization, clean assets, and fast load times.',
    icon: 'images/rocket.png'
  },
  {
    title: 'SEO-ready structure',
    text: 'Semantic markup, metadata, and on-page SEO foundations.',
    icon: 'images/chart-pie.png'
  },
  {
    title: 'Analytics + insight',
    text: 'Event tracking and funnel visibility so you can measure growth.',
    icon: 'images/chart.png'
  }
];

const metrics = [
  { value: '7-10 days', label: 'Typical launch window' },
  { value: '90+ score', label: 'Performance target' },
  { value: '100%', label: 'Responsive coverage' },
  { value: '24/7', label: 'Monitoring add-on' }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$350',
    period: 'one-time',
    description: 'Single-page site built for quick launches.',
    features: ['1-3 sections', 'Mobile responsive', 'Basic SEO setup', 'Launch in 5 days']
  },
  {
    name: 'Growth',
    price: '$950',
    period: 'one-time',
    description: 'Multi-page brand site with conversion focus.',
    features: [
      'Up to 6 pages',
      'Performance + accessibility pass',
      'Security hardening',
      'Launch in 10 days'
    ],
    featured: true
  },
  {
    name: 'Secure Web App',
    price: '$2,500',
    period: 'starting at',
    description: 'Custom web app with auth and integrations.',
    features: [
      'React app build',
      'API integration',
      'Role-based access',
      'Launch in 3-4 weeks'
    ]
  }
];

const trustLogos = [
  { src: 'images/WebWorld-logo-bily.png', alt: 'WebWorld logo' },
  { src: 'images/World-of-internet-logo.png', alt: 'World of Internet logo' },
  { src: 'images/WebWorld-digitalni-agentura.png', alt: 'WebWorld digital agency logo' },
  { src: 'images/Lowkostak-cestovatelsky-portal-logo-e1613418878998.png', alt: 'Lowkostak travel portal logo' }
];

const deliverables = [
  {
    title: 'UX + Content',
    text: 'Information architecture, page map, and copy polish for clarity.',
    icon: 'images/address-book.png'
  },
  {
    title: 'UI Design',
    text: 'Visual system, responsive layouts, and component styling.',
    icon: 'images/application-image.png'
  },
  {
    title: 'Development',
    text: 'Semantic HTML, performant CSS/JS, and optimized assets.',
    icon: 'images/control.png'
  },
  {
    title: 'QA + Launch',
    text: 'Cross-device testing, SEO check, deployment support.',
    icon: 'images/rocket.png'
  }
];

const ctaHighlights = ['Free 20-min discovery call', 'Fixed-price scopes', 'Launch-ready handoff'];

const legalLinks = [
  {
    title: 'Privacy Policy',
    href: 'privacy.html',
    description: 'How data is handled on this site.'
  },
  {
    title: 'Terms of Service',
    href: 'terms.html',
    description: 'General terms for services and site use.'
  },
  {
    title: 'Service Agreement',
    href: 'service-agreement.html',
    description: 'Engagement scope, payments, and delivery.'
  },
  {
    title: 'License & Usage',
    href: 'license.html',
    description: 'Copyright and permitted use guidelines.'
  },
  {
    title: 'Error Page',
    href: '404.html',
    description: 'Preview the custom 404 experience.'
  }
];

const steps = [
  {
    title: 'Discovery',
    text: 'Clarify goals, users, and the story you want to tell.'
  },
  {
    title: 'Design',
    text: 'Create a clean visual system and wireframes that flow.'
  },
  {
    title: 'Build',
    text: 'Develop fast, accessible, and maintainable code.'
  },
  {
    title: 'Launch',
    text: 'Polish, deploy, and keep improving after release.'
  }
];

const projects = [
  {
    title: 'Launch Site',
    text: 'A bold landing page focused on sign-ups and clarity.',
    tags: ['Landing', 'Brand', 'Conversion'],
    image: 'images/01_Home_03.png',
    alt: 'Marketing landing page layout'
  },
  {
    title: 'Client Portal',
    text: 'A dashboard UI that makes key data easy to read.',
    tags: ['Dashboard', 'UI', 'React'],
    image: 'images/Jak-Promu-vubec-funguje.png',
    alt: 'Analytics dashboard interface'
  },
  {
    title: 'Ecommerce Refresh',
    text: 'A storefront rebuild for faster browsing and checkout.',
    tags: ['Commerce', 'Performance', 'UX'],
    image: 'images/Navrhneme-vam-veskerou-grafiku.png',
    alt: 'Ecommerce storefront redesign'
  }
];

const testimonials = [
  {
    name: 'Renata S.',
    role: 'Founder, Coastline Studio',
    text: 'EliTechWiz delivered a polished brand site with noticeable speed and clarity improvements.',
    avatar: 'images/Renata-Silhava-150x150.jpg'
  },
  {
    name: 'Pavlina S.',
    role: 'Copywriter',
    text: 'The new layout increased engagement and finally reflects our voice clearly.',
    avatar: 'images/Pavlina-Siroka-copywriterka-WebWorld.cz_-150x150.jpg'
  },
  {
    name: 'Jiri M.',
    role: 'Product Lead',
    text: 'Fast delivery, strong communication, and a secure build process we could trust.',
    avatar: 'images/Jiri-Mraz-150x150.png'
  }
];

const faqs = [
  {
    question: 'How quickly can we start?',
    answer: 'After a short discovery call, I can usually begin within 3-5 days.'
  },
  {
    question: 'Do you offer hosting and maintenance?',
    answer: 'Yes. I can set up hosting, monitoring, backups, and ongoing updates.'
  },
  {
    question: 'Can you build from my design or Figma file?',
    answer: 'Absolutely. I can implement your design system or collaborate to refine it.'
  },
  {
    question: 'What do you need from me to begin?',
    answer: 'A clear goal, example references you like, and any brand assets you already have.'
  }
];

const stack = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Accessibility', 'Performance', 'Security'];

const buildNote =
  'Built with modern frontend tooling focused on performance, accessibility, and maintainability.';

const currentYear = new Date().getFullYear();

function SectionHead(props) {
  return el('div', { className: 'section-head' },
    el('p', { className: 'eyebrow' }, props.kicker),
    el('h2', null, props.title),
    el('p', null, props.text)
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return el('header', { className: `site-header${menuOpen ? ' open' : ''}` },
    el('div', { className: 'container header-inner' },
      el('a', { className: 'brand', href: '#top' },
        el('span', { className: 'brand-mark' }, 'E'),
        el('span', { className: 'brand-name' }, 'EliTechWiz')
      ),
      el('nav', { className: 'nav-links', id: 'primary-nav', 'aria-label': 'Primary' },
        navItems.map((item) => el('a', { href: item.href, key: item.href, onClick: () => setMenuOpen(false) }, item.label))
      ),
      el('div', { className: 'header-actions' },
        el('a', { className: 'btn btn-primary', href: '#contact' }, 'Start a project'),
        el('button', {
          className: 'nav-toggle',
          type: 'button',
          'aria-label': 'Toggle navigation',
          'aria-controls': 'primary-nav',
          'aria-expanded': menuOpen,
          onClick: () => setMenuOpen(!menuOpen)
        },
        el('span', { className: 'nav-toggle-bar' }),
        el('span', { className: 'nav-toggle-bar' }),
        el('span', { className: 'nav-toggle-bar' })
        )
      )
    )
  );
}

function Hero() {
  return el('section', { className: 'hero', id: 'top' },
    el('div', { className: 'container hero-grid' },
      el('div', { className: 'hero-copy' },
        el('p', { className: 'eyebrow' }, `${profile.name} / Web Developer`),
        el('h1', { className: 'hero-title' }, 'Secure, modern websites built for real-world impact.'),
        el('p', { className: 'lead' }, profile.tagline),
        el('div', { className: 'hero-actions' },
          el('a', { className: 'btn btn-primary', href: '#contact' }, 'Start a project'),
          el('a', { className: 'btn btn-ghost', href: '#work' }, 'View work')
        ),
        el('div', { className: 'hero-meta' },
          heroPills.map((pill) => el('span', { className: 'hero-pill', key: pill }, pill))
        )
      ),
      el('div', { className: 'hero-visual' },
        el('div', { className: 'hero-media' },
          el('img', {
            className: 'hero-image',
            src: 'images/S-cim-Promu-pomuze-500x498.png',
            alt: 'Developer workspace with modern web interface'
          }),
          el('div', { className: 'hero-float hero-float-top' },
            el('span', { className: 'hero-float-label' }, 'Security scan'),
            el('strong', null, 'Passed')
          ),
          el('div', { className: 'hero-float hero-float-bottom' },
            el('span', { className: 'hero-float-label' }, 'Page speed'),
            el('strong', null, '90+ score')
          )
        )
      )
    )
  );
}

function Highlights() {
  return el('section', { className: 'strip' },
    el('div', { className: 'container grid grid-3' },
      highlights.map((item) => el('div', { className: 'card', key: item.title },
        el('h3', null, item.title),
        el('p', null, item.text)
      ))
    )
  );
}

function Trust() {
  return el('section', { className: 'strip trust-strip' },
    el('div', { className: 'container trust-inner' },
      el('p', { className: 'eyebrow' }, 'Trusted by'),
      el('div', { className: 'trust-logos' },
        trustLogos.map((logo) => el('div', { className: 'trust-logo', key: logo.src },
          el('img', { src: logo.src, alt: logo.alt, loading: 'lazy' })
        ))
      )
    )
  );
}

function About() {
  return el('section', { className: 'section', id: 'about' },
    el('div', { className: 'container' },
      el(SectionHead, {
        kicker: 'About',
        title: profile.name,
        text: profile.bio
      }),
      el('div', { className: 'about-grid' },
        el('div', { className: 'card' },
          el('h3', null, 'Focus'),
          el('p', null, profile.tagline),
          el('p', null, 'I build secure, modern web solutions with a clean UX and a resilient foundation.')
        ),
        el('div', { className: 'card' },
          el('h3', null, 'Brand mark'),
          el('p', null, 'Simple text-based brand mark "EliTechWiz"; logo coming soon.'),
          el('div', { className: 'brand-mark-text' }, 'EliTechWiz'),
          el('div', { className: 'link-list' },
            profile.links.map((link) =>
              el('a', { href: link.href, target: '_blank', rel: 'noreferrer', key: link.href }, link.label)
            )
          )
        )
      )
    )
  );
}

function Services() {
  return el('section', { className: 'section', id: 'services' },
    el('div', { className: 'container' },
      el(SectionHead, {
        kicker: 'Services',
        title: 'What I build',
        text: 'Focused services for brands that want a modern, high-impact web presence.'
      }),
      el('div', { className: 'grid grid-4' },
        services.map((service) => el('div', { className: 'card', key: service.title },
          el('h3', null, service.title),
          el('p', null, service.text)
        ))
      )
    )
  );
}

function Features() {
  return el('section', { className: 'section', id: 'features' },
    el('div', { className: 'container feature-grid' },
      el('div', null,
        el(SectionHead, {
          kicker: 'Features',
          title: 'Built for growth and security',
          text: 'Every build focuses on speed, clarity, and security so your site performs from day one.'
        }),
        el('div', { className: 'feature-list' },
          featureHighlights.map((feature) => el('div', { className: 'feature-item', key: feature.title },
            el('span', { className: 'feature-icon' },
              el('img', { src: feature.icon, alt: '' })
            ),
            el('div', null,
              el('h4', null, feature.title),
              el('p', null, feature.text)
            )
          ))
        ),
        el('div', { className: 'metric-grid' },
          metrics.map((metric) => el('div', { className: 'metric-card', key: metric.label },
            el('strong', null, metric.value),
            el('span', null, metric.label)
          ))
        )
      ),
      el('div', { className: 'feature-media' },
        el('img', {
          className: 'feature-image',
          src: 'images/section_03_02.png',
          alt: 'Interface design preview',
          loading: 'lazy'
        }),
        el('div', { className: 'feature-badges' },
          el('span', { className: 'badge' }, 'Figma to React'),
          el('span', { className: 'badge' }, 'Security review'),
          el('span', { className: 'badge' }, 'QA checklist')
        )
      )
    )
  );
}

function Pricing() {
  return el('section', { className: 'section pricing', id: 'pricing' },
    el('div', { className: 'container' },
      el(SectionHead, {
        kicker: 'Pricing',
        title: 'Clear packages for every stage',
        text: 'Simple, transparent pricing so you know what you are investing in.'
      }),
      el('div', { className: 'pricing-grid' },
        pricingPlans.map((plan) => {
          const cardClass = `pricing-card${plan.featured ? ' featured' : ''}`;
          return el('div', { className: cardClass, key: plan.name },
            plan.featured ? el('span', { className: 'pricing-tag' }, 'Most popular') : null,
            el('div', { className: 'pricing-header' },
              el('h3', null, plan.name),
              el('p', { className: 'pricing-desc' }, plan.description)
            ),
            el('div', { className: 'pricing-price' }, plan.price),
            el('span', { className: 'pricing-period' }, plan.period),
            el('ul', { className: 'pricing-list' },
              plan.features.map((feature) => el('li', { key: feature }, feature))
            ),
            el('a', { className: 'btn btn-ghost', href: '#contact' }, 'Get started')
          );
        })
      ),
      el('div', { className: 'pricing-foot' },
        el('div', null,
          el('strong', null, 'Need something custom?'),
          el('p', null, 'Share your scope and timeline for a tailored quote.')
        ),
        el('a', { className: 'btn btn-primary', href: '#contact' }, 'Request a quote')
      )
    )
  );
}

function Deliverables() {
  return el('section', { className: 'section', id: 'deliverables' },
    el('div', { className: 'container' },
      el(SectionHead, {
        kicker: 'Deliverables',
        title: 'Everything you get with a build',
        text: 'A clear handoff with assets, documentation, and support so you can launch confidently.'
      }),
      el('div', { className: 'grid grid-4 deliverables-grid' },
        deliverables.map((item) => el('div', { className: 'card deliverable-card', key: item.title },
          el('span', { className: 'deliverable-icon' },
            el('img', { src: item.icon, alt: '' })
          ),
          el('h3', null, item.title),
          el('p', null, item.text)
        ))
      )
    )
  );
}

function Process() {
  return el('section', { className: 'section', id: 'process' },
    el('div', { className: 'container' },
      el(SectionHead, {
        kicker: 'Process',
        title: 'Clear steps, zero chaos',
        text: 'A streamlined workflow to keep projects moving and clients informed.'
      }),
      el('div', { className: 'process-list' },
        steps.map((step, index) => el('div', { className: 'process-step', key: step.title },
          el('div', { className: 'process-num' }, `0${index + 1}`),
          el('div', null,
            el('h4', null, step.title),
            el('p', null, step.text)
          )
        ))
      )
    )
  );
}

function Work() {
  return el('section', { className: 'section', id: 'work' },
    el('div', { className: 'container' },
      el(SectionHead, {
        kicker: 'Work',
        title: 'Selected builds',
        text: 'A snapshot of the kind of projects I love to craft.'
      }),
      el('div', { className: 'grid grid-3' },
        projects.map((project) => el('div', { className: 'card work-card', key: project.title },
          el('div', { className: 'work-thumb' },
            el('img', { src: project.image, alt: project.alt, loading: 'lazy' })
          ),
          el('h3', null, project.title),
          el('p', null, project.text),
          el('div', { className: 'tag-row' },
            project.tags.map((tag) => el('span', { className: 'tag', key: tag }, tag))
          )
        ))
      )
    )
  );
}

function Stack() {
  return el('section', { className: 'section', id: 'stack' },
    el('div', { className: 'container' },
      el(SectionHead, {
        kicker: 'Toolbox',
        title: 'Modern web stack',
        text: 'Tools and practices that keep projects fast, clean, and future-ready.'
      }),
      el('div', { className: 'stack' },
        stack.map((item) => el('span', { className: 'chip', key: item }, item))
      ),
      el('p', { className: 'note' }, buildNote)
    )
  );
}

function Testimonials() {
  return el('section', { className: 'section', id: 'testimonials' },
    el('div', { className: 'container' },
      el(SectionHead, {
        kicker: 'Testimonials',
        title: 'Client stories and outcomes',
        text: 'A few highlights from past collaborations and launches.'
      }),
      el('div', { className: 'testimonial-grid' },
        testimonials.map((testimonial) => el('div', { className: 'testimonial-card', key: testimonial.name },
          el('p', { className: 'testimonial-quote' }, `"${testimonial.text}"`),
          el('div', { className: 'testimonial-profile' },
            el('img', {
              className: 'testimonial-avatar',
              src: testimonial.avatar,
              alt: `${testimonial.name} portrait`,
              loading: 'lazy'
            }),
            el('div', null,
              el('strong', null, testimonial.name),
              el('p', { className: 'testimonial-meta' }, testimonial.role)
            )
          )
        ))
      )
    )
  );
}

function FAQ() {
  return el('section', { className: 'section', id: 'faq' },
    el('div', { className: 'container' },
      el(SectionHead, {
        kicker: 'FAQ',
        title: 'Common questions',
        text: 'Quick answers to help you plan your next web project.'
      }),
      el('div', { className: 'faq-grid' },
        faqs.map((faq) => el('div', { className: 'faq-item', key: faq.question },
          el('h4', null, faq.question),
          el('p', null, faq.answer)
        ))
      )
    )
  );
}

function Legal() {
  return el('section', { className: 'section', id: 'legal' },
    el('div', { className: 'container' },
      el(SectionHead, {
        kicker: 'Legal',
        title: 'Policies, agreements, and usage',
        text: 'Clear policies so you know how projects, data, and deliverables are handled.'
      }),
      el('div', { className: 'legal-grid' },
        legalLinks.map((link) => el('a', { className: 'card legal-card', href: link.href, key: link.title },
          el('h3', null, link.title),
          el('p', null, link.description),
          el('span', { className: 'legal-cta' }, 'View details')
        ))
      )
    )
  );
}

function CTA() {
  return el('section', { className: 'section cta' },
    el('div', { className: 'container' },
      el('div', { className: 'cta-band' },
        el('div', { className: 'cta-copy' },
          el('p', { className: 'eyebrow' }, 'Ready to launch?'),
          el('h2', null, 'Bring your next web project to life.'),
          el('p', null, 'From first brief to launch day, you get a clean process, secure build, and a polished final product.'),
          el('div', { className: 'cta-list' },
            ctaHighlights.map((item) => el('span', { className: 'cta-pill', key: item }, item))
          )
        ),
        el('div', { className: 'cta-actions' },
          el('a', { className: 'btn btn-primary', href: '#contact' }, 'Book a discovery call'),
          el('a', { className: 'btn btn-ghost', href: '#pricing' }, 'See pricing')
        )
      )
    )
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return el('form', { className: 'contact-form', onSubmit },
    el('div', { className: 'form-row' },
      el('label', { htmlFor: 'name' }, 'Name'),
      el('input', { id: 'name', name: 'name', type: 'text', placeholder: 'Your name', required: true })
    ),
    el('div', { className: 'form-row' },
      el('label', { htmlFor: 'email' }, 'Email'),
      el('input', { id: 'email', name: 'email', type: 'email', placeholder: 'you@example.com', required: true })
    ),
    el('div', { className: 'form-row' },
      el('label', { htmlFor: 'message' }, 'Project details'),
      el('textarea', { id: 'message', name: 'message', placeholder: 'Tell me about your goals, scope, and timeline.' })
    ),
    el('button', { className: 'btn btn-primary', type: 'submit' }, sent ? 'Message sent' : 'Send message'),
    sent ? el('p', { className: 'form-note' }, 'Thanks for reaching out. I will reply soon.') : null
  );
}

function Contact() {
  return el('section', { className: 'section', id: 'contact' },
    el('div', { className: 'container' },
      el(SectionHead, {
        kicker: 'Contact',
        title: 'Tell me about your project',
        text: 'Share what you need and I will craft a plan for the build.'
      }),
      el('div', { className: 'contact-grid' },
        el('div', { className: 'contact-card' },
          el('h3', null, 'Project details'),
          el('p', null, 'I respond with a clear plan, timeline, and next steps.'),
          el(ContactForm)
        ),
        el('div', { className: 'contact-card' },
          el('h3', null, "Let's build together"),
          el('p', null, profile.role),
          el('p', null, 'Email: ', el('a', { className: 'link-inline', href: `mailto:${profile.email}` }, profile.email)),
          el('p', null, `Location: ${profile.location}`),
          el('div', { className: 'link-list' },
            profile.links.map((link) =>
              el('a', { href: link.href, target: '_blank', rel: 'noreferrer', key: `${link.href}-contact` }, link.label)
            )
          ),
          el('div', { className: 'tag-row' },
            el('span', { className: 'tag' }, 'Web development'),
            el('span', { className: 'tag' }, 'Cybersecurity'),
            el('span', { className: 'tag' }, 'React builds')
          ),
          el('a', { className: 'btn btn-ghost', href: '#top' }, 'Back to top')
        )
      )
    )
  );
}

function Footer() {
  return el('footer', { className: 'site-footer' },
    el('div', { className: 'container footer-inner' },
      el('div', { className: 'footer-brand' },
        el('strong', { className: 'footer-title' }, profile.name),
        el('span', { className: 'footer-muted' }, profile.role),
        el('span', { className: 'footer-muted' }, `Copyright ${currentYear} EliTechWiz`)
      ),
      el('div', { className: 'footer-links' },
        el('span', { className: 'footer-title' }, 'Legal'),
        el('div', { className: 'footer-link-list' },
          legalLinks.slice(0, 4).map((link) =>
            el('a', { className: 'footer-link', href: link.href, key: `footer-${link.title}` }, link.title)
          )
        )
      ),
      el('div', { className: 'footer-links' },
        el('span', { className: 'footer-title' }, 'Contact'),
        el('a', { className: 'footer-link', href: `mailto:${profile.email}` }, profile.email),
        el('span', { className: 'footer-muted' }, profile.location)
      )
    )
  );
}

function App() {
  return el('div', { className: 'page' },
    el(Header),
    el('main', null,
      el(Hero),
      el(Highlights),
      el(Trust),
      el(About),
      el(Services),
      el(Features),
      el(Deliverables),
      el(Pricing),
      el(Process),
      el(Work),
      el(Stack),
      el(Testimonials),
      el(FAQ),
      el(Legal),
      el(CTA),
      el(Contact)
    ),
    el(Footer)
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(el(App));
