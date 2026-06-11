Vue.component("ba-progress-form", {
  template: "#tpl-progress-form",

  computed: {
    tracking() {
      return this.$root.tracking;
    },

    selectedDO: {
      get() {
        return this.$root.selectedDO;
      },

      set(value) {
        this.$root.selectedDO = value;
      },
    },

    keterangan: {
      get() {
        return this.$root.keteranganProgress;
      },

      set(value) {
        this.$root.keteranganProgress = value;
      },
    },
  },

  methods: {
    tambahProgress() {
      this.$root.tambahProgress();
    },
  },
});
