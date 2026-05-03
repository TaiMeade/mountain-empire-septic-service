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
  }
]

export const reviews = reviewData.map((r) => ({
  ...r,
  relativeTime: moment(r.date).fromNow(),
}))
