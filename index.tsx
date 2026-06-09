import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './page.module.css';

function App() {
  const offices = [
    {
      tag: 'Head Office',
      name: 'One Bharat — Mumbai',
      city: 'Mumbai, Maharashtra',
      address: 'Unit 521, 5th Floor, IJMIMA Complex, Off Link Road, Behind Infinity Mall, Mindspace, Malad West, Mumbai, Maharashtra – 400064',
      mapsUrl: 'https://maps.google.com/?q=IJMIMA+Complex+Malad+West+Mumbai+400064',
    },
    {
      tag: 'Corporate Office',
      name: 'One Bharat — Noida',
      city: 'Sector 18, Noida, Uttar Pradesh',
      address: '3625, Regus, 36th Floor, Wave One Building, Sector 18, Noida, Uttar Pradesh – 201301',
      mapsUrl: 'https://maps.google.com/?q=Wave+One+Building+Sector+18+Noida+201301',
    },
    {
      tag: 'Branch Office',
      name: 'One Bharat — Bhangel',
      city: 'Gautam Buddh Nagar, Uttar Pradesh',
      address: '1st Floor, Mahindra Complex, Pillar No. 117, Near Bhangel Police Chowki, Opposite PNB Bank, Bhangel, Gautam Buddh Nagar, Uttar Pradesh – 201304',
      mapsUrl: 'https://maps.google.com/?q=Mahindra+Complex+Bhangel+Gautam+Buddh+Nagar+201304',
    },
  ];

  return (
    <main className={styles.main}>

      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <a href="/" className={styles.navLogo}>
          <div className={styles.logoText}>
            <img src="/image.png" alt="One Bharat" className={styles.logoImg} />
          </div>
        </a>
        <ul className={styles.navLinks}>
          <li><a href="/#features">Products</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#partner">Partners</a></li>
          <li><a href="/branches" className={styles.activeLink}>Branches</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <a href="https://app.onebharat.co/welcome" className={styles.loginBtn}>Login</a>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Our Branches</h1>
        <p className={styles.heroSubtitle}>
          Visit us at our offices spread across India. Our teams are ready to assist you with loans, investments, and all your financial needs.
        </p>
      </section>

      {/* OFFICES */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Office Locations</h2>
        <p className={styles.sectionSubtitle}>We are present in Mumbai and Uttar Pradesh to serve you better.</p>

        <div className={styles.grid}>
          {offices.map((office, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <span className={styles.cardTag}>{office.tag}</span>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className={styles.officeName}>{office.name}</div>
                <div className={styles.officeCity}>{office.city}</div>
                <div className={styles.divider}></div>
                <div className={styles.infoItem}>
                  <div className={styles.infoDot}></div>
                  <div>
                    <div className={styles.infoLabel}>Address</div>
                    <div className={styles.infoValue}>{office.address}</div>
                  </div>
                </div>
              </div>
              <a href={office.mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.directionsBtn}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                Get Directions
              </a>
            </div>
          ))}
        </div>

        {/* CONTACT BANNER */}
        <div className={styles.contactBanner}>
          <div>
            <h3 className={styles.bannerTitle}>Have Questions? We&apos;re Here.</h3>
            <p className={styles.bannerSubtitle}>Reach out to any of our offices or connect with us online.</p>
          </div>
          <div className={styles.bannerBtns}>
            <a href="/#contact" className={styles.btnNavy}>Contact Us</a>
            <a href="https://app.onebharat.co/auth/login" className={styles.btnOutline}>Apply for Loan →</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <img src="/assets/ob-logo/logo.png" alt="One Bharat" className={styles.logoImg} />
        </div>
        <div className={styles.footerSocials}>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="#1a2e5a"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="X">
            <svg viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="2" strokeLinecap="round"><path d="M4 4l16 16M4 20L20 4"/></svg>
          </a>
        </div>
        <ul className={styles.footerNav}>
          <li><a href="/">Home</a></li>
          <li><a href="/#features">Products</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#partner">Partners</a></li>
          <li><a href="/branches">Branches</a></li>
          <li><a href="/#contact">Contact</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
        <div className={styles.footerLoginBtns}>
          <a href="https://app.onebharat.co/auth/login/partner" className={styles.footerBtn}>Partner Login →</a>
          <a href="https://app.onebharat.co/auth/login" className={styles.footerBtn}>Customer Login →</a>
        </div>
        <div className={styles.footerWatermark}>OneBharat</div>
      </footer>

    </main>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
