$(function () {
  $('#login').on('click', function () {
     
    var c;
    c=document.getElementById('account').value;



     var a;
     var b;
     a=document.getElementById('account').value;
     b=document.getElementById('password').value;
   if (a==''||b=='') {alert('请把信息填写完整');
    return;}
     
    


    $.ajax({
      url: 'login',
      data: {
        account: $('#account').val(),
        password: $('#password').val()
      },
      type: 'post',
      dataType: 'json',
      success: function (data, status, xhr) {
        if (data.message == 'OK') {
        Cookies.set('user',c);

          console.log('login');
          window.location.href = 'index.html';
        } else {
          console.log('账号或密码错误');
        }
      },
      error: function (xhr, status, error) {
        console.log(error);
        alert('服务器错误');
      }
    });
  });
});
