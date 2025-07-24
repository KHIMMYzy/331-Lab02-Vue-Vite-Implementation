<script setup lang="ts">
import type { Passenger } from '@/types'

defineProps<{
  passenger: Passenger
}>()
</script>

<template>
  <div class="passenger-details">
    <div class="detail-card">
      <h2>Passenger Information</h2>
      <div class="detail-item">
        <label>Name:</label>
        <span>{{ passenger.name }}</span>
      </div>
      <div class="detail-item">
        <label>Passenger ID:</label>
        <span>{{ passenger._id }}</span>
      </div>
      <div class="detail-item">
        <label>Total Trips:</label>
        <span>{{ passenger.trips }}</span>
      </div>
      <div class="detail-item">
        <label>Total Airlines:</label>
        <span>{{ passenger.airline.length }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.passenger-details {
  display: flex;
  justify-content: center;
}

.detail-card {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 400px;
}

.detail-card h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-item label {
  font-weight: bold;
  color: #2c3e50;
}

.detail-item span {
  color: #555;
}</style>