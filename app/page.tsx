'use client'

import React from 'react';
import { LazyMotion, m } from 'framer-motion';
import type { Variants } from 'framer-motion';

const loadFeatures = () => import('framer-motion').then(res => res.domAnimation);
import { MapPin, Phone, Mail, CheckCircle, ArrowRight, Users, Zap, Building2, Layers, Wrench, CalendarDays, ImageIcon, Check, ExternalLink } from 'lucide-react';

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const heroRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const cardContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Home() {
  const colors = {
    primary: '#0D5E6F',
    accent: '#FFC107',
    secondary: '#1A8FA3',
    light: '#E8F5F7',
    dark: '#092C38'
  };

  const services = [
    {
      id: 'signs',
      title: 'Skyltar & Vägvisare',
      description: 'Högkvalitativa skyltar för företag och institutioner. Från design till montering.',
      Icon: Building2,
      features: ['Fasadskyltar', 'Belyst neon', 'Trä och metall']
    },
    {
      id: 'foiling',
      title: 'Skyltning & Foliering',
      description: 'Professionell foliering av stora fönster, väggar och ytor för butiker och event.',
      Icon: Layers,
      features: ['Fönsterfoliering', 'Eventdekorering', 'Reklamytor']
    },
    {
      id: 'installation',
      title: 'Montering & Installation',
      description: 'Säker installation på höga ytor och komplexa projekt med erfarenhet.',
      Icon: Wrench,
      features: ['Högt monterade skyltar', 'Väggmontage', 'Komplex riggning']
    },
    {
      id: 'events',
      title: 'Event & Tillfällig Skyltning',
      description: 'Skyltning och dekorering för event, sportevenemang och special occasions.',
      Icon: CalendarDays,
      features: ['Sportevents', 'Företagsevent', 'Tillfällig markering']
    }
  ];

  const projects = [
    { name: 'Telia Knight Event', category: 'Eventskyltning', src: null },
    { name: 'Sverige Hockey', category: 'Sportarena', src: null },
    { name: 'Fasadskylt, Södermalm', category: 'Fasadmontering', src: null },
    { name: 'Fönsterfoliering, Kungsholmen', category: 'Foliering', src: null },
    { name: 'Företagsevent', category: 'Tillfällig skyltning', src: null },
    { name: 'Skyltsystem, Vasastan', category: 'Vägvisningssystem', src: null },
  ];

  return (
    <LazyMotion features={loadFeatures}>
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-primary)' }}>
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.1); }
          50% { box-shadow: 0 0 0 8px rgba(255, 193, 7, 0); }
        }

        .primary-button {
          background: ${colors.primary};
          color: white;
          padding: 12px 28px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.3px;
        }

        .primary-button:hover {
          background: ${colors.dark};
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(13, 94, 111, 0.2);
        }

        .accent-button {
          background: ${colors.accent};
          color: ${colors.dark};
          padding: 12px 28px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.3px;
        }

        .accent-button:hover {
          background: #FFB300;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(255, 193, 7, 0.2);
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          color: var(--color-text-secondary);
        }

        .trust-badge svg {
          color: ${colors.accent};
          flex-shrink: 0;
        }

        .service-card:hover {
          border-color: ${colors.accent};
          transition: border-color 0.2s ease;
        }

        .testimonial-card:hover {
          border-color: ${colors.accent};
          transition: border-color 0.2s ease;
        }
      `}</style>

      {/* Header/Nav Bar */}
      <nav style={{
        padding: '1rem 2rem',
        borderBottom: `1px solid ${colors.light}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.3rem',
          fontWeight: 700,
          color: colors.primary
        }}>
          Skyltar & Montering
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#services" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => (e.target as HTMLElement).style.color = colors.primary} onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--color-text-secondary)'}>
            Tjänster
          </a>
          <a href="#projects" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => (e.target as HTMLElement).style.color = colors.primary} onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--color-text-secondary)'}>
            Projekt
          </a>
          <button className="primary-button" style={{ fontSize: '0.95rem', padding: '10px 24px' }}>
            Ring oss
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
        minHeight: '700px'
      }}>
        {/* Left Content */}
        <m.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <m.div
            variants={heroItem}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: colors.light,
              padding: '10px 18px',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              color: colors.primary,
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.5px'
            }}
          >
            <Zap size={16} />
            Professionell & pålitlig
          </m.div>

          <m.h1
            variants={heroItem}
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '1.2rem',
              color: colors.dark
            }}
          >
            Skyltar som syns
          </m.h1>

          <m.p
            variants={heroItem}
            style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-secondary)',
              marginBottom: '2rem',
              lineHeight: 1.7
            }}
          >
            Vi skapar och monterar skyltar som får ditt företag att synas. Med över 15 års erfarenhet erbjuder vi allt från design till professionell installation i Stockholm och hela Sverige.
          </m.p>

          <m.div
            variants={heroItem}
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2.5rem',
              flexWrap: 'wrap'
            }}
          >
            <button className="accent-button">
              Boka konsultation <ArrowRight size={18} />
            </button>
            <button style={{
              background: 'white',
              color: colors.primary,
              padding: '12px 28px',
              border: `2px solid ${colors.primary}`,
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              letterSpacing: '0.3px'
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = colors.light; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'white'; }}
            >
              <Phone size={18} /> 070-XXXXXXX
            </button>
          </m.div>

          {/* Trust Badges */}
          <m.div
            variants={heroItem}
            style={{ display: 'grid', gap: '1rem' }}
          >
            <div className="trust-badge">
              <CheckCircle size={20} />
              <span><strong>15+ år erfarenhet</strong> med skyltning och montering</span>
            </div>
            <div className="trust-badge">
              <Users size={20} />
              <span><strong>Hundratals projekt</strong> för företag och event</span>
            </div>
            <div className="trust-badge">
              <MapPin size={20} />
              <span><strong>Stockholm hemort</strong>, serviceerar hela Sverige</span>
            </div>
          </m.div>
        </m.div>

        {/* Right Image Placeholder */}
        <m.div
          variants={heroRight}
          initial="hidden"
          animate="visible"
        >
          <div style={{
            background: `linear-gradient(135deg, ${colors.light} 0%, ${colors.light} 100%)`,
            borderRadius: '12px',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `3px dashed ${colors.secondary}`,
            fontSize: '4rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              textAlign: 'center',
              color: colors.secondary,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <ImageIcon size={48} strokeWidth={1} />
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                Lägg till ditt arbete här
              </span>
            </div>
          </div>
        </m.div>
      </section>

      {/* Services Section */}
      <section style={{
        padding: '5rem 2rem',
        background: `linear-gradient(135deg, ${colors.light} 0%, rgba(26, 143, 163, 0.03) 100%)`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <m.h2
              id="services"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                fontSize: '2.2rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: colors.dark
              }}
            >
              Vad vi erbjuder
            </m.h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Kompletta lösningar för all din skyltning och monteringsbehov
            </p>
          </div>

          <m.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {services.map((service) => (
              <m.div
                key={service.id}
                variants={cardItem}
                className="service-card"
                whileHover={{ y: -8, boxShadow: '0 16px 32px rgba(13, 94, 111, 0.1)' }}
                style={{
                  background: 'var(--color-background-primary)',
                  padding: '2.5rem',
                  borderRadius: '12px',
                  border: `2px solid ${colors.light}`,
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: colors.accent,
                  borderRadius: '12px 12px 0 0'
                }} />

                <div style={{ marginBottom: '1rem', marginTop: '0.5rem', color: colors.primary }}>
                  <service.Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  color: colors.dark
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.95rem',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6
                }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-secondary)',
                      paddingLeft: '1.5rem',
                      marginBottom: '0.6rem',
                      position: 'relative'
                    }}>
                      <Check size={13} strokeWidth={2.5} style={{ position: 'absolute', left: 0, top: '2px', color: colors.primary }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Portfolio / Projects */}
      <style>{`
        .portfolio-card { position: relative; overflow: hidden; border-radius: 10px; cursor: pointer; background: ${colors.light}; }
        .portfolio-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(9,44,56,0.85) 0%, rgba(9,44,56,0.2) 55%, transparent 100%);
          opacity: 0; transition: opacity 0.3s ease;
          display: flex; flex-direction: column; justify-content: flex-end; padding: 1.25rem;
        }
        .portfolio-card:hover .portfolio-overlay { opacity: 1; }
        .portfolio-card:hover .portfolio-placeholder { transform: scale(1.04); transition: transform 0.4s ease; }
        .portfolio-placeholder { transition: transform 0.4s ease; }
      `}</style>

      <section style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <m.h2
            id="projects"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1rem', color: colors.dark }}
          >
            Tidigare projekt
          </m.h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Vi har arbetat med ledande företag och event i Stockholm och hela Sverige
          </p>
        </div>

        <m.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: '1rem'
          }}
        >
          {projects.map((project, idx) => (
            <m.div
              key={idx}
              variants={cardItem}
              className="portfolio-card"
              style={{
                gridColumn: idx === 0 ? 'span 2' : 'span 1',
                height: idx === 0 ? '380px' : '240px'
              }}
            >
              {/* Swap this div for <Image src={project.src} alt={project.name} fill style={{objectFit:'cover'}} /> when ready */}
              <div
                className="portfolio-placeholder"
                style={{
                  width: '100%', height: '100%',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '0.5rem', color: colors.secondary
                }}
              >
                <ImageIcon size={32} strokeWidth={1} />
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                  {project.name}
                </span>
              </div>

              <div className="portfolio-overlay">
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.25rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  {project.category}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: 'white', fontWeight: 600, fontSize: '1rem' }}>{project.name}</span>
                  <ExternalLink size={16} color="white" />
                </div>
              </div>
            </m.div>
          ))}
        </m.div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 2rem',
        background: colors.primary,
        color: 'white'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem'
          }}>
            Dags för nya skyltar?
          </h2>
          <p style={{
            fontSize: '1.05rem',
            marginBottom: '2.5rem',
            lineHeight: 1.7,
            opacity: 0.95
          }}>
            Kontakta oss för en kostnadsfri konsultation. Vi diskuterar ditt projekt, ger rekommendationer och presenterar prisalternativ.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button className="accent-button">
              Boka konsultation
            </button>
            <button style={{
              background: 'transparent',
              color: 'white',
              padding: '12px 28px',
              border: '2px solid white',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1rem',
              letterSpacing: '0.3px'
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.background = 'rgba(255, 255, 255, 0.1)'; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; }}
            >
              Ring 070-XXXXXXX
            </button>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer style={{
        padding: '3rem 2rem',
        background: 'var(--color-background-secondary)',
        borderTop: `1px solid var(--color-border-tertiary)`
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: colors.primary }}>Kontakt</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Phone size={18} style={{ color: colors.accent }} />
              <span>070-XXXXXXX</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Mail size={18} style={{ color: colors.accent }} />
              <span>info@skyltar.se</span>
            </div>
          </div>

          <div>
            <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: colors.primary }}>Serviceområden</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.6rem', color: 'var(--color-text-secondary)' }}>Stockholm</li>
              <li style={{ marginBottom: '0.6rem', color: 'var(--color-text-secondary)' }}>Uppland</li>
              <li style={{ marginBottom: '0.6rem', color: 'var(--color-text-secondary)' }}>Södermanland</li>
              <li style={{ color: 'var(--color-text-secondary)' }}>Hela Sverige</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: colors.primary }}>Tjänster</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.6rem', color: 'var(--color-text-secondary)' }}>Skyltar & Vägvisare</li>
              <li style={{ marginBottom: '0.6rem', color: 'var(--color-text-secondary)' }}>Foliering</li>
              <li style={{ marginBottom: '0.6rem', color: 'var(--color-text-secondary)' }}>Montering</li>
              <li style={{ color: 'var(--color-text-secondary)' }}>Event Skyltning</li>
            </ul>
          </div>
        </div>

        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-border-tertiary)',
          textAlign: 'center',
          color: 'var(--color-text-secondary)',
          fontSize: '0.9rem'
        }}>
          <p>© 2024 Skyltar & Montering. Baserat i Stockholm • Serviceerar hela Sverige</p>
        </div>
      </footer>
    </div>
    </LazyMotion>
  );
}
