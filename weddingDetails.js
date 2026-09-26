/**
 * =========================================================================
 * 💍 WEDDING DETAILS (YOGESH & KARISHMA)
 * =========================================================================
 * Edit any details below to customize the invitation.
 * The countdown, calendar, headings, and map will update automatically!
 */
window.weddingDetails = {
  // 1. The Happy Couple
  couple: {
    groom: {
      firstName: 'Yogesh',
      fullName: 'Yogesh Vishwakarma',
      bio: 'Engineer, coffee lover, and the happiest groom!',
    },
    bride: {
      firstName: 'Karishma',
      fullName: 'Karishma Vishwakarma',
      bio: 'The sweetest bride!',
    },
  },

  // 2. The Families
  families: {
    groom: {
      father: 'Mr. Rajesh Vishwakarma',
      mother: 'Mrs. Sunita Vishwakarma',
      address: 'New Delhi, India',
    },
    bride: {
      father: 'Mr. Anil Vishwakarma',
      mother: 'Mrs. Kavita Vishwakarma',
      address: 'Jaipur, Rajasthan, India',
    },
  },

  // 3. Invitation Wording
  invitation: {
    recipient: 'Honored Guest',
    headline: 'We Are Getting Married!',
    message: 'With the blessings of our parents and elders, we joyfully invite you to celebrate the wedding of our beloved brother.',
    welcomeNote: 'You are cordially invited to celebrate this sacred union and bless the couple.',
    closingNote: 'Your presence and blessings would mean the world to our family.',
  },

  // 4. Main Venue & Map
  venue: {
    name: 'The Grand Palace Resort',
    address: 'Grand Trunk Road, Civil Lines, New Delhi, 110054',
    googleMapsUrl: 'https://maps.google.com/?q=The+Grand+Palace+Resort+New+Delhi',
    embedMapUrl: 'https://maps.google.com/maps?q=New+Delhi&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },

  // 5. Wedding Events (December 07, 2026)
  events: [
    {
      id: 'event-ceremony',
      title: 'Wedding Ceremony & Pheras',
      type: 'ceremony',
      date: '2026-12-07',
      formattedDate: 'Monday, December 07, 2026',
      time: '16:30',
      locationName: 'The Royal Mandap, The Grand Palace',
      address: 'Grand Trunk Road, Civil Lines, New Delhi',
      googleMapsUrl: 'https://maps.google.com/?q=The+Grand+Palace+Resort+New+Delhi',
      calendarUrl: 'https://www.google.com/calendar/render?action=TEMPLATE&text=Yogesh+%26+Karishma+Wedding+Ceremony&dates=20261207T110000Z/20261207T140000Z&details=Wedding+Ceremony+and+Pheras&location=The+Grand+Palace+Resort+New+Delhi',
    },
    {
      id: 'event-reception',
      title: 'Grand Wedding Reception & Dinner',
      type: 'reception',
      date: '2026-12-07',
      formattedDate: 'Monday, December 07, 2026',
      time: '19:30',
      locationName: 'Grand Crystal Ballroom, The Grand Palace',
      address: 'Grand Trunk Road, Civil Lines, New Delhi',
      googleMapsUrl: 'https://maps.google.com/?q=The+Grand+Palace+Resort+New+Delhi',
      calendarUrl: 'https://www.google.com/calendar/render?action=TEMPLATE&text=Yogesh+%26+Karishma+Wedding+Reception&dates=20261207T140000Z/20261207T180000Z&details=Grand+Reception+and+Dinner&location=The+Grand+Palace+Resort+New+Delhi',
    },
  ],

  // 6. Day Schedule / Timeline
  schedule: [
    { id: '1', time: '16:00', title: 'Baraat & Swagat', description: 'Welcoming the Groom & Baraat procession' },
    { id: '2', time: '17:00', title: 'Varmala & Jaimala', description: 'Exchange of floral garlands' },
    { id: '3', time: '18:30', title: 'Pheras & Wedding Rituals', description: 'Sacred wedding vows' },
    { id: '4', time: '20:00', title: 'Gala Dinner & Feast', description: 'Royal banquet dinner' },
    { id: '5', time: '22:30', title: 'Doli & Vidai', description: 'Blessings and farewell' },
  ],

  // 7. Photo Gallery
  gallery: [
    {
      id: 'photo-1',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop',
      caption: 'Pre-wedding photoshoot',
      alt: 'Couple portrait',
    },
    {
      id: 'photo-2',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop',
      caption: 'Shared smiles and endless love',
      alt: 'Happy couple laughing',
    },
    {
      id: 'photo-3',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400&auto=format&fit=crop',
      caption: 'A dance under the stars',
      alt: 'Romantic dance',
    },
    {
      id: 'photo-4',
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=400&auto=format&fit=crop',
      caption: 'Forever begins here',
      alt: 'Engagement rings',
    },
  ],

  // 8. Background Music
  music: {
    title: 'Acoustic Wedding Melody',
    autoplay: true,
  },
};
