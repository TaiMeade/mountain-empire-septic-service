<template>
  <v-app-bar
    :elevation="scrolled ? 4 : 0"
    color="transparent"
    class="px-2"
    style="background: linear-gradient(to bottom, rgba(5,8,20,0.85) 0%, rgba(5,8,20,0.5) 100%) !important; transition: box-shadow 0.3s;"
  >
    <!-- Logo -->
    <v-app-bar-title class="pa-0" style="min-width: 180px;">
      <a href="#hero" class="d-flex align-center text-decoration-none" style="gap: 10px;" @click.prevent="smoothScroll('#hero')">
        <!-- LOGO: Replace src below with your logo file path when ready -->
        <v-img
          :src="logoSrc"
          alt="Mountain Empire Septic Service"
          max-height="48"
          max-width="48"
          contain
          class="rounded"
        />
        <div class="d-none d-sm-flex flex-column" style="line-height: 1.15;">
          <span class="font-weight-bold" style="color: #FFFFFF; font-size: 0.95rem;">Mountain Empire</span>
          <span style="color: rgba(255,255,255,0.75); font-size: 0.75rem;">Septic Service</span>
        </div>
      </a>
    </v-app-bar-title>

    <v-spacer />

    <!-- Desktop nav links -->
    <div class="d-none d-md-flex align-center" style="gap: 4px;">
      <v-btn
        v-for="link in navLinks"
        :key="link.label"
        variant="text"
        color="white"
        @click="smoothScroll(link.anchor)"
      >
        {{ link.label }}
      </v-btn>
    </div>

    <!-- CTA button -->
    <v-btn
      color="accent"
      variant="flat"
      rounded="lg"
      class="ml-3 d-none d-md-flex"
      @click="$emit('open-contact')"
    >
      Get a Free Quote
    </v-btn>

    <!-- Mobile menu -->
    <v-app-bar-nav-icon
      class="d-flex d-md-none"
      color="white"
      @click="drawer = true"
    />
  </v-app-bar>

  <!-- Mobile drawer -->
  <v-navigation-drawer v-model="drawer" temporary location="right" width="260">
    <v-list class="pt-4">
      <v-list-item
        prepend-icon="mdi-home"
        title="Mountain Empire Septic"
        subtitle="Fries, VA"
        class="mb-2"
      />
      <v-divider />
      <v-list-item
        v-for="link in navLinks"
        :key="link.label"
        :title="link.label"
        :prepend-icon="link.icon"
        @click="mobileNav(link.anchor)"
      />
      <v-divider class="mt-2" />
      <div class="pa-4">
        <v-btn block color="accent" variant="flat" rounded="lg" @click="mobileNav(null)">
          Get a Free Quote
        </v-btn>
        <v-btn block color="primary" variant="tonal" rounded="lg" class="mt-3" href="tel:+12762636184">
          <v-icon start>mdi-phone</v-icon>
          (276) 263-6184
        </v-btn>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logoSrc from '@/assets/logo.JPG'

const emit = defineEmits(['open-contact'])

const drawer = ref(false)
const scrolled = ref(false)

const navLinks = [
  { label: 'About',        anchor: '#about',        icon: 'mdi-information-outline' },
  { label: 'Services',     anchor: '#services',     icon: 'mdi-wrench-outline' },
  { label: 'Why Us',       anchor: '#why-us',       icon: 'mdi-shield-check-outline' },
  { label: 'Service Area', anchor: '#service-area', icon: 'mdi-map-marker-outline' },
  { label: 'Reviews',      anchor: '#testimonials', icon: 'mdi-star-outline' },
]

function smoothScroll(anchor) {
  if (!anchor) return
  const el = document.querySelector(anchor)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function mobileNav(anchor) {
  drawer.value = false
  if (anchor) {
    setTimeout(() => smoothScroll(anchor), 150)
  } else {
    setTimeout(() => emit('open-contact'), 150)
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
