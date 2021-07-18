<!--随笔管理-->
<template>
  <div class="full_box">
    <!--header-->
    <div style="position:fixed; top:0; width:inherit; top:0; z-index:1000;">
      <my-header pageName="博客管理" doSearch="true" @func="getKeywords" backPath="/" />
    </div>

    <div class="container-fluid" style="height:100%; padding-left:0; padding-right:0;">
      <div class="col-md-2"></div>
      <div class="col-xs-12 col-md-8" style="position:relative; height:100%;padding-left:0; padding-right:0;">
        <!--展示区域-->
        <div style="width:100%; height:100%; padding-top:50px; overflow-x:hidden;">
          <div id="content_box" style="padding-top:10px;">
            <div class="article_p_box">
              <div class="article_box">
                <div class="box">
                  <div style="height:100px; width:100%; padding:1px;">
                    <img src="@/assets/imgs/test/1.jpg" width="100%" height="100%" style="border-radius:5px;"/>
                  </div>
                  <div style="padding:5px;">
                    <p style="font-size:12px; color:#333; ">这是文章的标题</p>
                    <span style="font-size:12px; ">创建于：2021-5-26</span>
                  </div>
                  <div style="position:absolute; bottom:0; right:5px;">
                    <span onclick="toggleExtra(this)" class="iconfont icon-ellipsis" style="font-weight:bold; font-size:18px;"></span>
                  </div>
                  
                  <div class="article_extra" style="display:none;">
                    <img src="@/assets/imgs/icon/daiban1.png" alt="加入待办" title="加入待办"/>
                    <img src="@/assets/imgs/icon/bianji_3.png" alt="编辑" title="编辑"/>
                    <img src="@/assets/imgs/icon/delete2.png" alt="删除" title="删除"/>
                  </div>
                </div>
              </div>
              
              <div class="article_box">
                <div class="box">
                  <div style="height:100px; width:100%; padding:1px;">
                    <img src="@/assets/imgs/test/14.jpg" width="100%" height="100%" style="border-radius:5px;"/>
                  </div>
                  <div style="padding:5px;">
                    <p style="font-size:12px; color:#333;">这是文章的标题,可能会很长很长这是文章的标题这是文章的标题这是文章的标题这是文章的标题。</p>
                    <span style="font-size:12px; ">创建于：2021-5-26</span>
                  </div>
                </div>
              </div>
              <div class="article_box">
                <div class="box">
                  <div style="height:100px; width:100%; padding:1px;">
                    <img src="@/assets/imgs/test/5.jpg" width="100%" height="100%" style="border-radius:5px;"/>
                  </div>
                  <div style="padding:5px;">
                    <p style="font-size:12px; color:#333;">这是文章的标题这是文章的标题,可能会很长很长。</p>
                    <span style="font-size:12px; ">创建于：2021-5-26</span>
                  </div>
                </div>
              </div>
              <div class="article_box">
                <div class="box">
                  <div style="height:100px; width:100%; padding:1px;">
                    <img src="@/assets/imgs/m11.jpg" width="100%" height="100%" style="border-radius:5px;"/>
                  </div>
                  <div style="padding:5px;">
                    <p style="font-size:12px; color:#333;">这是文章的标题,可能会很长很长。</p>
                    <span style="font-size:12px; ">创建于：2021-5-26</span>
                  </div>
                </div>
              </div>
              <div class="article_box">
                <div class="box">
                  <div style="height:100px; width:100%; padding:1px;">
                    <img src="@/assets/imgs/test/7.jpg" width="100%" height="100%" style="border-radius:5px;"/>
                  </div>
                  <div style="padding:5px;">
                    <p style="font-size:12px; color:#333;">这是文章的标题,可能会很长很长。</p>
                    <span style="font-size:12px; ">创建于：2021-5-26</span>
                  </div>
                </div>
              </div>
              <div class="article_box">
                <div class="box">
                  <div style="height:100px; width:100%; padding:1px;">
                    <img src="@/assets/imgs/test/9.jpg" width="100%" height="100%" style="border-radius:5px;"/>
                  </div>
                  <div style="padding:5px;">
                    <p style="font-size:12px; color:#333;">这是文章的标题,可能会很长很长。</p>
                    <span style="font-size:12px; ">创建于：2021-5-26</span>
                  </div>
                </div>
              </div>
              <div class="article_box">
                <div class="box">
                  <div style="height:100px; width:100%; padding:1px;">
                    <img src="@/assets/imgs/test/10.jpg" width="100%" height="100%" style="border-radius:5px;"/>
                  </div>
                  <div style="padding:5px;">
                    <p style="font-size:12px; color:#333;">这是文章的标题,可能会很长很长。</p>
                    <span style="font-size:12px; ">创建于：2021-5-26</span>
                  </div>
                </div>
              </div>
              <div class="article_box">
                <div class="box">
                  <div style="height:100px; width:100%; padding:1px;">
                    <img src="@/assets/imgs/test/11.jpg" width="100%" height="100%" style="border-radius:5px;"/>
                  </div>
                  <div style="padding:5px;">
                    <p style="font-size:12px; color:#333;">这是文章的标题,可能会很长很长。</p>
                    <span style="font-size:12px; ">创建于：2021-5-26</span>
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
  name:"essays",
  data() {
    return {
      searchKey:"",  //搜索的关键字
    }
  },
  components:{
    myHeader,
  },
  methods: { 
    getKeywords:function(param){
      this.searchKey = param ;
    },
    //块项目瀑布排列算法
    waterFlow:function(parent, chirld){
      console.log("开始重新排列") ; 
      var wparent = $("."+parent);
      var allArr = $('.'+chirld);
      //var wscreenWidth = document.documentElement.clientWidth;//获取屏幕宽度
      var wscreenWidth = wparent.parent()[0].clientWidth; //获取父级元素的宽度
      //计算每行显示的个数
      var num = Math.floor(wscreenWidth/$(allArr[0]).outerWidth(true));
      //动态设置父级的宽度
      wparent.css({"width":$(allArr[0]).outerWidth(true)*num+"px"}) ; 
      
      //获得每行的最小高度
      this.getMinHeightOfCols(allArr, num);
    },
    getMinHeightOfCols:function(chirdArr, num){
      //创建数组, 用来放置每一行的高度
      var onlyOneColsArr = [];
      for(var i = 0; i<chirdArr.length; i++){

        if(i<num){
          //num为传进来的参数, 即为每行放图片的张数, 此步骤的目的是为了将第一行每张图片的高度遍历出来存放如新数组
          onlyOneColsArr[i]=chirdArr[i].offsetHeight;
        } else {
          //获取数组中的最小值
          var minHeightOfCols = Math.min.apply(null, onlyOneColsArr);
          
          var minHeightOfindex = this.getminIndex(onlyOneColsArr, minHeightOfCols);
          //定义布局方式为绝对布局，并设置盒子的位置
          $(chirdArr[i]).css("position","absolute") ; 
          $(chirdArr[i]).css("top",minHeightOfCols+"px") ; 
          $(chirdArr[i]).css("left",chirdArr[minHeightOfindex].offsetLeft + "px") ; 
          
          //将两张图片高度相加得到一个新的高度用来进行下一次的计算
          onlyOneColsArr[minHeightOfindex] += chirdArr[i].offsetHeight;
        }
      }

    },
    
    //获取最小高度元素的下标
    getminIndex:function(onlyOneColsArr, min){
      for(var i in onlyOneColsArr){
        if(onlyOneColsArr[i] == min){
          return i;
        }
      }
    },
    
    toggleExtra:function(obj){
      $(obj).parents(".box").find(".article_extra").toggle() ; 
    }
  },
  mounted() {
      this.waterFlow("article_p_box", "article_box");
  },
}
</script>

<style scoped>

.article_p_box{
		position:relative ;
		margin:0 auto;
	}
	.article_box {
		padding:5px 5px;
		float:left;
	}
	
	.box {
		width:150px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)  ; 
		border-radius:5px;
		position:relative;
	}
	
	.article_extra {
		width:50px; 
		height:100px; 
		border-radius:5px; 
		border:1px solid #ddd; 
		box-shadow:0 0 4px 1px #ddd; 
		position:absolute; 
		bottom:25px; 
		right:5px; 
		background-color:#fff;
	}
	
	.article_extra img {
		display:block;
		margin:0 auto;
		width:20px;
		height:20px;
		margin-top:10px;
	}
</style>