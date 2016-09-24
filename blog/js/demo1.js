// 因为脚本引入在dom加载之前，所以要等待dom加载完成之后才能对dom进行操作
$(function () {
  var curIndex = 0; //当前的index
  var imgnum = $(".imglist li").length; //图片总数
  //图片切换
  function changeTo(num) {
    var goleft = num * 400;
    $(".imglist").animate({
      left: "-" + goleft + "px"
    }, 500); //向左移开
    $(".infolist").find("li").removeClass("infoOn").eq(num).addClass("infoOn"); //为当前图片加infoOn样式
    $(".indexlist").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
  }
  var autoChange = setInterval(function () {

    if (curIndex < imgnum - 1) {
      curIndex++;

    } else {

      curIndex = 0;
    }
    console.log(imgnum)
    changeTo(curIndex);
  }, 2500); //定时器每2.5秒自动变换

  //定时器重置
  function autoChangeAgain() {

    autoChange = setInterval(function () {
      if (curIndex < imgnum - 1) {

        curIndex++;
      } else {

        curIndex = 0;
      }
      changeTo(curIndex);
    }, 2500);
  }


  //左箭头点击事件
  $("#prev").hover(function () {

    clearInterval(autoChange); //清楚定时器
  }, function () {

    autoChangeAgain(); //重置

  });

  $("#prev").click(function () {
    //根据curIndex进行上一图片处理
    curIndex = (curIndex > 0) ? (--curIndex) : (imgnum - 1);
    changeTo(curIndex);
  })

  //右箭头点击事件
  $("#next").hover(function () {

    clearInterval(autoChange); //清楚定时器
  }, function () {

    autoChangeAgain(); //重置

  });


  $("#next").click(function () {
    //根据curIndex进行上一图片处理
    curIndex = (curIndex < imgnum - 1) ? (++curIndex) : 0;
    changeTo(curIndex);
  })

  //右下角li按钮绑定事件
  $(".indexlist").find("li").each(function (item) {
    $(this).hover(function () {
      clearInterval(autoChange);
      changeTo(item);
      curIndex = item;

    }, function () {

      autoChangeAgain();
    });

  });


})
