> Archived original project brief. The current implementation is a single-page lesson-inquiry site at `/`, with `/privacy` retained. See `README.md` for the current GitHub Pages and Google Sheet intake setup.

Build a simple, polished portfolio and lesson-inquiry website for a private music teacher.

PROJECT PURPOSE

Create a small website for Suzannah Dolanc Pugh, an experienced music educator and performing violinist in Springfield, Missouri.

The website should help prospective students and parents:

* Understand Suzannah’s professional background.
* Learn about private piano and violin lessons.
* Determine whether the studio may be a good fit.
* Review basic lesson and studio information.
* Submit a lesson inquiry.
* Optionally request or schedule an introductory conversation.

The site must remain simple, credible, fast, accessible, easy to maintain, and inexpensive or free to host.

WORKING STUDIO NAME

Use this provisional name:

Suzannah Pugh Music Studio

Use this descriptor:

Private Piano and Violin Lessons in Springfield, Missouri

Keep the studio name centralized in a configuration or content file so it can be changed easily later.

KNOWN PROFESSIONAL INFORMATION

Suzannah:

* Has performed with the Springfield Symphony Orchestra for more than 20 years.
* Teaches private music lessons.
* Teaches piano.
* Teaches violin.
* Teaches choir classes at Play and Sing His Praises homeschool co-op, abbreviated PSHP.
* Previously taught violin at Springfield Lutheran School.
* Has worked as a music competition judge or adjudicator.

Do not invent exact dates, degrees, job titles, certifications, student outcomes, pricing, awards, ensemble chairs, competition names, or other factual claims.

Use clearly marked mock content or placeholders for missing information.

Represent missing content with an obvious format such as:

[CONFIRM: Exact orchestra title]
[ADD: Education and musical training]
[CONFIRM: Student age range]
[ADD: Lesson pricing]
[CONFIRM: Current lesson availability]

Do not allow placeholder text to look like a verified fact.

TECHNICAL APPROACH

Use a lightweight static-site architecture.

Preferred implementation:

* Astro
* TypeScript
* Plain CSS or CSS modules
* Minimal client-side JavaScript
* Static output
* GitHub Pages or Cloudflare Pages compatible

A simple alternative such as Eleventy is acceptable if there is a material reason, but do not use React, Next.js, a database, authentication, a CMS, or a component library unless clearly justified.

Do not add unnecessary dependencies.

Store editable content in one of these:

* A central TypeScript data file
* JSON
* YAML
* Markdown content files

The owner should be able to update biography text, policies, FAQs, contact information, and lesson details without editing layout components.

SITE STRUCTURE

Build the following routes:

1. Home page: `/`
2. Studio policies page: `/studio-policies`
3. Privacy page: `/privacy`

The home page should be a focused single-page marketing and informational site with anchored sections.

HOME PAGE SECTIONS

1. Header and navigation
2. Hero
3. About Suzannah
4. Professional experience
5. Piano lessons
6. Violin lessons
7. Teaching approach
8. Studio information
9. Frequently asked questions
10. Lesson inquiry
11. Footer

HEADER

Include:

* Studio name
* Navigation links to major sections
* Primary action: “Ask About Lessons”

On small screens, use a simple accessible navigation treatment. Avoid a complex animated menu.

HERO

Use provisional copy similar to:

Private Piano and Violin Lessons in Springfield, Missouri

Individual instruction grounded in professional performance, music education, and more than 20 years of orchestral experience.

Primary action:

Ask About Lessons

Secondary action:

Learn About the Studio

Do not use aggressive sales language, urgency messages, discounts, or claims such as “Springfield’s best music teacher.”

ABOUT SECTION

Explain that Suzannah is a music educator, private instructor, and performing violinist.

Mention:

* More than 20 years with the Springfield Symphony Orchestra.
* Private piano and violin instruction.
* Choir teaching at PSHP.
* Previous violin teaching at Springfield Lutheran School.
* Music competition judging or adjudication.

Add placeholders for:

