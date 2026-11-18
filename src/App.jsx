import React, { useState } from 'react';
import { 
  ArrowRight, Check, Clock3, CalendarDays, Video, Leaf, 
  HeartHandshake, BookOpen, Menu, X, Play, ChevronDown, 
  MessageCircle, Sparkles, Flower2, Stethoscope, GraduationCap, ShieldCheck 
} from 'lucide-react';

import guruPhoto from "./assets/swami ji.jpg";
import trainingPhoto from "./assets/Training.jpeg";
import babaJiPhoto from "./assets/baabaji.jpeg";

const PHONE = '917355095660'; // WhatsApp number in international format
const GPayNumber = '7355095660';
// Add your real Razorpay / UPI payment URL here before publishing.
const PAYMENT_LINK = 'https://rzp.io/rzp/aJp3nnH'; // Example: 'https://rzp.io/l/your-payment-link'
const whatsappLink = (message = 'Namaste, I want to register for the 3 Days Shashwat Chikitsa Live Online Training.') => 
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

const modules = [
  { 
    n: '01', 
    icon: Leaf, 
    title: 'Fundamentals of Shashwat Chikitsa', 
    desc: 'शाश्वत चिकित्सा के मूल सिद्धांत, विचारधारा और प्राकृतिक स्वास्थ्य के प्रति इसका दृष्टिकोण समझें।' 
  },
  { 
    n: '02', 
    icon: Stethoscope, 
    title: 'Traditional Assessment Methods', 
    desc: 'नाड़ी परीक्षण (Pulse Diagnosis) और पारंपरिक वैदिक स्वास्थ्य परीक्षण विधियों का परिचय।' 
  },
  { 
    n: '03', 
    icon: Flower2, 
    title: 'Introduction to Ayurveda', 
    desc: 'आयुर्वेद का परिचय, मूल सिद्धांत और प्राकृतिक जीवनशैली की बुनियादी समझ।' 
  },
  { 
    n: '04', 
    icon: HeartHandshake, 
    title: 'Introduction to Homeopathy', 
    desc: 'होम्योपैथी की अवधारणाओं और इसके मूल सिद्धांतों की शुरुआती जानकारी।' 
  },
  { 
    n: '05', 
    icon: Sparkles, 
    title: 'Flower Remedy', 
    desc: 'Flower Remedy का परिचय, पारंपरिक अवधारणाएं और उपयोग संबंधी बुनियादी जानकारी।' 
  },
];

const faqs = [
  ['यह प्रशिक्षण कितने दिनों का है?', 'यह 3 दिवसीय Live Online introductory training program है।'],
  ['क्लास कब और कितने बजे होगी?', '20, 21 और 22 November 2026 को रात 8:00 से 9:30 बजे तक।'],
  ['क्लास कहां होगी?', 'सभी sessions Live Zoom के माध्यम से होंगे। Joining details registration confirmation के बाद साझा की जाएंगी।'],
  ['Registration fee कितनी है?', 'Special entry fee ₹199 है। भुगतान के बाद WhatsApp पर अपना नाम और payment screenshot भेजें।'],
  ['क्या beginners भी जुड़ सकते हैं?', 'हां। यह शुरुआती स्तर का परिचयात्मक कार्यक्रम है और प्राकृतिक स्वास्थ्य में रुचि रखने वाले learners के लिए है।'],
];

