<!--登录信息-->
<template>
  <div class="full_box">
    <!--header-->
    <div style="position:fixed; top:0; width:inherit; top:0; z-index:1000;">
      <my-header pageName="我的信息" doSearch="false" backPath="/" />
    </div>

    
    <div class="container-fluid" style="height:100%; padding-left:0; padding-right:0;">
      <div class="col-md-2"></div>
      <div class="col-xs-12 col-md-8" style="position:relative; height:100%; padding-left:0; padding-right:0;">
        
        <!--展示区域-->
        <div style="width:100%; height:100%; padding-top:50px; overflow-x:hidden;">
          <div style="width:100%; height:100%; box-sizing:content-box; padding-right:25px;  overflow-y:scroll;">
            <div style=" padding:0 10px 65px;">
              <!--博客名称-->
              <div class="siteinfo_item" style="margin-top:20px;">
                <span class="title">管理员昵称</span>
                <span></span>
                <div>
                  <div class="" style="width:140px; margin-top:20px;">
                    <input type="text" value="你若在，便好！" style="font-size:18px;" />
                  </div>
                </div>
                <div style="position:absolute; left:150px; top:10px;">
                  <div style="width:62px; height:62px; border:1px solid #ccc;">
                    <img src="../assets/imgs/headimg.jpg" width="100%" height="100%" />
                  </div>
                </div>
              </div>
              
              <div class="siteinfo_item" style="height:50px;">
                <span class="title">性别</span>
                <div style="width:30px;">
                  <input type="text" value="男" />
                </div>
              </div>
              
              <div class="siteinfo_item">
                <span class="title" style="height:50px;">我的职业</span>
                <div style="width:300px;">
                  <input type="text" value="salesforce开发工程师，java开发工程师。" />
                </div>
              </div>
              
              <div class="siteinfo_item" style="height:50px;">
                <span class="title">QQ邮箱</span>
                <div style="width:180px;">
                  <input type="text" value="1948556024@qq.com" />
                </div>
              </div>
              
              <div class="siteinfo_item" style="height:50px;">
                <span class="title">我的爱好</span>
                <div class="" style="width:300px;">
                  <input type="text" value="IT，数码，科技，拍照，旅行，游戏。" />
                </div>
              </div>
              
              <div class="siteinfo_item" style="height:50px;">
                <span class="title">励志格言</span>
                <div style="width:320px;">
                  <input type="text" value="若成为一只小鸟，则永远不知道雄鹰眼里的天空。" />
                </div>
              </div>
              
              <div class="siteinfo_item" style="height:50px;">
                <span class="title">我的文章简介地址</span>
                <div style="width:300px;">
                  <input type="text" value="http://www.fanchaojian.vicp.io:8080/article/2" />
                </div>
              </div>
              
              <div class="siteinfo_item" style="height:150px;">
                <div style="height:30px; display:flex; margin-bottom:10px;">
                  <div style="height:100%; width:480px; border-bottom:1px dashed #ccc; text-align:center;">
                    <span class="title">到哪儿能找到我？</span>
                  </div>
                </div>
                
                <div style="height:120px;">
                  <div class="op_box_wapper">
                    <div class="content_center full_box">
                      <div class="op_box">
                        <span>QQ</span>
                        <div class="img_box">
                          <img class="full_box" src="../assets/imgs/qq_QR.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="op_box_wapper">
                    <div class="content_center full_box">
                      <div class="op_box">
                        <span>微信</span>
                        <div class="img_box">
                          <img class="full_box" src="../assets/imgs/weChat.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="op_box_wapper">
                    <div class="content_center full_box">
                      <div class="op_box">
                        <span>公众号</span>
                        <div class="img_box">
                          <img class="full_box" src="../assets/imgs/weChat_GZH.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="siteinfo_item" style="height:50px;">
                <span class="title">微博地址</span>
                <div style="width:300px;">
                  <input type="text" value="https://weibo.com/u/5897652360?is_all=1" />
                </div>
              </div>
              
              <div class="siteinfo_item" style="height:50px;">
                <span class="title">github地址</span>
                <div style="width:300px;">
                  <input type="text" value="https://www.github.com/fanchaojian" />
                </div>
              </div>
              
              
              
              <div class="content_center" style="width:100%;  position:relative;">
                <div class="content_center" style="height:60px; position:fixed; width:inherit; bottom:0; background-color:#fff;">
                  <div class="doSomething" style="height:25px; width:80px; ">
                    <span @click="modify">修改</span>
                  </div>
                  <div class="doSomething" style="height:25px; width:80px;">
                    <span>保存</span>
                  </div>
                </div>
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
  name:"loginInfo",
  data() {
    return {
      
    }
  },
  components:{
    myHeader,
  },
  methods: {
    modify:function(){
      $("input").removeAttr("disabled"); 
      $("input:first").focus() ; 
      $("input").parent("div").addClass("data_modify") ; 
    }
  },
  mounted() {
    $("input").attr("disabled","disabled"); 

  },
}
</script>

<style scoped>
  
	input {
		border:0 ;
		outline:0 ;
		background:none;
		width:inherit;
		margin-left:-1px;
	}
	
	.data_modify::after {
		content:'' ;
		width:inherit ;
		border-bottom:0.5px solid #AFEEEE ;
		box-shadow:0 1px 2px 0 #AFEEEE;
		display:block;
		margin-bottom:5px;
	}
	
	.siteinfo_item {
		position:relative; margin-bottom:15px;
	}
	
	.siteinfo_item .title {
		font:bold 12px/30px Microsoft YaHei; color:green;
	}
	
	.op_box_wapper {
		width:160px; height:120px; display:table-cell;
	}
	
	.op_box {
		height:100%; 
		width:80px; 
		margin-left:5px; 
		margin-right:5px; 
		text-align:center;
	}
	
	.img_box {
		width:80px; 
		height:80px; 
		border:1px solid #ccc; 
		margin-top:5px;
		box-shadow: 0 0 4px 0 #bbb;
	}
</style>