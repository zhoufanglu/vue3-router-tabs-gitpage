<template>
  <div class="p-table-A">4 </div>
</template>

<script setup>
  import { onMounted, toRefs, ref, reactive } from 'vue'
  import { useTable } from '@/hooks/table/useTable.ts'
  import api from '@/service/api'
  const filters = reactive({
    name: 'a',
    age: null
  })
  const { variables, getTableData, resetFilter } = useTable(api.user.testC, filters)
  onMounted(() => {
    getTableData(filters)
  })

  /*  const handleCurrentChange = (val) => {
    // console.log(33, val)
  }*/
</script>

<style scoped lang="scss">
  .filter-row {
    @include vertical-center;
    border: solid 1px green;
    padding: 10px;
  }
</style>
