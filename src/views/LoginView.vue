<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="container mt-5">
        <form class="row justify-content-center" @submit.prevent="signIn">
        <div class="col-md-6">
            <h1 class="h3 mb-3 font-weight-normal text-center">請先登入</h1>
            <div class="mb-2">
            <label for="inputEmail" class="sr-only w-100">Email address
            <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Email address"
                required
                v-model="user.username"
            /></label>
            </div>
            <div class="mb-2">
            <label for="inputPassword" class="sr-only w-100">Password
            <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Password"
                required
                v-model="user.password"
            /></label>
            </div>
            <div class="text-end mt-4">
            <button class="btn btn-lg btn-primary btn-block w-100" type="submit">
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
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>
