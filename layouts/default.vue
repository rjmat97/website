<template>
  <div id="app" :style="styles">
    <HeaderBar/>
    <div style="min-height: 70vh; height: 100%">
      <Nuxt />
    </div>    
    <el-dialog
      :visible.sync="dialogVisible" :fullscreen="true" :style="`background: blue`"
      width="100%" @visible-change="dialogVisible(false)"
      center>
        <div class="main-holder">
          <div class="top" @click="$store.dispatch('dialogVisible',false)">

            <img :src="require('@/assets/exit.svg')" 
             class="controls-img">
          </div>
          <span>
              <el-col :span="2">
                <div @click="$store.dispatch('loadPrev')" style="width: 10vw" v-if="leftActive">
                  <img class="controls left-but" :src="require('@/assets/arrow.svg')">
                </div>
                <div style="width: 10vw; filter: invert(80%)" v-if="!leftActive">
                  <img class="controls left-but" :src="require('@/assets/arrow.svg')">
                </div>
              </el-col>
      
              <el-col :span="20">
                <div style="width: 100%; display: block;">
                  <img class="full-image" id="image-holder" 
                    :src="imagenow" :style="imgProps">
                </div> 
              </el-col>
      
              <el-col :span="2">
                <div @click="$store.dispatch('loadNext')" style="width: 10vw" v-if="rightActive">
                  <img disabled="true" class="controls right-but" :src="require('@/assets/arrow.svg')">
                </div>
                <div style="width: 10vw; filter: invert(80%)" v-if="!rightActive">
                  <img disabled="true" class="controls right-but" :src="require('@/assets/arrow.svg')">
                </div>
              </el-col>
          </span>
        </div>
    </el-dialog>

    <Footnote/>
  </div>
</template>

<script>
  export default {
    name: 'layout',
    computed:{
        rightActive() {return this.$store.state.rightArrState},
        leftActive()  {return this.$store.state.leftArrState},
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
              return (img.clientWidth>img.clientWidth) ? "width: 70vh; height" : "height:50vw;"
            }catch{
              return "width:90%;"
            }
          }else return ""
        },
        imagenow(){
          return this.$store.state.imageNow.replace(/\.(jpg|png)$/, '_o.$1') 
        },
        curlink(){
          return this.$store.state.imageNow.replace(/https:\/\/live\.staticflickr\.com\/\d+(.*)\/\.(jpg|png)/, '\$2')
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
  .main-holder{
    width: 100%;
    display: flex; 
    align-items: center;
    position: absolute;
    flex-direction: column;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: rgb(27, 27, 27);
  }
  span{
    display: flex; 
    align-items: center;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: rgb(27, 27, 27);
  }
  .el-dialog.el-dialog--center{
    background: rgb(27, 27, 27);
  }
  .controls-img{
     width:2vw; 
     filter:invert(100%); 
     margin: 40px;
     position: absolute;
     right: 0;
  }
  .controls{
    width: 2vw;
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
