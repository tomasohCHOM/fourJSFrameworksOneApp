<template>
  <span class="badge"> {{ text }} </span>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style scoped>
.badge {
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  color: var(--color-blue);
  border: 2px solid var(--color-blue);
  border-radius: 1rem;
  font-weight: 600;
}
</style>
