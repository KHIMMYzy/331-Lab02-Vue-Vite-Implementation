<script setup lang="ts">
import PassengerCard from '@/components/PassengerCard.vue'
import type { Passenger } from '@/types'
import { ref, onMounted } from 'vue'
import PassengerService from '@/services/PassengerService'
import { mockPassengers } from '@/data/mockData'

const passengers = ref<Passenger[]>([])
const loading = ref(false)
const error = ref('')

onMounted(() => {
  loading.value = true
  
  // ลอง real API ก่อน ถ้าไม่ได้ให้ใช้ mock data
  PassengerService.getPassengers(0, 20)
    .then((response) => {
      passengers.value = response.data.data
      loading.value = false
    })
    .catch((err) => {
      console.error('API Error, using mock data:', err)
      // ใช้ mock data แทน
      passengers.value = mockPassengers
      loading.value = false
      error.value = '' // ไม่แสดง error เพราะมี mock data
    })
})
</script>

<template>
  <div class="home">
    <h1>Passenger List</h1>
    
    <div v-if="loading" class="loading">
      Loading passengers...
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else class="passengers">
      <PassengerCard 
        v-for="passenger in passengers" 
        :key="passenger._id" 
        :passenger="passenger" 
      />
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
}

.passengers {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.loading, .error {
  text-align: center;
  padding: 20px;
  font-size: 18px;
}

.error {
  color: #e74c3c;
}

.loading {
  color: #3498db;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}</style>