<template>
    <div class="head-page-bg row align-items-center justify-content-center">
        <div class="col-10 col-lg-6 p-5 rounded banner-animate"
        style="background-color: rgba(255, 255, 255, 0.698);">
            <h2 class="text-center text-danger fw-bold title-animate">歡迎來到DailyCheap</h2>
            <p class="text-center text-danger mb-3 fw-bold title-animate">全台灣最優質的日本代購網站</p>
            <div class="row g-3">
                <div class="col-lg-6">
                    <router-link class="btn btn-outline-success w-100 py-3 btn-animate"
                    to="/login">管理員登入</router-link>
                </div>
                <div class="col-lg-6">
                    <router-link class="btn btn-success w-100 py-3 btn-animate"
                    to="/user/home">訪客登入</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@keyframes banner-animate {
    0% {opacity: 0;transform: translateY(200px);}
    100% {opacity: 1;transform: translateY(0px);}
}
@keyframes title-animate {
    0% {transform: scale(2);opacity: 0;}
    100% {transform: scale(1);opacity: 1;}
}
@keyframes btn-animate {
    0% {transform: translateY(120px)}
    100% {transform: translateY(0px)}
}
.banner-animate {
    overflow: hidden;
    animation-name: banner-animate;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
}
.title-animate {
    opacity: 0;
    animation-name: title-animate;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
}
.btn-animate {
    transform: translateY(120px);
    animation-name: btn-animate;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-delay: 2.5s;
    animation-fill-mode: forwards;
}
</style>
