import { Injectable, OnInit } from '@angular/core';
import { ProductModel } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class AllproductService implements OnInit{
  allProducts:ProductModel[] = [
    {
      id:1,
      img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      title: "Nike Air Monarch IV",
      reviews: "(123 reviews)",
      prevPrice: 1400,
      newPrice: 900,
      company: "Nike",
      color: "white",
      category:"sneakers",
      gender:'men',
      quantity:1
    },
    {
      id:2,
      img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
      title: "Nike Air Vapormax Plus",
      reviews: "(123 reviews)",
      prevPrice: 1800,
      newPrice: 1100,
      company: "Nike",
      color: "red",
      category: "sneakers",
      gender:'men',
      quantity:1
    },
  
    {
      id:3,
      img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
      title: "Nike Waffle One Sneaker",
      reviews: "(123 reviews)",
      prevPrice: 1500,
      newPrice: 1200,
      company: "Nike",
      color: "green",
      category: "sneakers",
      gender:'men',
      quantity:1
      
    },
    {
      id:4,
      img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
      title: "Nike Running Shoe",
      reviews: "(123 reviews)",
      prevPrice: 1000,
      newPrice: 600,
      company: "Adidas",
      color: "black",
      category: "sneakers",
      gender:"men",
      quantity:1
    },
  
    {
      id:5,
      img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
      title: "Knit Ballet Flat",
      reviews: "(123 reviews)",
      prevPrice: 900,
      newPrice: 500,
      company: "Adidas",
      color: "black",
      category: "flats",
      gender:"wommen",
      quantity:1
    },
  
    {
      id:6,
      img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
      title: "Loafer Flats",
      reviews: "(123 reviews)",
      prevPrice: 800,
      newPrice: 500,
      company: "Vans",
      color: "white",
      category: "flats",
      gender:"wommen",
      quantity:1
    },
  
    {
      id:7,
      img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
      title: "Nike Zoom Freak",
      reviews: "(123 reviews)",
      prevPrice: 1000,
      newPrice: 800,
      company: "Nike",
      color: "green",
      category: "sneakers",
      gender:"men",
      quantity:1
    },
  
    {
      id:8,
      img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
      title: "Nike Men's Sneaker",
      reviews: "(123 reviews)",
      prevPrice: 1200,
      newPrice: 900,
      company: "Adidas",
      color: "blue",
      category: "sneakers",
      gender:"men",
      quantity:1
    },
  
    {
      id:9,
      img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
      title: "PUMA BLACK-OCE",
      reviews: "(123 reviews)",
      prevPrice: 800,
      newPrice: 650,
      company: "Puma",
      color: "green",
      category: "sneakers",
      gender:"men",
      quantity:1
    },
    {
      id:10,
      img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
      title: "Pacer Future Sneaker",
      reviews: "(123 reviews)",
      prevPrice: 1400,
      newPrice: 1200,
      company: "Puma",
      color: "red",
      category: "sneakers",
      gender:"men",
      quantity:1
    },
    {
      id:11,
      img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
      title: "Unisex-Adult Super",
      reviews: "(123 reviews)",
      prevPrice: 1200,
      newPrice: 800,
      company: "Puma",
      color: "black",
      category: "sneakers",
      gender:"men",
      quantity:1
    },
    {
      id:12,
      img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL.AC_UX575.jpg",
      title: "Roma Basic Sneaker",
      reviews: "(123 reviews)",
      prevPrice: 1600,
      newPrice: 1300,
      company: "Puma",
      color: "white",
      category: "sneakers",
      gender:"men",
      quantity:1
    },
    {
      id:13,
      img: "https://m.media-amazon.com/images/I/7128-af7joL.AC_UY575.jpg",
      title: "Pacer Future Doubleknit",
      reviews: "(123 reviews)",
      prevPrice: 1800,
      newPrice: 1400,
      company: "Puma",
      color: "black",
      category: "sneakers",
      gender:"men",
      quantity:1
    },
  
    { id:14,
      img: "https://m.media-amazon.com/images/I/81xXDjojYKS.AC_UX575.jpg",
      title: "Fusion Evo Golf Shoe",
      reviews: "(123 reviews)",
      prevPrice: 1300,
      newPrice: 900,
      company: "Puma",
      color: "green",
      category: "sneakers",
      gender:"men",
      quantity:1
    },
    {
      id:15,
      img: "https://m.media-amazon.com/images/I/719gdz8lsTS.AC_UX575.jpg",
      title: "Rainbow Chex Skate",
      reviews: "(123 reviews)",
      prevPrice: 1000,
      newPrice: 600,
      company: "Vans",
      color: "red",
      category: "flats",
      gender:"men",
      quantity:1
    },
    {
      id:16,
      img: "https://m.media-amazon.com/images/I/71gpFHJlnoL.AC_UX575.jpg",
      title: "Low-Top Trainers",
      reviews: "(123 reviews)",
      prevPrice: 900,
      newPrice: 500,
      company: "Vans",
      color: "white",
      category: "sandals",
      gender:"men",
      quantity:1
    },
    {
      id:17,
      img: "https://m.media-amazon.com/images/I/71pf7VFs9CL.AC_UX575.jpg",
      title: "Vans Unisex Low-Top",
      reviews: "(123 reviews)",
      prevPrice: 1500,
      newPrice: 1000,
      company: "Vans",
      color: "blue",
      category: "sandals",
      gender:"men",
      quantity:1
    },
    {
      id:18,
      img: "https://m.media-amazon.com/images/I/61N4GyWcHPL.AC_UY575.jpg",
      title: "Classic Bandana Sneakers",
      reviews: "(123 reviews)",
      prevPrice: 900,
      newPrice: 500,
      company: "Nike",
      color: "black",
      category: "sandals",
      gender:"men",
      quantity:1
    },
    {
      id:19,
      img: "https://m.media-amazon.com/images/I/61bncQ44yML.AC_UX695.jpg",
      title: "Chunky High Heel",
      reviews: "(123 reviews)",
      prevPrice: 1800,
      newPrice: 1099,
      company: "Vans",
      color: "black",
      category: "heels",
      gender:"wommen",
      quantity:1
    },
    {
      id:20,
      img: "https://m.media-amazon.com/images/I/71czu7WgGuL.AC_UY695.jpg",
      title: "Slip On Stiletto High Heel",
      reviews: "(123 reviews)",
      prevPrice: 1700,
      newPrice: 1000,
      company: "puma",
      color: "black",
      category: "heels",
      gender:"wommen",
      quantity:1
    },
    {
      id:21,
      img: "https://m.media-amazon.com/images/I/61men05KRxL.AC_UY625.jpg",
      title: "DREAM PAIRS Court Shoes",
      reviews: "(123 reviews)",
      prevPrice: 1400,
      newPrice: 900,
      company: "Nike",
      color: "red",
      category: "heels",
      gender:"wommen",
      quantity:1
      
    },

  
    {
      id:22,
      img: "https://m.media-amazon.com/images/I/51PGWTXgf-L.AC_UY625.jpg",
      title: "Low Mid Block Heels",
      reviews: "(123 reviews)",
      prevPrice: 1000,
      newPrice: 800,
      company: "Nike",
      color: "black",
      category: "heels",
      gender:"wommen",
      quantity:1
    },
    {
      id:23,
      img: "https://m.media-amazon.com/images/I/616sA5XUKtL.AC_UY675.jpg",
      title: "Chunky High Heel",
      reviews: "(123 reviews)",
      prevPrice: 1400,
      newPrice: 1050,
      company: "Adidas",
      color: "black",
      category: "heels",
      gender:"wommen",
      quantity:1
    },
    {
      id:24,
      img: "https://m.media-amazon.com/images/I/71h5+MbEK7L.AC_UY625.jpg",
      title: "Amore Fashion Stilettos",
      reviews: "(123 reviews)",
      prevPrice: 1500,
      newPrice: 1000,
      company: "Adidas",
      color: "white",
      category: "heels",
      gender:"wommen",
      quantity:1
    },
    {
      id:25,
      img: "https://m.media-amazon.com/images/I/61uw5RDxKQL.AC_UY625.jpg",
      title: "Bridal Sandals Glitter",
      prevPrice: 1300,
      newPrice: 900,
      company: "Adidas",
      color: "black",
      category: "heels",
      gender:"wommen",
      quantity:1
    },
    {
      id:26,
      img: "https://m.media-amazon.com/images/I/71yhoZP0l6L.AC_UY695.jpg",
      title: "Wedding Prom Bridal",
      prevPrice: 15000,
      newPrice: 1259,
      company: "Adidas",
      color: "black",
      category: "flats",
      gender:"wommen",
      quantity:1
    },
    {
      id:27,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/kids-shoe/t/i/f/2-yodha-01-asian-original-imags23s9jhwjcws.jpeg?q=70",
      title: "Lace Running Shoes For Boys  ",
      prevPrice: 1200,
      newPrice: 1099,
      company: "Adidas",
      color: "black",
      category: "sneakers",
      gender:"kids",
      quantity:1
    },
    {
      id:28,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/kids-shoe/5/d/k/13-sk-97-sparx-original-imagk8x4uatjtah3.jpeg?q=70",
      title: "Velcro Sneakers For Boys",
      prevPrice: 1400,
      newPrice: 1000,
      company: "Adidas",
      color: "blue",
      category: "sneakers",
      gender:'kids',
      quantity:1
  
    },
  ]
  ngOnInit(): void {

  }
  
}
