var baseUrl = 'http://localhost:8000/'
var user = {
    logout: function() {
        $.post(baseUrl + 'admin/logout', function(res) {
            // console.log(res);
            if (res.code === 200) {
                location.href = './login.html'
            }
        })
    },
    login: function(myName, myPassword) {
        $.post(baseUrl + 'admin/login', {
                user_name: myName,
                password: myPassword
            },
            function(res) {
                console.log(res);
                if (res.code === 200) {
                    // alert('登陆成功')
                    location.href = './index.html'
                } else {
                    // alert（'res.msg'）
                    alert(res.msg)
                }
            })
    },
    getInfo: function() {
        // $.get(地址，参数，回调)
        $.get(baseUrl + 'admin/getuser', function(res) {
            console.log(res);
            if (res.code === 200) {
                $("#userImg").prop('src', res.data.user_pic)
                $('#userName').text(res.data.nickname)
            }

        })
    }
}