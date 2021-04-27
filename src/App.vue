<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap3/dist/css/bootstrap.min.css'
import 'bootstrap3/dist/js/bootstrap.min.js'

export default {
  name: 'App',
  data () {
    return {
		
    }
  }
  
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height: 100%;
}
@link-colo {
	color:green ; 
}

body {
	background-color:#fff;
	width:100%;
	height:100%;
}
html {
	width:100%;
	height:100% ;
}

.full_box {
	width:100%; 
	height:100%;
}

a:hover {
	cursor:pointer;
}

	

.content_center{
	z-index:100;
	margin:0 auto ;
	
	display:-moz-box;
	-moz-box-pack:center;
	-moz-box-align:center;

	
	display:-webkit-box;
	-webkit-box-pack:center;
	-webkit-box-align:center;

	
	display:box;
	box-pack:center;
	box-align:center;

}

.doSomething { 
	height:25px;
	border:1px solid #ccc;
	border-radius:4px;
	font-size:12px;
	font-weight:500;
	background:#fff;
	padding-left:5px;
	padding-right:5px;
	margin-left:15px;
	margin-right:15px;
	text-align: center;
}
.doSomething:hover {
	background-color:#F0FFFF!important ;
	border:1px solid #00BFFF!important; 
	box-shadow:0 0 1px #00BFFF!important;
	color:#00BFFF!important ;
	cursor:pointer!important;
}

.doSomething span {
	line-height:25px;
}

.split_box{
	position:fixed; top:50px; width:inherit; z-index:100;
}

.split_line {
	width:100%; height:2px; background-image: linear-gradient(to Right, #fff,#87CEFA , #fff);
}

</style>
