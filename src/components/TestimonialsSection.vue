<template>
  <section id="testimonials" class="py-16" style="background: #F5F5F5;">
    <v-container>

      <!-- Header -->
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center mb-2">
          <div class="section-label mb-3">Customer Reviews</div>
          <h2 class="section-title mb-3">What Our Customers Say</h2>

          <!-- Overall rating badge -->
          <div v-if="overallRating" class="d-flex justify-center align-center mb-2" style="gap: 10px;">
            <div class="d-flex align-center" style="gap: 4px;">
              <v-icon
                v-for="n in 5"
                :key="n"
                :color="n <= Math.round(overallRating) ? 'amber-darken-1' : 'grey-lighten-1'"
                size="22"
              >
                mdi-star
              </v-icon>
            </div>
            <span class="font-weight-black text-primary" style="font-size: 1.5rem;">{{ overallRating }}</span>
            <span class="text-secondary" style="font-size: 0.875rem;">
              ({{ totalRatings }} Google Reviews)
            </span>
          </div>

          <p v-if="usingFallback && !loading" class="text-secondary mt-4" style="font-size: 0.875rem; font-style: italic;">
            Reviews shown below. Add your Google API credentials to display live reviews.
          </p>
        </v-col>
      </v-row>

      <!-- Skeleton loaders -->
      <v-row v-if="loading" justify="center">
        <v-col v-for="n in 3" :key="n" cols="12" sm="6" lg="4">
          <v-card rounded="xl" elevation="0" class="pa-6" style="border: 1px solid rgba(15,23,42,0.08);">
            <div class="d-flex align-center mb-4" style="gap: 12px;">
              <v-skeleton-loader type="avatar" width="44" height="44" />
              <div style="flex: 1;">
                <v-skeleton-loader type="text" width="60%" />
                <v-skeleton-loader type="text" width="40%" />
              </div>
            </div>
            <v-skeleton-loader type="paragraph" />
          </v-card>
        </v-col>
      </v-row>

      <!-- Review cards -->
      <v-row v-else justify="center">
        <v-col
          v-for="(review, index) in reviews"
          :key="index"
          cols="12"
          sm="6"
          lg="4"
          class="d-flex"
        >
          <v-card
            rounded="xl"
            elevation="0"
            class="review-card pa-6 w-100 d-flex flex-column"
            style="border: 1px solid rgba(15,23,42,0.08);"
          >
            <!-- Stars -->
            <div class="d-flex mb-3" style="gap: 2px;">
              <v-icon
                v-for="n in 5"
                :key="n"
                size="18"
                :color="n <= review.rating ? 'amber-darken-1' : 'grey-lighten-1'"
              >
                mdi-star
              </v-icon>
            </div>

            <!-- Review text -->
            <p class="text-secondary mb-4" style="font-size: 0.9rem; line-height: 1.65; flex: 1;">
              "{{ review.text }}"
            </p>

            <!-- Author -->
            <div class="d-flex align-center" style="gap: 10px; margin-top: auto;">
              <v-avatar size="36" color="primary">
                <v-img v-if="review.profilePhotoUrl" :src="review.profilePhotoUrl" :alt="review.author" />
                <span v-else class="text-white font-weight-bold" style="font-size: 0.875rem;">
                  {{ review.author.charAt(0).toUpperCase() }}
                </span>
              </v-avatar>
              <div>
                <div class="font-weight-bold" style="font-size: 0.875rem; color: #1a1a1a;">
                  {{ review.author }}
                </div>
                <div class="text-secondary" style="font-size: 0.78rem;">
                  {{ review.relativeTime }}
                  <span v-if="!usingFallback" style="margin-left: 4px;">· Google Review</span>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Google Reviews link -->
      <v-row justify="center" class="mt-8">
        <v-col cols="12" class="text-center">
          <v-btn
            color="primary"
            variant="tonal"
            rounded="lg"
            href="https://www.google.com/maps/place/Mountain+Empire+Septic+Service/@36.7417515,-80.9968904,17z/data=!4m18!1m9!3m8!1s0x499e76650a172ef7:0xd0b6a83a5c8256c7!2sMountain+Empire+Septic+Service!8m2!3d36.7417515!4d-80.9968904!9m1!1b1!16s%2Fg%2F11nhfwq1q0!3m7!1s0x499e76650a172ef7:0xd0b6a83a5c8256c7!8m2!3d36.7417515!4d-80.9968904!9m1!1b1!16s%2Fg%2F11nhfwq1q0?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon start>mdi-google</v-icon>
            See All Reviews on Google
          </v-btn>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useGoogleReviews } from '@/composables/useGoogleReviews'

const { reviews, overallRating, totalRatings, loading, usingFallback, fetchReviews } = useGoogleReviews()

onMounted(() => {
  fetchReviews()
})
</script>

<style scoped>
.section-label {
  color: #F59E0B;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  line-height: 1.15;
  color: #0F172A;
  letter-spacing: -0.02em;
}

.review-card {
  transition: box-shadow 0.25s, transform 0.25s;
}

.review-card:hover {
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.1) !important;
  transform: translateY(-3px);
}
</style>
