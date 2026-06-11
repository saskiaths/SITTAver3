Vue.component("ba-stock-form", {
  template: "#tpl-stock-form",

  computed: {
    upbjjList() {
      return this.$root.upbjjList;
    },

    kategoriList() {
      return this.$root.kategoriList;
    },

    showModal: {
      get() {
        return this.$root.showModal;
      },
      set(value) {
        this.$root.showModal = value;
      },
    },

    newItem() {
      return this.$root.newItem;
    },
  },

  methods: {
    tambahData() {
      this.$root.tambahData();
    },

    closeModal() {
      this.$root.closeModal();
    },
  },
});
