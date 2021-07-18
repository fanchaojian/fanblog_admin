<!--发布创建文章-->
<template>
  <div class="full_box">
    <!--header-->
    <div style="position:fixed; top:0; width:inherit; top:0; z-index:1000;">
      <my-header pageName="写博客" doSearch="false" backPath="/" />
    </div>

    <!--内容-->
    <div class="container-fluid" style="height:100%; padding-left:0; padding-right:0;">
      <div class="col-md-2"></div>
      
      <div class="col-xs-12 col-md-8" style="position:relative; height:100%;padding-left:0; padding-right:0;">
        
        <!--展示区域-->
        <div style="width:100%; height:100%; padding-top:50px; padding-bottom:70px;overflow-x:hidden;">
          <div id="content_box" style="width:100%; height:100%; box-sizing:content-box; padding-right:25px;  overflow-y:scroll;">
            <div style="width:100%; height:100%; margin-top:20px; padding-left:10px; padding-right:10px;">
              <input type="text" style="line-height:40px; font-size:25px;" placeholder="请在这儿输入标题" />
              <input type="text" style="line-height:20px; margin-bottom:10px;" placeholder="请输入作者" />
              <div class="editor-wrapper">
                <textarea id="editor" placeholder="Content here ...."></textarea>
              </div>
              
              <!--封面和标题-->
              <p>封面和摘要</p>
              <div style="background-color:white ; position:relative;" class="cover_title_box">
                <div style="padding:1px; width:100px; min-width:100px; border-right:1px solid #eee;">
                  <!--封面图片选择并预览-->
                  <div class="full_box" id="prompt3">
                    <img src="@/assets/imgs/icon/plus.png" width="36" style="position:absolute; top:32px; left:32px;"/>
                    <input type="file" id="file" class="filepath" @change="changepic"  accept="image/jpg,image/jpeg,image/png,image/PNG">
                  </div>
                  <div class="full_box" id="imgView" @mouseover="imgClear" @mouseout="hideClear" style="display:none; position:relative;">
                    <img src="#" id="img3" style="width:100%; height:100%;"/>
                    <img id="clearChoice" src="@/assets/imgs/icon/delete.png" @dblclick="chearImg" width="36" style="position:absolute; top:32px; left:32px; display:none;"/>
                  </div>
                  
                </div>
                <div style="min-width:250px; height:100%; flex-grow:2; padding:5px 10px;">
                  <div style="height:100%; width:100%;">
                    <textarea placeholder="请输入文章简介" style="width:100%; height:100%;"></textarea>
                  </div>
                </div>
              </div>
              
              <!--选择标签-->
              <p style="margin-top:25px;">标签选择</p>
              <hr />
              <span style="color:green;">标签库</span>
              <div style="display:inline-block; margin-left:25px;">
                <span style="font-size:12px;">JAVA随记</span>
                <span class="iconfont icon-close" style="color:orange;"></span>
              </div>
              <!--获取标签库所有的标签-->
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
                </ul>
              </div>
              
              <hr />
              <p style="color:green;">新标签</p>
              <input type="text" placeholder="请输入新标签名"  style="border-bottom:1px solid #ccc; width:150px;"/>
              

              <!--额外的链接-->
              <div style="width:100%; height:auto; border:1px solid #F1F3FA; border-radius:4px; background-color:#F1F3FA; font-size:12px; padding:10px; margin:30px 0px;">
                <p>你可以在这儿进入</p>
                <p style="color:#1E90FF; cursor:pointer;">文章管理</p>
                <p style="color:#1E90FF; cursor:pointer;">标签管理</p>
              </div>

              
            </div>
          </div>
        </div>
        
        <div class="content_center" style="height:60px; position:fixed; width:inherit; bottom:0;">
          <div class="doSomething" style="height:25px; width:80px; ">
            <span>保存</span>
          </div>
          <div class="doSomething" style="height:25px; width:80px;">
            <span>发布</span>
          </div>
          <div class="doSomething" style="height:25px; width:80px; ">
            <span>预览</span>
          </div>
        </div>
        
      </div>
	    <div class="col-md-2"></div>
      
    </div>

    <!-- Large modal -->

  </div>
</template>

<script>
/*markdown富文本编辑器 lepture/editor*/
import {myEditor} from '@/assets/editor/editor.js' 
import {marked} from '@/assets/editor/marked.js'
import myHeader from '@/components/Header.vue'

export default {
  name:"articleNew",
  data() {
    return {
      
    }
  },
  components:{
    myHeader
  },
  methods: {
    //选择图片
    changepic:function(){
      $("#prompt3").css("display", "none");
      var reads = new FileReader();
      var f = document.getElementById('file').files[0];
      reads.readAsDataURL(f);
      reads.onload = function(e) {
        document.getElementById('img3').src = this.result;
        $("#imgView").css("display", "block");
      };
    },
    //清除已经选择的图片
    imgClear:function(){
      $("#clearChoice").show() ;
    },
    hideClear:function(){
      $("#clearChoice").hide() ;
    },
    chearImg:function(){
      $("#img3").attr("src","") ;
      $("#file").val("") ;
      $("#imgView").hide() ; 
      $("#prompt3").show() ; 
    }
  },
  mounted() {
      var editor = new Editor();
      editor.render();
      
      //判断页面是手机端还是电脑端
      if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
        $(".icon-fullscreen").hide() ; 
      }
  },
  created() {
    myEditor(window) ; 
    window.marked = marked ; 
  }
}
</script>

<style scoped>
 hr {
   margin-top:0;
 }
.container {
		width:100%;
		height:100%;
	}

	a:hover {
		cursor:pointer;
	}
	
	input,textarea {
		border:0 ;
		outline:0 ;
		background:none;
		width:inherit;
	}
	
  .filepath {
    width: 100%;
    height: 100%;
    opacity: 0;
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

	.editor-wrapper {
        max-width: 1000px;
    }
	
	.editor-preview::-webkit-scrollbar {display:none}
	
	.cover_title_box {
		width:100%; 
		height:100px; 
		margin-top:15px; 
		display:flex;
		flex-direction:row ; 
		flex-wrap:nowrap ;
		justify-content:flex-start ;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)  ; 
    border-radius:5px;
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