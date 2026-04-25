<template>
  <section id="service-area" class="py-16 bg-background">
    <v-container>
      <v-row align="center" justify="center">

        <!-- Text -->
        <v-col cols="12" md="6" lg="5">
          <div class="section-label mb-3">Coverage</div>
          <h2 class="section-title mb-5">Serving Southwest Virginia</h2>
          <p class="text-secondary mb-5" style="font-size: 1.0625rem; line-height: 1.75;">
            Based in Fries, VA, Mountain Empire Septic Service proudly serves homeowners,
            farms, and businesses throughout Grayson County, Carroll County, and the surrounding
            Southwest Virginia region.
          </p>

          <v-row dense class="mb-6">
            <v-col v-for="area in serviceAreas" :key="area" cols="6">
              <div class="d-flex align-center mb-2" style="gap: 8px;">
                <v-icon color="primary" size="16">mdi-check-circle</v-icon>
                <span class="text-secondary" style="font-size: 0.9rem;">{{ area }}</span>
              </div>
            </v-col>
          </v-row>

          <p class="text-secondary" style="font-size: 0.9rem; font-style: italic;">
            Not sure if we cover your area? Give us a call — we'll let you know and try to help.
          </p>
        </v-col>

        <!-- Map embed card -->
        <v-col cols="12" md="5" lg="5" class="d-flex justify-center">
          <v-card rounded="xl" elevation="3" class="w-100 overflow-hidden" style="max-width: 420px;">
            <div
              class="map-placeholder d-flex flex-column align-center justify-center pa-8 text-center"
              style="min-height: 300px;"
            >
              <v-icon color="primary" size="56" class="mb-4">mdi-map-marker-radius</v-icon>
              <p class="font-weight-bold text-primary mb-1" style="font-size: 1rem;">
                Mountain Empire Septic Service
              </p>
              <p class="text-secondary mb-4" style="font-size: 0.875rem;">
                774 Liberty Hill Road, Fries, VA 24330
              </p>
              <v-btn
                color="primary"
                variant="tonal"
                rounded="lg"
                size="small"
                href="https://www.google.com/maps/search/?api=1&query=774+Liberty+Hill+Road+Fries+VA+24330"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-icon start size="16">mdi-directions</v-icon>
                Get Directions
              </v-btn>
            </div>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const serviceAreas = [
  'Fries, VA',
  'Galax, VA',
  'Carroll County, VA',
  'Grayson County, VA',
  'Independence, VA',
  'Hillsville, VA',
  'Wytheville, VA',
  'And surrounding areas',
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

.map-placeholder {
  background: linear-gradient(135deg, #F1F5F9 0%, #F8FAFC 100%);
}
</style>
