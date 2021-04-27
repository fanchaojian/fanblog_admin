<!--首页-->
<template>
  <div class="full_box"> 
    <div id="header" class="content_center" style="">
      <div class="col-xs-6 content_center" style="-webkit-box-pack:start;-moz-box-pack:start; box-pack:start;">
        <div @click="showExtra" style="width:30px; height:30px; border-radius:50%;">
          <img src="../assets/imgs/headimg.jpg" width="100%" height="100%" style="border-radius:50%;"/>
        </div>
        <div style="font:20px 楷体; padding-left:10px;">南国晚秋</div>
      </div>
      
      <div class="col-xs-6 content_center" style="-webkit-box-pack:end; -moz-box-pack:end; box-pack:start;">
        <div class="content_center" style="width:22px; height:22px; border-radius:50%; border:1px solid #aaa; margin-right:8px;" >
          <span class="iconfont icon-mail"></span>
        </div>
        
        <div style="width:30px; height:30px; border-radius:50%;">
          <img src="../assets/imgs/ggg.jpg" width="100%" height="100%" style="border-radius:50%;"/>
        </div>
        <div style="font:16px 宋体; padding-left:8px;">你若在，便好</div>
      </div>
    </div>
    <!--其他操作-->
    <div id="extra" class="function_group_wrapper" style="display:none;">
      <div class="function_group">
        <div id="extra_box" style="height:80px;">
          <div class="extra_item_box">
            <div class="content_center full_box">
              <div class="extra_item">
                <div class="content_center" style="height:50%; width:100%;">
                  <span class="iconfont icon-earth"></span> 
                </div>
                <div class="content_center" style="height:50%; width:100%;">
                  <span class="note" style="font-size:13px;">站点信息</span>
                </div>
              </div>
            </div>
          </div>
          <div class="extra_item_box">
            <div class="content_center full_box">
              <div class="extra_item">
                <div class="content_center" style="height:50%; width:100%;">
                  <span class="iconfont icon-user"></span> 
                </div>
                <div class="content_center" style="height:50%; width:100%;">
                  <span class="note" style="font-size:13px;">我的信息</span>
                </div>
              </div>
            </div>
          </div>
          <div class="extra_item_box">
            <div class="content_center full_box">
              <div class="extra_item">
                <div class="content_center" style="height:50%; width:100%;">
                  <span class="iconfont icon-deleteteam"></span> 
                </div>
                <div class="content_center" style="height:50%; width:100%;">
                  <span class="note" style="font-size:13px;">站点用户</span>
                </div>
              </div>
            </div>
          </div>
          <div class="extra_item_box">
            <div class="content_center full_box">
              <div class="extra_item">
                <div class="content_center" style="height:50%; width:100%;">
                  <span class="iconfont icon-logout"></span> 
                </div>
                <div class="content_center" style="height:50%; width:100%;">
                  <span class="note" style="font-size:13px;">退出登录</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <!--分割线-->
    <div style="position:fixed; top:65px; width:inherit; background-color:black; z-index:100;">
      <div style="width:100%; height:1.5px; background-color:#87CEFA;"></div>
    </div>

    
    <!--内容-->
    <div class="container-fluid" style="height:100%; padding-left:0; padding-right:0; padding-top:65px;">
      <div class="col-md-2"></div>
      <div class="col-xs-12 col-md-8" style="height:100%; padding-left:0; padding-right:0;">
        <div style="width:100%; height:100%; overflow-x:hidden;">
          <div style="width:100%; height:100%; box-sizing:content-box; padding-right:25px; overflow-y:scroll;">
            <div class="" @click="hideExtra" style="">
              <div class=" function_group_wrapper" style="height:255px;">
                <div style="height:40px;">
                  <span class="function_group_title">正在进行的工作</span>
                </div>
                <div class="function_group">
                  <div class="scroll_container" style="height:200px; ">
                    <div class="article_box">
                      <div style="width:100%; height:100px;">
                        <img src="../assets/imgs/eee.jpeg"/>
                      </div>
                      <div class="article_title_box">
                        <a>这个秋天和我一起呀。</a>
                        <span style="position:absolute; bottom:0; display:block;">创建于：2020-12-9 </span>
                      </div>
                    </div>
                    <div class="article_box" >
                      <div style="width:100%; height:100px;">
                        <img src="../assets/imgs/fff.jpg"/>
                      </div>
                      <div class="article_title_box">
                        <a>谢谢你，那个陪伴了我8年的女孩。</a>
                        <span style="position:absolute; bottom:0; display:block;">创建于：2020-12-9 </span>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
              
              
              <!--站点整体情况-->
              <div class=" function_group_wrapper" style="height:175px;">
                <div style="height:35px;">
                  <span class="function_group_title">站点整体情况</span>
                </div>
                
                <div class="function_group">
                  <div style="height:150px;">
                    <div class="siteinfo_box" style="width:160px; height:125px;">
                      <div class="content_center full_box">
                        <div class="info">
                          <div class="content_center" style="height:50%; width:100%;">
                            <span class="iconfont icon-read" style="font-size:20px;"></span>
                            <span style="font:bold 16px/20px 宋体; vertical-align: text-bottom; padding-left:5px;">文章</span> 
                          </div>
                          <div class="content_center" style="height:50%; width:100%;">
                            <span>65</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="siteinfo_box" style="width:160px; height:125px;">
                      <div class="content_center full_box">
                        <div class="info">
                          <div class="content_center" style="height:50%; width:100%;">
                            <span class="iconfont icon-eye" style="font-size:20px;"></span>
                            <span style="font:bold 16px/20px 宋体; vertical-align: text-bottom; padding-left:5px;">访客</span> 
                          </div>
                          <div class="content_center" style="height:50%; width:100%;">
                            <span>65</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="siteinfo_box" style="width:160px; height:125px;">
                      <div class="content_center full_box">
                        <div class="info">
                          <div class="content_center" style="height:50%; width:100%;">
                            <span class="iconfont icon-user" style="font-size:20px;"></span>
                            <span style="font:bold 16px/20px 宋体; vertical-align: text-bottom; padding-left:5px;">用户</span> 
                          </div>
                          <div class="content_center" style="height:50%; width:100%;">
                            <span>65</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="siteinfo_box" style="width:160px; height:125px;">
                      <div class="content_center full_box">
                        <div class="info">
                          <div class="content_center" style="height:50%; width:100%;">
                            <span class="iconfont icon-message" style="font-size:20px;"></span>
                            <span style="font:bold 16px/20px 宋体; vertical-align: text-bottom; padding-left:5px;">留言</span> 
                          </div>
                          <div class="content_center" style="height:50%; width:100%;">
                            <span>65</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              
              <!--新的创作-->
              <div class=" function_group_wrapper" style="height:175px;">
                <div style="height:35px;">
                  <span class="function_group_title">新的创作</span>
                </div>
                
                <div class="function_group">
                  <div style="height:150px;">
                    <div class="op_box" style="width:160px; height:125px;">
                      <div class="content_center full_box">
                        <div class="op_item" :style="{backgroundImage: 'url(' + require('@/assets/imgs/item/item1.jpg') + ')'}">
                          <div class="content_center" style="height:50%; width:100%;">
                            <span class="iconfont icon-edit" style="font-size:20px;"></span> 
                          </div>
                          <div class="content_center" style="height:50%; width:100%;">
                            <span style="font-size:13px;">文章</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="op_box" style="width:160px; height:125px;">
                      <div class="content_center full_box">
                        <div class="op_item" :style="{backgroundImage: 'url(' + require('@/assets/imgs/item/item2.jpg') + ')'}">
                          <div class="content_center" style="height:50%; width:100%;">
                            <span class="iconfont icon-file-add" style="font-size:20px;"></span> 
                          </div>
                          <div class="content_center" style="height:50%; width:100%;">
                            <span style="font-size:13px;">随笔</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="op_box" style="width:160px; height:125px;">
                      <div class="content_center full_box">
                        <div class="op_item" :style="{backgroundImage: 'url(' + require('@/assets/imgs/item/item3.jpg') + ')'}">
                          <div class="content_center" style="height:50%; width:100%;">
                            <span class="iconfont icon-tag" style="font-size:20px;"></span> 
                          </div>
                          <div class="content_center" style="height:50%; width:100%;">
                            <span style="font-size:13px;">标签</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="op_box" style="width:160px; height:125px;">
                      <div class="content_center full_box">
                        <div class="op_item" :style="{backgroundImage: 'url(' + require('@/assets/imgs/item/item4.jpg') + ')'}">
                          <div class="content_center" style="height:50%; width:100%;">
                            <span class="iconfont icon-file-image" style="font-size:20px;"></span>
                          </div>
                          <div class="content_center" style="height:50%; width:100%;">
                            <span style="font-size:13px;">媒体</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              <div class=" function_group_wrapper" style="height:175px;">
                <div style="height:35px;">
                  <span class="function_group_title">管理</span>
                </div>
                
                <div class="function_group">
                  <div style="height:150px;">
                    <div class="op_box" style="width:160px; height:125px;">
                      <div class="content_center full_box">
                        <div class="op_item" :style="{backgroundImage: 'url(' + require('@/assets/imgs/item/item5.jpg') + ')'}">
                          <div class="content_center" style="height:50%; width:100%;">
                            <span class="iconfont icon-read" style="font-size:20px;"></span> 
                          </div>
                          <div class="content_center" style="height:50%; width:100%;">
                            <span style="font-size:13px;">文章管理</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="op_box" style="width:160px; height:125px;">
                      <div class="content_center full_box">
                        <div class="op_item" :style="{backgroundImage: 'url(' + require('@/assets/imgs/item/item6.jpg') + ')'}">
                          <div class="content_center" style="height:50%; width:100%;">
                            <span class="iconfont icon-book" style="font-size:20px;"></span> 
                          </div>
                          <div class="content_center" style="height:50%; width:100%;">
                            <span style="font-size:13px;">随笔管理</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="op_box" style="width:160px; height:125px;">
                      <div class="content_center full_box">
                        <div class="op_item" :style="{backgroundImage: 'url(' + require('@/assets/imgs/item/item7.jpg') + ')'}">
                          <div class="content_center" style="height:50%; width:100%;">
                            <span class="iconfont icon-diff" style="font-size:20px;"></span> 
                          </div>
                          <div class="content_center" style="height:50%; width:100%;">
                            <span style="font-size:13px;">标签管理</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="op_box" style="width:160px; height:125px;">
                      <div class="content_center full_box">
                        <div class="op_item" :style="{backgroundImage: 'url(' + require('@/assets/imgs/item/item8.jpg') + ')'}">
                          <div class="content_center" style="height:50%; width:100%;">
                            <span class="iconfont icon-image" style="font-size:20px;"></span>
                          </div>
                          <div class="content_center" style="height:50%; width:100%;">
                            <span style="font-size:13px;">媒体管理</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              <div class=" function_group_wrapper" style="height:175px;">
                <div class="function_group">
                  <div style="height:100px; padding-top:15px;">
                    <p>不积跬步无以至千里，不积小流无以成江海。</p>
                    <p>路漫漫其修远兮，吾将上下而且所。</p>
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
export default {
  name:"home",
  data() {
    return {
      
    }
  },
  methods:{
    showExtra:function(){
      $("#extra").toggle() ;
    },
    hideExtra:function(){
      $("#extra").hide() ;
    }
  },
  mounted() {
    $(window).bind("scroll", function () {
      $("#extra").hide() ;
    }) ;
  },

}
</script>

