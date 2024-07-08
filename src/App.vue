<template>
  <div id="app">
    <SearchInput />
    <SearchResults :items="filteredItems" />
    <router-view />
  </div>
</template>

<script>
import SearchInput from './components/SearchInput.vue';
import SearchResults from './components/SearchResults.vue';

export default {
  components: {
    SearchInput,
    SearchResults,
  },
  data() {
    return {
      filteredItems: [],
    };
  },
  methods: {
    setFilteredItems(items) {
      this.filteredItems = items;
    },
  },
};
</script>
