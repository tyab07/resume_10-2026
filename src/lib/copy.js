import { toast } from 'sonner'

export async function copyText(text, message = 'Copied to clipboard') {
  try {
    await navigator.clipboard.writeText(text)
    toast.success(message, { description: text })
  } catch {
    toast.error('Couldn’t copy — please copy it manually', { description: text })
  }
}
