<template>
  <div id="app" :style="styles">
    <HeaderBar/>
    <div style="min-height: 70vh; height: 100%">
      <Nuxt />
    </div>    

    <el-dialog
      title="Images"
      :visible.sync="dialogVisible" :fullscreen="true" :style="`background: blue`"
      width="100%" @visible-change="dialogVisible(false)"
      center>
      <span style="display: flex">
        <!-- <el-col :span="22" :offset="1" :lg="{span: 18, offset: 3}"> -->
          <div @click="$store.dispatch('loadPrev')">previous</div>
          <img class="full-image" :src="$store.state.imageNow">
          <div @click="$store.dispatch('loadNext')">next</div>
        <!-- </el-col> -->
      </span>
    </el-dialog>

    <Footnote/>
  </div>
</template>

<script>
  export default {
    name: 'layout',
    computed:{
        styles() {return `background: ${this.$store.state.background};`+
                              ` color:     ${this.$store.state.color}`
        },
        dialogVisible:{
          get()    {return this.$store.state.dialogVisible},
          set(data) {this.$store.dispatch('dialogVisible', data)}
        }
    },
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
  .full-image{
    display: block;
    align-items: center;
    margin-bottom: auto;
    margin-top: auto;
    max-height: 90vh;
  }
  /* span{
    height: 100%;
    width: 100%;
    color: white;
  } */
  .el-dialog.el-dialog--center{
    background: rgb(27, 27, 27);
  }
</style>
