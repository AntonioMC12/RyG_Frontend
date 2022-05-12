import { Component, OnInit } from '@angular/core';
import { Boleto } from 'src/app/model/Boleto';
import { Premio } from 'src/app/model/Premio';
import { BoletoService } from 'src/app/services/boleto.service';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js'

@Component({
  selector: 'app-rascaygana',
  templateUrl: './rascaygana.page.html',
  styleUrls: ['./rascaygana.page.scss'],
})


export class RascayganaPage implements OnInit {
  
 
  public context: CanvasRenderingContext2D;
  public ctx;
  public premio:Premio;
  public listaBoletos:Boleto[]=[];
  public brushPos;
  public brushRadius;

 constructor(public api:BoletoService) { }

  async ngOnInit() {
    
    //document.querySelector("div").innerHTML = JSON.stringify(datos);
    //let datos:Boleto = await this.sacarPremio(110);
    this.createNewScratchCard();

  }
 
  async createNewScratchCard() {
    

    const scContainer = document.getElementById('js--sc--container')
    const sc = new ScratchCard('#js--sc--container', {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: 300,//scContainer.offsetWidth,
      containerHeight: 300,
      imageForwardSrc: '../../../assets/gris.jpg',
      imageBackgroundSrc: '../../../assets/gris.jpg',
     // htmlBackground: '<div class="cardamountcss"><div class="won-amnt">30</div><div class="won-text">Points<br>Won!</div></div>',
      htmlBackground: '<div class="cardamountcss"><div id="show" class="won-amnt"></div><div class="won-text">Points<br>Won!</div></div>',
      clearZoneRadius: 40,
      nPoints: 30,
      pointSize: 4,
      callback: () => {
        console.log('Now the window will reload !')
      }
    })
    
    
  
    // Init
    sc.init();
  
  }

  public async sacarPremio(id:number):Promise<Boleto>{

    return new Promise(async(resolve,reject)=>{
      try {
        let boleto:Boleto = await this.api.getBoleto(id);
        console.log(boleto)
        //this.listaBoletos = await this.api.getBoletos();
    
       // let numberRandom:number= Math.floor(Math.random() * (this.listaBoletos.length - 0) + 0);
       if(boleto.entregado==false){
    
        if(boleto.premio==null){
          console.log("SIN PREMIO");
        }else{
          console.log("PREMIOOOOOOO!") 
        }
    
        let boletoEntregado:Boleto = boleto;
        boletoEntregado = {
          id: boletoEntregado.id,
          descripcion: boletoEntregado.descripcion,
          entregado: boletoEntregado.entregado=true,
          canjeado: boletoEntregado.canjeado,
          premio: boletoEntregado.premio,
          usuario: boletoEntregado.usuario
        }
        
        boletoEntregado =  await this.api.putBoleto(boletoEntregado);
        resolve(boleto);
       }
      } catch (error) {
        reject(error);
      }
    })

   
    
  }


  


  

}



