export default {
  data() {
    return {
      filtedProducts: [],
      pagination: {
        total_pages: '',
        current_page: 1,
        has_pre: false,
        has_next: false,
      },
      filter: '',
      searchText: '',
    };
  },
  methods: {
    filtProducts(page = 1) {
      if (this.filter === '') {
        this.filtedProducts = this.products.filter((i) => i.title.match(this.searchText));
      } else {
        this.filtedProducts = this.products.filter((i) => i.category === this.filter);
        this.filtedProducts = this.filtedProducts.filter((i) => i.title.match(this.searchText));
      }
      if (page === 'previous') {
        this.pagination.current_page -= 1;
      } else if (page === 'next') {
        this.pagination.current_page += 1;
      } else if (page === 1) {
        this.pagination.current_page = 1;
      } else {
        this.pagination.current_page = page;
      }

      this.pagination.total_pages = Math.ceil(this.filtedProducts.length / this.pageItems);
      if (this.pagination.current_page === 1) {
        this.pagination.has_pre = false;
        this.pagination.has_next = true;
        if (this.pagination.total_pages === 1) {
          this.pagination.has_next = false;
        }
      } else if (this.pagination.current_page === this.pagination.total_pages) {
        this.pagination.has_next = false;
        this.pagination.has_pre = true;
      } else {
        this.pagination.has_next = true;
        this.pagination.has_pre = true;
      }
      const showItems = [];
      const CP = this.pagination.current_page;
      this.filtedProducts.forEach((item, i) => {
        if (i <= CP * this.pageItems - 1 && i >= CP * this.pageItems - this.pageItems) {
          showItems.push(item);
        }
      });
      this.filtedProducts = showItems;
    },
  },
};
