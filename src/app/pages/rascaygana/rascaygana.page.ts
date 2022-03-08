import { Component, OnInit } from '@angular/core';
import { Boleto } from 'src/app/model/Boleto';
import { Premio } from 'src/app/model/Premio';
import { BoletoService } from 'src/app/services/boleto.service';

@Component({
  selector: 'app-rascaygana',
  templateUrl: './rascaygana.page.html',
  styleUrls: ['./rascaygana.page.scss'],
})

export class RascayganaPage implements OnInit {

  public premio:Premio;
  public listaBoletos:Boleto[]=[];

 constructor(public api:BoletoService) { }

  ngOnInit() {
    
  }

  public async sacarPremio(id:number){

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
   }
    
  }

  
}




