<template>
  <section id="why-us" class="py-16" style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%)">
    <v-container>

      <!-- Header -->
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center mb-10">
          <div class="section-label mb-3">Why Choose Us</div>
          <h2 class="text-white font-weight-black mb-4" style="font-size: clamp(1.75rem, 3.5vw, 2.5rem); line-height: 1.15; letter-spacing: -0.02em;">
            The Mountain Empire Difference
          </h2>
          <p class="text-white" style="opacity: 0.85; font-size: 1rem; line-height: 1.7;">
            We're not a franchise. We're your neighbors — and that means you get honest advice,
            responsive service, and work done right the first time.
          </p>
        </v-col>
      </v-row>

      <!-- Feature grid -->
      <v-row justify="center">
        <v-col
          v-for="feature in features"
          :key="feature.title"
          cols="12"
          sm="6"
          lg="4"
        >
          <div class="feature-card pa-6 rounded-xl d-flex" style="gap: 16px;">
            <div class="feature-icon-wrap flex-shrink-0">
              <v-icon :icon="feature.icon" color="accent" size="26" />
            </div>
            <div>
              <h3 class="text-white font-weight-bold mb-1" style="font-size: 1rem;">
                {{ feature.title }}
              </h3>
              <p class="text-white" style="opacity: 0.8; font-size: 0.875rem; line-height: 1.6; margin: 0;">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'mdi-certificate-outline',
    title: 'Licensed & Insured',
    description: "Fully licensed and insured in New York State. You have peace of mind knowing the job is done to code and you're protected.",
  },
  {
    icon: 'mdi-star-circle-outline',
    title: '5.0-Star Google Rating',
    description: "Our reputation speaks for itself. Every customer who has reviewed us has given us 5 stars — and we intend to keep it that way.",
  },
  {
    icon: 'mdi-home-outline',
    title: 'Locally Owned',
    description: "We live and work in Southwest Virginia. When you call us, you reach a neighbor — not a call center.",
  },
  {
    icon: 'mdi-clock-outline',
    title: 'Monday – Friday, 7 AM – 5 PM',
    description: "We keep regular business hours and always aim to respond quickly. Call us at (276) 263-6184 to schedule service.",
  },
  {
    icon: 'mdi-tag-check-outline',
    title: 'Free Estimates',
    description: 'We provide honest, no-obligation estimates before any work begins. No hidden fees, no surprises on your invoice.',
  },
  {
    icon: 'mdi-thumb-up-outline',
    title: 'Satisfaction Guaranteed',
    description: "We stand behind our work. If something isn't right, we make it right — that's our commitment to every customer.",
  },
]
</script>

<style scoped>
.section-label {
  color: #F59E0B;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.feature-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(4px);
  transition: background 0.2s;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.13);
}

.feature-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(245, 158, 11, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
