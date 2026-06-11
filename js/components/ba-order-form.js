Vue.component("ba-order-form", {
  template: "#tpl-order-form",

  computed: {
    showModal: {
      get() {
        return this.$root.showTrackingModal;
      },

      set(value) {
        this.$root.showTrackingModal = value;
      },
    },

    newTracking() {
      return this.$root.newTracking;
    },

    pengirimanList() {
      return this.$root.pengirimanList;
    },

    paketList() {
      return this.$root.paketList;
    },

    nomorDOBaru() {
      return this.$root.nomorDOBaru;
    },

    selectedPaket() {
      return this.$root.selectedPaket;
    },

    totalHarga() {
      return this.$root.totalHarga;
    },
  },

  methods: {
    tambahTracking() {
      this.$root.tambahTracking();
    },

    closeModal() {
      this.$root.showTrackingModal = false;
    },

    formatRupiah(value) {
      return this.$root.formatRupiah(value);
    },
  },
});
