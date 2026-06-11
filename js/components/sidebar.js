Vue.component("app-sidebar", {
  template: `
      <div class="sidebar">
        <img src="assets/img/logo SITTA.png" class="logo" />

        <a href="dashboard.html">Dashboard</a>

        <a href="stok.html">Informasi Bahan Ajar</a>

        <a href="tracking.html">Tracking Pengiriman</a>

        <div class="menu-dropdown">
          <a href="#">Laporan ▼</a>

          <div class="dropdown">
            <a href="monitoring.html"> Monitoring Progress DO Bahan Ajar </a>

            <a href="rekapba.html"> Rekap Bahan Ajar </a>
          </div>
        </div>

        <a href="transaksi.html"> History Transaksi Bahan Ajar </a>

        <a href="#" @click.prevent="logout"> Keluar Akun </a>
      </div>
    `,

  methods: {
    logout() {
      localStorage.removeItem("userLogin");
      window.location.href = "login.html";
    },
  },
});
