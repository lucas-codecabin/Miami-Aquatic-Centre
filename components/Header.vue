<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    url: "/",
  },
  {
    label: "Operating Hours",
    icon: "pi pi-clock",
    url: "#operating-hours",
  },
  {
    label: "Entry Fees",
    icon: "pi pi-dollar",
    url: "#entry-fees",
  },
]);
</script>

<template>
  <div class="sticky top-0 z-50">
    <div
      class="card absolute top-0 left-0 w-full flex bg-white rounded-bl-full h-20 items-center"
    >
      <div class="container mx-auto flex items-center justify-between relative">
        <NuxtLink to="/"
          ><img src="/assets/images/city-logo.png" alt="City Logo" class="w-16"
        /></NuxtLink>
        <Menubar
          :model="items"
          class="absolute left-1/2 transform -translate-x-1/2 !border-none"
        />
      </div>
    </div>
  </div>
</template>
