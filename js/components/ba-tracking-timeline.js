Vue.component("ba-tracking-timeline", {
  template: "#tpl-tracking-timeline",

  computed: {
    selectedTracking() {
      return this.$root.selectedTracking;
    },
  },
});
