document.querySelector(".containerRight").classList.add("batTac");
document.querySelector(".containerRight2").classList.add("batTac");
var dropdown1 = document.querySelectorAll("#dropdown1 li");  

const thongTinBN = [
    {
        ten:"Nguyễn Khoa Vinh", 
        tuoi:"20", 
        gioiTinh:"Nam",
        ngheNghiep:"Sinh viên",
        tinhTrangHonNhan:"Độc thân",
        dangOChung:"Nhà trọ",
        thoiGian:"15:00",
        ngay:"20/12/2021",
        hinhThuc:"Trực tuyến"
    },
    {
        ten:"Võ Thị Bích Trang", 
        tuoi:"30", 
        gioiTinh:"Nữ",
        ngheNghiep:"Nội trợ",
        tinhTrangHonNhan:"Đã kết hôn",
        dangOChung:"Chồng",
        thoiGian:"09:00",
        ngay:"22/12/2021",
        hinhThuc:"Trực tuyến"
    },
    {
        ten:"Võ Việt Bằng", 
        tuoi:"18", 
        gioiTinh:"Nam",
        ngheNghiep:"Học sinh",
        tinhTrangHonNhan:"Độc thân",
        dangOChung:"Gia đình",
        thoiGian:"16:30",
        ngay:"25/12/2021",
        hinhThuc:"Trực tuyến"
    }
]; 

// lắng nghe sự kiện click vào bệnh nhân. 

const BN = [
    {
        ten:"Đặng Huỳnh Chí", 
        tuoi:"35", 
        gioiTinh:"Nam",
        ngheNghiep:"Giám đốc",
        tinhTrangHonNhan:"Độc thân",
        dangOChung:"Ở riêng",
    },
    {
        ten:"Nguyễn Ngọc Nga", 
        tuoi:"20", 
        gioiTinh:"Nữ",
        ngheNghiep:"Sinh viên",
        tinhTrangHonNhan:"Độc thân",
        dangOChung:"Gia đình",
    },
    {
        ten:"Nguyễn Phát Đạt", 
        tuoi:"17", 
        gioiTinh:"Nam",
        ngheNghiep:"Học sinh",
        tinhTrangHonNhan:"Độc thân",
        dangOChung:"Gia đình",
    }

]



dropdown1.forEach(function(dropChild) {
    dropChild.addEventListener("click",function(){ 
        var tenBN = document.querySelector(".tenBenNhan");
        var tuoiBN = document.querySelector(".tuoiBN"); 
        var gioiTinh = document.querySelector(".gioiTinhBN");
        var ngheNghiep = document.querySelector(".ngheNghiepBN");
        var tinhTrang = document.querySelector(".tinhTrangBN"); 
        var oChung = document.querySelector(".dangChungVoi");
        var thoiGian = document.querySelector("thoiGianBN");
        var ngayBN = document.querySelector(".ngayBN"); 
        var hinhThuc = document.querySelector(".hinhThuc");
        const thongBao = document.querySelector(".containerRight");  
        thongBao.classList.add("batTac"); 
        document.querySelector(".containerRight2").classList.add("batTac");
        
        if (dropChild.id == "BN1") {
            thongBao.classList.remove("batTac"); 
            tenBN.innerHTML = thongTinBN[0].ten; 
            tuoiBN.innerHTML = thongTinBN[0].tuoi; 
            gioiTinh.innerHTML = thongTinBN[0].gioiTinh; 
            ngheNghiep.innerHTML = thongTinBN[0].ngheNghiep;
            tinhTrang.innerHTML = thongTinBN[0].tinhTrangHonNhan; 
            oChung.innerHTML= thongTinBN[0].dangOChung; 
            thoiGian.innerHTML = thongTinBN[0].thoiGian;
            ngayBN.innerHTML = thongTinBN[0].ngay;
            hinhThuc.innerHTML = thongTinBN[0].hinhThuc; 
        }
        else if (dropChild.id == "BN2") {
            thongBao.classList.remove("batTac"); 
            tenBN.innerHTML = thongTinBN[1].ten; 
            tuoiBN.innerHTML = thongTinBN[1].tuoi; 
            gioiTinh.innerHTML = thongTinBN[1].gioiTinh; 
            ngheNghiep.innerHTML = thongTinBN[1].ngheNghiep;
            tinhTrang.innerHTML = thongTinBN[1].tinhTrangHonNhan; 
            oChung.innerHTML= thongTinBN[1].dangOChung; 
            thoiGian.innerHTML = thongTinBN[1].thoiGian;
            ngayBN.innerHTML = thongTinBN[1].ngay;
            hinhThuc.innerHTML = thongTinBN[1].hinhThuc; 
        }
        else {
            thongBao.classList.remove("batTac"); 
            tenBN.innerHTML = thongTinBN[2].ten; 
            tuoiBN.innerHTML = thongTinBN[2].tuoi; 
            gioiTinh.innerHTML = thongTinBN[2].gioiTinh; 
            ngheNghiep.innerHTML = thongTinBN[2].ngheNghiep;
            tinhTrang.innerHTML = thongTinBN[2].tinhTrangHonNhan; 
            oChung.innerHTML= thongTinBN[2].dangOChung; 
            thoiGian.innerHTML = thongTinBN[2].thoiGian;
            ngayBN.innerHTML = thongTinBN[2].ngay;
            hinhThuc.innerHTML = thongTinBN[2].hinhThuc; 
        }
    }
    )
})

