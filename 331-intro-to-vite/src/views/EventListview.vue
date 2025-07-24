<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventCategory from '@/components/EventCategory.vue'
import type { Event } from '@/types'
import { ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import EventService from '@/services/EventService'

const route = useRoute()
const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const page = computed(() => Number(route.query.page) || 1)
const perPage = computed(() => Number(route.query.perPage) || 2)

const hasNexPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / perPage.value)
  return page.value < totalPages
})

watchEffect(() => {
  events.value = null
  EventService.getEvents(perPage.value, page.value)
    .then((response) => {
      events.value = response.data
      totalEvents.value = Number(response.headers['x-total-count'])
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div>
    Page size:
    <RouterLink :to="{ name: 'event-list-view', query: { page: 1, perPage: 1 } }">1</RouterLink> |
    <RouterLink :to="{ name: 'event-list-view', query: { page: 1, perPage: 2 } }">2</RouterLink> |
    <RouterLink :to="{ name: 'event-list-view', query: { page: 1, perPage: 3 } }">3</RouterLink> |
    <RouterLink :to="{ name: 'event-list-view', query: { page: 1, perPage: 4 } }">4</RouterLink> |
    <RouterLink :to="{ name: 'event-list-view', query: { page: 1, perPage: 5 } }">5</RouterLink> |
    <RouterLink :to="{ name: 'event-list-view', query: { page: 1, perPage: 6 } }">6</RouterLink> |
  </div>
  <div class="events">
    <div class="event-row" v-for="event in events" :key="event.id">
      <EventCard :event="event" />
      <EventCategory :event="event" />
    </div>
    <div class="pagination">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1, perPage: perPage } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Prev Page</RouterLink
      >
      <RouterLink
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1, perPage: perPage } }"
        rel="next"
        v-if="hasNexPage"
        >Next Page &#62;</RouterLink
      >
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

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
