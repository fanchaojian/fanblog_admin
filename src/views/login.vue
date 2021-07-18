<!--登录页面-->
<template>
  <div class="content_center" :style="backgroundFace">
    <div class="content_center" style="width:250px; height:380px; border:1px solid #eee; border-radius:4px; box-shadow:0 0 10px 2px #eee;background-color:#B0C4DE;">
      
      <form>
        <div style="width:100%; height:100%; text-align:center; margin-bottom:25px;">
        <h4>FanBlog后台管理系统</h4>
        </div>
        
        <div class="form-group">
        <label for="exampleInputEmail1">用户名</label>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Username">
        </div>
        <div class="form-group">
        <label for="exampleInputPassword1">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        
        <div class="checkbox">
        <label>
          <input type="checkbox"> 记住密码
        </label>
        </div>
        <div style="margin:0 auto; width:80px; height:30px;">
        <button style="width:inherit;" type="submit" class="btn btn-default" @click="$router.push('/')">登录</button>
        </div>
        <div style="width:100%; height:100%; text-align:center; margin-top:25px;">
        <span>v1.0.0</span>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name:"login",
  data() {
    return {
      backgroundFace:{
        backgroundImage:'url(' + require('@/assets/imgs/m11.jpg') + ')',
        backgroundSize:'cover',
        width:"100%",
        height:"100%"
      }
    }
  },
}
</script>

<style scoped>
  @link-colo {
	color:green ; 
}
</style>