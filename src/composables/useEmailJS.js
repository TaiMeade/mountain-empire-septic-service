import { ref } from 'vue'
import emailjs from '@emailjs/browser'

export function useEmailJS() {
  const loading = ref(false)
  const success = ref(false)
  const error = ref(null)

  async function sendEmail(templateParams) {
    loading.value = true
    success.value = false
    error.value = null

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      success.value = true
    } catch (err) {
      error.value = 'Failed to send message. Please call us directly at (276) 263-6184.'
      console.error('EmailJS error:', err)
    } finally {
      loading.value = false
    }
  }

  function reset() {
    success.value = false
    error.value = null
  }

  return { loading, success, error, sendEmail, reset }
}
