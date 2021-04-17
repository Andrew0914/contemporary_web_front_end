<template>
  <div class="menu-item" :class="colorClass" @click="select">
    <span>
      {{ name }}
    </span>
    <span> $ {{ price }} </span>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    name: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colorClass() {
      return this.selected ? "menu-item-selected" : "";
    },
  },
  methods: {
    select() {
      this.$emit("onSelect", { name: this.name, selected: !this.selected });
    },
  },
};
</script>

<style>
.menu-item {
  border-radius: 5px;
  padding: 16px;
  background-color: #e35885;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.menu-item-selected {
  background-color: #8ec16d;
}
</style>