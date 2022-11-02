import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  result: string;

  constructor(private alertController: AlertController,private actionSheetCtrl: ActionSheetController) {}
  

  async strangerThings() {
    const alert = await this.alertController.create({
      message: '<ion-card><img alt="Stranger Things" src="https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV5lteI3eHet1nPBQKC_uEChESjqQfYpRwMWLR0wULt52odnxQtG69JNFDj9N4maZWJWDFZyi2sc1YzZ8mKE4Ajmt7Btva1CnWagGbYXVMp3t4OETM4LwiD70dHu-qWUbBAesQ.jpg?r=c68" /><ion-card-header><ion-card-title>Stranger Things</ion-card-title><ion-card-subtitle>Serie</ion-card-subtitle></ion-card-header><ion-card-content>A raíz de la desaparición de un niño, un pueblo desvela un misterio relacionado con experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.</ion-card-content></ion-card>',
      buttons: ['OK'],
      
    });

    await alert.present();
  }

  async theWitcher() {
    const alert = await this.alertController.create({
      message: '<ion-card><img  alt="The" src="https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" /><ion-card-header><ion-card-title>Stranger Things</ion-card-title><ion-card-subtitle>Serie</ion-card-subtitle></ion-card-header><ion-card-content>Se basa en la Saga de Geralt de Rivia del escritor polaco Andrzej Sapkowski. Ubicada en un mundo medieval en una masa de tierra conocida como "el Continente", The Witcher explora la leyenda de Geralt de Rivia y la princesa Ciri, que están unidos el uno al otro por el destino.</ion-card-content></ion-card>',
      buttons: ['OK'],
      
    });
      await alert.present();
  }

  async titanes() {
    const alert = await this.alertController.create({
      message: '<ion-card><img alt="Titanes" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/09/titanes-poster-temporada-2.jpg?itok=PJZ02S2i" /><ion-card-header><ion-card-title>Titanes</ion-card-title><ion-card-subtitle>Serie</ion-card-subtitle></ion-card-header><ion-card-content> Después de lanzarse a actuar por su cuenta, el excompañero de Batman se encuentra con una serie de jóvenes héroes con problemas que necesitan desesperadamente un mentor. </ion-card-content></ion-card>',
      buttons: ['OK'],
      
    });

    await alert.present();
  }

  async losIlusionistas() {
    const alert = await this.alertController.create({
      message: '<ion-card><img alt="Los ilusionistas" src="https://mx.web.img3.acsta.net/pictures/19/05/15/05/09/3936022.jpg" /><ion-card-header><ion-card-title>Los Ilusionistas</ion-card-title><ion-card-subtitle>Pelicula</ion-card-subtitle></ion-card-header><ion-card-content> Los Ilusionistas cuenta la historia de un grupo de magos, cuyas habilidades dejan en ridículo al FBI y especialmente al agente Dylan Rhodes (Mark Ruffalo) cuando en uno de sus actos de magia no sólo demuestran que lograron robar un banco sin que nadie tuviera la más mínima idea, sino que regalaron el dinero al público. </ion-card-content></ion-card>',
      buttons: ['OK'],
      
    });

    await alert.present();
  }

  async pixeles() {
    const alert = await this.alertController.create({
      message: '<ion-card><img alt="Pixeles" src="https://es.web.img3.acsta.net/pictures/15/07/08/14/59/530666.jpg" /><ion-card-header><ion-card-title>Pixeles</ion-card-title><ion-card-subtitle>Pelicula</ion-card-subtitle></ion-card-header><ion-card-content> Alienígenas intergalácticos reciben señales de videojuegos arcade clásicos y los malinterpretan como una declaración de guerra contra ellos, así que deciden atacar la Tierra utilizando estos juegos como modelo para sus múltiples ataques. </ion-card-content></ion-card>',
      buttons: ['OK'],
      
    });

    await alert.present();
  }

  async onePiece() {
    const alert = await this.alertController.create({
      message: '<ion-card><img alt="One Piece" src="https://areajugones.sport.es/wp-content/uploads/2021/08/one-piece-vol-100.jpg" /><ion-card-header><ion-card-title>One Piece</ion-card-title><ion-card-subtitle>Serie/Anime</ion-card-subtitle></ion-card-header><ion-card-content> One Piece es la historia de un chico llamado Monkey D. Luffy, quién se inspiró en Shanks, un pirata que le salvó la vida, para convertirse en el Rey de los Piratas. Al comienzo de la serie, veinticuatro años antes de la historia actual, un pirata llamado Gol D. </ion-card-content></ion-card>',
      buttons: ['OK'],
      
    });

    await alert.present();
  }

  async theFlash() {
    const alert = await this.alertController.create({
      message: '<ion-card><img alt="The Flash" src="https://www.formulatv.com/images/series/posters/800/834/dest_3.jpg" /><ion-card-header><ion-card-title>The Flash</ion-card-title><ion-card-subtitle>Serie</ion-card-subtitle></ion-card-header><ion-card-content> Está basada en el personaje de DC Comics Barry Allen / Flash, un superhéroe disfrazado que lucha contra el crimen con el poder de moverse a velocidades sobrehumanas.  </ion-card-content></ion-card>',
      buttons: ['OK'],
      
    });

    await alert.present();
  }

  async megamente() {
    const alert = await this.alertController.create({
      message: '<ion-card><img alt="Megamente" src="https://es.web.img2.acsta.net/medias/nmedia/18/78/24/95/19534186.jpg" /><ion-card-header><ion-card-title>Megamente</ion-card-title><ion-card-subtitle>Pelicula</ion-card-subtitle></ion-card-header><ion-card-content> Megamente (voz de Will Ferrell) es un extraterrestre con una enorme cabeza que llega a la Tierra con apenas ocho días de nacido, ya que sus padres lo evacuaron a causa de la destrucción de su planeta por un agujero negro. La misma situación ocurre con Metro Man (voz de Brad Pitt), otro extraterrestre con forma humana. </ion-card-content></ion-card>',
      buttons: ['OK'],
      
    });

    await alert.present();
  }

  async juegodelCalamar() {
    const alert = await this.alertController.create({
      message: '<ion-card><img alt="Juego del Calamar" src="https://es.web.img3.acsta.net/pictures/21/09/29/12/02/1288399.jpg" /><ion-card-header><ion-card-title>El Juego del Calamar</ion-card-title><ion-card-subtitle>Serie</ion-card-subtitle></ion-card-header><ion-card-content> Este consiste en el enfrentamiento de dos jugadores dentro de las formas de un círculo, triángulo y cuadrado que dan la forma del calamar. Este, además, es el último juego por el que pasan los sobrevivientes en la serie para llevarse el gran premio. </ion-card-content></ion-card>',
      buttons: ['OK'],
      
    });

    await alert.present();
  }

  async spiderman() {
    const alert = await this.alertController.create({
      message: '<ion-card><img alt="Spiderman" src="https://es.web.img2.acsta.net/pictures/21/12/01/12/07/0243323.jpg" /><ion-card-header><ion-card-title>Spiderman</ion-card-title><ion-card-subtitle>Pelicula</ion-card-subtitle></ion-card-header><ion-card-content> Después de que Mysterio desvelara la identidad de Spider-Man a todo el mundo en Lejos de casa, Peter Parker (Tom Holland), desesperado por volver a la normalidad y recuperar su anterior vida, pide ayuda a Doctor Strange para enmendar tal acción. El Hechicero Supremo de Marvel accede a ayudar al joven Hombre Araña, sin embargo, algo sale mal y el multiverso se convierte en la mayor amenaza hasta el momento. </ion-card-content></ion-card>',
      buttons: ['OK'],
      
    });

    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      
      buttons: [
       
        {
          text: 'Compartir',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Favoritos',
          data: {
            action: 'favorite',
          },
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

  }
}

  




  


