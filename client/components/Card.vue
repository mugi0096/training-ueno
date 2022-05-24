<template>
  <v-img :src="thumbnailPath"></v-img>
</template>

<script lang="ts">
export default {
  data(): {
    thumbnailPath: string
  } {
    return {
      thumbnailPath: require('../assets/Rectangle17.png')
    }
  }
}
</script>

<style>

</style>