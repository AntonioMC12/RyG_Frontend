import { Component, Input, OnInit } from '@angular/core';
import { Boleto } from 'src/app/model/Boleto';
import { Premio } from 'src/app/model/Premio';
import { BoletoService } from 'src/app/services/boleto.service';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-rascaygana',
  templateUrl: './rascaygana.page.html',
  styleUrls: ['./rascaygana.page.scss'],
})


export class RascayganaPage implements OnInit {
  @Input() boleto:Boleto;

  public context: CanvasRenderingContext2D;
  public ctx;
  public listaBoletos:Boleto[]=[];
  public brushPos;
  public brushRadius;

 constructor(public api:BoletoService,
    private router:Router) { }

  ngOnInit() {

    const navigation = this.router.getCurrentNavigation();
    let objeto= navigation.extras.state as {example: Boleto};
    this.boleto = objeto.example as Boleto;
    console.info(this.boleto);
    this.createNewScratchCard();
  }

  createNewScratchCard() {
    const scContainer = document.getElementById('js--sc--container')
    let imgHTML ="";
    let premioInfo = "";

    if(this.boleto.premio == null){
      imgHTML = `<img style='height: 100%; width: 100%; object-fit: js--sc--container' src="https://cdn.memegenerator.es/descargar/2475756">`
      premioInfo = 'Sigue probando, la proxima vez sera mejor'
    }else{
      imgHTML= `<img style='height: 100%; width: 100%; object-fit: js--sc--container' src="https://blog.rappi.com/wp-content/uploads/2016/09/Post-Ganadores.png">`
      premioInfo = `Felicidades, has ganado un ${this.boleto.premio.description}
                    <br>
                    Podrás encontrarlo en ${this.boleto.usuario}
                    <br>
                    Haz captura de pantalla para cangearlo.
                    <br>
                    ID = ${this.boleto.premio.id}`

    }

    const sc = new ScratchCard('#js--sc--container', {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: 300,//scContainer.offsetWidth,
      containerHeight: 300,
      imageForwardSrc: '../../../assets/gris.jpg',
      imageBackgroundSrc: '../../../assets/gris.jpg',
      // htmlBackground: '<div class="cardamountcss"><div class="won-amnt">'+premiado+'</div></div>',
      htmlBackground: imgHTML,
      clearZoneRadius: 40,
      nPoints: 30,
      pointSize: 4,
      callback: () => {
        Swal.fire({
          title: '<strong>RESULTADO</strong>',
          icon: 'info',
          html:  premioInfo,
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          cancelButtonAriaLabel: 'Thumbs down'
        })
      }
    })
    // Init
    sc.init();
  }
}



