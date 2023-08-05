<template>
    <div class="container-fluid border-bottom">
        <div class="row justify-content-center bg-white">
            <div class="col-md-6 my-5">
                <div class="card text-center">
                    <div class="card-header bg-danger text-white fw-bold fs-4">
                        <i class="bi bi-bank"></i>
                        匯款資訊
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">您的專屬匯款帳戶</h5>
                        <p class="card-text">
                            中華郵政 ( 700 ) 0001508-0015999
                        </p>
                    </div>
                    <div class="card-footer text-body-secondary">
                        我們會在每日的10:00進行對帳，若於10:00後完成匯款，<br>
                        請於隔日12:00後再到[訂單查詢]頁面確認付款狀態。
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <router-link to="/products" class="btn btn-outline-danger">
                        繼續購物<i class="bi bi-cart3 ms-3"></i></router-link>
                    <router-link to="/searchOrder" class="btn btn-danger">
                        前往訂單查詢頁面<i class="bi bi-arrow-right-circle ms-3"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
