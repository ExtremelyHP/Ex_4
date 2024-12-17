// 存储账号和密码
const correctUsername = '123456';
const correctPassword = '1234567';

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 检查输入的账号和密码是否正确
    if (username === correctUsername && password === correctPassword) {
        // 登录成功，跳转到主页或其他页面
        window.location.href = 'index.html';
    } else {
        // 登录失败，显示错误消息
        alert('账号或密码错误');
    }
}