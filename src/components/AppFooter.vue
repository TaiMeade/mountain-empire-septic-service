<template>
  <v-footer class="footer pa-0" style="background: #060B14;">
    <v-container class="py-12">
      <v-row>

        <!-- Brand column -->
        <v-col cols="12" md="4" class="mb-8 mb-md-0">
          <div class="d-flex align-center mb-4" style="gap: 12px;">
            <!-- LOGO: Replace src below with your logo file when ready -->
            <v-img
              :src="logoSrc"
              alt="Mountain Empire Septic Service"
              max-height="48"
              max-width="48"
              contain
              class="rounded"
            />
            <div>
              <div class="text-white font-weight-bold" style="font-size: 1rem;">Mountain Empire</div>
              <div class="text-white" style="font-size: 0.8rem; opacity: 0.6;">Septic Service</div>
            </div>
          </div>
          <p class="text-white mb-5" style="opacity: 0.65; font-size: 0.875rem; line-height: 1.7; max-width: 280px;">
            Licensed, insured, and locally owned. Serving Fries, Galax, Carroll County, Grayson County, and surrounding Southwest Virginia.
          </p>
          <!-- Social links -->
          <div class="d-flex" style="gap: 10px;">
            <v-btn
              icon
              variant="tonal"
              color="white"
              size="small"
              href="https://www.facebook.com/profile.php?id=61582284322482"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <v-icon size="18">mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="tonal"
              color="white"
              size="small"
              href="https://www.google.com/maps/place/Empire+Septic+Services+LLC./@43.3506892,-73.3874502,17z"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
            >
              <v-icon size="18">mdi-google-maps</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Services column -->
        <v-col cols="6" md="2" class="mb-8 mb-md-0">
          <div class="footer-heading mb-4">Services</div>
          <div v-for="service in footerServices" :key="service" class="footer-link mb-2">
            {{ service }}
          </div>
        </v-col>

        <!-- Contact column -->
        <v-col cols="12" sm="6" md="3" class="mb-8 mb-md-0">
          <div class="footer-heading mb-4">Contact</div>
          <div class="d-flex align-start mb-3" style="gap: 10px;">
            <v-icon color="accent" size="16" class="mt-1">mdi-map-marker</v-icon>
            <span class="text-white" style="opacity: 0.7; font-size: 0.875rem; line-height: 1.5;">
              774 Liberty Hill Road<br />Fries, VA 24330
            </span>
          </div>
          <div class="d-flex align-center mb-3" style="gap: 10px;">
            <v-icon color="accent" size="16">mdi-phone</v-icon>
            <a href="tel:+12762636184" class="text-white text-decoration-none" style="opacity: 0.7; font-size: 0.875rem;">
              (276) 263-6184
            </a>
          </div>
          <div class="d-flex align-start" style="gap: 10px;">
            <v-icon color="accent" size="16" class="mt-1">mdi-clock-outline</v-icon>
            <div class="text-white" style="opacity: 0.7; font-size: 0.875rem; line-height: 1.6;">
              Mon – Fri: 7 AM – 5 PM
            </div>
          </div>
        </v-col>

        <!-- CTA column -->
        <v-col cols="12" sm="6" md="3">
          <div class="footer-heading mb-4">Ready to Book?</div>
          <p class="text-white mb-4" style="opacity: 0.65; font-size: 0.875rem; line-height: 1.6;">
            Get a free estimate today. No obligation, just honest advice.
          </p>
          <v-btn
            color="accent"
            variant="flat"
            rounded="lg"
            block
            class="mb-3"
            @click="$emit('open-contact')"
          >
            Get a Free Quote
          </v-btn>
          <v-btn
            color="white"
            variant="outlined"
            rounded="lg"
            block
            href="tel:+12762636184"
          >
            <v-icon start>mdi-phone</v-icon>
            Call Now
          </v-btn>
        </v-col>

      </v-row>

      <v-divider color="white" opacity="0.1" class="my-8" />

      <!-- Bottom bar -->
      <div class="d-flex flex-column flex-sm-row justify-space-between align-center" style="gap: 8px;">
        <p class="text-white ma-0" style="opacity: 0.4; font-size: 0.78rem;">
          © {{ new Date().getFullYear() }} Mountain Empire Septic Service. All rights reserved.
        </p>
        <p class="text-white ma-0" style="opacity: 0.4; font-size: 0.78rem;">
          Fries, VA · Grayson &amp; Carroll County
        </p>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import logoSrc from '@/assets/logo.JPG'

defineEmits(['open-contact'])

const footerServices = [
  'Septic Pumping',
  'System Installation',
  'System Repairs',
]
</script>

<style scoped>
.footer-heading {
  color: #F59E0B;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.footer-link {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.875rem;
}
</style>
