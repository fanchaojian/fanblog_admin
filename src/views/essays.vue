<!--随笔管理-->
<template>
  <div class="full_box">
    <!--header-->
    <div style="position:fixed; top:0; width:inherit; top:0; z-index:1000;">
      <my-header pageName="我的随笔" doSearch="false" backPath="/" />
    </div>

    <div class="container-fluid" style="height:100%; padding-left:0; padding-right:0;">
      <div class="col-md-2"></div>
      <div class="col-xs-12 col-md-8" style="position:relative; height:100%;padding-left:0; padding-right:0;">
        <!--展示区域-->
        <div style="width:100%; height:100%; padding-top:50px; overflow-x:hidden;">
          <div id="content_box" style="width:100%; height:100%; box-sizing:content-box; padding-right:25px;  overflow-y:scroll;">
            <div style="padding-left:10px; padding-right:10px; width:100%; height:100px;">
              <div style="width:150px; height:80px; border:1px solid #AFEEEE; border-radius:4px;margin-top:30px; text-align:center;">
                <span class="iconfont icon-plus" style="line-height:80px;"></span>
              </div>
            
              <!--随笔列表-->
              <div style="background-color:white ;" class="essay_box">
                <p>
                  <span class="icon-calendar-check iconfont essay_icon"></span>
                  <time>2020-06-11</time>
                </p>
                <p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
              </div>
              <div style="background-color:white ;" class="essay_box">
                <p>
                  <span class="icon-calendar-check iconfont essay_icon"></span>
                  <time>2020-06-11</time>
                </p>
                <p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
              </div>
              <div style="background-color:white ;" class="essay_box">
                <p>
                  <span class="icon-calendar-check iconfont essay_icon"></span>
                  <time>2020-06-11</time>
                </p>
                <p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
              </div>
              <div style="background-color:white ;" class="essay_box">
                <p>
                  <span class="icon-calendar-check iconfont essay_icon"></span>
                  <time>2020-06-11</time>
                </p>
                <p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
              </div>
              <div style="background-color:white ;" class="essay_box">
                <p>
                  <span class="icon-calendar-check iconfont essay_icon"></span>
                  <time>2020-06-11</time>
                </p>
                <p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
              </div>
              <div style="background-color:white ;" class="essay_box">
                <p>
                  <span class="icon-calendar-check iconfont essay_icon"></span>
                  <time>2020-06-11</time>
                </p>
                <p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
              </div>
              <div style="background-color:white ;" class="essay_box">
                <p>
                  <span class="icon-calendar-check iconfont essay_icon"></span>
                  <time>2020-06-11</time>
                </p>
                <p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
              </div>
              <div style="background-color:white ;" class="essay_box">
                <p>
                  <span class="icon-calendar-check iconfont essay_icon"></span>
                  <time>2020-06-11</time>
                </p>
                <p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
              </div>
              <div style="background-color:white ;" class="essay_box">
                <p>
                  <span class="icon-calendar-check iconfont essay_icon"></span>
                  <time>2020-06-11</time>
                </p>
                <p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
              </div>
              <div style="background-color:white ;" class="essay_box">
                <p>
                  <span class="icon-calendar-check iconfont essay_icon"></span>
                  <time>2020-06-11</time>
                </p>
                <p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
              </div>
            </div>
            
            
          </div>
        </div>
        
        
      </div>
      
      
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/Header.vue'

export default {
  name:"essays",
  data() {
    return {
      
    }
  },
  components:{
    myHeader,
  },
  methods: {
    
  },
  
  mounted() {
    
  },
}
</script>

<style scoped>
  input,textarea {
		border:0 ;
		outline:0 ;
		background:none;
		width:inherit;
	}
	
	.data_modify::after {
		content:'' ;
		width:inherit ;
		border-bottom:0.5px solid #87CEFA ;
		box-shadow:0 1px 2px 0 #87CEFA;
		display:block;
		margin-bottom:5px;
	}
	
	#content_box::-webkit-scrollbar {display:none}
	.function_group::-webkit-scrollbar {display:none}
	
	
	 .essay_icon {
		font-size:14px;
		color:#FF4500;
		padding-right:5px;
	}
	.essay_box {
		width:100%; height:100px; margin-top:20px; padding:10px 20px 20px 10px; border:1px solid #AFEEEE; border-radius:8px;
	}
	.essay_box:hover {
		border:1px solid #87CEFA;
		box-shadow: 0 0 2px 2px #F0F8FF;
	}
	.essay_content {
    font-size:12px;
    }
    time {
        font-size:12px;margin-bottom:10px;
    }
</style>