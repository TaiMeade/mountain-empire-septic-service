import moment from 'moment'

// Add each review as an object in this array.
// Fields: author (string), rating (1-5), text (string), date (YYYY-MM-DD string), profilePhotoUrl (string or null)
const reviewData = [
  {
    author: 'Dylan Darnell',
    rating: 5,
    text: 'Great service, punctual and communicative. Highly recommend.',
    date: '2026-04-24',
    profilePhotoUrl: null,
  },
  {
    author: 'Ashley Bailey',
    rating: 5,
    text: 'Fantastic, quick and efficient service!!! Sam is fantastic! Very affordable!',
    date: '2026-04-22',
    profilePhotoUrl: null,
  }
]

export const reviews = reviewData.map((r) => ({
  ...r,
  relativeTime: moment(r.date).fromNow(),
}))
