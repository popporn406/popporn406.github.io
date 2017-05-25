$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });

$(".fancybox-thumbs, .fancybox-thumbs1").fancybox({
    prevEffect  : 'none',
    nextEffect  : 'none',
    closeBtn  : false,
    padding : 0,
    helpers : {
      title : {
        type: 'outside'
      },
      thumbs  : {
        width : 50,
        height  : 50
      }
    }
  });


var englishInfo = {
  "about-nav": "ABOUT",
  "services-nav": "SERVICES",
  "gallery-nav": "GALLERY",
  "customers-nav": "CUSTOMERS",
  "contact-nav": "CONTACT",

  "cover-main-text": "บริการคือความภูมิใจ",
  "company-name": "บริษัท พบพร 406 จำกัด",

  "about-company": "About Pobporn 406",
  "about-company-detail": "This is information about Pobporn 406",  
  "company-value": "Our mission",
  "company-value-detail": "MISSION: Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  
  "services": "services",
  "services-detail": "What we offer to our customers",
  "booking": "Booking",
  "booking-info": "-----------",
  "safety-facilities": "Safety & Facilities",
  "safety-facilities-info": "-----------",
  "hard-work": "HARD WORK & JOB DONE",
  "hard-work-info": "------------",
  "gps": "GPS",
  "gps-info": "-------------",
  "flight-tracking": "FLIGHT TRACKING",
  "flight-tracking-info": "------------",
  "continuous-improvement": "CONTINUOUS IMPROVEMENT",
  "continuous-improvement-info": "---------------",

  "gallery-text": "GALLERY",
  "gallery-detail": "ALL SERVICE CARS",

  "customers": "OUR BELOVED CUSTOMERS",
  "customers-info": "They all are very kind customers.",

  "contact": "CONTACT",
  "address": "44/406 Soi Thiantalay 20 Bangkhunthian Chaaitalay Rd, Bangkhunthian district, Bangkok 10150"

}

var thaiInfo = {
  "about-nav": "เกี่ยวกับเรา",
  "services-nav": "การบริการ",
  "gallery-nav": "แกลลอรี่",
  "customers-nav": "ลูกค้าของเรา",
  "contact-nav": "ติดต่อเรา",

  "cover-main-text": "บริการคือความภูมิใจ",
  "company-name": "บริษัท พบพร 406 จำกัด",

  "about-company": "รู้จักเราให้มากขึ้น พบพร 406",
  "about-company-detail": "บริษัท พบพร 406 จำกัด ได้ให้บริการรถเช่าด้วยประสบการณ์การทำงานมากว่า 30 ปี ระยะเวลาตลอดมาที่ลูกค้าได้มอบความไว้วางใจ ทำให้บริษัทรับรองได้ถึงบริการ คุณภาพ และความปลอดภัยที่ให้บริการแก่ลูกค้า ทางบริษัทได้ให้บริการรถเช่าในหลากหลายประเภท ทั้งรถตู้ รถบัส รถโค้ช และรถทัวร์ เพื่อตอบสนองต่อความต้องการของลูกค้าและความเหมาะสมในการเดินทาง",
  "company-value": "ความภาคภูมิใจของเรา",
  "company-value-detail": "บริษัท พบพร 406 จำกัด ได้ให้บริการรถเช่าด้วยประสบการณ์การทำงานมากว่า 30 ปี ระยะเวลาตลอดมาที่ลูกค้าได้มอบความไว้วางใจ ทำให้บริษัทรับรองได้ถึงบริการ คุณภาพ และความปลอดภัยที่ให้บริการแก่ลูกค้า ทางบริษัทได้ให้บริการรถเช่าในหลากหลายประเภท ทั้งรถตู้ รถบัส รถโค้ช และรถทัวร์ เพื่อตอบสนองต่อความต้องการของลูกค้าและความเหมาะสมในการเดินทาง",
  
  "services": "การบริการของเรา",
  "services-detail": "สิ่งที่เราภาคภูมิใจมอบให้กับลูกค้า",
  "booking": "การจองรถ",
  "booking-info": "ลูกค้าสามารถจองเเละติดต่อเราได้ตลอด 24 ชั่วโมง",
  "safety-facilities": "ความปลอดภัยเเละสิ่งอำนวยความสะดวก",
  "safety-facilities-info": "มั่นใจในความปลอดภัยเเละสิ่งอำนวยความสะดวก",
  "hard-work": "ทำงานหนักเเละสำเร็จ",
  "hard-work-info": "ไม่ว่ามีเหตุสุดวิสัยใดๆ เราสามารถจัดการได้ด้วยการประสานงานที่มีประสิทธิภาพเเละรถสำรองที่มีอย่างเพียงพอ",
  "gps": "จีพีเอส",
  "gps-info": "สามารถติดตามรถทุกคันด้วยระบบจีพีเอส",
  "flight-tracking": "ระบบติดตามสายการบิน",
  "flight-tracking-info": "มีระบบตรวจสอบเวลาเที่ยวบินที่เเม่นยำ ทำให้บริการรับส่งลูกค้าจากสนามบินได้ตรงเวลามากที่สุด",
  "continuous-improvement": "ปรับปรุงพํฒนาอย่างต่อเนื่อง",
  "continuous-improvement-info": "เราพร้อมรับคำเเนะนำหรือการร้องเรียนเพื่อปรับปรุงพัฒนาบริการให้ตรงกับความต้องการลูกค้ามากที่สุด",

  "gallery-text": "แกลลอรี่รถของเรา",
  "gallery-detail": "รถที่ให้บริการของเราทั้งหมด",

  "customers": "ลูกค้าที่น่ารักของเรา",
  "customers-info": "ขอบคุณที่ไว้วางใจบริการของเรา",

  "contact": "ข้อมูลการติดต่อ",
  "address": "44/406 ซอยเทียนทะเล 20 ถนนบางขุนเทียนชายทะเล บางขุนเทียน กรุงเทพมหานคร 10150"

}

$('.thai-lang').on('click', function(){
  showLang("TH");
  for (var key in thaiInfo) {
    $("." + key).text(thaiInfo[key]);
  }
});

$('.eng-lang').on('click', function(){
  showLang("EN");
  for (var key in englishInfo) {
    $("." + key).text(englishInfo[key]);
  }
});

function showLang(lang){
  var textToShow = lang + '<span class="caret"></span>';
  $('.lang-shown').text(lang).append('<span class="caret"></span>');
}

});
