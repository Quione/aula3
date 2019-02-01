class Hero{
   
    constructor(public codenome:string, public identidadeSecreta:string){}


    //metodo (função)
    getIdentidade():void{
        console.log(`A identidade secreta do(a) ${this.codenome} é ${this.identidadeSecreta}`);
    }
}

interface Habilidade{
    superPoder?:string;
    pericia?:string;
    poder:number;
}

class Batman extends Hero implements Habilidade{

    superPoder?:string;
    pericia?:string;
    poder:number;

    constructor(public arquiRival:string){
        super(`Batman`,`Bruce Wayen`);
        this.superPoder = "Não possui";
        this.pericia = "artes marciais,armas,tecnologia,investigação";
        this.poder = 50;
    }
    getArquiRival():string{
        return `O(a) arque rival do ${this.codenome} é ${this.arquiRival}`;
    }
    getPericia(){
        return `A(s) pericia(s) do(a) ${this.codenome} é(são) ${this.pericia}`;
    }
}


let darkKinight = new Batman('Coringa');
darkKinight.getIdentidade();
console.log(darkKinight.getArquiRival());
console.log(darkKinight.getPericia());