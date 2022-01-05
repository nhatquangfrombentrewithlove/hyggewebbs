document.querySelector(".containerRight").classList.add("batTac");
var dropdown1 = document.querySelectorAll("#dropdown1 li");  

// chỉnh sữa tên bệnh nhân tại đây.
const thongTinBN = [
    {
        ten:"Bệnh nhân 1", 
        tuoi:"Tuổi: 20", 
        gioiTinh:"Giới tính: Nam",
        ngheNghiep:"Nghề nghiệp: Sinh viên",
        tinhTrangHonNhan:"Độc thân",
        dangOChung:"Bạn cùng phòng",
        thoiGian:"ngay",
        ngay:"ngay",
        hinhThuc:"hinhThuc"
    },
    {
        ten:"Bệnh nhân 2", 
        tuoi:"Tuổi", 
        gioiTinh:"Giới tính",
        ngheNghiep:"Nghề nghiệp",
        tinhTrangHonNhan:"Độc thân",
        dangOChung:"Bạn cùng phòng",
        thoiGian:"ngay",
        ngay:"ngay",
        hinhThuc:"hinhThuc"
    },
    {
        ten:"Bệnh nhân 3", 
        tuoi:"Tuổi", 
        gioiTinh:"Giới tính",
        ngheNghiep:"Nghề nghiệp",
        tinhTrangHonNhan:"Độc thân",
        dangOChung:"Bạn cùng phòng",
        thoiGian:"ngay",
        ngay:"ngay",
        hinhThuc:"hinhThuc"
    }
]; 

// lắng nghe sự kiện click vào bệnh nhân. 

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