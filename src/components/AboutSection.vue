<template>
  <section id="about" class="py-16 bg-background">
    <v-container>
      <v-row align="center" justify="center" style="gap: 0;">

        <!-- Text content -->
        <v-col cols="12" md="6" lg="5" order="2" order-md="1">
          <div class="section-label mb-3">About Us</div>
          <h2 class="section-title mb-5">
            Locally Rooted,<br />Professionally Driven
          </h2>
          <p class="text-secondary mb-4" style="font-size: 1.0625rem; line-height: 1.75;">
            Mountain Empire Septic Service has been a trusted name in septic care across
            Southwest Virginia. Based right here in Fries, we're your neighbors
            — and we treat every job on your property the way we'd want ours treated.
          </p>
          <p class="text-secondary mb-6" style="font-size: 1.0625rem; line-height: 1.75;">
            From septic pumping and installations to system repairs, our
            licensed team brings the experience and honesty that local homeowners and businesses
            deserve. No upselling. No surprises. Just reliable septic service you can count on.
          </p>

          <v-row dense>
            <v-col v-for="stat in stats" :key="stat.label" cols="6">
              <div class="stat-card pa-4 rounded-lg text-center mb-3">
                <div class="text-primary font-weight-black mb-1" style="font-size: 1.875rem;">
                  {{ stat.value }}
                </div>
                <div class="text-secondary" style="font-size: 0.8125rem;">{{ stat.label }}</div>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <!-- Visual panel -->
        <v-col cols="12" md="5" lg="5" order="1" order-md="2" class="d-flex justify-center mb-8 mb-md-0">
          <div class="about-visual rounded-xl d-flex flex-column align-center justify-center pa-8 text-center">
            <v-icon color="white" size="64" class="mb-4">mdi-truck-outline</v-icon>
            <p class="text-white font-weight-bold mb-2" style="font-size: 1.125rem;">Family-Owned &amp; Operated</p>
            <p class="text-white" style="opacity: 0.85; font-size: 0.9rem; line-height: 1.6; max-width: 260px;">
              Serving Fries, VA and the surrounding Southwest Virginia region with pride.
            </p>
            <v-divider color="white" opacity="0.3" class="my-4 w-75" />
            <div class="d-flex align-center" style="gap: 8px;">
              <v-icon color="accent" size="20">mdi-map-marker</v-icon>
              <span class="text-white" style="font-size: 0.875rem;">774 Liberty Hill Road, Fries, VA 24330</span>
            </div>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useGoogleReviews } from '@/composables/useGoogleReviews'

const { overallRating } = useGoogleReviews()

const stats = computed(() => [
  { value: `${overallRating.value?.toFixed(1) ?? '5.0'}★`, label: 'Google Rating' },
  { value: 'M-F', label: '7 AM – 5 PM' },
  { value: '100%', label: 'Licensed & Insured' },
  { value: 'Free', label: 'Estimates' },
])
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

.stat-card {
  background: rgba(15, 23, 42, 0.05);
  border: 1px solid rgba(15, 23, 42, 0.1);
}

.about-visual {
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
  width: 100%;
  max-width: 380px;
  min-height: 340px;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.3);
}
</style>
