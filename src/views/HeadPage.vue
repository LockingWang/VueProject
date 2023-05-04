<template>
    <div class="head-page-bg row align-items-center justify-content-center">
        <div class="col-10 col-lg-6 p-5 rounded"
        style="background-color: rgba(255, 255, 255, 0.698);">
            <h2 class="text-center text-danger fw-bold">歡迎來到DailyCheap</h2>
            <p class="text-center text-danger mb-3 fw-bold">全台灣最優質的日本代購網站</p>
            <div class="row g-3">
                <div class="col-lg-6">
                    <router-link class="btn btn-outline-success w-100 py-3"
                    to="/login">管理員登入</router-link>
                </div>
                <div class="col-lg-6">
                    <router-link class="btn btn-success w-100 py-3"
                    to="/user/home">訪客登入</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
