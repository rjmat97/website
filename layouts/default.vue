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
      <span>
        
              <el-col :span="2">
                <div @click="$store.dispatch('loadPrev')" style="width: 10vw">
                  <img class="controls left-but" :src="require('@/assets/arrow.svg')">
                </div>
              </el-col>

              <el-col :span="20">
                <div style="width: 100%; display: block;">
                  <img class="full-image" id="image-holder" 
                    :src="$store.state.imageNow" :style="imgProps">
                </div> 
              </el-col>

              <el-col :span="2">
                <div @click="$store.dispatch('loadNext')" style="width: 10vw">
                  <img class="controls right-but" :src="require('@/assets/arrow.svg')">
                </div>
              </el-col>
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
        },
        imgProps(){
          if(this.dialogVisible){
            try{
              let img = document.getElementById('image-holder')
              return (img.clientWidth>img.clientWidth) ? "width:100%;" : "height:70vh;"
            }catch{
              return "width:90%;"
            }
          }else return ""
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
    margin-left: auto;
    margin-right: auto;
    /* width: 100%; */
  }
  span{
    display: flex; 
    align-items: center;
    position: absolute;
    top:6;
    bottom: 1;
    left: 0;
    right: 0;
    margin: auto;
  }
  .el-dialog.el-dialog--center{
    background: rgb(27, 27, 27);
  }
  .controls{
    width: 4em;
    display: block;
    padding-left: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .left-but{
    transform: rotate(90deg);
  }
  .right-but{
    transform: rotate(-90deg);
  }
</style>