var btnLichHen = document.querySelector(".tieuDedivLichHen"); 
btnLichHen.addEventListener("click",function(){
    var btnDrop1 = document.getElementById("dropdown1"); 
    btnDrop1.classList.toggle("batTac"); 
    var x1 = document.querySelector(".icon1"); 
    var x2 = document.querySelector(".icon2"); 
    x1.classList.toggle("batTac");
    x2.classList.toggle("batTac");
}); 

// logic xử lý cho drop2  
var listChild2 = document.querySelectorAll(".child-down2"); 

listChild2.forEach(

    function (child2) {
        child2.addEventListener('click',
            function () {
                var tenBN = document.getElementById("ten2");
                var tuoiBN = document.getElementById("tuoi2"); 
                var gioiTinh = document.getElementById("gioiTinh2");
                var ngheNghiep = document.getElementById("ngheNghiep2");
                var tinhTrang = document.getElementById("tinhTrang2"); 
                var oChung = document.getElementById("oChung2");
                document.querySelector(".containerRight").classList.add("batTac");
                document.querySelector(".containerRight2").classList.remove("batTac");
                if (child2.id == "B1") {
                    tenBN.innerHTML = BN[0].ten; 
                    tuoiBN.innerHTML = BN[0].tuoi;
                    gioiTinh.innerHTML = BN[0].gioiTinh;
                    ngheNghiep.innerHTML = BN[0].ngheNghiep; 
                    tinhTrang.innerHTML = BN[0].tinhTrangHonNhan; 
                    oChung.innerHTML =  BN[0].dangOChung;

                }
                else if ( child2.id == "B2") {
                    tenBN.innerHTML = BN[1].ten; 
                    tuoiBN.innerHTML = BN[1].tuoi;
                    gioiTinh.innerHTML = BN[1].gioiTinh;
                    ngheNghiep.innerHTML = BN[1].ngheNghiep; 
                    tinhTrang.innerHTML = BN[1].tinhTrangHonNhan; 
                    oChung.innerHTML =  BN[1].dangOChung;
                }
                else{
                    tenBN.innerHTML = BN[2].ten; 
                    tuoiBN.innerHTML = BN[2].tuoi;
                    gioiTinh.innerHTML = BN[2].gioiTinh;
                    ngheNghiep.innerHTML = BN[2].ngheNghiep; 
                    tinhTrang.innerHTML = BN[2].tinhTrangHonNhan; 
                    oChung.innerHTML =  BN[2].dangOChung;
                }
                
            }
        )
    }
)


var btn2 = document.querySelector(".clickDropdown2"); 

btn2.addEventListener("click",function(){
    var btnDrop1 = document.getElementById("dropdown2"); 
    btnDrop1.classList.toggle("batTac"); 
    var x1 = document.querySelector(".icon3"); 
    var x2 = document.querySelector(".icon4"); 
    x1.classList.toggle("batTac");
    x2.classList.toggle("batTac");
    // bật lên cái khung thử
    // => cho thằng kia none 
    

    
});
// var btnChange = document.getElementById("btnChange");
// btnChange.addEventListener("click", function(){
    
// })
document.getElementById("btnChange").onclick = function(){
    document.getElementById("container1").style.display = 'block';
    document.getElementById("Nut").style.display = 'none';
};

document.getElementById("btnCheck").onclick = function(){
    document.getElementById("container1").style.display = 'none';
};
document.getElementById("btnOk").onclick = function(){
    document.getElementById("Nut").style.display = 'none';
    document.getElementById("NutCall").style.display = 'flex';
};
document.getElementById("btnCall").onclick = function(){
    document.getElementById("Nut").style.display = 'flex';
    document.getElementById("NutCall").style.display = 'none';
}
