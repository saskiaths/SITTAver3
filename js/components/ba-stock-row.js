Vue.component("ba-stock-row", {
  template: "#tpl-stock-row",

  props: {
    item: Object,
    index: Number,

    stok: Array,

    editIndex: Number,

    kategoriList: Array,

    upbjjList: Array,
  },
});
