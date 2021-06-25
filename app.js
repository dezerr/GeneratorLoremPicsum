new Vue({
    el: '#app',
    data: {
        numberX : '200',
        numberY : '200',
    },
    methods: {
        test: function() {
            let newImg = document.createElement('img');
            newImg.src = `https://picsum.photos/${this.numberX}/${this.numberY}`
            /*document.body.appendChild(newImg)*/
            document.querySelector('.box').appendChild(newImg);
        }
    }
})