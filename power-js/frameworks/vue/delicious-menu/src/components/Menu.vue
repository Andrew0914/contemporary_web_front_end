<template>
  <div class="menu">
    <h1>Menú</h1>
    <MenuItem
      v-for="(dish, index) in dishes"
      :key="index"
      :name="dish.name"
      :price="dish.price"
      :selected="dish.selected"
      @onSelect="addDish"
    />
    <hr />
    <span class="menu-footer">
      <span>Total</span>
      <span> $ {{ total }} </span>
    </span>
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  name: "Menu",
  components: {
    MenuItem,
  },
  data() {
    return {
      dishes: [
        {
          name: "Chilaquiles",
          price: 90,
          selected: false,
        },
        {
          name: "Tacos",
          price: 85,
          selected: false,
        },
        {
          name: "Quesadillas",
          price: 100,
          selected: false,
        },
        {
          name: "HotDog",
          price: 65,
          selected: false,
        },
        {
          name: "Hamburguesa",
          price: 120,
          selected: false,
        },
      ],
    };
  },
  computed: {
    total() {
      const selectedDishes = this.dishes.filter((dish) => dish.selected);
      return selectedDishes.length > 0
        ? selectedDishes.reduce((acc, dish) => {
            return acc + dish.price;
          }, 0)
        : 0;
    },
  },
  methods: {
    addDish(selectedDish) {
      this.dishes.find((dish) => dish.name == selectedDish.name).selected =
        selectedDish.selected;
    },
  },
};
</script>

<style>
.menu {
  background-color: #61a1bc;
  width: 480px;
  padding: 16px;
  border-radius: 5px;
  margin: 0 auto;
  color: white;
}

.menu h1 {
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.menu-footer {
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
}
</style>