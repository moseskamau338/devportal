<template>
   <TableWidget />
<!--  elements-->
  <Elements />
</template>

<script>
export default{
    name: "WorkArea"
}
</script>

<script setup>
import TableWidget from "@/components/widgets/Tables/DataTable.vue";
import Elements from "@/components/parts/Elements.vue";
</script>