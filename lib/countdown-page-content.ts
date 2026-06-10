export interface CountdownPageConfig {
  slug: string
  title: string
  description: string
  keywords: string
  heroTitle: string
  heroDescription: string
  schemaName: string
  schemaDescription: string
  targetDateLabel: string
  introTitle: string
  introParagraphs: [string, string]
  faqs: { question: string; answer: string }[]
  tips: string[]
}

const sharedFaqs = (eventName: string, dateLabel: string) => [
  {
    question: 'How does this countdown work?',
    answer: `The timer counts down to ${dateLabel} in your browser's local timezone. It shows days, hours, minutes, and seconds remaining and updates automatically while the page is open.`,
  },
  {
    question: 'What timezone is used?',
    answer: 'The countdown uses your device\'s local timezone and clock. If you share a screen with someone in another region, your remaining time may differ from theirs.',
  },
  {
    question: `When is ${eventName} this year?`,
    answer: `This page targets ${dateLabel}. Holiday dates can vary by calendar rules (for example, Easter or Thanksgiving)—verify the date if you are planning travel or events.`,
  },
  {
    question: 'Does the timer update in real time?',
    answer: 'Yes. While the tab is open, the display refreshes every second. Reload the page if your device sleeps for a long time and you want to resync.',
  },
  {
    question: 'Can I use this for event planning?',
    answer: 'Yes. Use the countdown for general planning and excitement. Confirm official event times, store hours, or broadcast schedules separately when precision matters.',
  },
]

export const christmasCountdown: CountdownPageConfig = {
  slug: '/days-until-christmas',
  title: 'Days Until Christmas',
  description: 'Live countdown to Christmas Day—days, hours, minutes, and seconds until December 25 in your local timezone.',
  keywords: 'christmas countdown, days until christmas, christmas timer, holiday countdown',
  heroTitle: 'Days Until Christmas',
  heroDescription: 'See exactly how long until Christmas Day. Live countdown with days, hours, minutes, and seconds—based on your local timezone.',
  schemaName: 'Christmas Countdown Timer',
  schemaDescription: 'Count down to Christmas Day with days, hours, minutes, and seconds.',
  targetDateLabel: 'December 25, 2026 at midnight (local time)',
  introTitle: 'Christmas countdown',
  introParagraphs: [
    'Whether you are planning gifts, travel, or time off, a clear countdown helps you see how many days remain until December 25.',
    'This timer targets Christmas Day 2026 in your browser\'s timezone. It is for general planning—not official store hours or broadcast schedules.',
  ],
  faqs: sharedFaqs('Christmas', 'December 25, 2026'),
  tips: [
    'Bookmark this page to check the countdown during the holiday season',
    'Remember that Christmas Eve and Christmas Day plans may follow local customs',
    'Store hours and shipping cutoffs vary—confirm with retailers directly',
    'See our other holiday timers on the countdowns hub',
  ],
}

export const newYearCountdown: CountdownPageConfig = {
  slug: '/days-until-new-year',
  title: 'Days Until New Year',
  description: 'Count down to January 1—days, hours, minutes, and seconds until the New Year in your local timezone.',
  keywords: 'new year countdown, days until new year, new years eve countdown, january 1 timer',
  heroTitle: 'Days Until New Year',
  heroDescription: 'Track time remaining until January 1. Live countdown with days, hours, minutes, and seconds in your local timezone.',
  schemaName: 'New Year Countdown Timer',
  schemaDescription: 'Count down to January 1 with days, hours, minutes, and seconds.',
  targetDateLabel: 'January 1, 2027 at midnight (local time)',
  introTitle: 'New Year countdown',
  introParagraphs: [
    'Use this timer to see how long until the calendar rolls over to January 1—helpful for party planning, resolutions, or year-end deadlines.',
    'The target is midnight on January 1, 2027 in your local timezone. Fireworks and events in your city may start earlier on New Year\'s Eve.',
  ],
  faqs: sharedFaqs('New Year\'s Day', 'January 1, 2027'),
  tips: [
    'New Year\'s Eve celebrations often start before midnight—plan around local event times',
    'Time zones mean the New Year arrives at different UTC offsets worldwide',
    'Use the countdown for motivation, not as a substitute for event tickets or reservations',
    'Browse more timers on our countdowns page',
  ],
}

export const halloweenCountdown: CountdownPageConfig = {
  slug: '/days-until-halloween',
  title: 'Days Until Halloween',
  description: 'Count down to October 31—days, hours, minutes, and seconds until Halloween in your local timezone.',
  keywords: 'halloween countdown, days until halloween, october 31 countdown, spooky countdown',
  heroTitle: 'Days Until Halloween',
  heroDescription: 'See how long until October 31. Live Halloween countdown with days, hours, minutes, and seconds.',
  schemaName: 'Halloween Countdown Timer',
  schemaDescription: 'Count down to Halloween (October 31) with days, hours, minutes, and seconds.',
  targetDateLabel: 'October 31, 2026 at midnight (local time)',
  introTitle: 'Halloween countdown',
  introParagraphs: [
    'Planning costumes, decorations, or trick-or-treat routes? A countdown shows how many days remain until October 31.',
    'This page counts down to Halloween 2026 at local midnight. Community events and haunted attractions may run on nearby dates.',
  ],
  faqs: sharedFaqs('Halloween', 'October 31, 2026'),
  tips: [
    'Order costumes early if you need specific sizes or popular characters',
    'Check local trick-or-treat times—they are not always on October 31 evening',
    'Weather can shift outdoor plans—have a backup for rain or cold',
    'Explore more holiday countdowns on Calcuzy',
  ],
}

