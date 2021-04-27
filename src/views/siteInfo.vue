<!--站点信息-->
<template>
  <div class="full_box">

    <!--header-->
    <div class="content_center" style="position:fixed; top:0; height:50px; width:inherit; top:0;">
      <div class="col-xs-3">
        <img src="../assets/imgs/icon/back.png" width="25" height="25" alt="返回" />
      </div>
      <div class="col-xs-6" align="center" style="font-size:16px;">站点信息</div>
      <div class="col-xs-3"></div>
    </div>

    <!--分割线-->
    <div class="split_box">
      <div class="split_line"></div>
    </div>
    
    <div class="container-fluid" style="height:100%; padding-left:0; padding-right:0;">
      <div class="col-md-2"></div>
      <div class="col-xs-12 col-md-8" style="position:relative; height:100%; padding-left:0; padding-right:0;">
        <!--展示区域-->
        <div class="full_box" style=" padding-top:50px; overflow-x:hidden;">
          <div class="full_box" style="box-sizing:content-box; padding-right:25px;  overflow-y:scroll;">
            <div style="padding-left:10px; padding-right:10px;">
              <!--博客名称-->
              <div class="siteinfo_item" style="height:80px; margin-top:20px;">
                <span class="title">博客名称</span>
                <span></span>
                <div>
                  <div style="width:120px;">
                    <input type="text" value="南国晚秋" style="font-size:18px;" />
                  </div>
                  
                  <span style="font-size:12px; padding-top:5px; padding-left:2px;">2020-10-10</span>
                </div>
                <div style="position:absolute; left:150px; top:10px;">
                  <div style="width:62px; height:62px; border:1px solid #ccc;">
                    <img src="../assets/imgs/headimg.jpg" width="100%" height="100%" />
                  </div>
                </div>
              </div>
              
              <!--背景图片-->
              <div class="siteinfo_item" style="height:150px;">
                <span class="title">背景图片</span>
                <div style="height:120px; display:flex;">
                  <div style="height:100%; width:500px; border:1px solid #ccc;">
                    <img style="width:100%; height:100%;" src="../assets/imgs/topimg15.jpg" />
                  </div>
                </div>
              </div>
              
              <!--简介地址-->
              <div class="siteinfo_item" style="height:50px;">
                <span class="title">简介地址</span>
                <span class="iconfont icon-chrome" style="vertical-align: middle;"></span>
                <div class="" style="width:300px;">
                  <input type="text" value="http://www.fanchaojian.vicp.io:8080/article/1" />
                </div>
                
              </div>
              
              <!--网站二维码-->
              <div class="siteinfo_item" style="height:50px;">
                <span class="title">站点二维码地址</span>
                <span class="iconfont icon-qrcode" style="vertical-align: middle;"></span>
                <div class="" style="width:300px;">
                  <input type="text" value="http://www.fanchaojian.vicp.io:8080" />
                </div>
              </div>
              
              <div class="siteinfo_item content_center" style="height:100px;">
                <button id="modify" @click="modify" class="doSomething" style="width:120px;">修改</button>
                <button id="save" onclick="save()" class="doSomething" style="width:120px;">保存</button>
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
export default {
  name:"siteInfo",
  data() {
    return {
      
    }
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

<style scope>
  input {
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

  .siteinfo_item {
		position:relative; margin-bottom:15px;
	}
	
	.siteinfo_item .title {
		font:bold 12px/30px Microsoft YaHei; color:green;
	}
	
</style>