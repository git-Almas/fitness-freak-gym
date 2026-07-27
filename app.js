/* ============================================
   FITNESS FREAK GYM — "Coral Sunrise" React App
   Loaded via Babel Standalone (no build step)
   ============================================ */

const {useState, useEffect, useRef} = React;

/* ---------- CONSTANTS (edit gym details here) ---------- */
const WA_NUMBER = "918105172399";
const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const MAP_EMBED = "https://www.google.com/maps?q=17.3423106,76.8640326&z=16&output=embed";
const MAP_DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=17.3423106,76.8640326&destination_place_id=ChIJ7_Fzw9THyDsRuxQmjUTbWlU";
const INSTAGRAM_URL = "https://www.instagram.com/fitnessfreakgym_/";
const EMAIL_ADDRESS = "farzank121@gmail.com";

/* ---------- REVEAL ON SCROLL ---------- */
function useReveal(){
  const ref = useRef(null);
  useEffect(()=>{
    const el = ref.current;
    if(!el) return;
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target);} });
    },{threshold:0.15});
    obs.observe(el);
    return ()=>obs.disconnect();
  },[]);
  return ref;
}
function Reveal({children, className="", style}){
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`} style={style}>{children}</div>;
}

/* ---------- SOUND ICONS ---------- */
function IconSoundOn(props){
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 9v6h4l5 5V4L8 9H4z"/>
      <path d="M16.5 8.5a5 5 0 0 1 0 7"/>
      <path d="M19 6a8.5 8.5 0 0 1 0 12"/>
    </svg>
  );
}
function IconSoundOff(props){
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 9v6h4l5 5V4L8 9H4z"/>
      <line x1="16" y1="9" x2="22" y2="15"/>
      <line x1="22" y1="9" x2="16" y2="15"/>
    </svg>
  );
}

/* ---------- SOCIAL ICONS ---------- */
function IconInstagram(props){
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="6"/>
      <circle cx="12" cy="12" r="4.2"/>
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function IconWhatsApp(props){
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z"/>
    </svg>
  );
}
function IconMail(props){
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3"/>
      <path d="M3 7l9 6 9-6"/>
    </svg>
  );
}
function SocialRow(){
  const base = {
    display:'inline-flex', alignItems:'center', justifyContent:'center',
    width:44, height:44, borderRadius:'50%',
    border:'2px solid rgba(255,251,245,0.3)', color:'#FFFBF5',
    transition:'all .25s ease'
  };
  const onEnter = e=>{ e.currentTarget.style.borderColor='#FF6B5B'; e.currentTarget.style.color='#FF6B5B'; };
  const onLeave = e=>{ e.currentTarget.style.borderColor='rgba(255,251,245,0.3)'; e.currentTarget.style.color='#FFFBF5'; };
  return (
    <div style={{display:'flex',gap:14,justifyContent:'center'}}>
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener" aria-label="Instagram" style={base} onMouseEnter={onEnter} onMouseLeave={onLeave}><IconInstagram/></a>
      <a href={waLink("Hi Fitness Freak Gym! I'd like to know more about membership plans.")} target="_blank" rel="noopener" aria-label="WhatsApp" style={base} onMouseEnter={onEnter} onMouseLeave={onLeave}><IconWhatsApp/></a>
      <a href={`mailto:${EMAIL_ADDRESS}`} aria-label="Email" style={base} onMouseEnter={onEnter} onMouseLeave={onLeave}><IconMail/></a>
    </div>
  );
}

/* ---------- NAV ---------- */
const NAV_LINKS = [
  ["About","#about"],["Trainer","#trainer"],["Training","#services"],["Equipment","#equipment"],
  ["Gallery","#gallery"],["Visit Us","#visit"],["Contact","#contact"],
];
function Nav(){
  const [open,setOpen] = useState(false);
  return (
    <div className="nav">
      <a href="#top" className="brand">
        <span style={{width:30,height:30,display:'inline-block'}}>
          <svg viewBox="0 0 48 48" fill="none" width="30" height="30">
            <circle cx="24" cy="24" r="22" fill="#FF6B5B"/>
            <path d="M16 30 C16 22 19 18 24 18 C29 18 32 22 32 30" stroke="#FFFBF5" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <circle cx="24" cy="13" r="4" fill="#FFC145"/>
          </svg>
        </span>
        <span className="brand-name">Fitness <em>Freak</em></span>
      </a>
      <div className={`nav-links ${open ? 'open':''}`}>
        {NAV_LINKS.map(([label,href])=>(
          <a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>
        ))}
      </div>
      <a className="nav-cta" href={waLink("Hi Fitness Freak Gym! I'd like to know more about membership.")} target="_blank" rel="noopener">
        Chat on WhatsApp
      </a>
      <button className="nav-toggle" onClick={()=>setOpen(o=>!o)} aria-label="Toggle menu">
        {open ? '✕' : '☰'}
      </button>
    </div>
  );
}

/* ---------- HERO (full video, nothing cropped, minimal animated content) ---------- */
function Hero(){
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if(!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section id="top" className="hero">
      <div className="hero-video-wrap">
        <video
          ref={videoRef}
          className="hero-video"
          src="gym-hero-video.mp4"
          
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <button className="sound-toggle" onClick={toggleSound} aria-label="Toggle sound">
        {muted ? <IconSoundOff/> : <IconSoundOn/>}
      </button>

      <div className="hero-inner">
        <span className="hero-badge hero-anim" style={{animationDelay:'0.1s'}}>
          Ladies-Only Fitness Studio
        </span>
        <h1 className="hero-anim" style={{color:'#2B2320',animationDelay:'0.3s'}}>
          <strong>Fit-less to</strong> <em>Fitness</em>
        </h1>
        <p className="lede hero-anim mobile-hide" style={{animationDelay:'0.5s'}}>
          A women-only gym in Gulbarga, guided by a trainer with 10+ years of experience.
        </p>
        <div className="hero-ctas hero-anim" style={{animationDelay:'0.7s'}}>
          <a className="btn-primary" href={waLink("Hi Fitness Freak Gym! I'd like to know more about membership plans.")} target="_blank" rel="noopener">
            Message Us on WhatsApp
          </a>
          <a className="btn-ghost" href={MAP_DIRECTIONS} target="_blank" rel="noopener">Get Directions</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About(){
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <Reveal>
          <div className="about-frame">
            <img src="images/gym-flyer.jpg" alt="Fitness Freak Gym signage and studio details" />
          </div>
        </Reveal>
        <Reveal className="about-text">
          <span className="eyebrow">Our Story</span>
          <h2>A studio built only for women.</h2>
          <p>
            Tucked behind Wisdom School near Habeeb Function Hall on Azadpur Road,
            Fitness Freak Gym is a space where women in Gulbarga can train without
            a second thought — no shared floors, no compromises. The entire studio,
            every machine and every class, is exclusively for women.
          </p>
          <p>
            From strength machines to steam-bath recovery, every part of the studio
            is designed around the way women actually train: consistent guidance,
            a calm environment, and programs that meet you at your own pace.
          </p>
          <div className="about-pills">
            <span className="pill c1">100% Ladies Only</span>
            <span className="pill c2">10+ Yrs Trainer</span>
            <span className="pill c3">Steam Bath Recovery</span>
            <span className="pill c4">4.5★ Rated</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TRAINER SPOTLIGHT (signature starburst badge) ---------- */
function Starburst(){
  // scalloped sunburst shape — the page's signature element
  const points = 16;
  const outerR = 130, innerR = 112;
  let path = "";
  for(let i=0;i<points*2;i++){
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI * i) / points;
    const x = 140 + r * Math.sin(angle);
    const y = 140 - r * Math.cos(angle);
    path += (i===0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1) + " ";
  }
  path += "Z";
  return (
    <svg viewBox="0 0 280 280">
      <path d={path} fill="#FF6B5B"/>
      <circle cx="140" cy="140" r="95" fill="#E63975"/>
    </svg>
  );
}
function Trainer(){
  return (
    <section id="trainer" className="trainer">
      <div className="trainer-grid">
        <Reveal className="starburst-wrap">
          <div className="starburst">
            <Starburst/>
            <div className="starburst-number">
              <span className="num">10+</span>
              <span className="label">Years of Training Experience</span>
            </div>
          </div>
        </Reveal>
        <Reveal className="trainer-text">
          <span className="eyebrow">Meet Your Trainer</span>
          <h2>Guided by a trainer who's seen it all.</h2>
          <p>
            Fitness Freak Gym is led by a dedicated female trainer with over a decade
            of hands-on experience in women's fitness — from strength and cardio
            fundamentals to recovery and weight-loss coaching.
          </p>
          <p>
            Because the studio is run entirely by and for women, every session is
            built around real comfort: no judgment, no distractions, just steady,
            personal guidance toward your goals.
          </p>
          <div className="trainer-stats">
            <div className="trainer-stat"><span className="num">10+</span><span className="label">Years Experience</span></div>
            <div className="trainer-stat"><span className="num">100%</span><span className="label">Women-Led Studio</span></div>
            <div className="trainer-stat"><span className="num">6</span><span className="label">Training Formats</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SERVICES / TRAINING LIST (colorful cards) ---------- */
const SERVICES = [
  {
    name:"Cardio Training", color:"c1",
    desc:"Treadmills, exercise cycles and elliptical stations to build stamina and burn fat steadily, at your own pace.",
    icon:<path d="M4 24 L14 24 L18 12 L24 34 L28 20 L32 24 L44 24" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  },
  {
    name:"Strength Machine Exercise", color:"c2",
    desc:"Guided resistance training on strength machines and free weights, with correct form supervised at every step.",
    icon:<g stroke="currentColor" strokeWidth="2.4" fill="none"><rect x="6" y="20" width="8" height="8" rx="1.5"/><rect x="34" y="20" width="8" height="8" rx="1.5"/><line x1="14" y1="24" x2="34" y2="24"/></g>
  },
  {
    name:"Yoga", color:"c3",
    desc:"Traditional yoga sessions for flexibility, breath control and calm — suited to every experience level.",
    icon:<circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.4" fill="none" strokeDasharray="4 6"/>
  },
  {
    name:"Aerobics", color:"c4",
    desc:"High-energy, music-led group aerobics that builds stamina and coordination while keeping it social and fun.",
    icon:<g stroke="currentColor" strokeWidth="2.4" fill="none"><path d="M16 34 C16 24 20 20 24 20 C28 20 32 24 32 34"/><circle cx="24" cy="12" r="4"/></g>
  },
  {
    name:"Stretching", color:"c5",
    desc:"Dedicated mobility and stretch routines that improve range of motion and lower the risk of injury.",
    icon:<path d="M10 34 Q24 6 38 34" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round"/>
  },
  {
    name:"Steam Bath for Weight Loss", color:"c6",
    desc:"Post-workout steam-bath sessions that support recovery and complement your weight-loss routine.",
    icon:<path d="M16 34 C16 34 14 28 18 24 C14 20 16 14 20 12 C18 18 22 20 22 24 C26 20 24 14 28 12 C26 18 30 22 28 28 C32 26 32 20 32 20 C34 26 32 34 32 34Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  },
];
function Services(){
  return (
    <section id="services" className="services">
      <Reveal className="section-head">
        <span className="eyebrow">What You'll Train</span>
        <h2>Six ways to train, all in one studio.</h2>
        <p>Every program runs within the same women-only space — mix and match what suits your goals.</p>
      </Reveal>
      <div className="service-grid">
        {SERVICES.map((s)=>(
          <Reveal key={s.name}>
            <div className={`service-card ${s.color}`}>
              <svg className="service-icon" viewBox="0 0 48 48">{s.icon}</svg>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- EQUIPMENT: zones + animated machine showcase ---------- */
const EQUIPMENT_ZONES = [
  { tag:"Cardio Zone", title:"Built for endurance",
    items:["Treadmills","Exercise cycles","Elliptical cross-trainers","Stepper machines"] },
  { tag:"Strength Zone", title:"Built for muscle & tone",
    items:["Multi-station strength machines","Adjustable flat & incline benches","Dumbbells & free weights","Lat pulldown & rowing stations"] },
  { tag:"Recovery Zone", title:"Built for recovery",
    items:["Steam bath unit","Stretching & mobility mats","Yoga & aerobics floor space","Cool-down seating area"] },
];

const MACHINES = [
  { name:"Treadmill", img:"images/TREAD-MILL.jpg", tag:"Cardio Zone" },
  { name:"Cross Trainer", img:"images/CROSS-TRAINER.jpg", tag:"Cardio Zone" },
  { name:"Upright Bike", img:"images/UPRIGHT-BIKE.jpg", tag:"Cardio Zone" },
  { name:"Recumbent Bike", img:"images/RECUMBENT-BIKE.jpg", tag:"Cardio Zone" },
  { name:"Ab Coaster", img:"images/AB-COASTER.jpg", tag:"Core Zone" },
  { name:"Twister", img:"images/TWISTER.jpg", tag:"Core Zone" },
  { name:"Strength Training", img:"images/STRENGTH-TRAINING.jpg", tag:"Strength Zone" },
];

function Equipment(){
  const [active, setActive] = useState(3);

  return (
    <section id="equipment" className="equipment">
      <Reveal className="section-head">
        <span className="eyebrow">The Machines</span>
        <h2>What you'll train with</h2>
        <p>Equipment is organised into three zones so every session — cardio, strength or recovery — has its own dedicated space.</p>
      </Reveal>

      <div className="equip-grid">
        {EQUIPMENT_ZONES.map(e=>(
          <Reveal key={e.tag}>
            <div className="equip-card">
              <span className="equip-tag">{e.tag}</span>
              <h3>{e.title}</h3>
              <ul className="equip-list">
                {e.items.map(i=><li key={i}>{i}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="section-head mach-heading">
        <span className="eyebrow">Meet The Machines</span>
        <h2>See what's on the floor</h2>
      </Reveal>

      <div className="mach-stage-wrap">
        <div className="mach-stage">
          {MACHINES.map((m, i) => {
            const offset = i - active;
            const abs = Math.abs(offset);
            const isActive = offset === 0;
            const hidden = abs > 3;
            const style = {
              transform: `translateX(${offset * 92}px) scale(${Math.max(1 - abs * 0.13, 0.55)}) rotateY(${offset * -8}deg)`,
              zIndex: 100 - abs,
              opacity: hidden ? 0 : 1 - abs * 0.16,
              pointerEvents: hidden ? 'none' : 'auto',
            };
            return (
              <div
                key={m.name}
                className={`mach-card ${isActive ? 'active' : ''}`}
                style={style}
                onClick={() => setActive(i)}
              >
                <img src={m.img} alt={m.name} loading="lazy" />
                <div className="mach-card-body">
                  <span className="mach-card-tag">{m.tag}</span>
                  <h4>{m.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mach-cta">
        Come visit <strong>Fitness Freak Gym</strong> to explore more machines in person —
        see the full equipment line-up on the studio floor.
      </p>
    </section>
  );
}

/* ---------- GALLERY ---------- */
const GALLERY = [
  {src:"images/gym-strength.jpg", cap:"Strength & Weight Training"},
  {src:"images/gym-aerobics.jpg", cap:"Aerobics & Zumba Sessions"},
  {src:"images/gym-yoga.jpg", cap:"Yoga & Flexibility"},
  {src:"images/gym-wellness.jpg", cap:"Steam Bath Recovery"},
];
function Gallery(){
  return (
    <section id="gallery" className="gallery">
      <Reveal className="section-head">
        <span className="eyebrow">Inside The Studio</span>
        <h2>A look at Fitness Freak Gym</h2>
        <p>Real moments from the studio floor.</p>
      </Reveal>
      <div className="gallery-grid">
        {GALLERY.map(g=>(
          <Reveal key={g.src} className="gallery-item">
            <img src={g.src} alt={g.cap} loading="lazy"/>
            <div className="gallery-cap">{g.cap}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- VISIT / HOURS / MAP ---------- */
const HOURS = [
  {day:"Monday – Saturday (Morning)", time:"6:00 AM – 8:00 AM"},
  {day:"Monday – Saturday (Evening)", time:"4:00 PM – 7:00 PM"},
  {day:"Sunday", time:"Closed", closed:true},
];
function Visit(){
  return (
    <section id="visit" className="visit">
      <Reveal className="section-head">
        <span className="eyebrow" style={{color:'#fff'}}>Visit Us</span>
        <h2 style={{color:'#fff'}}>Find your way to the studio</h2>
        <p style={{color:'rgba(255,255,255,0.85)'}}>Behind Wisdom School, Near Habeeb Function Hall, Azadpur Road, Gulbarga – 585104</p>
      </Reveal>
      <div className="visit-grid">
        <Reveal>
          <div className="hours-card">
            <span className="eyebrow">Studio Hours</span>
            <h3>Timings</h3>
            {HOURS.map(h=>(
              <div key={h.day} className={`hours-row ${h.closed?'closed':''}`}>
                <span className="day">{h.day}</span>
                <span className="time">{h.time}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="map-wrap">
            <iframe src={MAP_EMBED} loading="lazy" title="Fitness Freak Gym location map" allowFullScreen></iframe>
            <div className="map-footer">
              <span>Azadpur Road, Gulbarga – 585104</span>
              <a className="btn-primary" style={{padding:'10px 18px'}} href={MAP_DIRECTIONS} target="_blank" rel="noopener">Get Directions</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const TESTIMONIALS = [
  {
    text:"This is exactly what I picture when I think of the perfect gym — a genuinely positive atmosphere, a comfortable crowd, and a trainer who's always ready to help.",
    name:"Google Reviewer", source:"Verified Google Review"
  },
  {
    text:"A studio that actually feels safe and welcoming for women, which makes it so much easier to stay consistent with training.",
    name:"Google Reviewer", source:"Verified Google Review"
  },
  {
    text:"An awesome, well-run studio overall — the kind of place that keeps you coming back for your next session.",
    name:"Google Reviewer", source:"Verified Google Review"
  },
];
function Testimonials(){
  return (
    <section id="reviews" className="testimonials">
      <Reveal className="section-head">
        <span className="eyebrow">In Their Words</span>
        <h2>Loved by women across Gulbarga</h2>
        <p>4.5★ average, drawn from real Google reviews.</p>
      </Reveal>
      <div className="testi-grid">
        {TESTIMONIALS.map((t,i)=>(
          <Reveal key={i}>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>{t.text}</p>
              <div className="testi-name">{t.name}</div>
              <div className="testi-source">{t.source}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact(){
  return (
    <section id="contact" className="contact">
      <Reveal>
        <span className="eyebrow" style={{color:'#FF6B5B'}}>Ready When You Are</span>
        <h2 style={{marginTop:16}}>Start your <em>fitness</em> journey today.</h2>
        <p>Send a message on WhatsApp for membership plans, trial sessions, or any questions about the studio.</p>
        <div className="contact-ctas">
          <a className="btn-primary" href={waLink("Hi Fitness Freak Gym! I'd like to know more about membership plans.")} target="_blank" rel="noopener">
            Message Us on WhatsApp
          </a>
          <a className="btn-ghost"  href="tel:+918105172399">Call: +91 81051 72399</a>
        </div>
        <div style={{marginTop:36}}>
          <span className="eyebrow" style={{display:'block',marginBottom:16,color:'#FF6B5B'}}>Follow & Connect</span>
          <SocialRow/>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer(){
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-cols">
          <div>
            <h4>Studio</h4>
            <div>
              <div>Behind Wisdom School,</div>
              <div>Near Habeeb Function Hall,</div>
              <div>Azadpur Road, Gulbarga – 585104</div>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <div><a href="tel:+918105172399">+91 81051 72399</a></div>
              <div><a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a></div>
              <div><a href={INSTAGRAM_URL} target="_blank" rel="noopener">@fitnessfreakgym_</a></div>
            </div>
          </div>
          <div>
            <h4>Hours</h4>
            <div>
              <div>Mon–Sat: 6–8 AM · 4–7 PM</div>
              <div>Sunday: Closed</div>
            </div>
          </div>
        </div>
        <div>© {new Date().getFullYear()} Fitness Freak Gym · Gym Only For Ladies</div>
      </div>
    </footer>
  );
}

/* ---------- FLOATING WHATSAPP BUTTON ---------- */
function WhatsAppFloat(){
  return (
    <div className="wa-float">
      <div className="wa-bubble">This is Fitness Freak Gym 💪 How can I help you? Please leave your message here.</div>
      <a className="wa-btn" href={waLink("Hi! This is Fitness Freak Gym 💪 How can I help you? Please leave your message here.")} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" fill="white"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-2c1.8 1 3.9 1.5 6.3 1.5 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-2.1 0-4-.6-5.6-1.6l-.4-.2-4.6 1.2 1.2-4.5-.3-.4A9.7 9.7 0 0 1 6.2 15c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8zm5.4-7.3c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C14 12.4 13.4 11 13.1 10.4c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.4.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z"/></svg>
      </a>
    </div>
  );
}

/* ---------- APP ROOT ---------- */
function App(){
  return (
    <React.Fragment>
      <Nav/>
      <Hero/>
      <About/>
      <Trainer/>
      <Services/>
      <Equipment/>
      <Gallery/>
      <Visit/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <WhatsAppFloat/>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);