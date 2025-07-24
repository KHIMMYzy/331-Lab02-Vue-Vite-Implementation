<script setup lang="ts">
import { defineProps } from 'vue'
import type { Event } from '@/types'

const props = defineProps<{ event: Event; id: string }>()
</script>

<template>
  <p>Register event here</p>
</template>
