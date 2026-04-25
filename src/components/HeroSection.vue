<template>
  <section
    id="hero"
    class="hero-section d-flex align-center"
    style="min-height: 100vh; position: relative; overflow: hidden;"
  >
    <!-- Background overlay -->
    <div class="hero-overlay" />

    <v-container class="hero-content py-16">
      <v-row justify="center">
        <v-col cols="12" md="9" lg="8" class="text-center">

          <!-- Badge -->
          <div class="d-flex justify-center mb-5">
            <v-chip color="accent" variant="flat" size="small" class="font-weight-medium px-4 py-2">
              <v-icon start size="14">mdi-star</v-icon>
              5.0-Star Rated on Google &nbsp;·&nbsp; Fries, VA
            </v-chip>
          </div>

          <!-- Headline -->
          <h1 class="text-white font-weight-black mb-4" style="font-size: clamp(2rem, 5.5vw, 3.75rem); line-height: 1.1; letter-spacing: -0.02em;">
            Southwest Virginia's<br />
            <span style="color: #FCD34D;">Trusted Septic Experts</span>
          </h1>

          <!-- Subheadline -->
          <p class="text-white mb-8" style="font-size: clamp(1rem, 2.5vw, 1.25rem); opacity: 0.9; max-width: 600px; margin-inline: auto; line-height: 1.6;">
            Professional septic pumping, installation, and repair services.
            Licensed, insured, and locally owned — proudly serving Galax, Carroll County, Grayson County, and surrounding areas.
          </p>

          <!-- CTAs -->
          <div class="d-flex justify-center flex-wrap" style="gap: 14px;">
            <v-btn
              color="accent"
              variant="flat"
              size="x-large"
              rounded="lg"
              min-width="200"
              @click="$emit('open-contact')"
            >
              <v-icon start>mdi-clipboard-text-outline</v-icon>
              Get a Free Quote
            </v-btn>
            <v-btn
              color="white"
              variant="outlined"
              size="x-large"
              rounded="lg"
              min-width="200"
              href="tel:+12762636184"
            >
              <v-icon start>mdi-phone</v-icon>
              (276) 263-6184
            </v-btn>
          </div>

          <!-- Trust badges -->
          <div class="d-flex justify-center flex-wrap mt-10" style="gap: 32px;">
            <div v-for="badge in trustBadges" :key="badge.text" class="d-flex align-center" style="gap: 8px;">
              <v-icon :icon="badge.icon" color="accent" size="20" />
              <span class="text-white" style="font-size: 0.875rem; opacity: 0.9;">{{ badge.text }}</span>
            </div>
          </div>

        </v-col>
      </v-row>
    </v-container>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <v-icon color="white" style="opacity: 0.6; animation: bounce 2s infinite;">mdi-chevron-down</v-icon>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-contact'])

const trustBadges = [
  { icon: 'mdi-shield-check', text: 'Licensed & Insured' },
  { icon: 'mdi-clock-fast', text: '24/7 Emergency Service' },
  { icon: 'mdi-tag-outline', text: 'Free Estimates' },
  { icon: 'mdi-home-heart', text: 'Family Owned' },
]
</script>

<style scoped>
.hero-section {
  background-image:
    linear-gradient(135deg, rgba(5, 8, 20, 0.75) 0%, rgba(5, 8, 20, 0.82) 100%),
    url('/hero.JPG');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.scroll-indicator {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(8px); }
}
</style>
