<script setup>
import Header from "./components/Header.vue";

const supabase = useSupabaseClient();

const location = ref("");

const fetchLocation = async () => {
  const { data: locationDetails, error } = await supabase
    .from("locations")
    .select()
    .eq("name", "Miami Aquatic Centre")
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
