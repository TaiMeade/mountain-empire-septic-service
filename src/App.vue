<template>
  <v-app>
    <!-- Navbar (transparent on hero, solid on scroll) -->
    <AppNavbar @open-contact="contactOpen = true" />

    <!-- Page sections -->
    <v-main>
      <HeroSection @open-contact="contactOpen = true" />
      <AboutSection />
      <ServicesSection @open-contact="contactOpen = true" />
      <WhyUsSection />
      <ServiceAreaSection />
      <TestimonialsSection />
      <AppFooter @open-contact="contactOpen = true" />
    </v-main>

    <!-- Contact modal (global) -->
    <ContactModal v-model="contactOpen" />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import AppNavbar         from '@/components/AppNavbar.vue'
import HeroSection       from '@/components/HeroSection.vue'
import AboutSection      from '@/components/AboutSection.vue'
import ServicesSection   from '@/components/ServicesSection.vue'
import WhyUsSection      from '@/components/WhyUsSection.vue'
import ServiceAreaSection from '@/components/ServiceAreaSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import AppFooter         from '@/components/AppFooter.vue'
import ContactModal      from '@/components/ContactModal.vue'

const contactOpen = ref(false)
</script>

<style>
html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}
</style>
