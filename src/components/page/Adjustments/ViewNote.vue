<template>
<Modal :show="true">
  <template #title>View Credit Note</template>

  <template #body>
    <section class="grid grid-cols-1 lg:grid-cols-12">
      <div class="col-span-8">

        <LineItems :items="projects">
          <template #header>
             <h2 class="font-bold">Line Items</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </template>
        </LineItems>
      </div>
      <div class="col-span-4">
        kjbdjhwb
      </div>
    </section>
  </template>
</Modal>
</template>

<script>
import Modal from "@/components/page/Modal.vue";
import LineItems from "@/components/parts/LineItems.vue";

export default {
  name: "ViewNote",
  components:{
    LineItems,
    Modal
  },
  setup(){
    const projects = [
      { id: 1, name: 'New Advertising Campaign', hours: '12.0', rate: '$75.00', price: '$900.00' },
      { id: 2, name: 'Something else', hours: '12.0', rate: '$75.00', price: '$900.00' },
      // More projects...
    ]

    return {projects}
  }
}
</script>

<style scoped>

</style>