import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCat(ar) {
      const newObj = {
        name: this.name || '',
        claws: this.claws || false,
        color: this.color || '',
        likesPeople: this.likesPeople || false,
      };

      if (newObj.name === '' || newObj.color === '') {
        alert('Cat\'s must have a name and color');
        return;
      }

      console.log(newObj);
      fetch('https://tiny-tn.herokuapp.com/collections/cats', {
        method: 'post',
        body: JSON.stringify(newObj),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())
        .then((cat) => {
          this.set('model', [...this.model, cat]);
        });
    }
  }
});
