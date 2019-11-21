var user = {
    logout: function() {
        $.post('http://localhost:8000/admin/logout', function(res) {
            // console.log(res);
            if (res.code === 200) {
                location.href = './login.html'
            }
        })
    }
}