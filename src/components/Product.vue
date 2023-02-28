<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    return {
      route
    }
  }
}
</script>

<template>
  <div>
    <p>{{ route || {} }}</p>
  </div>
</template>
