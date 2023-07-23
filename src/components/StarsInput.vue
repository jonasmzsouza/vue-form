<template>
  <div>
    <i
      v-for="star in stars"
      :key="star.id"
      :class="star.style"
      @click="setRate(star.id)"
    ></i>
  </div>
</template>

<script>
export default {
  name: "StarsInput",
  props: {
    starNumbers: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    stars: [],
    rate: 0,
  }),
  created() {
    this.startStars();
  },
  methods: {
    startStars() {
      for (let i = 0; i < this.starNumbers; i++) {
        this.stars[i] = { id: i, style: "bi-star star" };
      }
    },
    setRate(starNumber) {
      this.startStars();
      this.rate = starNumber + 1;
      for (let i = 0; i < this.rate; i++) {
        this.stars[i].style = "bi-star-fill star fill";
      }
      // this.$emit("rate", this.rate);
      this.$emit("update:rate", this.rate);
    },
  },
};
</script>

<style>
.star {
  font-size: 1.5rem;
  color: #999;
  margin-left: 1px;
  margin-right: 1px;
}

.fill {
  color: #fc0;
}
</style>
