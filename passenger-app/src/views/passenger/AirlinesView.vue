<script setup lang="ts">
import type { Passenger } from '@/types'

defineProps<{
  passenger: Passenger
}>()
</script>

<template>
  <div class="passenger-airlines">
    <h2>Airlines Information</h2>
    
    <div v-if="passenger.airline.length === 0" class="no-airlines">
      No airlines information available
    </div>
    
    <div v-else class="airlines-list">
      <div 
        v-for="airline in passenger.airline" 
        :key="airline.id" 
        class="airline-card"
      >
        <div class="airline-header">
          <img :src="airline.logo" :alt="airline.name" class="airline-logo" />
          <div class="airline-info">
            <h3>{{ airline.name }}</h3>
            <p class="airline-country">{{ airline.country }}</p>
          </div>
        </div>
        
        <div class="airline-details">
          <div class="detail-row">
            <label>Slogan:</label>
            <span>{{ airline.slogan }}</span>
          </div>
          <div class="detail-row">
            <label>Headquarters:</label>
            <span>{{ airline.head_quaters }}</span>
          </div>
          <div class="detail-row">
            <label>Established:</label>
            <span>{{ airline.established }}</span>
          </div>
          <div class="detail-row">
            <label>Website:</label>
            <a :href="airline.website" target="_blank" class="website-link">
              {{ airline.website }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.passenger-airlines {
  max-width: 800px;
  margin: 0 auto;
}

.passenger-airlines h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.no-airlines {
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 40px;
}

.airlines-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.airline-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.airline-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.airline-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.airline-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-right: 20px;
  border-radius: 8px;
}

.airline-info h3 {
  margin: 0 0 5px 0;
  color: #2c3e50;
  font-size: 24px;
}

.airline-country {
  margin: 0;
  color: #666;
  font-size: 16px;
}

.airline-details {
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f5f5f5;
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-row label {
  font-weight: bold;
  color: #2c3e50;
  min-width: 120px;
}

.detail-row span {
  color: #555;
  text-align: right;
  flex: 1;
}

.website-link {
  color: #3498db;
  text-decoration: none;
}

.website-link:hover {
  text-decoration: underline;
}</style>