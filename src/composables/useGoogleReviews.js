import { ref } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'
import moment from 'moment'

// Static fallback reviews shown if the Google API is unavailable or returns nothing
const FALLBACK_REVIEWS = [
  {
    author: 'Dylan Darnell',
    rating: 5,
    text: 'Great service, punctual and communicative. Highly recommend.',
    relativeTime: moment('2026-04-24').fromNow(),
    profilePhotoUrl: null,
  }
]

export function useGoogleReviews() {
  const reviews = ref([])
  const overallRating = ref(null)
  const totalRatings = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const usingFallback = ref(false)

  async function fetchReviews() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID

    if (!apiKey || !placeId) {
      reviews.value = FALLBACK_REVIEWS
      usingFallback.value = true
      return
    }

    loading.value = true
    error.value = null

    try {
      const loader = new Loader({ apiKey, version: 'weekly', libraries: ['places'] })
      await loader.load()

      const service = new google.maps.places.PlacesService(document.createElement('div'))

      await new Promise((resolve, reject) => {
        service.getDetails(
          {
            placeId,
            fields: ['reviews', 'rating', 'user_ratings_total'],
          },
          (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && place) {
              overallRating.value = place.rating ?? null
              totalRatings.value = place.user_ratings_total ?? null

              if (place.reviews && place.reviews.length > 0) {
                reviews.value = place.reviews.map((r) => ({
                  author: r.author_name,
                  rating: r.rating,
                  text: r.text,
                  relativeTime: r.relative_time_description,
                  profilePhotoUrl: r.profile_photo_url ?? null,
                }))
              } else {
                reviews.value = FALLBACK_REVIEWS
                usingFallback.value = true
              }
              resolve()
            } else {
              reject(new Error(`PlacesService status: ${status}`))
            }
          }
        )
      })
    } catch (err) {
      console.error('Google Reviews error:', err)
      reviews.value = FALLBACK_REVIEWS
      usingFallback.value = true
    } finally {
      loading.value = false
    }
  }

  return { reviews, overallRating, totalRatings, loading, error, usingFallback, fetchReviews }
}
