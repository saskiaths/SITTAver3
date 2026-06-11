Vue.filter("rupiah", function (value) {
  if (!value) return "Rp 0";

  return "Rp " + Number(value).toLocaleString("id-ID");
});

Vue.filter("buah", function (value) {
  if (!value && value !== 0) return "0 buah";

  return value + " buah";
});

console.log("APP.JS LOADED");

new Vue({
  el: "#app",

  data: {
    upbjjList: dataBahanAjar.upbjjList,
    kategoriList: dataBahanAjar.kategoriList,
    stok: dataBahanAjar.stok,

    editIndex: null,

    showModal: false,

    selectedUpbjj: "",
    selectedKategori: "",
    stokFilter: "",
    sortBy: "",
    filterApplied: false,
    selectedDO: "",

    keteranganProgress: "",

    showDeleteModal: false,
    deleteIndex: null,

    newItem: {
      kode: "",
      judul: "",
      kategori: "",
      upbjj: "",
      lokasiRak: "",
      harga: "",
      qty: "",
      safety: "",
      catatanText: "",
    },

    tracking: dataBahanAjar.tracking,

    pengirimanList: dataBahanAjar.pengirimanList,

    paketList: dataBahanAjar.paket,

    keyword: "",

    showTrackingModal: false,

    newTracking: {
      nim: "",
      nama: "",
      ekspedisi: "",
      paket: "",
      tanggalKirim: new Date().toISOString().split("T")[0],
    },
  },

  computed: {
    filteredStok() {
      if (!this.filterApplied) {
        return this.stok;
      }

      let hasil = [...this.stok];

      if (this.selectedUpbjj) {
        hasil = hasil.filter((item) => item.upbjj === this.selectedUpbjj);
      }

      if (this.selectedKategori) {
        hasil = hasil.filter((item) => item.kategori === this.selectedKategori);
      }

      if (this.stokFilter === "menipis") {
        hasil = hasil.filter((item) => item.qty < item.safety && item.qty > 0);
      }

      if (this.stokFilter === "kosong") {
        hasil = hasil.filter((item) => item.qty === 0);
      }

      if (this.sortBy === "judul") {
        hasil.sort((a, b) => a.judul.localeCompare(b.judul));
      }

      if (this.sortBy === "stok") {
        hasil.sort((a, b) => b.qty - a.qty);
      }

      if (this.sortBy === "harga") {
        hasil.sort((a, b) => b.harga - a.harga);
      }

      return hasil;
    },

    filteredTracking() {
      if (!this.keyword) {
        return this.tracking;
      }

      const hasil = {};

      Object.keys(this.tracking).forEach((kode) => {
        const item = this.tracking[kode];

        if (
          kode.toLowerCase().includes(this.keyword.toLowerCase()) ||
          item.nim.includes(this.keyword)
        ) {
          hasil[kode] = item;
        }
      });

      return hasil;
    },

    nomorDOBaru() {
      const tahun = new Date().getFullYear();

      const jumlah = Object.keys(this.tracking).length + 1;

      return `DO${tahun}-${String(jumlah).padStart(4, "0")}`;
    },

    selectedPaket() {
      return this.paketList.find(
        (item) => item.kode === this.newTracking.paket,
      );
    },

    totalHarga() {
      return this.selectedPaket ? this.selectedPaket.harga : 0;
    },

    selectedTracking() {
      return (
        this.tracking[this.selectedDO] || {
          perjalanan: [],
        }
      );
    },
  },

  watch: {
    selectedUpbjj() {
      this.selectedKategori = "";
    },
    "newTracking.paket"(newValue) {
      if (newValue) {
        console.log("Paket dipilih:", newValue);
      }
    },
  },

  methods: {
    editData(index) {
      this.editIndex = index;
    },

    saveData() {
      this.stok.forEach((item) => {
        item.catatanHTML = item.catatanHTML || item.catatanText;
      });

      this.editIndex = null;
    },

    formatText(item, type) {
      let text = item.catatanText;

      if (type === "bold") {
        item.catatanHTML = `<strong>${text}</strong>`;
      }

      if (type === "italic") {
        item.catatanHTML = `<em>${text}</em>`;
      }

      if (type === "underline") {
        item.catatanHTML = `<u>${text}</u>`;
      }
    },

    changeColor(item, color) {
      item.catatanHTML = `<span style="
      color:${color}
    ">
      ${item.catatanText}
    </span>`;
    },
    applyFilter() {
      this.filterApplied = true;
    },

    resetFilter() {
      this.selectedUpbjj = "";

      this.selectedKategori = "";

      this.stokFilter = "";

      this.sortBy = "";

      this.filterApplied = false;
    },

    tambahData() {
      if (
        !this.newItem.kode ||
        !this.newItem.judul ||
        !this.newItem.kategori ||
        !this.newItem.upbjj ||
        !this.newItem.lokasiRak
      ) {
        alert("Semua field wajib diisi!");
        return;
      }

      if (
        this.newItem.qty < 0 ||
        this.newItem.safety < 0 ||
        this.newItem.harga < 0
      ) {
        alert("Angka tidak boleh negatif!");
        return;
      }

      this.stok.push({
        ...this.newItem,

        qty: Number(this.newItem.qty),

        safety: Number(this.newItem.safety),

        harga: Number(this.newItem.harga),

        catatanHTML: this.newItem.catatanText,
      });

      this.closeModal();
    },

    closeModal() {
      this.showModal = false;

      this.newItem = {
        kode: "",
        judul: "",
        kategori: "",
        upbjj: "",
        lokasiRak: "",
        harga: "",
        qty: "",
        safety: "",
        catatanText: "",
      };
    },

    confirmDelete(index) {
      this.deleteIndex = index;
      this.showDeleteModal = true;
    },

    deleteData() {
      this.stok.splice(this.deleteIndex, 1);

      this.showDeleteModal = false;

      this.deleteIndex = null;
    },

    searchTracking() {},

    resetTracking() {
      this.keyword = "";
    },

    formatRupiah(value) {
      return "Rp " + Number(value).toLocaleString("id-ID");
    },

    tambahTracking() {
      if (
        !this.newTracking.nim ||
        !this.newTracking.nama ||
        !this.newTracking.ekspedisi ||
        !this.newTracking.paket
      ) {
        alert("Semua field wajib diisi!");
        return;
      }

      this.$set(this.tracking, this.nomorDOBaru, {
        nim: this.newTracking.nim,

        nama: this.newTracking.nama,

        status: "Dikirim",

        ekspedisi: this.newTracking.ekspedisi,

        tanggalKirim: this.newTracking.tanggalKirim,

        paket: this.newTracking.paket,

        total: this.totalHarga,

        perjalanan: [
          {
            waktu: new Date().toLocaleString("id-ID"),

            keterangan: "Delivery Order dibuat",
          },
        ],
      });

      this.newTracking = {
        nim: "",
        nama: "",
        ekspedisi: "",
        paket: "",
        tanggalKirim: new Date().toISOString().split("T")[0],
      };

      this.showTrackingModal = false;
    },

    tambahProgress() {
      if (!this.selectedDO) {
        alert("Pilih Delivery Order terlebih dahulu!");
        return;
      }

      if (!this.keteranganProgress) {
        alert("Keterangan progress wajib diisi!");
        return;
      }

      this.tracking[this.selectedDO].perjalanan.push({
        waktu: new Date().toLocaleString("id-ID"),

        keterangan: this.keteranganProgress,
      });

      this.keteranganProgress = "";

      alert("Progress berhasil ditambahkan!");
    },
  },
});
