export const studio = {
  name: 'Suzannah Dolanc Pugh Music Studio',
  descriptor: 'Private Piano and Violin Lessons in Springfield, Missouri',
  instructor: 'Suzannah Dolanc Pugh',
  contactEmail: 'suzulose@gmail.com',
  // Google Apps Script web-app URL. Configure this in the deployment environment.
  intakeEndpoint: import.meta.env.PUBLIC_INQUIRY_ENDPOINT || '',
  seo: {
    title: 'Suzannah Dolanc Pugh Music Studio | Piano and Violin Lessons in Springfield, Missouri',
    description: 'Private piano and violin instruction in Springfield, Missouri from an experienced music educator and longtime Springfield Symphony Orchestra violinist.',
    canonical: 'https://suzmusic.com/',
  },
};

export type AvailabilityStatus = 'open' | 'filled';

// Keep the current published availability here. Add only verified recurring times.
// Change a slot to `filled` after enrollment; the website and inquiry form update together.
export const availabilitySlots: { day: string; time: string; status: AvailabilityStatus }[] = [
  { day: 'Tuesday', time: '9:00 AM', status: 'open' },
  { day: 'Tuesday', time: '9:30 AM', status: 'open' },
  { day: 'Tuesday', time: '10:00 AM', status: 'open' },
  { day: 'Tuesday', time: '10:30 AM', status: 'open' },
  { day: 'Tuesday', time: '11:00 AM', status: 'open' },
  { day: 'Tuesday', time: '11:30 AM', status: 'open' },
  { day: 'Thursday', time: '10:00 AM', status: 'open' },
  { day: 'Thursday', time: '10:30 AM', status: 'open' },
  { day: 'Thursday', time: '11:00 AM', status: 'open' },
  { day: 'Thursday', time: '11:30 AM', status: 'open' },
  { day: 'Thursday', time: '12:00 PM', status: 'open' },
  { day: 'Thursday', time: '12:30 PM', status: 'open' },
];

export const lessonOfferings = [
  ['Piano', 'Private 30- or 60-minute lessons for beginning and continuing students in grades K–12.'],
  ['Violin', 'Private 30- or 60-minute lessons for beginning and continuing students in grades K–12.'],
  ['Voice', 'Limited instruction by inquiry. Please email to discuss fit and availability.'],
] as const;

export const faqs = [
  ['What ages do you teach?', 'The studio serves children in grades K–12.'],
  ['Do you teach complete beginners?', 'Yes. Complete beginners are welcome for both piano and violin.'],
  ['Do students need an instrument before beginning?', 'Yes. Students need access to their own instrument before beginning lessons.'],
  ['How long are lessons?', 'Lessons are available in 30- or 60-minute slots.'],
  ['Where are lessons held?', 'Lessons are held in South Springfield, in the Southern Hills neighborhood. The exact address is shared after a student is accepted.'],
  ['Do you offer online lessons?', 'Lessons are primarily in person. Online lessons may be available when a student is ill.'],
  ['Are recitals required?', 'No. Recitals are optional and encouraged, but not required.'],
  ['How much practice is expected?', 'Practice is expected, with goals tailored to each student.'],
  ['What happens when a lesson must be canceled?', 'Please provide at least 24 hours’ notice to cancel or reschedule. The first late cancellation is excused; later late cancellations are charged. There are no makeup lessons; rescheduling is possible only if another slot is open.'],
  ['Do you prepare students for auditions or festivals?', 'Yes. Audition and festival preparation is available for both piano and violin students.'],
  ['How do I ask about openings?', 'Use the inquiry form below. Submitting an inquiry does not guarantee placement.'],
] as const;
