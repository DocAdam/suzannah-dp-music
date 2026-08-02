export const studio = {
  name: 'Suzannah Pugh Music Studio',
  descriptor: 'Private Piano and Violin Lessons in Springfield, Missouri',
  instructor: 'Suzannah Dolanc Pugh',
  contactEmail: 'suzulose@gmail.com',
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '',
  // Enable after adding Suzannah's Google Calendar appointment-schedule URL.
  scheduling: { enabled: false, url: '', provider: 'Google Calendar' as 'Google Calendar' | 'Calendly' },
  seo: {
    title: 'Suzannah Pugh Music Studio | Piano and Violin Lessons in Springfield, Missouri',
    description: 'Private piano and violin instruction in Springfield, Missouri from an experienced music educator and longtime Springfield Symphony Orchestra violinist.',
    canonical: 'https://example.com', // [CONFIRM: production canonical URL]
  },
  social: [] as { label: string; url: string }[], // [ADD: approved social links]
};

export const experience = [
  ['Dolanc String Quartet', 'Violinist performing for weddings, funerals, and special events.', '1997–Present'],
  ['Private Music Instructor', 'Private teaching experience since 1998; piano and violin lessons for children in grades K–12.', '1998–Present'],
  ['Springfield Symphony Orchestra', 'Violinist, currently listed in Violin II.', '2004–Present'],
  ['Play and Sing His Praises Home School Orchestra and Choirs', 'Directs four choirs ranging from elementary through high school.', '2006–Present'],
  ['Gloria Deo Academy', 'General music teacher, grades K–3.', '2007–2008'],
  ['Sparta Middle School and High School', 'Band and choir teacher.', '2008–2010'],
  ['Springfield Lutheran School', 'Previously taught violin.', '[Dates to confirm]'],
  ['Music Competition Adjudication', 'Experience serving as a music competition judge or adjudicator.', '[CONFIRM: Competition names and dates]'],
];

export const verifiedBackground = [
  'Bachelor of Music Education, Missouri State University (2005), vocal and instrumental emphasis.',
  'Master of Music, Missouri State University (2008).',
  'Graduate thesis: “Investigation into the Reasons for Music Teacher Attrition.”',
  'Published lyricist for the choral work “What Then, Will God Do with Me?”',
];

export const lessons = [
  { instrument: 'Piano', lead: 'A thoughtful foundation for students exploring keyboard skills and musical fluency.', details: [
    ['Student age range', 'Children, grades K–12.'], ['Experience levels', 'Complete beginners and continuing students.'],
    ['Lesson duration', '30 or 60 minutes.'], ['Location', 'South Springfield, Missouri (Southern Hills neighborhood). Exact address shared after acceptance.'],
    ['Areas of instruction', 'Instrument technique, music reading, rhythm, music theory, repertoire, practice habits, and performance preparation.'],
    ['Materials', 'Students purchase materials recommended by Suzannah.'], ['Performance opportunities', 'Optional recitals; audition and competition preparation available.'],
    ['Availability', 'Currently accepting new students.'], ['Tuition', '$30 for 30 minutes; $60 for 60 minutes.'],
  ] },
  { instrument: 'Violin', lead: 'Individual instruction shaped by professional performing and teaching experience.', details: [
    ['Student age range', 'Children, grades K–12.'], ['Experience levels', 'Complete beginners and continuing students.'],
    ['Lesson duration', '30 or 60 minutes.'], ['Location', 'South Springfield, Missouri (Southern Hills neighborhood). Exact address shared after acceptance.'],
    ['Areas of instruction', 'Instrument technique, music reading, rhythm, music theory, repertoire, practice habits, and performance preparation.'],
    ['Materials', 'Students purchase materials recommended by Suzannah.'], ['Performance opportunities', 'Optional recitals; audition and competition preparation available.'],
    ['Availability', 'Currently accepting new students.'], ['Tuition', '$30 for 30 minutes; $60 for 60 minutes.'],
  ] },
];

