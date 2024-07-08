<template>
  <ul class="autocomplete">
    <li
        v-for="(item, index) in items"
        :key="item.name"
        :class="{ highlighted: index === highlightedIndex }"
        @click="selectItem(item)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PlayerAutocomplete',
  props: {
    items: {
      type: Array,
      required: true
    },
    highlightedIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    selectItem(item) {
      this.$emit('selectItem', item);
    }
  }
};
</script>

<style scoped>
.autocomplete {
  border: 1px solid #ccc;
  list-style-type: none;
  padding: 0;
  margin: 0;
  background: white;
  max-height: 200px;
  overflow-y: auto;
}

.autocomplete li {
  padding: 8px;
  cursor: pointer;
}

.autocomplete li.highlighted {
  background-color: #bde4ff;
}
</style>
