import { computed, ref } from 'vue'
import { reviews as reviewData } from '@/data/reviews'

const reviews = ref(reviewData)

const overallRating = computed(() => {
  if (!reviews.value.length) return null
  const sum = reviews.value.reduce((acc, r) => acc + r.rating, 0)
  return Math.round((sum / reviews.value.length) * 10) / 10
})

const totalRatings = computed(() => reviews.value.length)

export function useGoogleReviews() {
  return { reviews, overallRating, totalRatings }
}
