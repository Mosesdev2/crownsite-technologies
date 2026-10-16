import { useState } from 'react'

const WHATSAPP = '254107795410'

const services = [
  {
    number: '01',
    title: 'Business Websites',
    description: 'Build a professional online presence that introduces your business to the world.',
  },
  {
    number: '02',
    title: 'E-commerce',
    description: 'Showcase your products and give customers a convenient way to explore your store.',
  },
  {
    number: '03',
    title: 'Landing Pages',
    description: 'Focused, engaging pages designed around your next business goal.',
  },
  {
    number: '04',
    title: 'Website Redesign',
    description: 'Give an existing website a clearer, more modern experience.',
  },
]

function App() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    service: 'Business website',
    budget: 'Not sure yet',
    details: '',
  })

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function submitQuote(event) {
    event.preventDefault()

    if (!form.name.trim() || !form.phone.trim() || !form.details.trim()) {
      alert('Please complete your name, phone number and project description.')
      return
    }

    const message = [
      'Hello Crownsite Technologies! I would like a website quote.',
      '',
      `Name: ${form.name}`,
      `Business: ${form.business || 'Not provided'}`,
      `My phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Budget: ${form.budget}`,
      `Project details: ${form.details}`,
    ].join('\n')

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="crown"></span>
          <span>CROWNSITE<span className="gold">.</span><small>TECHNOLOGIES</small></span>
        </a>

        <nav>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">Get a Quote </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> DIGITAL EXPERIENCES. BUILT TO GROW.</p>
            <h1>Your business deserves a <span>better website.</span></h1>
            <p className="hero-description">
              We build modern, responsive websites that help businesses
              establish their online presence and connect with more customers.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#contact">Start Your Project </a>
              <a className="text-link" href="#work">Explore our work ↓</a>
            </div>
            <p className="hero-note">Thoughtful design. Clear purpose. Built for your business.</p>
          </div>

          <div className="hero-art" aria-label="Decorative website design preview">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-card">
              <div className="art-top"><span>C.</span><span>YOUR DIGITAL FUTURE</span></div>
              <div className="art-content">
                <p>MAKE YOUR MARK.</p>
                <h2>Stand out.<br /><span>Grow online.</span></h2>
                <div className="art-line" />
                <div className="art-bottom"><span>DESIGN / DEVELOPMENT</span><span></span></div>
              </div>
            </div>
            <div className="floating-label">DESIGNED WITH PURPOSE <span>✦</span></div>
          </div>
        </section>

        <section className="trust-strip">
          <span>DESIGN</span><i></i><span>DEVELOPMENT</span><i></i>
          <span>YOUR NEXT CHAPTER</span>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div><p className="eyebrow">WHAT WE DO</p><h2>Digital solutions for <span>ambitious businesses.</span></h2></div>
            <p>Whether you're starting out or ready to grow, let's create a website that works for your goals.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-icon"></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact">Discuss your project <span></span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">SELECTED CONCEPTS</p><h2>Ideas built for <span>the real world.</span></h2></div>
            <p>Explore our project concepts. Demo labels will remain until real client projects are added.</p>
          </div>
          <div className="work-grid">
            <article className="work-card work-one">
              <div className="work-preview">
                <div className="preview-browser"><span></span><span>YOURBRAND.CO</span></div>
                <div className="preview-shop"><small>THE EVERYDAY EDIT</small><h3>Made for<br />your lifestyle.</h3><span>EXPLORE COLLECTION </span></div>
              </div>
              <div className="work-meta"><div><h3>Online Store Concept</h3><p>E-commerce · Demo project</p></div><span>01 / DEMO</span></div>
            </article>
            <article className="work-card work-two">
              <div className="work-preview">
                <div className="preview-browser"><span></span><span>STUDIO.CO</span></div>
                <div className="preview-studio"><small>YOUR BUSINESS, REIMAGINED</small><h3>Good work<br />starts here.</h3><span>DISCOVER OUR SERVICES </span></div>
              </div>
              <div className="work-meta"><div><h3>Business Website Concept</h3><p>Business · Demo project</p></div><span>02 / DEMO</span></div>
            </article>
            <article className="work-card work-three">
              <div className="work-preview">
                <div className="preview-browser"><span></span><span>CREATIVE.CO</span></div>
                <div className="preview-portfolio"><small>INDEPENDENT CREATIVE</small><h3>Ideas into<br />experiences.</h3><span>VIEW SELECTED WORK </span></div>
              </div>
              <div className="work-meta"><div><h3>Portfolio Concept</h3><p>Creative · Demo project</p></div><span>03 / DEMO</span></div>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">
          <p className="eyebrow">THE CROWNSITE APPROACH</p>
          <h2>Good websites do more than <span>look good.</span></h2>
          <p>They make your business easier to discover, help people understand what you offer, and make it simple for customers to take the next step.</p>
          <a className="button button-outline" href="#contact">Let's talk about your project </a>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>Let's build something <span>worth clicking.</span></h2>
            <p>Tell us what you need. We'll prepare your inquiry and open WhatsApp so you can send it directly to our team.</p>
            <div className="contact-details">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp <span></span></a>
              <a href="mailto:info@crownsitetech.com">info@crownsitetech.com <span></span></a>
              <a href="https://www.instagram.com/crownsite_technologies/" target="_blank" rel="noreferrer">Instagram <span></span></a>
              <a href="https://www.facebook.com/profile.php?id=100079944855064" target="_blank" rel="noreferrer">Facebook <span></span></a>
            </div>
          </div>

          <form className="quote-form" onSubmit={submitQuote}>
            <p className="form-heading">PROJECT INQUIRY <span>LET'S GET STARTED</span></p>
            <label>YOUR NAME *<input name="name" value={form.name} onChange={update} placeholder="Enter your full name" required /></label>
            <label>BUSINESS NAME<input name="business" value={form.business} onChange={update} placeholder="Your business or brand" /></label>
            <label>YOUR PHONE NUMBER *<input name="phone" type="tel" value={form.phone} onChange={update} placeholder="e.g. 07XXXXXXXX" required /></label>
            <label>WHAT DO YOU NEED?
              <select name="service" value={form.service} onChange={update}>
                <option>Business website</option><option>E-commerce website</option>
                <option>Landing page</option><option>Portfolio website</option><option>Website redesign</option>
              </select>
            </label>
            <label>ESTIMATED BUDGET
              <select name="budget" value={form.budget} onChange={update}>
                <option>Not sure yet</option><option>Below KSh 5,000</option>
                <option>KSh 5,000–15,000</option><option>KSh 15,000–30,000</option><option>Above KSh 30,000</option>
              </select>
            </label>
            <label>PROJECT DETAILS *<textarea name="details" value={form.details} onChange={update} placeholder="Tell us about your business and what you want the website to do..." rows="4" required /></label>
            <button className="button button-gold submit-button" type="submit">Prepare WhatsApp Inquiry </button>
            <p className="privacy-note">Your message opens in WhatsApp for you to review and send.</p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span className="crown"></span><span>CROWNSITE<span className="gold">.</span><small>TECHNOLOGIES</small></span></a>
        <p>Digital presence, thoughtfully built.</p>
        <div><a href="#services">Services</a><a href="#work">Portfolio</a><a href="#contact">Contact</a></div>
        <small>© {new Date().getFullYear()} Crownsite Technologies. All rights reserved.</small>
      </footer>
    </>
  )
}

export default App
