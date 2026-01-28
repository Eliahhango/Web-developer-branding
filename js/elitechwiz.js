const { createElement: h, useState } = React;

const el = (tag, props, ...children) => h(tag, props, ...children);

const profile = {
  name: '"EliTechWiz"',
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
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
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
    tags: ['Landing', 'Brand', 'Conversion']
  },
  {
    title: 'Client Portal',
    text: 'A dashboard UI that makes key data easy to read.',
    tags: ['Dashboard', 'UI', 'React']
  },
  {
    title: 'Ecommerce Refresh',
    text: 'A storefront rebuild for faster browsing and checkout.',
    tags: ['Commerce', 'Performance', 'UX']
  }
];

const stack = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Accessibility', 'Performance', 'Security'];

const buildNote =
  'Site built with modern frontend tooling. Consider upgrading to a Vite or Next.js production build structure for performance and maintainability.';

const currentYear = new Date().getFullYear();

function SectionHead(props) {
  return el('div', { className: 'section-head' },
    el('p', { className: 'eyebrow' }, props.kicker),
    el('h2', null, props.title),
    el('p', null, props.text)
  );
}

function Header() {
  return el('header', { className: 'site-header' },
    el('div', { className: 'container header-inner' },
      el('a', { className: 'brand', href: '#top' },
        el('span', { className: 'brand-mark' }, 'E'),
        el('span', { className: 'brand-name' }, 'EliTechWiz')
      ),
      el('nav', { className: 'nav-links', 'aria-label': 'Primary' },
        navItems.map((item) => el('a', { href: item.href, key: item.href }, item.label))
      ),
      el('a', { className: 'btn btn-primary', href: '#contact' }, 'Start a project')
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
        el('div', { className: 'hero-card' },
          el('div', { className: 'hero-card-top' },
            el('span', { className: 'dot' }),
            el('span', { className: 'dot b' }),
            el('span', { className: 'dot c' }),
            el('span', { className: 'hero-card-title' }, 'Build status')
          ),
          el('div', { className: 'hero-card-body' },
            el('span', { className: 'code-line wide' }),
            el('span', { className: 'code-line mid' }),
            el('span', { className: 'code-line wide' }),
            el('span', { className: 'code-line short' }),
            el('span', { className: 'code-line mid' })
          ),
          el('div', { className: 'hero-card-footer' },
            el('span', { className: 'badge' }, 'React UI'),
            el('span', { className: 'badge' }, 'Fast load'),
            el('span', { className: 'badge' }, 'Clean code')
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
          el('div', { className: 'work-thumb' }),
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
      el('span', { className: 'footer-muted' }, profile.name),
      el('span', { className: 'footer-muted' }, profile.role),
      el('span', { className: 'footer-muted' }, `Copyright ${currentYear} EliTechWiz`)
    )
  );
}

function App() {
  return el('div', { className: 'page' },
    el(Header),
    el('main', null,
      el(Hero),
      el(Highlights),
      el(About),
      el(Services),
      el(Process),
      el(Work),
      el(Stack),
      el(Contact)
    ),
    el(Footer)
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(el(App));
