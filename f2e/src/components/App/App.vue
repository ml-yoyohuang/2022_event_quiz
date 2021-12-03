<script>
export default {
};
</script>

<template lang="pug">
  #app
    .container
      transition(name="fade" mode="out-in")
        router-view.router-view
</template>
