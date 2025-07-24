<script setup lang="ts">
import type { Passenger } from '@/types'

defineProps<{
    passenger: Passenger
}>()
</script>

<template>
    <RouterLink class="passenger-link" :to="{ name: 'passenger-detail', params: { id: passenger._id } }">
        <div class="passenger-card">
            <h3>{{ passenger.name }}</h3>
            <p>Trips: {{ passenger.trips }}</p>
            <p>Airlines: {{ passenger.airline.length }}</p>
        </div>
    </RouterLink>
</template>

<style scoped>
.passenger-card {
    padding: 20px;
    width: 300px;
    border: 1px solid #39495c;
    margin-bottom: 18px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.passenger-card:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2);
}

.passenger-link {
    text-decoration: none;
    color: #2c3e50;
}

.passenger-card h3 {
    margin: 0 0 10px 0;
    color: #2c3e50;
}

.passenger-card p {
    margin: 5px 0;
    color: #666;
}
</style>