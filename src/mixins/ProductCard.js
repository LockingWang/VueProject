export default {
  methods: {
    hoverEffect(move, event) {
      const focusedCard = document.getElementById(event.target.dataset.id);
      if (move === 'in') {
        focusedCard.classList.add('card-hover');
      } else {
        focusedCard.classList.remove('card-hover');
      }
    },
  },
};
