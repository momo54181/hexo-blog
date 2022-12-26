//禁止通过F12来打开
document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
  var e = event || window.event || arguments.callee.caller.arguments[0];
 
  if (e && e.keyCode == 123) {
    e.returnValue = false;
    return false;
  }
};
 
var ConsoleManager = {
  onOpen: function() {
    alert('Console is opened');
  },
  onClose: function() {
    alert('Console is closed');
  },
  init: function() {
    var self = this;
    var x = document.createElement('div');
    var isOpening = false,
      isOpened = false;
    Object.defineProperty(x, 'id', {
      get: function() {
        if (!isOpening) {
          self.onOpen();
          isOpening = true;
        }
        isOpened = true;
      },
    });
 
    setInterval(function() {
      isOpened = false;
      console.info(x);
      console.clear();
      if (!isOpened && isOpening) {
        self.onClose();
        isOpening = false;
      }
    }, 200);
  },
};
 
ConsoleManager.onOpen = function() {
  //打开控制台，跳转到其他页面
  try {
    window.location.href = 'https://www.mkw2023.com/daohang/index.html';
  } catch (err) {
    window.location.href = 'https://www.mkw2023.com/daohang/index.html';
    var a = document.createElement('button');
    a.onclick = function() {
      window.location.href = 'https://www.mkw2023.com/daohang/index.html';
    };
    a.click();
  }
};
ConsoleManager.onClose = function() {
  alert('Console is closed!!!!!');
};
ConsoleManager.init();
(function () {
var re = /x/;
var i = 0;
console.log(re);
  
re.toString = function () {
alert("请关闭控制台");
return '第 ' + (++i) + ' 次打开控制台';
};
})();
setInterval(function() {
  check()
}, 4000);
var check = function() {
  function doCheck(a) {
    if (("" + a/a)["length"] !== 1 || a % 20 === 0) {
      (function() {}
      ["constructor"]("debugger")())
    } else {
      (function() {}
      ["constructor"]("debugger")())
    }
    doCheck(++a)
  } 
  try {
    doCheck(0)
  } catch (err) {}
};
check();