new Vue({
  el: '#v-for-object',
  data: {

  	poblacion:[],
    gene : {
    	cromosoma1:'pixelNegro',
    	cromosoma2:'pixelBlanco',
    	cromosoma3:'pixelNegro',
    	cromosoma4:'pixelBlanco',
    	cromosoma5:'pixelNegro',
    	cromosoma6:'pixelBlanco',
    	cromosoma7:'pixelNegro',
    	cromosoma8:'pixelBlanco',
    	cromosoma9:'pixelNegro',
    	cromosoma10:'pixelBlanco',
    	cromosoma11:'pixelNegro',
    	cromosoma12:'pixelBlanco',
    	cromosoma13:'pixelNegro',
    	cromosoma14:'pixelBlanco',
    	cromosoma15:'pixelNegro',
    	cromosoma16:'pixelBlanco',
    	cromosoma17:'pixelNegro',
    	cromosoma18:'pixelBlanco',
    	cromosoma19:'pixelNegro',
    	cromosoma20:'pixelBlanco'
    },
  },
  export default {
  methods : {

    cromosomasRandom : function(gene){

      if (Math.random()<.5) {
       this.poblacion.gene.cormosoma='pixelBlanco';
       else{
       	this.poblacion.gene.cromosoma='pixelNegro';
       }
      }

      return
    }
  }
}
})