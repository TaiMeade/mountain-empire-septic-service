import moment from 'moment'

// Add each review as an object in this array.
// Fields: author (string), rating (1-5), text (string), date (YYYY-MM-DD HH:mm:ss string), profilePhotoUrl (string or null)
const reviewData = [
  {
    author: 'Dylan Darnell',
    rating: 5,
    text: 'Great service, punctual and communicative. Highly recommend.',
    date: '2026-04-24 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJk5rBfuwj03SNdpoh1hWzBiqF_QLAEcNyafjodoqUdh2TELQ=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Ashley Bailey',
    rating: 5,
    text: 'Fantastic, quick and efficient service!!! Sam is fantastic! Very affordable!',
    date: '2026-04-25 18:15:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocIzVOYgmpGPVxgKwAxznGgKiQtccjtR6et7eW_OiWzdS55hXA=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'ian l',
    rating: 5,
    text: "This man knows what he's doing. Couldn't have asked for a more professional or fair tradesman",
    date: '2026-04-27 09:30:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUMC7zNAzsY6_tPbim6z9kLgMAtPBcAJY4YpkvCak-tR_qejjH8=w72-h72-p-rp-mo-ba12-br100',
  },
  {
    author: 'Tina Evans',
    rating: 5,
    text: "They went above and beyond truly happy with the work I highly recommend this company!\nThank you!\nJohn Carroll",
    date: '2026-05-01 09:30:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocI6OL_TOvzFxMgjS_HN9wME4IaZMQUTm7FPAYYSgvR0xZeaiQ=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Renee Knight',
    rating: 5,
    text: "Professional, informative, easy communication! Did a great job! Call Sam for all your septic service needs!",
    date: '2026-05-21 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWX-JpwCKnMLY8incNWT66XcwDjJzVoD0vxAPmMiSlePJKjeDkqlA=w72-h72-p-rp-mo-ba12-br100',
  },
  {
    author: 'Samantha Reed',
    rating: 5,
    text: 'Very quick to respond, and excellent service! These guys were very professional and efficient!',
    date: '2026-05-26 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocL5U35BnXamtiGh21hQaauEuOc66cAkcaNX7Iz1rSb_gxsKQg=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Greg Troxwell',
    rating: 5,
    text: 'Sam and crew were totally professional, did what they said they would do, were priced competitively and were here to pump the day after I called. Highly recommend this company.',
    date: '2026-05-27 17:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocISfnLtqOek1RMtQ6dCpxsn_9dlSA5MPKW5ylr_3yWewB4pEQ=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Tim Farmer',
    rating: 5,
    text: 'Sam did an outstanding job on what turned out to be a very large undertaking. Located our septic tank which is buried 5 feet under a driveway which wasn’t easy, excavated, got it pumped, even made some minor repairs and then backfilled. Communication was great, he’s very prompt, pricing was competitive, shows up when he says he will and he works extremely hard. He stuck with the job through a few pivots until it was done working well into the dark to finish up. Don’t hesitate to give him a call.',
    date: '2026-06-02 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUF0KcLa_3jEX7CZ787FlgR3eoCMTJ-eHQyfCGsSbAEbfr0uOHY=w72-h72-p-rp-mo-br100'
  },
  {
    author: 'Skyler Lintecum',
    rating: 5,
    text: 'They came and done an amazing job on my septic tank I highly recommend them they were very friendly, professional, and reasonably priced.',
    date: '2026-06-17 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjVe4oOx9rZIWCRNsXUb1kKTbbjh1jVZPPOqpEC3nc8h7AHEN02G=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Tai Meade',
    rating: 5,
    text: 'Amazing work!! Water wasn\'t working at all, and they managed to get it working as well as all the new necessary parts! Water runs great now! Highly recommend for any septic/plumbing needs!',
    date: '2026-06-18 16:55:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUAQTxPQf5zjzRM45XGZXg1dxKB9eUzSFaXclbu6gCzdlaYNema=w56-h56-p-rp-mo-br100',
  },
  {
    author: 'Robert Parolisi',
    rating: 5,
    text: 'Came when he said, communicated well, and did a fast and great job at a great price. Found, and pumped tank in hours',
    date: '2026-06-22 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocIN5-_nmUKrL7acCtjWCixFdtpC5e6Rm_r_EjDabPRH1L5jWg=w72-h72-p-rp-mo-ba12-br100',
  },
  {
    author: 'BladeArson',
    rating: 5,
    text: 'Very good people. Great work. You can tell the pride in their work',
    date: '2026-07-01 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocIxDeNmLsdvr2pHVD2I_GjcbQpyqoSmJZoIaOeXqtkP9P9rdg=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Robert Lloyd',
    rating: 2,
    text: 'We wanted to use this company however after over a month of calls and excuses from them we decided to go elsewhere. Had two separate days that they were supposed to come out and they didn’t show. We called and rescheduled again. Communication is lacking. Cannot recommend this company.',
    date: '2026-07-23 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocKNa_tmgUgoqjD5p7hgkN2ZLz3bNzTeOaZ-KsCleVUvYKemYQ=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Brittany Hill',
    rating: 5,
    text: 'Super friendly and reasonably priced! Explained everything well, and got the job done quickly! Would definitely recommend to anyone!',
    date: '2026-08-06 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWjEfCqse9G_VQzvQvgmTtrLpYVg0CTQbvAWjBF-WdJfs1xzsY=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Barbara Hiatt',
    rating: 5,
    text: 'Barbara Hiatt',
    date: '2026-08-21 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocKrcBDNKl0KDICbaWnQ4sEuzfhbCdTouXxO_82AyDW7LYJ5Lw=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Barry Alderman',
    rating: 5,
    text: 'Sam went out of his way to pump out my septic tank, on a Saturday afternoon. Very friendly and knowledgeable. I highly recommend using this company. Thank you!!!\nSam came back out this Sunday morning to fix a couple of spots where the septic pipe had broken. I had previously had a well known big company come out to give me an estimate. Sam got everything fixed perfectly, and saved us over 10 thousand dollars!!! Thank you so much Sam!!!',
    date: '2026-08-21 13:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocL8Ksh2Pwzt9YCA3xQWdOo20V5aM66aK9hQZh-sOzQ5Tuj4nA=w72-h72-p-rp-mo-ba12-br100',
  },
  {
    author: 'Sarah Draper',
    rating: 5,
    text: 'We had these guys come do our septic removal they was very nice compassionate did what they said they would, was on time, they work well under pressure...so we discovered, and also came back the next day and worked in the rain made sure the job was done and finished we was satisfied give these boys a chance they are very fair on there prices and helped us in a very hard time thank you guys again for holding your word and being there when we really needed good septic service....',
    date: '2026-08-22 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWbn4cQ6BOv5875M52rRL2zXDvkKNbtUno8o2sw70SXUgC8bN4=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Mike Bowers',
    rating: 5,
    text: 'I would highly recommend Sam for all your septic service needs. He is a genuine and honest guy who works hard to ensure everything is 100% at the end of the job.',
    date: '2026-08-26 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocK5SfKWFOyJXLYem5u3PtJngn7Otr1TwVt5xHx9bXFGlstAVw=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Shelley',
    rating: 5,
    text: 'We had septic isssues over the weekend, uncertain when we might be able to get the issue fixed. We called Sam, and he came out 30 minutes later to assess the situation; and he repaired the problem the following day.\n\nWe were very impressed with his expertise, professionalism, and reasonable price. We would not hesitate to use him again!',
    date: '2026-08-30 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocL3rJxEC5QPe69NIw9rLTSm2pw_yJdVu2yE4DbpaYfCYm5yTw=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Allen Rutherford',
    rating: 5,
    text: 'Great service highly recommendded them',
    date: '2026-09-01 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJPRXfix0ZX5kmWT3njhcOBod-cuO9-ikX_ZBWcaypRbxU9NA=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Karen Rutherford',
    rating: 5,
    text: 'Wonderful people!! Came fast and did an awesome job! Highly recommend! Thank you for all your help',
    date: '2026-09-01 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUHJvAWx42e_Tbty_IzWLYPQPVzUtjWIoN2qDJwSI5mrkzA4W8=w72-h72-p-rp-mo-br100',
  },
  {
    author: 'Nathan Justice',
    rating: 5,
    text: 'Was very pleased with the service I received. They were very professional and prices were competitive. They are very good at what they do and would suggest they be used for any septic\plumbing issues you might have.',
    date: '2026-09-20 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocLdzvRhcaodV1GiA1Z3HLtk8GSsYn51MM1zqACXisnV9LHyLw=w72-h72-p-rp-mo-br100'
  },
  {
    author: 'Pam Johnson',
    rating: 5,
    text: 'I would recommend Sam over any other company. He went above and beyond to help us out with our septic issues.',
    date: '2026-10-27 12:00:00',
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWhaZf7emRHooiEmAj8MS7AVk0Lgbg_jF_510AxiUkPcDT8Pkj4=w97-h97-p-rp-mo-br100'
  }
]

export const reviews = reviewData.map((r) => ({
  ...r,
  relativeTime: moment(r.date).fromNow(),
}))
