<template>
  <section class="section is-medium has-text-centered">
    <img class="logo" src="~/assets/img/for_the_public_logo.svg">

  </section>
</template>

<script>
export default {
  data () {
    return {
      page: {
        intro: ""
      }
    }
  },
  async asyncData ({ app }) {
    return {
      posts: await app.$content('/').getAll()
    }
  }
}
</script>

<style lang="scss">
.logo {
	width: 240px;
}
.intro {
	font-size: 2em;
	max-width: 400px;
	font-style: italic;
	margin: 1.5em auto;
}
</style>
