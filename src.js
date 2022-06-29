let browser = prompt("nhap ten trinh duyet");
switch (browser){
    case "edge":
        alert("ban dang dung edge");
        break;
    case "chrome":
    case "firefox":
    case "safari":
    case "opera":
        alert("trinh duyet nay cung duoc ho tro")
        break;
    default:
        alert("chung toi khong doc duoc trang nay")
}
let a = prompt("nhap a")
switch (a){
    case "0":
        alert(0);
        break;
    case "1":
        alert(1)
        break;
    case"2":
    case "3":
        alert("2.3")
    break;
}
let x = prompt("nhap gia tri x")
if (x > 0){
    alert("lon hon 0")
}else {
    if (x < 0){
        alert("nho hon 0")
    }else{
        alert("la so 0")
    }

}
