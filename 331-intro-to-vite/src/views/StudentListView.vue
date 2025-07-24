<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { Student } from '@/types'
import { ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService'

const students = ref<Student[]>([])

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      students.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Students Information</h1>
  <!-- student list -->
  <div class="students">
    <div class="student-row" v-for="student in students" :key="student.id">
      <StudentCard :student="student" />
    </div>
  </div>
</template>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.student-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
