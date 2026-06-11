Vue.component("ba-stock-filter", {
  template: "#tpl-stock-filter",

  computed: {
    upbjjList() {
      return this.$root.upbjjList;
    },

    kategoriList() {
      return this.$root.kategoriList;
    },

    selectedUpbjj: {
      get() {
        return this.$root.selectedUpbjj;
      },
      set(value) {
        this.$root.selectedUpbjj = value;
      },
    },

    selectedKategori: {
      get() {
        return this.$root.selectedKategori;
      },
      set(value) {
        this.$root.selectedKategori = value;
      },
    },

    stokFilter: {
      get() {
        return this.$root.stokFilter;
      },
      set(value) {
        this.$root.stokFilter = value;
      },
    },

    sortBy: {
      get() {
        return this.$root.sortBy;
      },
      set(value) {
        this.$root.sortBy = value;
      },
    },
  },

  methods: {
    applyFilter() {
      this.$root.applyFilter();
    },

    resetFilter() {
      this.$root.resetFilter();
    },
  },
});
