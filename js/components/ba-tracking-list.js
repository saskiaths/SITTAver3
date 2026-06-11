Vue.component("ba-tracking-list", {
  template: "#tpl-tracking-list",

  computed: {
    filteredTracking() {
      return this.$root.filteredTracking;
    },
  },
});
