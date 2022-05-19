使用div 水平垂直居中

方法一: 使用 flex 布局
	<div class="box">
      <div class="dv"> 111</div>
    </div>
    <style>
      *{
        margin: 0;
        padding: 0;
      }
      .box{
        width: 100vw;
        height: 100vh;
        background-color: pink;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .box .dv{
      	width: 100px;
      	height: 100px;
        background-color: red;
      }
    </style>  
方法二: 使用定位布局,已知宽高,top:50%,left :50%, margin-left:-(宽/2)px,magin-top:-(高/2)px
	<div class="box">
    <div class="dv"> 111</div>
  </div>
  <style>
    *{
      margin: 0;
      padding: 0;
    }
    .box{
      width: 100vw;
      height: 100vh;
      background-color: pink;
      position: relative;
    }
    .box .dv{
      width: 100px;
      height: 100px;
      background-color: red;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -50px;
      margin-left: -50px;
    }
  </style>
方法三: 利用定位和margin属性
	<div class="box">
      <div class="dv"> 111</div>
    </div>
    <style>
      *{
        margin: 0;
        padding: 0;
      }
      .box{
        width: 100vw;
        height: 100vh;
        background-color: pink;
        position: relative;
      }
      .box .dv{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: red;
        margin: auto;
        width: 100px;
        height: 100px;
      }
    </style>

方法四: 利用利用定位和transform属性
  <div class="box">
    <div class="dv"> 111</div>
  </div>
  <style>
    *{
      margin: 0;
      padding: 0;
    }
    .box{
      width: 100vw;
      height: 100vh;
      background-color: pink;
      position: relative;
    }
    .box .dv{
      width: 100px;
      height: 100px;
      position: absolute;
      left: 50%;
      top: 50%;
      background-color: red;
      transform: translate(-50%,-50%);
    }
  </style>

方法五: 这个要求已知父容器和自己宽高, 用 table-cell 布局
  <div class="box">
    <div class="dv"> 111</div>
  </div>
  <style>
    *{
      margin: 0;
      padding: 0;
    }
    .box{
      width: 300px;
      height: 300px;
      background-color: pink;
      display: table-cell;
      vertical-align: middle;
    }
    .box .dv{
      width: 100px;
      height: 100px;
      background-color: red;
      /* (300/2-100)= 50 */
      margin-left: 50px; 
    }
  </style>