function SectionHeading({ eyebrow, title, desc, light = false }) {
  return (
    <div className={`section-heading ${light ? 'light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: '', phone: '', city: '' });
  const [copied, setCopied] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitRegistration = (e) => {
    e.preventDefault();
    const msg = `Namaste, I want to register for Shashwat Chikitsa 3-Day Live Training.\nName: ${form.name}\nWhatsApp: ${form.phone}\nCity: ${form.city}\nPlease share payment and registration details.`;
    window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer');
  };

  const handlePayment = () => {
    if (PAYMENT_LINK.trim()) {
      window.open(PAYMENT_LINK, '_blank', 'noopener,noreferrer');
    } else {
      document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
      window.alert('Payment link abhi add nahi kiya gaya hai. App.jsx mein PAYMENT_LINK mein apna payment URL paste karein.');
    }
  };

  const copyPayment = async () => {
    try { 
      await navigator.clipboard.writeText(GPayNumber); 
      setCopied(true); 
      setTimeout(() => setCopied(false), 1800); 
    } catch { 
      setCopied(false); 
    }
  };

  return (
    <>
      <div className="announcement">
        <span className="announcement-dot"/> 3-DAY LIVE ONLINE TRAINING 
        <span className="announce-divider">|</span> 20–22 NOVEMBER 2026
      </div>

      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-mark"><Leaf size={22}/></span>
          <span>SHASHWAT <b>CHIKITSA</b><small>LEARN • GROW • SERVE</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X/> : <Menu/>}
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {[
            ['About', '#about'],
            ['What you’ll learn', '#curriculum'],
            ['Schedule', '#schedule'],
            ['Gallery', '#gallery'],
            ['FAQs', '#faqs']
          ].map(([t, h]) => (
            <a key={h} href={h} onClick={() => setMenuOpen(false)}>{t}</a>
          ))}
          <button className="nav-cta" type="button" onClick={() => { setMenuOpen(false); handlePayment(); }}>
            Pay ₹199 <ArrowRight size={16}/>
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-pattern"/>
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="pill"><span/> A SPECIAL 3-DAY LEARNING EXPERIENCE</div>
              <p className="hero-kicker">🌿 YOUR JOURNEY INTO NATURAL WELLNESS BEGINS HERE</p>
              <h1>Become a <em>Professional</em><br/>Shashwat Healer</h1>
              <p className="hero-sub">Explore traditional wellness concepts, understand natural healing approaches and take your first step towards learning in the wellness space.</p>
              <p className="hero-hindi">वैदिक एवं प्राकृतिक स्वास्थ्य पद्धतियों को समझें और ज्ञान व सेवा की नई यात्रा शुरू करें।</p>
              <div className="hero-actions">
                <button className="btn btn-gold" type="button" onClick={handlePayment}>
                  Pay ₹199 & Register <ArrowRight size={18}/>
                </button>
                <a className="text-link" href="#curriculum">
                  <span className="play-icon"><Play size={13} fill="currentColor"/></span> Explore the program
                </a>
              </div>
              <div className="hero-meta">
                <span><CalendarDays size={16}/> 20–22 Nov 2026</span>
                <span><Clock3 size={16}/> 8:00–9:30 PM</span>
                <span><Video size={16}/> Live on Zoom</span>
              </div>
            </div>
            
<div className="hero-visual">
  <div className="hero-image-frame">

    <img
      src={guruPhoto}
      alt="Baba Swami Bhakti Prakash Ji"
      className="guru-hero-image"
    />

    <div className="image-caption">
      <span className="caption-line"></span>

      <div>
        <small>UNDER THE GUIDANCE OF</small>

        <strong>
          Param Pujya Baba Swami
          <br />
          Bhakti Prakash Ji
        </strong>
      </div>
    </div>

  </div>

  <div className="floating-seal">
    <span>3 DAYS</span>
    <b>LIVE</b>
    <small>ONLINE</small>
  </div>

  <div className="hero-leaf leaf-one">✳</div>
  <div className="hero-leaf leaf-two">❋</div>
</div>

          </div>
          <div className="hero-bottom">
            <span>AN INTRODUCTORY LEARNING PROGRAM</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="trust-strip">
          <div><Leaf/><span>Traditional wellness concepts</span></div>
          <div><BookOpen/><span>Structured 3-day learning</span></div>
          <div><Video/><span>Live online sessions</span></div>
          <div><HeartHandshake/><span>Learning with a purpose</span></div>
        </section>

       <section className="intro section-pad" id="about">
  <div className="intro-art">
    <div className="intro-photo image-placeholder">

      <img
        src={trainingPhoto}
        alt="Shashwat Chikitsa Training Program"
        className="intro-program-image"
      />

    </div>
            <div className="intro-stamp"><span>KNOWLEDGE</span><b>&</b><span>SERVICE</span></div>
          </div>
          <div className="intro-copy">
            <span className="eyebrow">A NEW LEARNING OPPORTUNITY</span>
            <h2>Curious about the world of <em>natural wellness?</em></h2>
            <p>क्या आप Ayurveda, Natural Healing और पारंपरिक वैदिक स्वास्थ्य पद्धतियों के बारे में सीखना चाहते हैं?</p>
            <p>यह 3 दिवसीय परिचयात्मक प्रशिक्षण कार्यक्रम आपको शाश्वत चिकित्सा के मूल सिद्धांतों और कुछ पारंपरिक wellness approaches को व्यवस्थित तरीके से समझने का अवसर देता है।</p>
            <p>चाहे आप विद्यार्थी हों, working professional हों या wellness में रुचि रखते हों — यह सीखने की शुरुआत हो सकती है।</p>
            <a className="under-link" href="#curriculum">Explore the learning modules <ArrowRight size={17}/></a>
          </div>
        </section>

        <section className="curriculum section-pad" id="curriculum">
          <SectionHeading 
            eyebrow="THE LEARNING EXPERIENCE" 
            title={<>What will you <em>learn?</em></>} 
            desc="Explore five introductory modules designed to build your understanding of traditional wellness concepts."
          />
          <div className="module-grid">
            {modules.map(({ n, icon: Icon, title, desc }) => (
              <article className="module-card" key={n}>
                <div className="module-top"><span>{n}</span><Icon size={24}/></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="module-line"/>
              </article>
            ))}
          </div>
          <div className="curriculum-note">
            <Sparkles size={18}/>
            <span>Designed as an introductory educational program. Topics are for learning and awareness, not independent medical diagnosis or treatment.</span>
          </div>
        </section>

        <section className="benefits section-pad">
          <div className="benefit-left">
            <span className="eyebrow">WHY JOIN THIS PROGRAM?</span>
            <h2>Learn with purpose.<br/><em>Grow with knowledge.</em></h2>
            <p>Build foundational awareness of traditional wellness approaches and explore how learning can support your personal growth and community awareness.</p>
            <a className="btn btn-outline-light" href="#register">I’m interested <ArrowRight size={17}/></a>
          </div>
          <div className="benefit-list">
            {[
              ['Understand the basics', 'Get introduced to key concepts of Shashwat Chikitsa and natural wellness.'],
              ['Explore traditional approaches', 'Learn introductory concepts related to pulse assessment, Ayurveda and more.'],
              ['Discover learning pathways', 'Understand possible areas for further study in the wellness space.'],
              ['Build awareness for service', 'Explore ways to encourage informed wellness awareness in your community.']
            ].map(([t, d], i) => (
              <div className="benefit-item" key={t}>
                <span className="check-circle"><Check size={16}/></span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
                <small>0{i + 1}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="mentor section-pad">
          <div className="mentor-copy">
            <span className="eyebrow">YOUR GUIDE FOR THIS PROGRAM</span>
            <h2>Learn under the guidance of <em>Baba Ji</em></h2>
            <p className="mentor-name">Param Pujya Baba Swami Bhakti Prakash Ji</p>
            <p>इस विशेष प्रशिक्षण कार्यक्रम में बाबा स्वामी भक्ति प्रकाश जी के मार्गदर्शन में शाश्वत चिकित्सा एवं पारंपरिक स्वास्थ्य संबंधी विषयों का परिचय प्राप्त करें।</p>
            <p className="muted">यहां बाबा जी का verified परिचय, अनुभव, उपलब्धियां और वास्तविक testimonials जोड़े जा सकते हैं।</p>
            <a className="under-link" href="#register">Join the live program <ArrowRight size={17}/></a>
          </div>
          <div className="mentor-photo">
  <img
    src={babaJiPhoto}
    alt="Param Pujya Baba Swami Bhakti Prakash Ji"
    className="mentor-portrait"
  />
</div>
        </section>

        <section className="schedule section-pad" id="schedule">
          <SectionHeading 
            eyebrow="MARK YOUR CALENDAR" 
            title={<>Three days. One <em>learning journey.</em></>} 
            desc="Join all three live sessions from the comfort of your home."
          />
          <div className="schedule-grid">
            {[
              ['DAY 01', 'FRIDAY', '20', 'NOV', 'Shashwat Chikitsa fundamentals', 'Introduction to core principles and natural wellness concepts.'],
              ['DAY 02', 'SATURDAY', '21', 'NOV', 'Traditional assessment & Ayurveda', 'Introduction to pulse assessment methods and Ayurveda fundamentals.'],
              ['DAY 03', 'SUNDAY', '22', 'NOV', 'Homeopathy & Flower Remedy', 'Introductory concepts of homeopathy and flower remedies.']
            ].map(([day, dow, date, month, title, desc]) => (
              <article className="day-card" key={day}>
                <div className="day-top"><span>{day}</span><span>{dow}</span></div>
                <div className="date-lockup"><strong>{date}</strong><span>{month}<small>2026</small></span></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="day-time"><Clock3 size={15}/> 8:00 PM – 9:30 PM</div>
              </article>
            ))}
          </div>
          <div className="zoom-note">
            <Video size={22}/>
            <div>
              <strong>Live Online via Zoom</strong>
              <span>Joining link and session instructions will be shared with registered participants.</span>
            </div>
          </div>
        </section>

        <section className="gallery section-pad" id="gallery">
          <SectionHeading 
            eyebrow="A GLIMPSE INTO OUR WORLD" 
            title={<>Moments of <em>learning & community.</em></>} 
            desc="Add authentic photos and videos from your training sessions, events and learning activities."
          />
          <div className="gallery-grid">
            <div className="gallery-main image-placeholder">
              <div className="placeholder-icon"><Play size={30}/></div>
              <strong>ADD FEATURE VIDEO HERE</strong>
              <span>Paste your YouTube embed or add your own video</span>
              <small>Suggested: 16:9 video</small>
            </div>
            <div className="gallery-side">
              <div className="image-placeholder gallery-small">
                <div className="placeholder-icon"><Flower2/></div>
                <strong>PHOTO 01</strong>
                <span>Add your image</span>
              </div>
              <div className="image-placeholder gallery-small">
                <div className="placeholder-icon"><Leaf/></div>
                <strong>PHOTO 02</strong>
                <span>Add your image</span>
              </div>
            </div>
          </div>
          <p className="gallery-tip">Tip: Use real event photographs and short clips to build trust. Get permission before publishing participant photos.</p>
        </section>

        <section className="audience section-pad">
          <SectionHeading 
            eyebrow="WHO CAN JOIN?" 
            title={<>Is this program <em>for you?</em></>} 
            desc="A beginner-friendly introduction for people interested in traditional wellness learning."
          />
          <div className="audience-grid">
            {[
              [GraduationCap, 'Students & young professionals'],
              [Leaf, 'Natural wellness enthusiasts'],
              [BookOpen, 'Curious lifelong learners'],
              [HeartHandshake, 'People interested in community awareness']
            ].map(([Icon, t]) => (
              <div className="audience-card" key={t}>
                <Icon size={26}/>
                <strong>{t}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="register section-pad" id="register">
          <div className="register-decor">✳</div>
          <div className="register-copy">
            <span className="eyebrow">YOUR NEXT STEP STARTS HERE</span>
            <h2>Be part of the <em>3-day experience.</em></h2>
            <p>Reserve your place in the live online introductory training program.</p>
            <div className="price-line"><span>Special entry fee</span><strong>₹199<small> only</small></strong></div>
            <div className="register-details">
              <span><CalendarDays size={17}/> 20–22 November 2026</span>
              <span><Clock3 size={17}/> 8:00 PM – 9:30 PM</span>
              <span><Video size={17}/> Live Zoom classes</span>
            </div>
            <div className="payment-box">
              <div>
                <small>UPI / GPay PAYMENT NUMBER</small>
                <strong>{GPayNumber}</strong>
              </div>
              <button onClick={copyPayment} className="copy-btn">
                {copied ? <Check size={16}/> : 'Copy number'}
              </button>
            </div>
            <p className="payment-help">Online payment link या UPI / GPay से ₹199 का भुगतान करें। इसके बाद payment screenshot WhatsApp पर भेजें ताकि आपकी registration confirm की जा सके।</p>
          </div>

          <form className="register-form" onSubmit={submitRegistration}>
            <div className="form-head">
              <span>QUICK ENQUIRY</span>
              <h3>Get registration assistance</h3>
              <p>Enter your details and our team will help you with the next steps.</p>
            </div>
            <label>Full name
              <input name="name" value={form.name} onChange={update} placeholder="Your full name" required/>
            </label>
            <label>WhatsApp number
              <input name="phone" value={form.phone} onChange={update} placeholder="10-digit mobile number" inputMode="numeric" pattern="[0-9]{10}" maxLength="10" required/>
            </label>
            <label>City
              <input name="city" value={form.city} onChange={update} placeholder="Your city" required/>
            </label>
            <button className="btn btn-green form-submit" type="submit">
              Continue on WhatsApp <ArrowRight size={18}/>
            </button>
            <small className="form-privacy">
              <ShieldCheck size={14}/> Your details will be used only to respond to your enquiry.
            </small>
          </form>
        </section>

        <section className="faqs section-pad" id="faqs">
          <div className="faq-intro">
            <span className="eyebrow">NEED TO KNOW MORE?</span>
            <h2>Frequently asked <em>questions.</em></h2>
            <p>Everything you need to know before registering.</p>
            <a className="under-link" href={whatsappLink('Namaste, I have a question about the Shashwat Chikitsa training program.')} target="_blank" rel="noreferrer">
              <MessageCircle size={17}/> Ask us on WhatsApp
            </a>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <div className={`faq-item ${openFaq === i ? 'active' : ''}`} key={q}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span>{q}</span>
                  <ChevronDown size={19}/>
                </button>
                {openFaq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="final-ornament">✳</div>
          <span className="eyebrow">LEARN • UNDERSTAND • SERVE</span>
          <h2>Take your first step<br/>towards <em>learning.</em></h2>
          <p>Join the 3-day Shashwat Chikitsa introductory live online program.</p>
          <button className="btn btn-gold" type="button" onClick={handlePayment}>
            Pay ₹199 & Register <ArrowRight size={18}/>
          </button>
          <small>20–22 November 2026 · Live on Zoom</small>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark"><Leaf size={21}/></span>
          <span>SHASHWAT <b>CHIKITSA</b><small>LEARN • GROW • SERVE</small></span>
        </a>
        <p>Shashwat Chikitsa Training Team</p>
        <a href={whatsappLink()} target="_blank" rel="noreferrer">
          <MessageCircle size={16}/> WhatsApp: +91 73550 95660
        </a>
        <div className="disclaimer">
          Educational and awareness program only. This training is not a recognised medical degree, professional licence or qualification to diagnose or treat diseases. The content does not replace advice or care from a qualified healthcare professional.
        </div>
        <div className="footer-bottom">
          <span>© 2026 Shashwat Chikitsa. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      <button className="mobile-sticky" type="button" onClick={handlePayment}>
        <span><small>3-DAY LIVE TRAINING</small><strong>Pay ₹199 & Register</strong></span>
        <b>PAY NOW <ArrowRight size={17}/></b>
      </button>

      <button className="desktop-payment-float" type="button" onClick={handlePayment}>
        <span className="pay-float-label">SPECIAL ENTRY FEE</span>
        <strong>Pay ₹199</strong>
        <span className="pay-float-action">REGISTER NOW <ArrowRight size={15}/></span>
      </button>

      <a className="whatsapp-float" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle size={23}/>
      </a>
    </>
  );
}

export default App;