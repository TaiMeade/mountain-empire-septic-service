<template>
  <v-dialog
    :model-value="modelValue"
    max-width="560"
    persistent
    scrollable
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <v-card rounded="xl">
      <!-- Header -->
      <v-card-title class="d-flex align-center justify-space-between pa-6 pb-4">
        <div>
          <div class="font-weight-black text-primary" style="font-size: 1.25rem; line-height: 1.2;">
            Get a Free Quote
          </div>
          <div class="text-secondary" style="font-size: 0.8125rem; margin-top: 2px;">
            We typically respond within a few hours.
          </div>
        </div>
        <v-btn icon variant="text" @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider />

      <!-- Form or success state -->
      <v-card-text class="pa-6">

        <!-- Success message -->
        <div v-if="success" class="text-center py-6">
          <v-icon color="success" size="64" class="mb-4">mdi-check-circle-outline</v-icon>
          <h3 class="font-weight-bold mb-2" style="font-size: 1.125rem;">Message Sent!</h3>
          <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
            Thanks for reaching out. We'll get back to you as soon as possible.<br />
            For urgent needs, call us directly at
            <a href="tel:+12762636184" class="text-primary font-weight-bold text-decoration-none">(276) 263-6184</a>.
          </p>
          <v-btn color="primary" variant="flat" rounded="lg" class="mt-6" @click="close">
            Close
          </v-btn>
        </div>

        <!-- Form -->
        <v-form v-else ref="formRef" @submit.prevent="submit">
          <v-row dense>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.name"
                label="Full Name"
                prepend-inner-icon="mdi-account-outline"
                variant="outlined"
                density="comfortable"
                rounded="lg"
                :rules="[rules.required]"
                class="mb-1"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.phone"
                label="Phone (optional)"
                prepend-inner-icon="mdi-phone-outline"
                variant="outlined"
                density="comfortable"
                rounded="lg"
                type="tel"
                class="mb-1"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="form.email"
                label="Email Address"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                density="comfortable"
                rounded="lg"
                type="email"
                :rules="[rules.required, rules.email]"
                class="mb-1"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="form.service"
                label="Service Needed"
                prepend-inner-icon="mdi-wrench-outline"
                :items="serviceOptions"
                variant="outlined"
                density="comfortable"
                rounded="lg"
                :rules="[rules.required]"
                class="mb-1"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="form.message"
                label="Describe your situation"
                prepend-inner-icon="mdi-text-box-outline"
                variant="outlined"
                density="comfortable"
                rounded="lg"
                rows="4"
                auto-grow
                :rules="[rules.required]"
                class="mb-1"
              />
            </v-col>
          </v-row>

          <!-- Error alert -->
          <v-alert
            v-if="error"
            type="error"
            variant="tonal"
            rounded="lg"
            density="compact"
            class="mb-4"
            :text="error"
          />

          <!-- Submit -->
          <v-btn
            type="submit"
            color="accent"
            variant="flat"
            size="large"
            block
            rounded="lg"
            :loading="loading"
          >
            <v-icon start>mdi-send-outline</v-icon>
            Send Message
          </v-btn>

          <p class="text-center text-secondary mt-4" style="font-size: 0.78rem;">
            Or call us directly:
            <a href="tel:+12762636184" class="text-primary font-weight-bold text-decoration-none">(276) 263-6184</a>
          </p>
        </v-form>

      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useEmailJS } from '@/composables/useEmailJS'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue'])

const { loading, success, error, sendEmail, reset } = useEmailJS()

const formRef = ref(null)

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: null,
  message: '',
})

const serviceOptions = [
  'Septic Pumping',
  'Septic System Installation',
  'Septic System Repairs',
  'Other / Not Sure',
]

const rules = {
  required: (v) => !!v || 'This field is required.',
  email: (v) => /.+@.+\..+/.test(v) || 'Please enter a valid email address.',
}

async function submit() {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  await sendEmail({
    from_name:    form.value.name,
    from_email:   form.value.email,
    from_phone:   form.value.phone || 'Not provided',
    service_type: form.value.service,
    message:      form.value.message,
  })
}

function close() {
  emit('update:modelValue', false)
}

// Reset form when dialog closes
watch(
  () => props.modelValue,
  (open) => {
    if (!open) {
      setTimeout(() => {
        form.value = { name: '', email: '', phone: '', service: null, message: '' }
        formRef.value?.reset()
        reset()
      }, 300)
    }
  }
)
</script>
