;
jQuery(document).ready(function(){

    //Change service tab icon on click
    $('#service-tab a').on('show.bs.tab', function (e) {
        var currentTab = e.target // newly activated tab
        var prevTab = e.relatedTarget // previous active tab

        var imgSrc = $(currentTab).find('img').attr('src');
        var imgSrcActive = $(currentTab).find('img').data('active');
        
        var prevImgSrc = $(prevTab).find('img').attr('src');
        var prevImgSrcActive = $(prevTab).find('img').attr('data-active');


        $(currentTab).find('img').attr('data-active', imgSrc);
        $(currentTab).find('img').attr('src', imgSrcActive);

        $(prevTab).find('img').attr('data-active', prevImgSrc);
        $(prevTab).find('img').attr('src', prevImgSrcActive);
        
    })


});