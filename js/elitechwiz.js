const { createElement: h, useState } = React;

const el = (tag, props, ...children) => h(tag, props, ...children);

const profile = {
  name: 'EliTechWiz',
  role: 'Web Developer + Civil Engineering Student',
  tagline: 'I build fast, clean websites that feel effortless to use, grounded in engineering and security.',
  bio: "I'm EliTechWiz, a web developer and civil engineering student. I care about clear design, sturdy code, and sites people can trust.",
  email: 'your.email@example.com',
  location: 'Remote / open to global clients',
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
  { label: 'Tools', href: '#stack' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

const heroPills = ['Secure-by-default', 'Mobile-first', 'Speed tuned', 'SEO-friendly'];

const highlights = [
  {
    title: 'Security you can feel',
    text: 'No scary warnings, just solid, sensible protection under the hood.'
  },
  {
    title: 'Engineering thinking',
    text: 'Structured layouts, tidy code, and a build that stays stable.'
  },
  {
    title: 'Speed without drama',
    text: 'Pages that load quickly and stay smooth on real devices.'
  }
];

const services = [
  {
    title: 'Custom Websites',
    text: 'Marketing sites, portfolios, and landing pages with a clear story.'
  },
  {
    title: 'Web Apps',
    text: 'React apps built for real users, not just demos.'
  },
  {
    title: 'UI Engineering',
    text: 'Precise, maintainable UI from Figma or an existing design.'
  },
  {
    title: 'Optimization',
    text: 'Speed, accessibility, and SEO fixes that actually move the needle.'
  }
];

const featureHighlights = [
  {
    title: 'Security that starts early',
    text: 'Headers, form validation, and sensible defaults baked in.',
    icon: 'images/plus-shield.png'
  },
  {
    title: 'Performance that sticks',
    text: 'Lean assets, smart loading, and careful CSS.',
    icon: 'images/rocket.png'
  },
  {
    title: 'SEO foundations',
    text: 'Semantics, metadata, and clean structure, no duct tape.',
    icon: 'images/chart-pie.png'
  },
  {
    title: 'Analytics that help',
    text: 'Track what matters so decisions are easier.',
    icon: 'images/chart.png'
  }
];

const metrics = [
  { value: '1-2 weeks', label: 'Typical launch' },
  { value: '90+ Lighthouse', label: 'Performance target' },
  { value: 'All screen sizes', label: 'Responsive coverage' },
  { value: 'Monthly care', label: 'Optional support' }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$350',
    period: 'one-time',
    description: 'A crisp one-pager to get you online fast.',
    features: ['1-3 sections', 'Mobile + tablet ready', 'Basic SEO setup', '~5 day delivery']
  },
  {
    name: 'Growth',
    price: '$950',
    period: 'one-time',
    description: 'Multi-page site with clear structure and conversions.',
    features: [
      'Up to 6 pages',
      'Accessibility + performance pass',
      'Security checklist',
      '~10 day delivery'
    ],
    featured: true
  },
  {
    name: 'Secure Web App',
    price: '$2,500',
    period: 'starting at',
    description: 'Custom app build for products and internal tools.',
    features: [
      'React app build',
      'API integration',
      'Auth + roles',
      '3-4 week build'
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
    text: 'Site map, page structure, and copy polish.',
    icon: 'images/address-book.png'
  },
  {
    title: 'UI Design',
    text: 'Responsive layouts + a simple visual system.',
    icon: 'images/application-image.png'
  },
  {
    title: 'Development',
    text: 'Semantic HTML, clean CSS, optimized assets.',
    icon: 'images/control.png'
  },
  {
    title: 'QA + Launch',
    text: 'Cross-device testing, SEO check, go-live support.',
    icon: 'images/rocket.png'
  }
];

const ctaHighlights = ['Quick kickoff call', 'Fixed scope + timeline', 'Clean handoff'];

const legalLinks = [
  {
    title: 'Privacy Policy',
    href: 'privacy.html',
    description: 'How information is handled on this site.'
  },
  {
    title: 'Terms of Service',
    href: 'terms.html',
    description: 'How the site and services are used.'
  },
  {
    title: 'Service Agreement',
    href: 'service-agreement.html',
    description: 'Scope, payments, and delivery expectations.'
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
    text: 'A short call to align on goals and audience.'
  },
  {
    title: 'Design',
    text: 'Wireframes and a visual direction you can react to.'
  },
  {
    title: 'Build',
    text: 'Solid, accessible code with performance in mind.'
  },
  {
    title: 'Launch',
    text: 'QA, deploy, and a tidy handoff.'
  }
];

const projects = [
  {
    title: 'Launch Site',
    text: 'A sharp landing page built to turn visitors into leads.',
    tags: ['Landing', 'Brand', 'Conversion'],
    image: 'images/01_Home_03.png',
    alt: 'Marketing landing page layout'
  },
  {
    title: 'Client Portal',
    text: 'A dashboard that makes key numbers obvious.',
    tags: ['Dashboard', 'UI', 'React'],
    image: 'images/Jak-Promu-vubec-funguje.png',
    alt: 'Analytics dashboard interface'
  },
  {
    title: 'Ecommerce Refresh',
    text: 'A storefront rebuild focused on speed and checkout flow.',
    tags: ['Commerce', 'Performance', 'UX'],
    image: 'images/Navrhneme-vam-veskerou-grafiku.png',
    alt: 'Ecommerce storefront redesign'
  }
];

const testimonials = [
  {
    name: 'Renata S.',
    role: 'Founder, Coastline Studio',
    text: 'The site feels premium and loads fast. Communication was easy the whole way.',
    avatar: 'images/Renata-Silhava-150x150.jpg'
  },
  {
    name: 'Pavlina S.',
    role: 'Copywriter',
    text: 'Finally a layout that sounds like us. We saw better engagement in week one.',
    avatar: 'images/Pavlina-Siroka-copywriterka-WebWorld.cz_-150x150.jpg'
  },
  {
    name: 'Jiri M.',
    role: 'Product Lead',
    text: 'Fast turnaround, clear updates, and a build we trusted in production.',
    avatar: 'images/Jiri-Mraz-150x150.png'
  }
];

const faqs = [
  {
    question: 'How quickly can we start?',
    answer: 'Usually within a week after a quick kickoff call.'
  },
  {
    question: 'Do you offer hosting and maintenance?',
    answer: 'Yes, hosting, monitoring, and updates are available.'
  },
  {
    question: 'Can you build from my design or Figma file?',
    answer: 'Yes. I can build from your Figma file or refine it together.'
  },
  {
    question: 'What do you need from me to begin?',
    answer: 'A goal, a few references you like, and any brand assets you have.'
  }
];

const stack = ['HTML', 'CSS', 'JavaScript', 'React', 'Accessibility', 'Performance', 'SEO', 'Security'];

const buildNote =
  'Kept lean on purpose: accessible, fast, and easy to maintain.';

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
        el('h1', { className: 'hero-title' }, 'Websites that look sharp, load fast, and feel safe.'),
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
            el('span', { className: 'hero-float-label' }, 'Security check'),
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
      el('p', { className: 'eyebrow' }, 'Worked with'),
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
          el('p', null, 'Clean UX, sturdy code, and a calm build process.')
        ),
        el('div', { className: 'card' },
          el('h3', null, 'Brand mark (for now)'),
          el('p', null, 'Text-based mark while the logo is in progress.'),
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
        title: 'What I do',
        text: 'Focused help for brands that want a modern site without the fuss.'
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
          title: 'Built to last (and load fast)',
          text: 'Small details add up: speed, security, and a clean experience.'
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
          el('span', { className: 'badge' }, 'From Figma to React'),
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
        title: 'Simple pricing',
        text: 'Clear packages and no surprises. Custom quotes if your scope is different.'
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
          el('strong', null, 'Need a different scope?'),
          el('p', null, 'Tell me what you need and I will quote it.')
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
        title: 'What you get',
        text: 'Everything you need to launch, plus a clean handoff.'
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
        title: 'A simple process',
        text: 'Short cycles, quick feedback, no chaos.'
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
        title: 'Recent work',
        text: 'A few examples of what I build for clients.'
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
        kicker: 'Tools',
        title: 'Tools I use',
        text: 'A practical stack that keeps builds fast and maintainable.'
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
        title: 'Nice words from clients',
        text: 'Short notes from people I have worked with.'
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
        title: 'Questions, answered',
        text: 'If you are wondering, it is probably here.'
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
        title: 'Policies & agreements',
        text: 'Clear rules so everyone knows what to expect.'
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
          el('p', { className: 'eyebrow' }, "Let's build"),
          el('h2', null, 'Ready to get started?'),
          el('p', null, "Tell me what you're building and I will map the best path."),
          el('div', { className: 'cta-list' },
            ctaHighlights.map((item) => el('span', { className: 'cta-pill', key: item }, item))
          )
        ),
        el('div', { className: 'cta-actions' },
          el('a', { className: 'btn btn-primary', href: '#contact' }, "Let's talk"),
          el('a', { className: 'btn btn-ghost', href: '#pricing' }, 'View pricing')
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
      el('textarea', { id: 'message', name: 'message', placeholder: 'Quick note about the project, timeline, and budget (if you have it).' })
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
        title: "Tell me what you're building",
        text: 'Share the basics and I will reply with a plan and estimate.'
      }),
      el('div', { className: 'contact-grid' },
        el('div', { className: 'contact-card' },
          el('h3', null, 'Project details'),
          el('p', null, 'I respond with scope, timeline, and next steps.'),
          el(ContactForm)
        ),
        el('div', { className: 'contact-card' },
          el('h3', null, "Let's build together"),
          el('p', null, 'Available for new projects'),
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