* Degree and institution.
* Primary musical training.
* Exact orchestra title.
* Years of private teaching.
* Professional memberships.
* Teaching philosophy.

PROFESSIONAL EXPERIENCE SECTION

Present the experience in a restrained timeline or card layout.

Include provisional entries for:

* Springfield Symphony Orchestra
* Private Piano and Violin Instructor
* Play and Sing His Praises Homeschool Co-op
* Springfield Lutheran School
* Music Competition Adjudication

Do not fabricate dates. Show “[Dates to confirm]” where needed.

LESSONS SECTION

Create separate sections or cards for piano and violin.

For each instrument, include editable fields for:

* Student age range
* Accepted experience levels
* Lesson duration
* Lesson location
* Areas of instruction
* Practice expectations
* Materials
* Performance opportunities
* Availability
* Tuition

Use mock information only when necessary and label it visibly as provisional.

Example provisional teaching topics:

* Instrument technique
* Music reading
* Rhythm
* Music theory
* Repertoire
* Practice habits
* Performance preparation

Do not imply that every topic is offered until confirmed.

TEACHING APPROACH

Use restrained provisional language emphasizing:

* Strong fundamentals
* Clear instruction
* Age-appropriate development
* Healthy technique
* Musical understanding
* Consistent practice habits
* Student-specific goals

Do not use inflated claims about transformation, guaranteed achievement, elite instruction, or accelerated progress.

STUDIO INFORMATION

Create an editable information grid for:

* General location: Springfield, Missouri
* Exact address: never display publicly
* In-person lesson availability
* Online lesson availability
* Teaching days
* Lesson durations
* Tuition
* Payment methods
* Trial lesson policy
* Cancellation policy
* Makeup policy
* Recital expectations
* Required materials

Every unknown item must be marked for confirmation.

FAQ

Include expandable but accessible FAQ items.

Initial questions:

* What ages do you teach?
* Do you teach complete beginners?
* Do students need an instrument before beginning?
* How long are lessons?
* Where are lessons held?
* Do you teach adults?
* Do you offer online lessons?
* Are recitals required?
* How much practice is expected?
* What happens when a lesson must be canceled?
* Do you prepare students for auditions or competitions?
* How do I ask about openings?

Use placeholders in answers where policies are unknown.

INQUIRY FORM

Create a clear lesson-inquiry form.

Fields:

* Parent or student name
* Email address
* Phone number, optional
* Student age
* Instrument: piano, violin, or unsure
* Experience level
* General weekly availability
* Musical goals or additional information
* Consent checkbox acknowledging that submitting the form does not guarantee placement

Include:

* Accessible labels
* Inline validation
* A honeypot field
* Success and error states
* A configurable form endpoint

Prepare the form for Formspree or another static-form endpoint, but keep the endpoint in an environment variable or configuration file.

Do not collect sensitive student records, medical information, school records, or unnecessary personal information.

SCHEDULING

Add an optional scheduling block that can be enabled through configuration.

The default state should be disabled.

When enabled, support either:

* A linked Google Calendar appointment booking page
* An embedded Calendly booking page

Use scheduling only for introductory calls, consultations, or trial-lesson discussions unless explicitly configured otherwise.

Do not expose all recurring weekly lesson availability or let new users automatically claim permanent lesson slots.

STUDIO POLICIES PAGE

Create a readable policies page with sections for:

* Enrollment
* Tuition
* Payment schedule
* Cancellations
* Makeup lessons
* Teacher cancellations
* Illness
* Weather
* Late arrival
* Practice expectations
* Materials
* Recitals
* Communication
* Ending lessons
* Student safety and parent presence
* Photography and recordings

All policy content must be provisional and clearly marked until approved.

PRIVACY PAGE

Create a basic privacy page explaining:

* What information the inquiry form collects
* Why it is collected
* How inquiries are delivered
* That information is not sold
* That third-party form or scheduling providers may process submitted data
* How someone can request deletion of an inquiry

Label the page as a starter template requiring owner review. Do not describe it as legal advice or a guaranteed-compliant policy.

