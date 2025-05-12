<script setup>
import Header from "./components/Header.vue";

const supabase = useSupabaseClient();

const location = ref("");

const fetchLocation = async () => {
  const { data: locationDetails, error } = await supabase
    .from("locations")
    .select()
    .eq("id", "5d38a789-4dc8-44a0-b48d-8c06098492b4")
    .single();

  if (!error) {
    location.value = locationDetails;
  } else {
    console.error("Error fetching location", error);
  }
};

await fetchLocation();
useSeoMeta({
  title: location.seo_title,
  ogTitle: location.seo_title,
  description: location.seo_description,
  ogDescription: location.seo_description,
});
</script>

<template>
  <Header />
  <NuxtPage />
</template>
