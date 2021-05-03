<template>
  <div id="app" :style="styles">
    <HeaderBar/>
    <div style="min-height: 70vh; height: 100%">
      <Nuxt />
    </div>
    <Footnote/>
  </div>
</template>

<script>
  export default {
    name: 'layout',
    computed:{
        styles() {return `background: ${this.$store.state.background};`+
                              ` color:     ${this.$store.state.color}`
        }
    }
  }
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
