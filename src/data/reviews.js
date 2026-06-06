import moment from 'moment'

// Add each review as an object in this array.
// Fields: author (string), rating (1-5), text (string), date (YYYY-MM-DD HH:mm:ss string), profilePhotoUrl (string or null)
const reviewData = [
  {
    author: 'Dylan Darnell',
    rating: 5,
    text: 'Great service, punctual and communicative. Highly recommend.',
    date: '2026-04-24 12:00:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Ashley Bailey',
    rating: 5,
    text: 'Fantastic, quick and efficient service!!! Sam is fantastic! Very affordable!',
    date: '2026-04-25 18:15:00',
    profilePhotoUrl: null,
  },
  {
    author: 'ian l',
    rating: 5,
    text: "This man knows what he's doing. Couldn't have asked for a more professional or fair tradesman",
    date: '2026-04-27 09:30:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Tina Evans',
    rating: 5,
    text: "They went above and beyond truly happy with the work I highly recommend this company!\nThank you!\nJohn Carroll",
    date: '2026-05-01 09:30:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Renee Knight',
    rating: 5,
    text: "Professional, informative, easy communication! Did a great job! Call Sam for all your septic service needs!",
    date: '2026-05-21 12:00:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Samantha Reed',
    rating: 5,
    text: 'Very quick to respond, and excellent service! These guys were very professional and efficient!',
    date: '2026-05-26 12:00:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Greg Troxwell',
    rating: 5,
    text: 'Sam and crew were totally professional, did what they said they would do, were priced competitively and were here to pump the day after I called. Highly recommend this company.',
    date: '2026-05-27 17:00:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Tim Farmer',
    rating: 5,
    text: 'Sam did an outstanding job on what turned out to be a very large undertaking. Located our septic tank which is buried 5 feet under a driveway which wasn’t easy, excavated, got it pumped, even made some minor repairs and then backfilled. Communication was great, he’s very prompt, pricing was competitive, shows up when he says he will and he works extremely hard. He stuck with the job through a few pivots until it was done working well into the dark to finish up. Don’t hesitate to give him a call.',
    date: '2026-06-02 12:00:00',
    profilePhotoUrl: null
  }
]

export const reviews = reviewData.map((r) => ({
  ...r,
  relativeTime: moment(r.date).fromNow(),
}))
