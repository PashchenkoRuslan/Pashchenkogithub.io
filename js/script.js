window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let leftBtn = document.querySelector('.btn_l'),
        rightBtn = document.querySelector('.btn_r'),

        video = document.querySelectorAll('.video_main'),
        text = document.querySelectorAll('.text_content');
    let mainVideoNum = 0;

    function showVid(mainVideoNum) {
        for(let i = 0; i < video.length; i++) {
            video[i].classList.remove('active');
        }
        video[mainVideoNum].classList.add('active');
    }
    function showText(mainVideoNum) {
        for(let i = 0; i < text.length; i++) {
            text[i].classList.remove('active');
        }
        text[mainVideoNum].classList.add('active');
    }



    rightBtn.addEventListener('click', function() {
        mainVideoNum = (mainVideoNum + 1) % video.length;
        showVid(mainVideoNum);
        showText(mainVideoNum)
    })

    leftBtn.addEventListener('click', function() {
        mainVideoNum = (mainVideoNum + video.length - 1) % video.length;
        showVid(mainVideoNum);
        showText(mainVideoNum)

    })


    let menuIcon = document.querySelector('.menuIcon'),
    navbar = document.querySelector('header');

    menuIcon.addEventListener('click',function() {
        menuIcon.classList.toggle('active');
        navbar.classList.toggle('active');
    })




        
})