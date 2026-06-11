Vue.component("ba-app-modal", {
  template: "#tpl-app-modal",

  computed: {
    showDeleteModal: {
      get() {
        return this.$root.showDeleteModal;
      },
      set(value) {
        this.$root.showDeleteModal = value;
      },
    },
  },

  methods: {
    deleteData() {
      this.$root.deleteData();
    },
  },
});
