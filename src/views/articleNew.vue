<!--发布创建文章-->
<template>
  <div class="full_box">
    <div class="content_center" style="position:fixed; top:0; height:50px; width:inherit; top:0;">
      <div class="col-xs-3">
        <img src="../assets/imgs/icon/back.png" width="25" height="25" alt="返回" />
      </div>
      <div class="col-xs-6" align="center" style="font-size:16px;">发布文章</div>
      <div class="col-xs-3"></div>
    </div>

    <!--分割线-->
    <div class="split_box">
      <div class="split_line"></div>
    </div>

    <!--内容-->
    <div class="container-fluid" style="height:100%; padding-left:0; padding-right:0;">
      <div class="col-md-2"></div>
      
      <div class="col-xs-12 col-md-8" style="position:relative; height:100%;padding-left:0; padding-right:0;">
        
        <!--展示区域-->
        <div style="width:100%; height:100%; padding-top:50px; padding-bottom:60px; margin-bottom:50px; overflow-x:hidden;">
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
                <div style="padding:4px; width:150px; min-width:90px; border-right:1px solid #ccc;">
                  <img src="../assets/imgs/ggg.jpg" width="100%" height="100%" />
                </div>
                <div style="min-width:250px; height:100%; flex-grow:2; padding:5px 10px;">
                  <div style="height:100%; width:100%;">
                    <textarea placeholder="请输入文章简介" style="width:100%; height:100%;"></textarea>
                  </div>
                </div>
              </div>
              
              <!--选择标签-->
              <p style="margin-top:25px;">标签选择</p>
              <span style="color:green; cursor:pointer; ">
                <span style="text-decoration:underline;">从标签库选择</span>
                <span style="vertical-align: middle;" class="iconfont icon-right"></span>
              </span>
              
              <span style="color:green; cursor:pointer; padding-left:80px; text-decoration:underline;">
                <span>新标签</span>
              </span>
              
              
              <!--额外的链接-->
              <div style="width:100%; height:auto; border:1px solid #eee; border-radius:4px; background-color:#eee; font-size:12px; padding:10px; margin:30px 0px;">
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
  </div>
</template>

<script>
/*markdown富文本编辑器 lepture/editor*/
import {myEditor} from '@/assets/editor/editor.js' 
import {marked} from '@/assets/editor/marked.js'


export default {
  name:"articleNew",
  data() {
    return {
      
    }
  },
  methods: {
    
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

<style scope>
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
		padding:; border:1px solid #ccc;
		display:flex;
		flex-direction:row ; 
		flex-wrap:nowrap ;
		justify-content:flex-start ;
	}

</style>