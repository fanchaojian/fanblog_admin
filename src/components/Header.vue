<template>
    <div class="full_width" style="height:50px; background-color:azure;">
        <div class="col-xs-4 content_center_start" style="height:100%; padding-right:0;">
            <span @click="back" class="iconfont icon-left"></span>
            <span style="margin-left:20px;">{{pageName}}</span>
        </div>
        <div v-if="seatchFun" class="col-xs-8 content_center_end" style="height:100%; padding-left:0;">
            <input id="searchHere" @click="searchFocus($event)" type="text" style=""/>
            <span @click="searchByKeywords"  class="iconfont icon-search"></span>
        </div>
    </div>
</template>


<script>
export default {
  name:"",
  data() {
    return {
      seatchFun:this.doSearch == "true" ? true:false
    }
  },
  props:{
	  pageName:String,
	  doSearch:String,
	  backPath:String
  },
  methods: {
    searchFocus(obj){
        var $el = $(obj.currentTarget) ;
        $el.css("width","150px") ; 
    },
    back(){
		this.$router.push({
			path:this.backPath,
		})
	},
     //关键字搜索
    searchByKeywords:function(){
        //获取输入框的值
        var keyWords = $("#searchHere").val().trim() ;
        //通过事件绑定机制，将值传递到父组件中
        this.$emit('func',keyWords) ;
    }
  }
}
</script>

<style scoped>
#searchHere {
    width:45px; 
    height:25px; 
    margin-right:10px; 
    border:1px solid #ddd; 
    outline:0; 
    border-radius:5px;
    -moz-transition: width 0.8s; /* Firefox 4 */
    -webkit-transition: width 0.8s; /* Safari 和 Chrome */
    -o-transition: width 0.8s; /* Opera */
}

#searchHere:focus {
    box-shadow: 0 0 2px 1px ddd;
}

</style>
