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
  },
  {
    author: 'Skyler Lintecum',
    rating: 5,
    text: 'They came and done an amazing job on my septic tank I highly recommend them they were very friendly, professional, and reasonably priced.',
    date: '2026-06-17 12:00:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Tai Meade',
    rating: 5,
    text: 'Amazing work!! Water wasn\'t working at all, and they managed to get it working as well as all the new necessary parts! Water runs great now! Highly recommend for any septic/plumbing needs!',
    date: '2026-06-18 16:55:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Robert Parolisi',
    rating: 5,
    text: 'Came when he said, communicated well, and did a fast and great job at a great price. Found, and pumped tank in hours',
    date: '2026-06-22 12:00:00',
    profilePhotoUrl: null,
  },
  {
    author: 'BladeArson',
    rating: 5,
    text: 'Very good people. Great work. You can tell the pride in their work',
    date: '2026-07-01 12:00:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Robert Lloyd',
    rating: 2,
    text: 'We wanted to use this company however after over a month of calls and excuses from them we decided to go elsewhere. Had two separate days that they were supposed to come out and they didn’t show. We called and rescheduled again. Communication is lacking. Cannot recommend this company.',
    date: '2026-07-23 12:00:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Brittany Hill',
    rating: 5,
    text: 'Super friendly and reasonably priced! Explained everything well, and got the job done quickly! Would definitely recommend to anyone!',
    date: '2026-08-06 12:00:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Barbara Hiatt',
    rating: 5,
    text: 'Barbara Hiatt',
    date: '2026-08-21 12:00:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Barry Alderman',
    rating: 5,
    text: 'Sam went out of his way to pump out my septic tank, on a Saturday afternoon. Very friendly and knowledgeable. I highly recommend using this company. Thank you!!!\nSam came back out this Sunday morning to fix a couple of spots where the septic pipe had broken. I had previously had a well known big company come out to give me an estimate. Sam got everything fixed perfectly, and saved us over 10 thousand dollars!!! Thank you so much Sam!!!',
    date: '2026-08-21 13:00:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Sarah Draper',
    rating: 5,
    text: 'We had these guys come do our septic removal they was very nice compassionate did what they said they would, was on time, they work well under pressure...so we discovered, and also came back the next day and worked in the rain made sure the job was done and finished we was satisfied give these boys a chance they are very fair on there prices and helped us in a very hard time thank you guys again for holding your word and being there when we really needed good septic service....',
    date: '2026-08-22 12:00:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Mike Bowers',
    rating: 5,
    text: 'I would highly recommend Sam for all your septic service needs. He is a genuine and honest guy who works hard to ensure everything is 100% at the end of the job.',
    date: '2026-08-26 12:00:00',
    profilePhotoUrl: null,
  },
  {
    author: 'Shelley',
    rating: 5,
    text: 'We had septic isssues over the weekend, uncertain when we might be able to get the issue fixed. We called Sam, and he came out 30 minutes later to assess the situation; and he repaired the problem the following day.\n\nWe were very impressed with his expertise, professionalism, and reasonable price. We would not hesitate to use him again!',
    date: '2026-08-30 12:00:00',
    profilePhotoUrl: null,
  }
]

export const reviews = reviewData.map((r) => ({
  ...r,
  relativeTime: moment(r.date).fromNow(),
}))