<style scope>
	a:hover {
		cursor:pointer;
	}
	
	#header {
		position:fixed; 
		top:0; 
		height:65px; 
		width:inherit; 
		background-color:azure;
	}
	
	#extra{
		position:fixed;
		top:66px;
		height:80px; 
		width: inherit;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
		z-index:200;
	}
	
	.extra_item {
		border:1px solid #ccc;
		box-shadow:0 0 1px 0 #aaa;
		height:65px; width:60px; 
		margin:0px 10px; 
		border-radius:4px;
    background-color: azure;
	}
	.extra_item:hover {
		cursor:pointer ;
		border:1px solid #87CEFA;
		box-shadow:0 0 2px 0px #00BFFF;
	}
	.extra_item .iconfont {
		font-size:26px;
		color:green;
	}
	
	.extra_item_box {
		width:120px; height:80px; display:table-cell;
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
	.function_group::-webkit-scrollbar {display:none}
	
	.scroll_container {
		display:flex; 
		flex-direction: row; 
		flex-wrap: nowrap;
	}
	.article_box {
		width:185px; 
		height:185px; 
		margin-right:20px;
		flex-shrink: 0;
		border:1px solid #ccc;
		border-radius:4px;
	}
	
	.article_title_box {
		width:100%; 
		height:85px ;  
		padding:10px 5px 5px; 
		position:relative ;
	}
	
	.article_box a {
		font-size:13px;
		padding-bottom:5px;
	}
	.article_box span {
		font-size:13px;
		padding-bottom:5px;
	}
	
	.article_box img {
		width:100%;
		height:100%;
	}
	
	.siteinfo_box {
		display:table-cell;
		border-radius:4px;
	}
	
	.info {
		width:70px;
		height:60px; 
		margin-right:10px;
	}
	
	.op_box {
		display:table-cell;
	}
	
	.op_item {
		width:70px;
		height:100px; 
		padding-top:10px;
		padding-bottom:10px;
		margin-left:5px;
		margin-right:5px;
		border:1px solid #ccc;
		border-radius:4px;
		box-shadow:0 0 5px 0 #aaa;
	}
	
	.op_item:hover {
		cursor:pointer;
		border:1px solid #87CEFA;
		box-shadow:0 0 5px 0 #00BFFF;
	}
	
	.iconfont {
		display:inline-table; 
		color:black;
		transition:all 0.5s;
	}
	.op_item:hover .iconfont {
		 transform:scale(1.25,1.25) ;
		 -moz-transform:scale(1.25,1.25) ;
	}
</style>