export const thanksgivingCountdown: CountdownPageConfig = {
  slug: '/thanksgiving-countdown',
  title: 'Thanksgiving Countdown',
  description: 'Count down to Thanksgiving—days, hours, minutes, and seconds until the fourth Thursday of November in your timezone.',
  keywords: 'thanksgiving countdown, days until thanksgiving, november holiday timer',
  heroTitle: 'Thanksgiving Countdown',
  heroDescription: 'Live countdown to Thanksgiving 2026 (November 26). Days, hours, minutes, and seconds in your local timezone.',
  schemaName: 'Thanksgiving Countdown Timer',
  schemaDescription: 'Count down to Thanksgiving 2026 with days, hours, minutes, and seconds.',
  targetDateLabel: 'November 26, 2026 at midnight (local time)',
  introTitle: 'Thanksgiving countdown',
  introParagraphs: [
    'Thanksgiving in the U.S. falls on the fourth Thursday of November. This timer counts down to November 26, 2026.',
    'Use it for meal prep, travel planning, or time off requests. Confirm flight and grocery pickup times with providers directly.',
  ],
  faqs: sharedFaqs('Thanksgiving (U.S.)', 'November 26, 2026'),
  tips: [
    'U.S. Thanksgiving is the fourth Thursday in November—dates change each year',
    'Grocery and travel demand spikes the week before—plan ahead',
    'If you celebrate on a different day with family, adjust your personal calendar accordingly',
    'See our Christmas and New Year countdowns for the rest of the holiday season',
  ],
}

export const easterCountdown: CountdownPageConfig = {
  slug: '/easter-countdown',
  title: 'Easter Countdown',
  description: 'Count down to Easter Sunday—days, hours, minutes, and seconds until April 5, 2026 in your local timezone.',
  keywords: 'easter countdown, days until easter, easter sunday timer',
  heroTitle: 'Easter Countdown',
  heroDescription: 'Live countdown to Easter Sunday 2026 (April 5). Days, hours, minutes, and seconds in your local timezone.',
  schemaName: 'Easter Countdown Timer',
  schemaDescription: 'Count down to Easter Sunday 2026 with days, hours, minutes, and seconds.',
  targetDateLabel: 'April 5, 2026 at midnight (local time)',
  introTitle: 'Easter countdown',
  introParagraphs: [
    'Easter Sunday moves each year based on the liturgical calendar. This timer targets April 5, 2026.',
    'Use the countdown for spring events, church services, or family gatherings. Verify dates with your local calendar if you follow a different tradition.',
  ],
  faqs: sharedFaqs('Easter Sunday', 'April 5, 2026'),
  tips: [
    'Easter dates differ between Western and Orthodox calendars in some years',
    'Spring weather varies—have indoor backup plans for outdoor egg hunts',
    'Confirm service times with your local community',
    'Browse other seasonal countdowns on our hub page',
  ],
}

export const blackFridayCountdown: CountdownPageConfig = {
  slug: '/black-friday-countdown',
  title: 'Black Friday Countdown',
  description: 'Count down to Black Friday 2026—days, hours, minutes, and seconds until November 27 in your local timezone.',
  keywords: 'black friday countdown, days until black friday, black friday 2026 timer',
  heroTitle: 'Black Friday Countdown',
  heroDescription: 'See how long until Black Friday 2026 (November 27). Live countdown with days, hours, minutes, and seconds.',
  schemaName: 'Black Friday Countdown Timer',
  schemaDescription: 'Count down to Black Friday 2026 with days, hours, minutes, and seconds.',
  targetDateLabel: 'November 27, 2026 at midnight (local time)',
  introTitle: 'Black Friday countdown',
  introParagraphs: [
    'Black Friday is the day after U.S. Thanksgiving, often associated with retail sales. This timer counts down to November 27, 2026.',
    'Deals and store hours vary by retailer and region. Use the countdown for general timing—not as a price or availability guarantee.',
  ],
  faqs: [
    ...sharedFaqs('Black Friday', 'November 27, 2026'),
    {
      question: 'Does this countdown show sale prices?',
      answer: 'No. It only shows time remaining until the date. Compare prices and read retailer policies before you buy.',
    },
  ],
  tips: [
    'Make a shopping list and budget before sale season',
    'Compare prices over time—a “deal” should beat recent regular pricing',
    'Online and in-store hours differ—check each retailer',
    'Thanksgiving is the day before Black Friday in the U.S.—see our Thanksgiving countdown too',
  ],
}
