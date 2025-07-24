<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import type { Event } from '@/types'

const props = defineProps<{
  event: Event
  id: string
}>()
const { event } = toRefs(props)
</script>

<template>
  <div v-if="event">
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
