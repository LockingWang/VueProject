<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div class="container-fluid">
              <a class="navbar-brand" href="#">日本代購網</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/user/home">首頁</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/user/products">商品頁</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/user/favorite">我的最愛</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/user/userCheckout/cart">購物車</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/user/searchOrder">訂單查詢</router-link>
                  </li>
              </ul>
              </div>
          </div>
      </nav>
  </template>
