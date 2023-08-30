MenuFooter();

function OpenPopMenu() {
  var xLine = "";
  xLine += '<div style="height: 50px;">';
  xLine += '<div style="height: 55px;background-color: #0056ff; width:100%; padding-top:10px;">';
  xLine += '<div style="height: 50px; margin:auto; width:100%;">';
  xLine += '<center><div style="color:#fff; font-size:15px;font-weight: 600;padding-top:8px;">วันไหว้พระจันทร์</div></center>';
  xLine += '</div>';
  xLine += '</div><div class="clr" style="height:3px;"></div>';
  xLine += '<div class="clr"></div>';
  xLine += '<div style="line-height: 1.3;margin:20px 15px; text-align:left;"><b>LINE Retail Society</b> ชวนคุณมารู้จักกับประเพณีการไหว้พระจันทร์ ซึ่งในปีนี้ตรงกับวันศุกร์ที่ 29 กันยายน 2566 และยังชวนคุณร่วมกิจกรรมสุ่มขนมไหว้พระจันทร์ลุ้นรับรางวัลมากมาย ...</div>';
  xLine += '<div style="max-width:280px; margin:10px auto 10px 25px; width:100%;">';
  xLine += '<div class="clr" style="height: 15px;"></div>';
  xLine += '<div class="icon-left"><img src="./img/icon-mooncake.png" style="width:50px;"></div>';
  xLine += '<div class="icon-right" onclick="ClickLink(1)">สุ่มรับโชคจาก ขนมไหว้พระจันทร์<div class="icon-text" style="line-height:1.2;">คุณมี 1 ฉลากสำหรับการร่วมลุ้นรางวัลจากกิจกรรมของเรา</div></div>';
  xLine += '<div class="icon-left"><img src="./img/icon-moon.png" style="width:50px;"></div>';
  xLine += '<div class="icon-right" onclick="ClickLink(2)">ประวัติ วันไหว้พระจันทร์<div class="icon-text" style="line-height:1.2;">มาอ่านประวัติวันไหว้พระจันทร์ว่ามีความเป็นมาอย่างไร</div></div>';
  xLine += '<div class="clr"></div>';
  xLine += '</div>';
  xLine += '<div style="margin-top:0px;margin-left:35px;">';
  xLine += '<div class="menu-box1" onclick="window.location.href=\'home.html\';">';
  xLine += '<div class="menu-box-img1"><img src="./img/icons-home.png" style="width:32px;"></div>';
  xLine += '<div class="menu-box-text1" style="color:#000000;">หน้าแรก</div></div>';
  xLine += '<div class="menu-box1" onclick="window.location.href=\'history.html\';">';
  xLine += '<div class="menu-box-img1"><img src="./img/icons-history.png" style="width:32px;"></div>';
  xLine += '<div class="menu-box-text1" style="color:#000000;">ประวัติ</div></div>';
  xLine += '<div class="menu-box1" onclick="window.location.href=\'rewards.html\';">';
  xLine += '<div class="menu-box-img1"><img src="./img/icons-gift.png" style="width:32px;"></div>';
  xLine += '<div class="menu-box-text1" style="color:#000000;">รางวัล</div></div>';
  xLine += '<div class="menu-box1" onclick="window.location.href=\'friend.html\';">';
  xLine += '<div class="menu-box-img1"><img src="./img/icons-friend.png" style="width:32px;"></div>';
  xLine += '<div class="menu-box-text1" style="color:#000000;">ชวนเพื่อน</div></div>';
  xLine += '</div></div>';
  xLine += '<div class="clr" style="height:10px;"></div>';
  xLine += '<center><div class="btn-t2" onclick="CloseMenu()" style="background-color:#fff;">Close Menu</div></center>';
  xLine += '<div class="clr" style="height:25px;"> </div>';
  $("#MenuSociety").html(xLine); 
  document.getElementById('menu').style.display='block';
}


function MenuFooter() {
  var str = "";
  str += '<div class="footer-top"><div class="container">';
  str += '<div class="row"><div class="col-lg-4 col-md-6 footer-newsletter">';
  str += '<div style="margin-top:0px;margin-left:30px;">';
  str += '<div class="menu-box1" onclick="window.location.href=\'home.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/icon-menu1.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">หน้าแรก</div></div>';
  str += '<div class="menu-box1" onclick="window.location.href=\'timeline.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/icons-history.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">กำหนดการ</div></div>';
  str += '<div class="menu-box1" onclick="window.location.href=\'rule.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/icon-menu3.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">รายละเอียด</div></div>';
  str += '<div class="menu-box1" onclick="window.location.href=\'rule.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/icon-menu4.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">บอกต่อเพื่อน</div></div>';
  str += '</div>';
  str += '</div></div></div></div>';
  str += '<div class="container d-md-flex py-4"><div class="mr-md-auto text-center text-md-left">';
  str += '<div class="copyright">@<span>LINE Retail Society</span></div></div></div>';
  $("#DisplayFooter").html(str);  
}


function ClickLink(x) {
  if(x==1) {
    location.href = "allpic.html";
  } else if(x==2) { 
    location.href = "ranking.html";
  } else if(x==3) { 
    location.href = "photo.html";
  }
}


function numberWithCommas(num) {
  var valueString=num; //can be 1500.0 or 1500.00 
  var amount=parseFloat(valueString).toFixed(2);
  return formattedString= amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function addCommas(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}


function CloseMenu() {
  document.getElementById('menu').style.display='none';
}

