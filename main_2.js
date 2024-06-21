$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        marrgin:10,
        nav:false,
        dots:true,
        responsiveClass: true,
        responsive: {
            0: {
            items:4
            },
           600: {
            items:6,
           },
           1000: {
            items:9,
            loop:false,
            margin:20
           } 
        }
    })
})

 //danh cho hethongcuahang
 function showOnMap(location){
    var mapIframe= document.getElementById('mapIframe')
    if(location=='Hà Nội 1'){
        mapIframe.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7447.808543203733!2d105.815878!3d21.036516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab128d511a8d%3A0x3440d4c5d63f693!2zMjY2IFAuIMSQ4buZaSBD4bqlbiwgTGnhu4V1IEdpYWksIEJhIMSQw6xuaCwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1715157730222!5m2!1svi!2sus";
    }
    else if(location=='Nghệ An'){
        mapIframe.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7519.464940479642!2d105.09276700000001!3d19.553096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31372c4e45939347%3A0xce6a9c17fd0a9733!2zU0nDilUgVEjhu4ogS0jDgU5IIEhVWQ!5e0!3m2!1svi!2sus!4v1715167491536!5m2!1svi!2sus";
    }
    else if(location=='Hà Nội 2'){
        mapIframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.006112345334!2d105.79345844767876!3d21.03244143079496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab46de41115b%3A0x725f5717740acb8c!2zMTY1IMSQLiBD4bqndSBHaeG6pXksIFF1YW4gSG9hLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1715167623666!5m2!1svi!2sus";
    }
 }
 //dropleft menu
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var dropleftMenu = document.getElementById('dropleftmenu');
    var overlayBg = document.createElement('div');
    overlayBg.className = 'overlay-bg'; // Thêm lớp CSS mới

    menuIcon.addEventListener('click', function() {
        if (dropleftMenu.style.display === 'none') {
            dropleftMenu.style.display = 'block';
            document.body.appendChild(overlayBg); // Thêm lớp CSS mới vào body khi dropleft xuất hiện
        } else {
            dropleftMenu.style.display = 'none';
            document.body.removeChild(overlayBg); // Loại bỏ lớp CSS mới khi dropleft biến mất
        }
    });
});

