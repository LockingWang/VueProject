<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="container mt-5">
        <form class="row justify-content-center" @submit.prevent="signIn">
        <div class="col-md-6">
            <div class="text-center mb-5">
              <img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/cong-ren/1683082602645.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BCYzXPtK8OCGLNLZh2BHGdZ74Vlx04qpqSFQbmmsnLDY4IrqtfBQupiPSTm8I9cSDgDjot6y6A6BaGNrFZxT%2FRnxw1HDCKyU%2BjBSCbvqf3EAu78K4da4ldoHhGzWOxRDBCqm1ZQfuS4FEzY5KIgsjq7DHlfIHTKxGcpwzwVp4%2FGKCKdekqcUSN8yLt31QzC3orS5h8ZGA2WqfPHHLI6%2FTGJ9ZhJmYbZorKAcI%2BpDCXo6ScyQ98IbGRWQjD3NTEmAYapTcA9yPDoRUXhz86rrNWuRKTx8vctF5PfHeR3UkXJOvN15i8Rmw%2B%2F5zAGslc2OqTnKCgdShTjNmU7jy1sjHQ%3D%3D" alt="logo">
            </div>
            <h1 class="h3 mb-3 font-weight-normal text-center">管理員登入</h1>
            <div class="mb-2">
            <label for="inputEmail" class="sr-only w-100">電子郵箱 Email address
            <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="請輸入您的email帳號"
                required
                v-model="user.username"
            /></label>
            </div>
            <div class="mb-2">
            <label for="inputPassword" class="sr-only w-100">密碼 Password
            <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="請輸入密碼"
                required
                v-model="user.password"
            /></label>
            </div>
            <div class="text-end mt-4">
            <button class="btn btn-lg btn-danger btn-block w-100" type="submit">
                登入</button>
            </div>
        </div>
        </form>
    </div>
</template>

<script>

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.isLoading = true;
      this.$http.post(api, this.user)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `userToken=${token}; expires=${new Date(expired)}`;
            this.$router.push('/dashboard/products');
          }
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
