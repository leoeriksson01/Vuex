<template>
  <div>
      <h1 @click="removeStudent"> {{ student }} </h1>
</div>
</template>

<script>
export default {
    props: ['student'],
    methods: {
        removeStudent() {
            this.$store.commit('removeStudent', this.student)
        }
    }


}
</script>

<style>

</style>