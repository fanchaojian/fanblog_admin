<!--标签管理-->
<template>
  <div class="full_box">
    <!--header-->
    <div style="position:fixed; top:0; width:inherit; top:0; z-index:1000;">
      <my-header pageName="标签管理" doSearch="false" backPath="/" />
    </div>


    <div class="container-fluid" style="height:100%; padding-left:0; padding-right:0;">
      <div class="col-md-2"></div>
      
      <div class="col-xs-12 col-md-8" style="position:relative; height:100%;padding-left:0; padding-right:0;">
        <!--展示区域-->
        <div style="width:100%; height:100%; padding-top:50px; padding-bottom:70px; overflow-x:hidden;">
          <div id="content_box" style="width:100%; height:100%; box-sizing:content-box; padding-right:25px;  overflow-y:scroll;">
            <div class="" onclick="hideExtra()" style="">
              <!--我的标签列表-->
              <hr />
              <div class="full_width" style="">
                <ul id="tags">
                  <li>Java</li>
                  <li>PHP</li>
                  <li>Python</li>
                  <li>C++</li>
                  <li>生活</li>
                  <li>工作</li>
                  <li>Salesforce</li>
                  <li>CSS疑点</li>
                  <li>家</li>
                  <li>成都</li>
                  <li>山川日景</li>
                  <li>养花种草</li>
                  <li>旅游</li>
                  <li>朋友</li>
                  <li class="iconfont icon-plus" title="添加标签"></li>
                </ul>
                <hr />
              </div>

              
              <!--标签详情信息-->
              <div style="padding-left:10px; padding-right:10px; padding-top:25px;">
                
                <div class="tagInfo_item">
                  <span class="title" style="height:50px;">标签名称</span>
                  <div style="width:300px;">
                    <input class="able" type="text" value="JAVA随记" />
                  </div>
                </div>
                
                <div class="tagInfo_item">
                  <span class="title" style="height:50px;">创建时间</span>
                  <div style="width:300px;">
                    <input type="text" value="2020-10-1- 14:20:32" />
                  </div>
                </div>
                
                <div class="tagInfo_item" style="height:150px;">
                  <span class="title">简介地址</span>
                  <div style="height:120px; display:flex;">
                    <div style="height:100%; width:100%; padding:5px; border-radius:5px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)  ; ">
                      <textarea class="able" style="width:100%; height:100%;">生活本来就是孤独且无趣的，要是有一个人，陪你聊天，陪你游玩，和你分享生活中的琐事，不管高兴的还是悲伤的，不要感觉到厌烦，那是上天在这个世界送给你最好的礼物。“会者定离，一期一祈。”，不要等到失去了才去怀恋，请你好好爱护他。
                      </textarea>
                    </div>
                  </div>
                </div>
                
                
                <!--额外的链接-->
                <div style="width:100%; height:auto; border:1px solid #F1F3FA; border-radius:4px; background-color:#F1F3FA; font-size:12px; padding:10px; margin:30px 0;">
                  <p>你可以在这儿进入</p>
                  <p style="color:#1E90FF; cursor:pointer;">去写文章</p>
                  <p style="color:#1E90FF; cursor:pointer;">文章管理</p>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
        
        <div class="content_center" style="height:60px; position:fixed; width:inherit; bottom:0;">
          <div class="doSomething" style="height:25px; width:80px; ">
            <span id="modify" @click="modify">修改</span>
          </div>
          <div class="doSomething" style="height:25px; width:80px;">
            <span id="save" onclick="save()">保存</span>
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
  name:"tags",
  data() {
    return {
      
    }
  },
  components:{
    myHeader,
  },
  methods: {
    modify:function(){
      $("input,textarea").filter(".able").removeAttr("disabled"); 
      $("input:first").focus() ; 
      $("input,textarea").filter(".able").parent("div").addClass("data_modify") ; 
    }
  },
  mounted() {
    $("input,textarea").attr("disabled","disabled"); 
  },
}
</script>

<style scoped>
a:hover {
		cursor:pointer;
	}
	
	input,textarea {
		border:0 ;
		outline:0 ;
		background:none;
		width:inherit;
	}
	
	.data_modify::after {
		content:'' ;
		width:inherit ;
		border-bottom:0.5px solid #AFEEEE ;
		box-shadow:0 1px 2px 0 #AFEEEE;
		display:block;
		margin-bottom:5px;
	}

	
	.function_group_title {
		font:bold 16px/40px SimSun; color:#555;
	}
	
	.function_group_wrapper {
		border-bottom:1px dashed #bbb ;
		overflow-y: hidden;
		height:150px;
		padding-left:10px;
		padding-right:10px;
	}
	
	.function_group {
		overflow-x:scroll ;
		overflow-y: hidden;
		padding-bottom:25px;
		box-sizing: content-box;
		-webkit-overflow-scrolling: touch;
	}
	#content_box::-webkit-scrollbar {display:none}
	.function_group::-webkit-scrollbar {display:none}
	
	
	.op_box {
		display:table-cell;
	}
	
	.tag_box {
		width:100px; height:35px; margin-left:10px; margin-right:10px;
		border-radius:4px;
		text-align:center ;
		line-height:35px;
	}
	.tagInfo_item {
		position:relative; margin-bottom:15px;
	}
	
	.tagInfo_item .title {
		font:bold 12px/30px Microsoft YaHei; color:green;
	}

   #tags {
    display: block;
    padding-left: 0;
    list-style: none;
  }

  #tags li {
    display:inline-block;
    cursor: pointer;
    padding:5px 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)  ; 
    margin:5px;
    border-radius:5px;
  }

  #tags li:hover {
    border:0;
    background-color: azure;
    
  }

</style>