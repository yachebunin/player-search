<template>
  <div class="search-container">
    <input
        type="text"
        v-model="query"
        @input="onInput"
        @keydown.down.prevent="onArrowDown"
        @keydown.up.prevent="onArrowUp"
        @keydown.enter.prevent="onEnter"
        placeholder="Введите имя игрока"
        class="search-input"
    />
    <button class="search-button" @click="onSearch">
      <img src="@/assets/search-icon.svg" alt="search" class="search-icon" />
    </button>
    <PlayerAutocomplete
        v-if="query.length >= 3"
        :items="filteredItems"
        :highlightedIndex="highlightedIndex"
        @selectItem="onSelectItem"
    />
  </div>
</template>

<script>
import PlayerAutocomplete from './PlayerAutocomplete.vue';

export default {
  components: { PlayerAutocomplete },
  data() {
    return {
      query: '',
      highlightedIndex: -1,
      items: [
        { name: 'Player 1', profile: '/profile/1' },
        { name: 'Player 2', profile: '/profile/2' },
      ],
      filteredItems: []
    };
  },
  methods: {
    onInput() {
      if (this.query.length >= 3) {
        this.filteredItems = this.items.filter(item =>
            item.name.toLowerCase().includes(this.query.toLowerCase())
        ).slice(0, 10);
      } else {
        this.filteredItems = [];
      }
    },
    onArrowDown() {
      if (this.highlightedIndex < this.filteredItems.length - 1) {
        this.highlightedIndex++;
      }
    },
    onArrowUp() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex--;
      }
    },
    onEnter() {
      if (this.highlightedIndex >= 0) {
        this.onSelectItem(this.filteredItems[this.highlightedIndex]);
      }
    },
    onSelectItem(item) {
      if (this.$router.currentRoute.path !== item.profile) {
        this.$router.push(item.profile);
      }
    },
    onSearch() {
      if (this.filteredItems.length > 0) {
        this.onSelectItem(this.filteredItems[0]);
      }
    }
  }
};
</script>

<style scoped>
.search-container {
  position: relative;
  width: 300px;
}

.search-input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.search-button {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
}

.search-icon {
  height: 24px;
  width: 24px;
}

.autocomplete li {
  padding: 8px;
  cursor: pointer;
}

.autocomplete li.highlighted {
  background-color: #bde4ff;
}
</style>
