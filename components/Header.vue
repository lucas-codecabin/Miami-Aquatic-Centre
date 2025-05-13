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

const menu = ref();
const hambugerItems = ref([
  {
    items: [
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
    ],
  },
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>

<template>
  <div class="sticky top-0 z-50">
    <div
      class="card absolute top-0 left-0 w-full flex bg-white rounded-bl-full h-20 items-center"
    >
      <div
        class="md:container flex items-center justify-between w-[90%] mx-auto relative"
      >
        <NuxtLink to="/"
          ><img src="/assets/images/city-logo.png" alt="City Logo" class="w-16"
        /></NuxtLink>
        <Menubar
          :model="items"
          class="absolute right-0 justify-end lg:justify-center lg:left-1/2 transform !border-none lg:-translate-x-1/2 w-[70%]"
        />

        <!-- <div class="card flex justify-center md:hidden">
          <Button
            type="button"
            icon="pi pi-ellipsis-v"
            rounded
            @click="toggle"
            aria-haspopup="true"
            aria-controls="overlay_menu"
            class="!bg-sky-400 !border-sky-400 hover:!bg-white hover:!text-sky-400 hover:!border-sky-400"
          />
          <Menu
            ref="menu"
            id="overlay_menu"
            :model="hambugerItems"
            :popup="true"
            class="md:hidden"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>
