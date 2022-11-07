var data = [
  {
    chucvu: "giangvien",
    username: "dotranghieu_hus",
    password: "123"
  },
  {
    chucvu: "giaovu",
    username: "hieudo1235",
    password: "123"
  },
  {
    chucvu: "sinhvien",
    username: "dthieuuu1",
    password: "123"
  }
]
function hanldeLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  data.forEach((data) => {
    if (data.username == username && data.password == password) {
      alert("Đăng nhập thành công!");
      switch (data.chucvu) {
        case "giangvien":
          window.location.href = "./giangvien.html"
          break;

        case "giaovu":
          window.location.href = "./giaovu.html"
          break;

        case "sinhvien":
          window.location.href = "./sinhvien.html"
          break;
      }
    }
  });
}