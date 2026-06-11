Vue.component("ba-tracking-search", {
  template: "#tpl-tracking-search",

  computed: {
    keyword: {
      get() {
        return this.$root.keyword;
      },

      set(value) {
        this.$root.keyword = value;
      },
    },
  },

  methods: {
    searchTracking() {
      console.log("Cari:", this.keyword);
    },

    resetTracking() {
      this.$root.resetTracking();
    },

    openModal() {
      this.$root.showTrackingModal = true;
    },
  },
});
