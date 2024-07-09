export default class Salón{
    constructor(){
        this.acuE=0
        this.edMa=0
        this.cntEst=0
        this.cC=0
        this.cC18=0
        this.nM=" "
    }
    pEst(e){
        this.acuE += e.edad;
        this.cntEst++;
        if(e.edad>=this.edMa){
            this.edMa=e.edad;
            this.nM=e.nombre;
        }
        if(e.sexo ==="F"){
            this.cC++;
            if(e.edad>17){this.cC18++}}
}
    promEd(){ return this.acuE/this.cntEst}
    gPChic(){ return (this.cC18/this.cC)*100}
    nME(){ return this.nM}
}