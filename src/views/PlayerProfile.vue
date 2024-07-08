<template>
  <div>
    <h1>{{ player.name }}</h1>
    <p>Какие-нибудь детали для {{ player.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player: {}
    };
  },
  created() {
    this.fetchPlayer();
  },
  watch: {
    '$route'() {
      this.fetchPlayer();
    }
  },
  methods: {
    fetchPlayer() {
      const players = [
        {name: 'Player 1', profile: '/profile/1'},
        {name: 'Player 2', profile: '/profile/2'},
      ];
      const player = players.find(p => p.profile === this.$route.path);
      if (player) {
        this.player = player;
      }
    }
  }
};
</script>
