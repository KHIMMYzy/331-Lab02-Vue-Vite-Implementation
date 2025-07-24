<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventCategory from '@/components/EventCategory.vue'
import type { Event } from '@/types'
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService'

const events = ref<Event[]>([])

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element -->
  <div class="events">
    <div class="event-row" v-for="event in events" :key="event.id">
      <EventCard :event="event" />
      <EventCategory :event="event" />
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
