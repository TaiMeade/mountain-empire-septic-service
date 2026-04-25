<template>
  <section id="services" class="py-16" style="background: #F5F5F5;">
    <v-container>

      <!-- Header -->
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center mb-8">
          <div class="section-label mb-3">What We Do</div>
          <h2 class="section-title mb-4">Our Services</h2>
          <p class="text-secondary" style="font-size: 1rem; line-height: 1.7; max-width: 540px; margin-inline: auto;">
          From scheduled pump-outs to full system installations and repairs, we handle every aspect
            of your septic needs — quickly, cleanly, and at a fair price.
          </p>
        </v-col>
      </v-row>

      <!-- Service cards -->
      <v-row justify="center">
        <v-col
          v-for="service in services"
          :key="service.title"
          cols="12"
          sm="6"
          lg="4"
          class="d-flex"
        >
          <v-card
            rounded="xl"
            elevation="0"
            class="service-card pa-6 w-100 d-flex flex-column"
            style="border: 1px solid rgba(15,23,42,0.08); transition: box-shadow 0.25s, transform 0.25s;"
          >
            <div class="service-icon-wrap mb-4">
              <v-icon :icon="service.icon" color="primary" size="32" />
            </div>
            <h3 class="font-weight-bold mb-2" style="font-size: 1.0625rem; color: #1a1a1a;">
              {{ service.title }}
            </h3>
            <p class="text-secondary mb-4" style="font-size: 0.9rem; line-height: 1.65; flex: 1;">
              {{ service.description }}
            </p>
            <div v-if="service.emergency" class="d-flex align-center" style="gap: 6px;">
              <v-icon color="error" size="14">mdi-alert-circle</v-icon>
              <span style="font-size: 0.78rem; color: #D32F2F; font-weight: 600;">24/7 Emergency Available</span>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- CTA row -->
      <v-row justify="center" class="mt-10">
        <v-col cols="12" class="text-center">
          <p class="text-secondary mb-4">Don't see what you need? Give us a call and we'll help.</p>
          <div class="d-flex justify-center flex-wrap" style="gap: 12px;">
            <v-btn
              color="primary"
              variant="flat"
              size="large"
              rounded="lg"
              @click="$emit('open-contact')"
            >
              <v-icon start>mdi-clipboard-text-outline</v-icon>
              Request Service
            </v-btn>
            <v-btn
              color="primary"
              variant="outlined"
              size="large"
              rounded="lg"
              href="tel:+12762636184"
            >
              <v-icon start>mdi-phone</v-icon>
              (276) 263-6184
            </v-btn>
          </div>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script setup>
defineEmits(['open-contact'])

const services = [
  {
    icon: 'mdi-pipe-wrench',
    title: 'Septic Pumping',
    description:
      'Regular pumping is the most important maintenance step for your septic system. We pump quickly and cleanly, leaving your yard the way we found it.',
    emergency: false,
  },
  {
    icon: 'mdi-shovel',
    title: 'Septic System Installation',
    description:
      'New construction or replacement system? We design and install code-compliant septic systems tailored to your property and soil conditions.',
    emergency: false,
  },
  {
    icon: 'mdi-tools',
    title: 'Septic System Repairs',
    description:
      'Broken baffles, failing drain fields, cracked tanks — we diagnose and repair all types of septic system problems efficiently.',
    emergency: false,
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

.section-title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  line-height: 1.15;
  color: #0F172A;
  letter-spacing: -0.02em;
}

.service-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card:hover {
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.12) !important;
  transform: translateY(-4px);
}
</style>
