Vue.component("app-navbar", {
  template: `
      <div class="navbar">
        <h3 id="greeting" class="greeting" style="font-family: monospace">
          {{ greeting }}
        </h3>
        <div class="date-box">
          <span id="current-date"> </span>
          <strong id="current-time"> </strong>
        </div>
      </div>
    `,

  data() {
    return {
      greeting: "",
    };
  },

  mounted() {
    this.updateGreeting();
  },

  methods: {
    updateGreeting() {
      const jam = new Date().getHours();

      const userLogin = JSON.parse(localStorage.getItem("userLogin")) || {};

      const nama = userLogin.nama || "User";

      let sapaan = "";

      if (jam >= 4 && jam < 11) {
        sapaan = "🌞 Selamat Pagi";
      } else if (jam >= 11 && jam < 15) {
        sapaan = "☀️ Selamat Siang";
      } else if (jam >= 15 && jam < 18) {
        sapaan = "🌤️ Selamat Sore";
      } else {
        sapaan = "🌙 Selamat Malam";
      }

      this.greeting = `${sapaan}, ${nama}`;
    },
  },
});
