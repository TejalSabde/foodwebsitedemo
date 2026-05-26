import { Component } from '@angular/core';

const menuItems = [

  /* SHAWARMAS */

  {
    category: 'Shawarmas',
    name: 'Paneer Shawarma',
    desc: 'Creamy paneer, fresh veggies, tahini & sauce',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1779119056/fusion_chicken_bbq_fiery_shawarma_2.jpg'
  },   
  // {
  //   category: 'Shawarmas',
  //   name: 'Peri Peri Chicken Shawarma',
  //   desc: 'Spicy peri peri chicken with fresh veggies & sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469237/Peri_Peri_Chicken_Shawarma_uwnlun.jpg'
  // },
  // {
  //   category: 'Shawarmas',
  //   name: 'Firangi Chicken Shawarma',
  //   desc: 'Fusion-style chicken shawarma with creamy sauce & veggies',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469235/Firangi_Chicken_Shawarma_hpaote.jpg'
  // },
  // {
  //   category: 'Shawarmas',
  //   name: 'Classic Chicken Shawarma',
  //   desc: 'Traditional chicken shawarma with veggies & garlic sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469209/Classic_Chicken_Shawarma_sqpfxn.jpg'
  // },
  // {
  //   category: 'Shawarmas',
  //   name: 'Chicken Tikka Shawarma',
  //   desc: 'Smoky chicken tikka with veggies & tangy sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469201/Chicken_Tikka_Shawarma_dof4vt.jpg'
  // },
  // {
  //   category: 'Shawarmas',
  //   name: 'BBQ Chicken Shawarma',
  //   desc: 'BBQ-flavored chicken with fresh veggies & sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/BBQ_Chicken_Shawarma_ccrkfd.jpg'
  // },
  // {
  //   category: 'Shawarmas',
  //   name: 'Chilli Milli Paneer Shawarma',
  //   desc: 'Spicy chilli paneer with fresh veggies & creamy sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/Chilli_Milli_Paneer_Shawarma_e851fm.jpg'
  // },
  // {
  //   category: 'Shawarmas',
  //   name: 'BBQ Paneer Shawarma',
  //   desc: 'BBQ-flavored paneer with veggies & rich sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/BBQ_Paneer_Shawarma_swb38v.jpg'
  // },
  // {
  //   category: 'Shawarmas',
  //   name: 'Aloo Tikki Shawarma',
  //   desc: 'Crispy aloo tikki with veggies & tangy sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/Aloo_Tikki_Shawarma_ltw6aj.jpg'
  // },
  // {
  //   category: 'Shawarmas',
  //   name: 'Fiery Paneer Shawarma',
  //   desc: 'Hot & spicy paneer with crunchy veggies & sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/Fiery_Paneer_Shawarma_yi0eni.jpg'
  // },
  // {
  //   category: 'Shawarmas',
  //   name: 'Falafel Shawarma',
  //   desc: 'Crispy falafel with fresh veggies & creamy dressing',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469870/Falafal_Shawarma_2_ukyprc.jpg'
  // },
  // {
  //   category: 'Shawarmas',
  //   name: 'Falafel Hummus Shawarma',
  //   desc: 'Falafel with hummus, veggies & flavorful sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469867/Falafal_Hummus_Shawarma_ax3jhd.jpg'
  // },
  // {
  //   category: 'Shawarmas',
  //   name: 'Classic Paneer Shawarma',
  //   desc: 'Classic paneer with veggies & signature sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/Classic_Paneer_Shawarma_lndwav.jpg'
  // },

  /* SALADS */

  // {
  //   category: 'Salads',
  //   name: 'Chilli Milli Chicken Salad',
  //   desc: 'Spicy chilli chicken with fresh veggies & dressing',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/Chilli_Milli_Chicken_Salad_o7tniw.jpg'
  // },
  // {
  //   category: 'Salads',
  //   name: 'BBQ Chicken Salad',
  //   desc: 'BBQ chicken with crunchy veggies & creamy dressing',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/BBQ_Chicken_Salad_vevt4u.jpg'
  // },
  // {
  //   category: 'Salads',
  //   name: 'Turkish Chicken Salad',
  //   desc: 'Turkish-style chicken with fresh veggies & herbs',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/Turkish_Chicken_Salad_nukbrj.jpg'
  // },
  // {
  //   category: 'Salads',
  //   name: 'Hummus Chicken Salad',
  //   desc: 'Chicken with hummus, veggies & light dressing',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/Hummus_Chicken_Salad_ibjgba.jpg'
  // },
  // {
  //   category: 'Salads',
  //   name: 'Fiery Chicken Salad',
  //   desc: 'Hot & spicy chicken with fresh veggies & sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/Fiery_Chicken_Salad_aiddv6.jpg'
  // },
  // {
  //   category: 'Salads',
  //   name: 'BBQ Paneer Salad',
  //   desc: 'BBQ paneer with fresh veggies & creamy dressing',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/BBQ_Paneer_Salad_lcfw0k.jpg'
  // },
  // {
  //   category: 'Salads',
  //   name: 'Falafel Salad',
  //   desc: 'Crispy falafel with fresh veggies & tahini dressing',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469855/Falafal_Salad_qdrkoj.jpg'
  // },
  // {
  //   category: 'Salads',
  //   name: 'Fiery Paneer Salad',
  //   desc: 'Spicy paneer with crunchy veggies & sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/Fiery_Paneer_Salad_squvmh.jpg'
  // },
  // {
  //   category: 'Salads',
  //   name: 'Classic Paneer Salad',
  //   desc: 'Classic paneer with fresh veggies & light dressing',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/Classic_Paneer_Salad_hnabfo.jpg'
  // },
  // {
  //   category: 'Salads',
  //   name: 'Aloo Tikki Salad',
  //   desc: 'Crispy aloo tikki with veggies & tangy dressing',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/Aloo_Tikki_Salad_b3kbex.jpg'
  // },

  /* PLATTERS */

  // {
  //   category: 'Platters',
  //   name: 'Chicken Hummus Platter',
  //   desc: 'Juicy chicken served with hummus, pita & sides',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469199/Chicken_Hummus_Platter_b3afwo.jpg'
  // },
  // {
  //   category: 'Platters',
  //   name: 'Hummus Falafel Platter',
  //   desc: 'Crispy falafel with hummus, pita & fresh sides',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469479/Hummus_Falafal_Platter_xuivby.jpg'
  // },
  // {
  //   category: 'Platters',
  //   name: 'Hummus Falafel Bites',
  //   desc: 'Falafel bites served with hummus & dipping sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/v1777469475/Hummus_Falafal_Bites_aaiz0w.jpg'
  // },

  /* GRILLERS */

  // {
  //   category: 'Grillers',
  //   name: 'Tandoori Griller',
  //   desc: 'Smoky tandoori chicken',
  //   image: 'assets/img/food-pics/IMG_9211-Edit.jpg'
  // },


  /* DESSERTS */

  // {
  //   category: 'Desserts',
  //   name: 'Caramel Custard',
  //   desc: 'Classic dessert',
  //   image: 'assets/img/food-pics/IMG_9181-Edit.jpg'
  // }

];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isMobile = window.innerWidth <= 990;


  categories: string[] = [
    'Shawarmas',
    'Salads',
    'Platters',
    'Grillers',
    'Desserts'
  ];

  selectedCategory = 'Shawarmas';

  get filteredItems() {

    return menuItems.filter(
      item => item.category === this.selectedCategory
    );

  }


  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }

}
