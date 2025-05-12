<script setup>
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
</script>

<template>
  <main>
    <section
      class="bg-[url(/assets/images/home-banner.jpg)] flex flex-col items-center justify-center text-white h-[80dvh] text-center"
    >
      <div
        class="container mx-auto mt-20 justify-center items-center flex gap-16"
      >
        <div class="w-[70%] py-8">
          <div class="flex flex-col gap-8">
            <h1 class="text-6xl font-title font-bold text-sky-400">
              Welcome to <br />{{ location.name }}
            </h1>
            <p class="text-justify">{{ location.site_description }}</p>
            <NuxtLink
              to="https://maps.app.goo.gl/DKkpSGduuw6L8ZVu5"
              target="_blank"
              class="bg-sky-400 text-white px-6 py-2 rounded w-fit mx-auto hover:bg-white hover:text-sky-400"
              ><div class="flex gap-2 items-center">
                <i class="pi pi-map-marker"></i>Directions
              </div></NuxtLink
            >
          </div>
        </div>

        <div class="w-[30%] py-8">
          <div class="rounded-lg shadow-lg">
            <div
              class="p-4 flex flex-col gap-2 bg-white text-black rounded-t-lg shadow-md"
            >
              <div class="flex gap-4 items-center">
                <i class="pi pi-map-marker text-sky-400"></i>
                <NuxtLink
                  to="https://maps.app.goo.gl/DKkpSGduuw6L8ZVu5"
                  target="_blank"
                  ><p>
                    {{ location.street }}, {{ location.suburb }},
                    {{ location.zip_code }}, {{ location.state }}
                  </p></NuxtLink
                >
              </div>

              <div class="flex gap-4 items-center">
                <i class="pi pi-phone text-sky-400"></i>
                <NuxtLink :to="`tel:${location.phone}`">{{
                  location.phone
                }}</NuxtLink>
              </div>

              <div class="flex gap-4 items-center">
                <i class="pi pi-envelope text-sky-400"></i>
                <NuxtLink :to="`mailto:${location.email}`">{{
                  location.email
                }}</NuxtLink>
              </div>
            </div>

            <img
              src="/assets/images/miami-indoor.jpg"
              alt="Miami Indoor Pool"
              class="rounded-b-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-stone-50 py-20">
      <div class="container mx-auto flex flex-col gap-8">
        <a
          id="operating-hours"
          class="text-6xl font-title font-bold text-sky-400 scroll-mt-20"
        >
          Operating Hours
        </a>

        <DataTable
          :value="location.operating_hours"
          tableStyle="width: 100%"
          stripedRows
        >
          <Column field="Day" header="Day"></Column>
          <Column field="Open" header="Open"></Column>
          <Column field="Close" header="Close"></Column>
        </DataTable>
      </div>
    </section>

    <section class="bg-stone-50 py-20">
      <div class="container mx-auto flex flex-col gap-8">
        <a
          id="entry-fees"
          class="text-6xl font-title font-bold text-sky-400 scroll-mt-20"
        >
          Entry Fees
        </a>

        <DataTable
          :value="location.entry_fees"
          tableStyle="width: 100%"
          stripedRows
        >
          <Column field="Category" header="General Admission"></Column>
          <Column field="Price" header="Price"></Column>
        </DataTable>
      </div>
    </section>
  </main>
</template>
