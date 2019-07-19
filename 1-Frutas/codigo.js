const app= new Vue({
    el: '#app',
    data: {
      titulo: 'Hola mundo con Vue',
      frutas: [
          {nombre: 'Manzana', cantidad: 2},
          {nombre: 'Pera', cantidad: 0},
          {nombre: 'Platano', cantidad: 1},
      ],
      nuevaFruta: '',
      total:0,
    },
    methods:{
        agregarFruta: function(){
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad:0
            })
            this.nuevaFruta='';
        },
    },
    computed:{
        sumarFrutas(){
            this.total=0;
            for(fruta of this.frutas){
                this.total=this.total + fruta.cantidad;
            };
            return this.total;
        }
    },
})