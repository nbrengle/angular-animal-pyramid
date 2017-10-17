import { Injectable } from '@angular/core';

import { PyramidRow } from './pyramid-row.model'
import { Animal } from '../animal.model'

@Injectable()
export class PyramidRowService {
  rows: Array<PyramidRow>

  constructor() {
      this.rows = [
          new PyramidRow([
              new Animal('ant', 'insect', 1, new URL('https://sites.google.com/site/hymenopteraapocritaaculeate/_/rsrc/1467119402710/suborder-apocrita---aculeate/superfamily-vespoidea/formicidae-wasps/IMG_6014.jpg')),
              new Animal('coleoptera', 'insect', 1, new URL('https://terrifictop10.files.wordpress.com/2014/08/rhino-beetle.jpg')),
              new Animal('lady bug', 'insect', 1, new URL('http://vignette3.wikia.nocookie.net/treeworld/images/c/ca/Ladybug-crawling-on-a-blade-of-grass.jpg/revision/latest?cb=20121209041624'))
          ]),
          new PyramidRow([
              new Animal('antelope', 'herbivore', 2, new URL('http://2.bp.blogspot.com/_sv3sCU82W6o/S0rfSVMoErI/AAAAAAAAOzo/ellvCDkXRw0/s400/DSC_6989.JPG')),
              new Animal('rabbit', 'herbivore', 2, new URL('https://vignette.wikia.nocookie.net/sugarpeeach/images/5/53/Rabbits.jpg/revision/latest?cb=20160121105922')),
              new Animal('water buffalo', 'herbivore', 2, new URL('https://res.cloudinary.com/dk-find-out/image/upload/q_80,h_800,f_auto/rexfeatures_3264895a_luzjm7.jpg'))
          ]),
          new PyramidRow([
              new Animal('snake', 'secondary', 3, new URL('https://lh6.googleusercontent.com/s2llTlI6GsjdO-x4qvykr3wEVT0jbQm7HcQ86cX445eiNQHt-I3angNhcpd4u8UOFv3E9bBtFdFay2P4jPWXVjOwZcYDbDE5iPfRhNTgETL9IRLsDuK6-Ge34g')),
              new Animal('frog', 'secondary', 3, new URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJJgbyAPh4cp4MrH6N5n77OHoAHR0CptV1hycQE_s8nyno9X4')),
              new Animal('ermine', 'secondary', 3, new URL('https://arctictundraproject.files.wordpress.com/2013/09/ermine.jpg'))
          ]),
          new PyramidRow([
              new Animal('gorilla', 'omnivore', 4, new URL('http://media.npr.org/assets/img/2012/04/17/ap100701027219_wide-63174dd219adba80195d75740bac1303ecbb91a5-s900-c85.jpg')),
              new Animal('warthog', 'omnivore', 4, new URL('https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/165/104/92814428.jpg')),
              new Animal('red panda', 'omnivore', 4, new URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4eqcEs3s2OPCE3AnX74ux0bj1kKcJ9841Hzo-6enDaazU2h6'))
          ]),
          new PyramidRow([
              new Animal('lion', 'apex', 5, new URL('http://foodchainstherealstory.weebly.com/uploads/2/8/8/4/28841775/1283905_orig.jpg')),
              new Animal('polar bear', 'apex', 5, new URL('https://media.buzzle.com/media/images-en/photos/mammals/bears/1200-33074712-polar-bear.jpg')),
              new Animal('alligator', 'apex', 5, new URL('https://venatorcontegitur.weebly.com/uploads/2/5/1/0/25101931/6827094_orig.jpg'))
          ])
      ];
   }

   getRows(): Array<PyramidRow> {
       return this.rows;
   }

}
