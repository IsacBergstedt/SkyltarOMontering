'use client'

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Star, CheckCircle, ArrowRight, ChevronDown, Users, Zap } from 'lucide-react';

export default function Home() {
  const [expandedService, setExpandedService] = useState(null);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        if (isVisible) {
          setVisibleElements(prev => new Set(prev).add(el.id));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modern color scheme: Deep teal, bright accent yellow, clean whites
  const colors = {
    primary: '#0D5E6F',      // Deep teal
    accent: '#FFC107',        // Golden yellow
    secondary: '#1A8FA3',     // Lighter teal
    light: '#E8F5F7',         // Very light teal
    dark: '#092C38'           // Very dark teal
  };

  const services = [
    {
      id: 'signs',
      title: 'Skyltar & Vägvisare',
      description: 'Högkvalitativa skyltar för företag och institutioner. Från design till montering.',
      icon: '🏢',
      features: ['Fasadskyltar', 'Belyst neon', 'Trä och metall']
    },
    {
      id: 'foiling',
      title: 'Skyltning & Foliering',
      description: 'Professionell foliering av stora fönster, väggar och ytor för butiker och event.',
      icon: '🪟',
      features: ['Fönsterfoliering', 'Eventdekorering', 'Reklamytor']
    },
    {
      id: 'installation',
      title: 'Montering & Installation',
      description: 'Säker installation på höga ytor och komplexa projekt med erfarenhet.',
      icon: '🔧',
      features: ['Högt monterade skyltar', 'Väggmontage', 'Komplex riggning']
    },
    {
      id: 'events',
      title: 'Event & Tillfällig Skyltning',
      description: 'Skyltning och dekorering för event, sportevenemang och special occasions.',
      icon: '🎉',
      features: ['Sportevents', 'Företagsevent', 'Tillfällig markering']
    }
  ];

  const testimonials = [
    { name: 'Telia Knight Event', category: 'Event Signage', rating: 5 },
    { name: 'Sverige Hockey', category: 'Sports Signage', rating: 5 },
    { name: 'Business Directory', category: 'Façade Signs', rating: 5 }
  ];

  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-primary)' }}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.1);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(255, 193, 7, 0);
          }
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
          <a href="#services" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = colors.primary} onMouseLeave={e => e.target.style.color = 'var(--color-text-secondary)'}>
            Tjänster
          </a>
          <a href="#projects" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = colors.primary} onMouseLeave={e => e.target.style.color = 'var(--color-text-secondary)'}>
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
        <div>
          <div style={{
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
          }}>
            <Zap size={16} />
            Professionell & pålitlig
          </div>

          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '1.2rem',
            animation: 'fadeInUp 0.8s ease-out',
            color: colors.dark
          }}>
            Skyltar som syns
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--color-text-secondary)',
            marginBottom: '2rem',
            lineHeight: 1.7,
            animation: 'fadeInUp 0.8s ease-out 0.1s backwards'
          }}>
            Vi skapar och monterar skyltar som får ditt företag att synas. Med över 15 års erfarenhet erbjuder vi allt från design till professionell installation i Stockholm och hela Sverige.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2.5rem',
            animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
            flexWrap: 'wrap'
          }}>
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
            onMouseEnter={e => {
              e.target.style.background = colors.light;
            }}
            onMouseLeave={e => {
              e.target.style.background = 'white';
            }}
            >
              <Phone size={18} /> 070-XXXXXXX
            </button>
          </div>

          {/* Trust Badges */}
          <div style={{
            display: 'grid',
            gap: '1rem',
            animation: 'fadeInUp 0.8s ease-out 0.3s backwards'
          }}>
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
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div style={{
          animation: 'slideInRight 0.8s ease-out 0.2s backwards'
        }}>
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
              color: colors.secondary
            }}>
              📸<br/>
              <span style={{ fontSize: '0.8rem', marginTop: '1rem', display: 'block', color: 'var(--color-text-secondary)' }}>
                Lägg till ditt arbete här
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        padding: '5rem 2rem',
        background: `linear-gradient(135deg, ${colors.light} 0%, rgba(26, 143, 163, 0.03) 100%)`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 id="services" data-animate style={{
              fontSize: '2.2rem',
              fontWeight: 700,
              marginBottom: '1rem',
              opacity: visibleElements.has('services') ? 1 : 0,
              transform: visibleElements.has('services') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out',
              color: colors.dark
            }}>
              Vad vi erbjuder
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Kompletta lösningar för all din skyltning och monteringsbehov
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                data-animate
                style={{
                  background: 'var(--color-background-primary)',
                  padding: '2.5rem',
                  borderRadius: '12px',
                  border: `2px solid ${colors.light}`,
                  cursor: 'pointer',
                  opacity: visibleElements.has(`service-${service.id}`) ? 1 : 0,
                  transform: visibleElements.has(`service-${service.id}`) ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${idx * 0.1}s`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = colors.accent;
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 16px 32px rgba(13, 94, 111, 0.1)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = colors.light;
                  if (visibleElements.has(`service-${service.id}`)) {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                  e.currentTarget.style.boxShadow = 'none';
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

                <div style={{ fontSize: '2.8rem', marginBottom: '1rem', marginTop: '0.5rem' }}>
                  {service.icon}
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
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-secondary)',
                      paddingLeft: '1.5rem',
                      marginBottom: '0.6rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: colors.accent,
                        fontWeight: 'bold'
                      }}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Projects */}
      <section style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 id="projects" data-animate style={{
            fontSize: '2.2rem',
            fontWeight: 700,
            marginBottom: '1rem',
            opacity: visibleElements.has('projects') ? 1 : 0,
            transform: visibleElements.has('projects') ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out',
            color: colors.dark
          }}>
            Tidigare projekt
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Vi har arbetat med många ledande företag och event i Sverige
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              id={`testimonial-${idx}`}
              data-animate
              style={{
                background: 'var(--color-background-secondary)',
                padding: '2rem',
                borderRadius: '12px',
                border: `1px solid var(--color-border-tertiary)`,
                opacity: visibleElements.has(`testimonial-${idx}`) ? 1 : 0,
                transform: visibleElements.has(`testimonial-${idx}`) ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${idx * 0.1}s`,
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = colors.accent;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border-tertiary)';
                if (visibleElements.has(`testimonial-${idx}`)) {
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              <div style={{ marginBottom: '1rem', display: 'flex', gap: '4px' }}>
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} style={{ color: colors.accent, fontSize: '1.3rem' }}>★</span>
                ))}
              </div>
              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                color: colors.dark
              }}>
                {item.name}
              </h3>
              <p style={{
                color: 'var(--color-text-secondary)',
                fontSize: '0.9rem'
              }}>
                {item.category}
              </p>
            </div>
          ))}
        </div>
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
            onMouseEnter={e => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
            }}
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
  );
}
