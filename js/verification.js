$(document).ready(function() {
    // 3秒后自动跳转
    setTimeout(function() {
        window.location.href = "BirthdayCake.html";
    }, 5000);

    // 点击按钮立即跳转
    $("#login-button").click(function(event) {
        event.preventDefault();
        window.location.href = "BirthdayCake.html";
    });
});