export const studioInfo = [
  ['Location', 'South Springfield, Missouri (Southern Hills neighborhood). Exact address shared after acceptance.'],
  ['Lesson format', 'Primarily in person; online lessons offered whenever practical for illness or unsafe weather.'],
  ['Teaching days', 'Wednesday and Thursday during school hours — well suited to homeschool students.'],
  ['Lesson durations', '30 or 60 minutes.'], ['Tuition', '$30 for 30 minutes; $60 for 60 minutes.'],
  ['Availability', 'Currently accepting new students.'], ['Introductory lesson', 'Available as a paid regular lesson.'],
  ['Recitals', 'Optional and encouraged, not required.'],
];

export const faqs = [
  ['What ages do you teach?', 'The studio currently serves children in grades K–12. Adults who may be a good fit are welcome to inquire about availability.'], ['Do you teach complete beginners?', 'Yes. Complete beginners are welcome for both piano and violin.'],
  ['Do students need an instrument before beginning?', 'Yes. Students need access to their own instrument before beginning lessons.'], ['How long are lessons?', 'Lessons are available in 30- or 60-minute slots.'],
  ['Where are lessons held?', 'Lessons are held in South Springfield, in the Southern Hills neighborhood. The exact address is shared after a student is accepted.'],
  ['Do you teach adults?', 'The studio is currently focused on children in grades K–12. Adults who may be a good fit are welcome to inquire about availability.'], ['Do you offer online lessons?', 'Lessons are primarily in person. Online lessons may be available when a student is ill.'],
  ['Are recitals required?', 'No. Recitals are optional and encouraged, but not required.'], ['How much practice is expected?', 'Practice is expected, with goals tailored to each student.'],
  ['What happens when a lesson must be canceled?', 'Please provide at least 24 hours’ notice to cancel or reschedule. The first late cancellation is excused; later late cancellations are charged. There are no makeup lessons; rescheduling is possible only if another slot is open.'], ['Do you prepare students for auditions or competitions?', 'Yes. Audition and competition preparation is available for both piano and violin students.'],
  ['How do I ask about openings?', 'Use the inquiry form below. Submitting an inquiry does not guarantee placement.'],
];

export const policySections = ['Enrollment', 'Tuition', 'Payment schedule', 'Cancellations', 'Makeup lessons', 'Teacher cancellations', 'Illness', 'Weather', 'Late arrival', 'Practice expectations', 'Materials', 'Recitals', 'Communication', 'Ending lessons', 'Student safety and parent presence', 'Photography and recordings'];

export const policyContent: Record<string, string> = {
  Enrollment: 'After an introductory conversation, Suzannah will confirm any available opening by email. An inquiry or introductory lesson does not guarantee placement.',
  Tuition: 'Tuition is $30 for a 30-minute lesson or $60 for a 60-minute lesson.',
  'Payment schedule': 'Lessons are paid after they occur. Payment may be made by cash, check, Venmo, PayPal, or Cash App.',
  Cancellations: 'Please provide at least 24 hours’ notice to cancel or reschedule. The first late cancellation is excused; later late cancellations are charged.',
  'Makeup lessons': 'There are no guaranteed makeup lessons. Rescheduling is possible only if another slot is open.',
  'Teacher cancellations': 'If Suzannah must cancel, there is no lesson and no payment due.',
  Illness: 'If a student is ill, an online lesson will be offered whenever practical.',
  Weather: 'During unsafe weather, an online lesson will be offered whenever practical.',
  'Late arrival': 'Lessons still end at their scheduled time.',
  'Practice expectations': 'Practice is expected, with goals tailored to each student.',
  Materials: 'Students purchase materials recommended by Suzannah.',
  Recitals: 'Recitals are optional and encouraged, but not required.',
  Communication: 'Enrolled families may communicate by email, text message, or phone call.',
  'Ending lessons': 'Please let Suzannah know as soon as practical.',
  'Student safety and parent presence': 'A parent or guardian must be reachable during a lesson but does not need to remain on site.',
  'Photography and recordings': 'Photography or recordings may be used unless a family opts out.',
};
