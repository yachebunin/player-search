<template>
  <table v-if="items.length">
    <thead>
    <tr>
      <th>Name</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in items" :key="item.name">
      <td>{{ item.name }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>
