// =============================================================================
// 💍 WEDDING INVITATION INTERACTIVE LOGIC (PURE STANDALONE JAVASCRIPT)
// =============================================================================

(function () {
  const data = window.weddingDetails;
  if (!data) return;

  // 1. URL Personalization (?guest=Uncle+Rajesh or ?to=Auntie)
  const urlParams = new URLSearchParams(window.location.search || window.location.hash.split('?')[1]);
  const guestQuery = urlParams.get('guest') || urlParams.get('to') || urlParams.get('name');
  const guestName = guestQuery
    ? decodeURIComponent(guestQuery.replace(/[-_+]/g, ' ')).trim()
    : (data.invitation.recipient || 'Honored Guest');

  // Set document title
  document.title = `${data.couple.groom.firstName} & ${data.couple.bride.firstName}'s Wedding Invitation`;

  // 2. Synthesizer & Audio Engine
  let isPlaying = false;
  let audioContext = null;

  function playRomanticChords() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContext) audioContext = new AudioCtx();
      if (audioContext.state === 'suspended') audioContext.resume();

      const notes = [261.63, 329.63, 392.0, 523.25, 659.25]; // C major arpeggio
      notes.forEach((freq, idx) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioContext.currentTime + idx * 0.28);
        gain.gain.setValueAtTime(0.08, audioContext.currentTime + idx * 0.28);
        gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + idx * 0.28 + 1.8);
        osc.connect(gain);
        gain.connect(audioContext.destination);
        osc.start(audioContext.currentTime + idx * 0.28);
        osc.stop(audioContext.currentTime + idx * 0.28 + 1.9);
      });
      isPlaying = true;
      updateMusicButton();
    } catch (e) {
      // Audio fallback
    }
  }

  function updateMusicButton() {
    const btn = document.getElementById('musicToggleBtn');
    if (!btn) return;
    if (isPlaying) {
      btn.style.animation = 'spin 5s linear infinite';
    } else {
      btn.style.animation = 'none';
    }
  }

  // 3. Simple Festive Confetti Cannon (No external dependency needed!)
  function fireConfetti(count = 50, spread = 60, originY = 0.5) {
    if (typeof window.confetti === 'function') {
      window.confetti({
        particleCount: count,
        spread: spread,
        origin: { y: originY },
        colors: ['#9e2a2b', '#c59b27', '#e1c490', '#ffffff', '#e63946']
      });
      return;
    }
    // Pure CSS/DOM fallback if offline
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.style.position = 'fixed';
      p.style.zIndex = '10001';
      p.style.left = `${50 + (Math.random() - 0.5) * spread}%`;
      p.style.top = `${originY * 100}%`;
      p.style.width = `${Math.random() * 8 + 6}px`;
      p.style.height = `${Math.random() * 8 + 6}px`;
      p.style.backgroundColor = ['#9e2a2b', '#c59b27', '#e1c490', '#e63946'][Math.floor(Math.random() * 4)];
      p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      p.style.pointerEvents = 'none';
      p.style.transition = 'transform 1.2s ease-out, opacity 1.2s ease-out';
      document.body.appendChild(p);
      setTimeout(() => {
        const xDist = (Math.random() - 0.5) * 400;
        const yDist = Math.random() * 350 - 150;
        p.style.transform = `translate(${xDist}px, ${yDist}px) rotate(${Math.random() * 720}deg)`;
        p.style.opacity = '0';
      }, 20);
      setTimeout(() => p.remove(), 1300);
    }
  }

  // 4. Populate Dynamic Text Content
  function populateContent() {
    // Guest names
    document.querySelectorAll('.js-guest-name').forEach((el) => {
      el.textContent = guestName;
    });

    // Couple names
    const groomName = data.couple.groom.firstName;
    const brideName = data.couple.bride.firstName;
    document.querySelectorAll('.js-groom-first').forEach(el => el.textContent = groomName);
    document.querySelectorAll('.js-bride-first').forEach(el => el.textContent = brideName);

    // Headline & message
    const headlineEl = document.getElementById('invitationHeadline');
    if (headlineEl) headlineEl.textContent = data.invitation.headline;
    const messageEl = document.getElementById('invitationMessage');
    if (messageEl) messageEl.textContent = `"${data.invitation.message}"`;
    const closingEl = document.getElementById('closingNote');
    if (closingEl) closingEl.textContent = `"${data.invitation.closingNote}"`;

    // Families
    const groomFatherEl = document.getElementById('groomFather');
    if (groomFatherEl) groomFatherEl.textContent = data.families.groom.father;
    const groomMotherEl = document.getElementById('groomMother');
    if (groomMotherEl) groomMotherEl.textContent = data.families.groom.mother;
    const groomAddressEl = document.getElementById('groomAddress');
    if (groomAddressEl) groomAddressEl.textContent = data.families.groom.address || '';

    const brideFatherEl = document.getElementById('brideFather');
    if (brideFatherEl) brideFatherEl.textContent = data.families.bride.father;
    const brideMotherEl = document.getElementById('brideMother');
    if (brideMotherEl) brideMotherEl.textContent = data.families.bride.mother;
    const brideAddressEl = document.getElementById('brideAddress');
    if (brideAddressEl) brideAddressEl.textContent = data.families.bride.address || '';

    // Events
    const ceremony = data.events.find(e => e.type === 'ceremony') || data.events[0];
    const reception = data.events.find(e => e.type === 'reception') || data.events[1] || data.events[0];

    document.querySelectorAll('.js-ceremony-date').forEach(el => el.textContent = ceremony.formattedDate);
    const ceremonyLocEl = document.getElementById('ceremonyLocation');
    if (ceremonyLocEl) ceremonyLocEl.textContent = ceremony.locationName;
    const ceremonyTimeEl = document.getElementById('ceremonyTime');
    if (ceremonyTimeEl) ceremonyTimeEl.textContent = `Time: ${ceremony.time} hrs`;
    const ceremonyAddressEl = document.getElementById('ceremonyAddress');
    if (ceremonyAddressEl) ceremonyAddressEl.textContent = ceremony.address;

    // Date badge split (MONDAY | 07 | DECEMBER 2026)
    const [cYear, cMonth, cDay] = ceremony.date.split('-');
    const ceremonyDateObj = new Date(parseInt(cYear, 10), parseInt(cMonth, 10) - 1, parseInt(cDay, 10));
    const dayNameEl = document.getElementById('ceremonyDayName');
    if (dayNameEl) dayNameEl.textContent = ceremonyDateObj.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();
    const dayNumEl = document.getElementById('ceremonyDayNumber');
    if (dayNumEl) dayNumEl.textContent = cDay;
    const monthYearEl = document.getElementById('ceremonyMonthYear');
    if (monthYearEl) monthYearEl.textContent = `${ceremonyDateObj.toLocaleString('en-US', { month: 'long' }).toUpperCase()} ${cYear}`;

    // Venue & Map
    const venueNameEl = document.getElementById('venueName');
    if (venueNameEl) venueNameEl.textContent = data.venue.name;
    const venueAddressEl = document.getElementById('venueAddress');
    if (venueAddressEl) venueAddressEl.textContent = data.venue.address;
    const venueMapIframe = document.getElementById('venueMapIframe');
    if (venueMapIframe) venueMapIframe.src = data.venue.embedMapUrl;
    const venueDirectionLink = document.getElementById('venueDirectionLink');
    if (venueDirectionLink) venueDirectionLink.href = data.venue.googleMapsUrl;

    // Schedule Timeline
    const scheduleContainer = document.getElementById('scheduleList');
    if (scheduleContainer && data.schedule) {
      scheduleContainer.innerHTML = data.schedule.map(item => `
        <div style="position: relative; margin-bottom: 1.5rem;">
          <div style="position: absolute; left: -32px; top: 4px; width: 24px; height: 24px; border-radius: 50%; background-color: var(--color-primary-red); border: 3px solid #ffffff; box-shadow: 0 2px 6px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 11px;">
            ⏰
          </div>
          <div style="background-color: #ffffff; padding: 12px 16px; border-radius: 10px; border: 1px solid var(--color-envelope-border); box-shadow: var(--shadow-card);">
            <span style="font-size: 12px; font-weight: 700; color: var(--color-primary-red); letter-spacing: 1px;">
              ${item.time}
            </span>
            <div style="font-size: 16px; font-weight: 600; color: var(--color-text-dark); margin-top: 2px;">
              ${item.title}
            </div>
            ${item.description ? `<div style="font-size: 13px; color: var(--color-text-muted); margin-top: 2px;">${item.description}</div>` : ''}
          </div>
        </div>
      `).join('');
    }

    // Photo Gallery
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid && data.gallery) {
      galleryGrid.innerHTML = data.gallery.map((img, idx) => `
        <div class="gallery-card" data-index="${idx}" style="position: relative; border-radius: 12px; overflow: hidden; aspect-ratio: 4 / 5; cursor: pointer; box-shadow: var(--shadow-card); border: 2px solid var(--color-envelope-border); transition: transform 0.3s ease;">
          <img src="${img.thumbnail || img.url}" alt="${img.alt}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%); opacity: 0.8;"></div>
          ${img.caption ? `<span style="position: absolute; bottom: 8px; left: 8px; right: 8px; color: #ffffff; fontSize: 12px; font-family: var(--font-serif); font-style: italic; text-align: center;">${img.caption}</span>` : ''}
        </div>
      `).join('');

      // Attach Lightbox click events
      document.querySelectorAll('.gallery-card').forEach(card => {
        card.addEventListener('click', () => {
          const idx = parseInt(card.getAttribute('data-index'), 10);
          openLightbox(idx);
        });
      });
    }

    // Setup Calendar for Reception
    setupCalendar(reception.date, reception.calendarUrl);

    // Setup Live Countdown
    setupCountdown(reception.date, reception.time);
  }

  // 5. 3D Physical Envelope Animation Sequence
  let isEnvelopeOpen = false;

  function initEnvelopeAnimation() {
    const overlay = document.getElementById('envelopeOverlay');
    const sealBtn = document.getElementById('envelopeSealBtn');
    const hintBtn = document.getElementById('envelopeHintBtn');
    const topFlap = document.getElementById('envelopeTopFlap');
    const letter = document.getElementById('envelopeLetter');

    function openEnvelope() {
      if (isEnvelopeOpen) {
        // Fast-forward to done if clicked again
        if (overlay) overlay.classList.add('done');
        return;
      }
      isEnvelopeOpen = true;

      // Phase 1: Unseal & Audio
      if (sealBtn) sealBtn.classList.add('unsealing');
      playRomanticChords();
      fireConfetti(35, 50, 0.52);

      // Phase 2: Top Flap 180° 3D flip open
      setTimeout(() => {
        if (topFlap) topFlap.classList.add('open');
      }, 280);

      // Phase 3: Letter card glides up out of the pocket + celebration confetti
      setTimeout(() => {
        if (letter) letter.classList.add('sliding');
        fireConfetti(85, 85, 0.42);
      }, 800);

      // Phase 4: Dissolve into website
      setTimeout(() => {
        if (overlay) overlay.classList.add('fading');
      }, 2500);

      // Phase 5: Complete
      setTimeout(() => {
        if (overlay) overlay.classList.add('done');
      }, 3200);
    }

    if (sealBtn) sealBtn.addEventListener('click', (e) => { e.stopPropagation(); openEnvelope(); });
    if (hintBtn) hintBtn.addEventListener('click', (e) => { e.stopPropagation(); openEnvelope(); });
    const scene = document.getElementById('envelopeScene');
    if (scene) scene.addEventListener('click', openEnvelope);
  }

  // 6. Live Countdown Timer
  function setupCountdown(dateStr, timeStr) {
    const target = new Date(`${dateStr}T${timeStr}:00`).getTime();
    const daysEl = document.getElementById('cdDays');
    const hoursEl = document.getElementById('cdHours');
    const minsEl = document.getElementById('cdMins');
    const secsEl = document.getElementById('cdSecs');

    function update() {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
      if (minsEl) minsEl.textContent = String(m).padStart(2, '0');
      if (secsEl) secsEl.textContent = String(s).padStart(2, '0');
    }
    update();
    setInterval(update, 1000);
  }

  // 7. Dynamic Monthly Calendar with Heart Marker
  function setupCalendar(dateStr, calendarUrl) {
    const [yStr, mStr, dStr] = dateStr.split('-');
    const year = parseInt(yStr, 10);
    const monthIdx = parseInt(mStr, 10) - 1;
    const weddingDay = parseInt(dStr, 10);

    const firstDayIdx = new Date(year, monthIdx, 1).getDay();
    const daysInMonth = new Date(year, monthIdx + 1, 0).getDate();
    const monthName = new Date(year, monthIdx, 1).toLocaleString('en-US', { month: 'long' });

    const monthTitle = document.getElementById('calendarMonthTitle');
    if (monthTitle) monthTitle.textContent = `${monthName} ${year}`;

    const daysGrid = document.getElementById('calendarDaysGrid');
    if (daysGrid) {
      let html = '';
      for (let i = 0; i < firstDayIdx; i++) {
        html += '<div></div>';
      }
      for (let day = 1; day <= daysInMonth; day++) {
        const isWedding = day === weddingDay;
        html += `
          <div style="position: relative; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: ${isWedding ? '700' : '400'}; color: ${isWedding ? '#ffffff' : 'inherit'}; background-color: ${isWedding ? 'var(--color-primary-red)' : 'transparent'}; box-shadow: ${isWedding ? '0 4px 10px rgba(158, 42, 43, 0.4)' : 'none'};">
            ${isWedding ? '<span style="position: absolute; top: -5px; right: -2px; font-size: 11px;">💛</span>' : ''}
            ${day}
          </div>
        `;
      }
      daysGrid.innerHTML = html;
    }

    const addCalBtn = document.getElementById('addCalendarBtn');
    if (addCalBtn && calendarUrl) {
      addCalBtn.href = calendarUrl;
    }
  }

  // 8. Gallery Lightbox Modal
  let currentLightboxIdx = 0;

  function openLightbox(idx) {
    currentLightboxIdx = idx;
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;
    updateLightbox();
    modal.classList.add('active');
  }

  function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) modal.classList.remove('active');
  }

  function updateLightbox() {
    const imgObj = data.gallery[currentLightboxIdx];
    if (!imgObj) return;
    const imgEl = document.getElementById('lightboxImg');
    const counterEl = document.getElementById('lightboxCounter');
    const captionEl = document.getElementById('lightboxCaption');
    if (imgEl) imgEl.src = imgObj.url;
    if (counterEl) counterEl.textContent = `${currentLightboxIdx + 1} / ${data.gallery.length}`;
    if (captionEl) captionEl.textContent = imgObj.caption || '';
  }

  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
      currentLightboxIdx = (currentLightboxIdx - 1 + data.gallery.length) % data.gallery.length;
      updateLightbox();
    }
    if (e.key === 'ArrowRight') {
      currentLightboxIdx = (currentLightboxIdx + 1) % data.gallery.length;
      updateLightbox();
    }
  });

  // 9. Floating Music Player Toggle
  const musicBtn = document.getElementById('musicToggleBtn');
  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      if (isPlaying) {
        if (audioContext && audioContext.state === 'running') audioContext.suspend();
        isPlaying = false;
      } else {
        playRomanticChords();
      }
      updateMusicButton();
    });
  }

  // Attach Lightbox close & navigation
  const closeBtn = document.getElementById('lightboxCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  const prevBtn = document.getElementById('lightboxPrevBtn');
  if (prevBtn) prevBtn.addEventListener('click', () => {
    currentLightboxIdx = (currentLightboxIdx - 1 + data.gallery.length) % data.gallery.length;
    updateLightbox();
  });
  const nextBtn = document.getElementById('lightboxNextBtn');
  if (nextBtn) nextBtn.addEventListener('click', () => {
    currentLightboxIdx = (currentLightboxIdx + 1) % data.gallery.length;
    updateLightbox();
  });

  // Initialize on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      populateContent();
      initEnvelopeAnimation();
    });
  } else {
    populateContent();
    initEnvelopeAnimation();
  }
})();