DESIGN DIRECTION

The visual design should feel:

* Professional
* Calm
* Musical
* Welcoming
* Organized
* Mature
* Suitable for both parents and adult students

Avoid:

* Cartoon music notes
* Childish primary-color palettes
* Excessive gradients
* Animated musical symbols
* Script fonts for body text
* Black-and-gold luxury branding
* Generic corporate SaaS layouts
* Overly feminine ornamental styling
* Stock photos of children pretending to play instruments
* Auto-playing audio or video
* Background music

Use:

* Strong typography
* Generous spacing
* A restrained neutral palette
* One subtle accent color
* Editorial-style section hierarchy
* High-quality instrument or studio photography placeholders
* Subtle borders and minimal shadows

Do not use remote stock-image URLs in the final implementation.

Create an `/public/images/placeholders/` directory and add a README listing the photographs that should later be supplied:

* Current professional portrait
* Suzannah with violin
* Piano or teaching-space detail
* Violin or music-stand detail
* Optional approved performance photograph

Use styled local placeholder blocks until real images are provided.

ACCESSIBILITY

Target WCAG 2.2 AA practices.

Include:

* Semantic HTML
* Logical heading hierarchy
* Keyboard-accessible navigation
* Visible focus states
* Sufficient color contrast
* Accessible form errors
* Reduced-motion support
* Descriptive link text
* Useful image alt text
* No content that depends solely on color
* Responsive text and layout
* Minimum practical touch-target sizes

SEO

Add editable metadata for:

* Page title
* Meta description
* Canonical URL
* Open Graph title
* Open Graph description
* Open Graph image
* LocalBusiness or MusicGroup-related structured data only where accurate

Use provisional metadata:

Title:
Suzannah Pugh Music Studio | Piano and Violin Lessons in Springfield, Missouri

Description:
Private piano and violin instruction in Springfield, Missouri from an experienced music educator and longtime Springfield Symphony Orchestra violinist.

Do not publish a home address in metadata or structured data.

Add sensible local-search language without keyword stuffing.

PERFORMANCE

Target:

* Static rendering
* Minimal JavaScript
* Optimized local images
* Responsive images
* No tracking scripts by default
* No layout shift from media
* Lighthouse scores near 95 or higher where reasonably achievable

CONTENT MANAGEMENT

Create a clearly documented content structure.

At minimum, centralize:

* Studio name
* Instructor name
* Tagline
* Biography
* Experience
* Lesson information
* Policies
* FAQs
* Contact email
* Form endpoint
* Scheduling link
* Social links
* SEO metadata

Add comments explaining which fields still require confirmation.

TESTING AND VALIDATION

Add:

* Type checking
* Production build validation
* Basic automated tests for important content rendering
* Link validation where practical
* Accessibility validation using an appropriate lightweight tool
* Formatting and linting

Validate:

* All routes build
* Navigation anchors work
* Forms have labels
* Unknown facts remain visibly marked
* The home address is not exposed
* The site works at mobile widths
* The site works with JavaScript disabled except for optional enhancements

DOCUMENTATION

Create a detailed README covering:

* Project purpose
* Technology choices
* Local setup
* Development commands
* Build command
* GitHub Pages deployment
* Cloudflare Pages deployment
* How to update content
* How to replace images
* How to connect Formspree
* How to connect Google Calendar or Calendly
* How to configure a custom domain
* How to review all remaining placeholders
* How to run tests and validation

Create a `CONTENT-CHECKLIST.md` file listing every fact, policy, image, link, and configuration value that must be confirmed before launch.

DELIVERABLES

Complete the implementation, then provide:

1. A concise summary of the architecture.
2. The complete file tree.
3. A list of commands run.
4. Build and test results.
5. A list of all remaining placeholders.
6. A list of decisions requiring Suzannah’s approval.
7. Exact local preview instructions.
8. Exact deployment instructions.

Do not deploy, purchase a domain, create external accounts, submit forms, or publish the website without explicit authorization.
