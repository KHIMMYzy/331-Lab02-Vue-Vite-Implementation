<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import type { Passenger } from '@/types'
import PassengerService from '@/services/PassengerService'

const passenger = ref<Passenger | null>(null)
const loading = ref(false)

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
})

const router = useRouter()

onMounted(() => {
    loading.value = true
    PassengerService.getPassenger(props.id)
        .then((response) => {
            passenger.value = response.data
            loading.value = false
        })
        .catch((error) => {
            loading.value = false
            if (error.response && error.response.status === 404) {
                router.push({
                    name: 'resource-not-found',
                    params: { resource: 'passenger' }
                })
            } else {
                console.error('There was an error!', error)
            }
        })
})
</script>

<template>
    <div v-if="loading" class="loading">
        Loading passenger details...
    </div>

    <div v-else-if="passenger" class="passenger-layout">
        <h1>{{ passenger.name }}</h1>

        <nav class="passenger-nav">
            <RouterLink :to="{ name: 'passenger-detail', params: { id: passenger._id } }" class="nav-link">
                Details
            </RouterLink>
            |
            <RouterLink :to="{ name: 'passenger-airlines', params: { id: passenger._id } }" class="nav-link">
                Airlines
            </RouterLink>
        </nav>

        <RouterView :passenger="passenger" />
    </div>
</template>

<style scoped>
.passenger-layout {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.passenger-nav {
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    margin-bottom: 30px;
}

.nav-link {
    padding: 0 15px;
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
}

.nav-link.router-link-active {
    color: #42b983;
}

.loading {
    text-align: center;
    padding: 50px;
    font-size: 18px;
    color: #3498db;
}

h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 10px;
}
</style>