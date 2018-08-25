import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }
  
    ngOnInit() {
  
      var movies = [
        {mov:'12 Angry Men', relDate: '1957', rating: 3,url:'assets/12am.jpg'},
        {mov:'The Good, the Bad and the Ugly', relDate: '1966', rating: 3,url:'assets/gbu.jpg'},
        {mov:'The Godfather', relDate: '1972', rating: 5,url:"assets/godfather.jpg"},
        {mov:'The Godfather: Part 2', relDate: '1974', rating: 3,url:'assets/g2.jpg'},
        {mov:'Schindler\'s List', relDate: '1993', rating: 5,url:'assets/slist.jpg'},
        {mov:'The Shawshank Redemption', relDate: '1994', rating: 5,url:'assets/shaw.jpg'},
        {mov:'Pulp Fiction', relDate: '1994', rating: 4,url:'assets/pf.jpg'},
        {mov:'The Lord of the Rings: The Return of the King', relDate: '2003', rating: 4,url:'assets/lotr.jpg'},
        {mov:'The Dark Knight', relDate: '2008', rating: 5,url:'assets/knight.jpg'},
        {mov:'Inception', relDate: '2010', rating: 4,url:'assets/inception.jpg'},
    
        ];      

      
        var sortedMovies = sortCards(movies);
        console.log(sortedMovies);
        drawCards(sortedMovies);
        
        function drawCards(array)
          {
            console.log("3")
          console.log(array);
  
          
  
          $(array).each(function(key,value) 
           {
            var elem = '<div class="cardContainer" style="background-image: linear-gradient(rgba(10,10,10,0.1),rgba(5,5,5,0.7)),  url('+ this.url +') ;background-size: contain; "> \
        <div class="cardTitle"><div class="cardText">' + this.mov + '</div></div> \
        <div><i class="fa fa-tachometer saphron-icon" aria-hidden="true"></i>Rating: <span>' + this.rating + '</span></div> \
        <div>';
            for (var i=1; i<6; i++)
              {
                if (i<=this.rating)
                elem += '<i class="fa fa-star saphron-icon" aria-hidden="true"></i>';
                else elem += '<i class="fa fa-star-o saphron-icon" aria-hidden="true"></i>';
              }
        
            elem += '</div> \
              <p class="italic">Released: ' + this.relDate + '</p> \
            </div>';
            $('#movies').append(elem);
          });
        }

        function sortCards(array) 
        {
          var x=array.sort((a,b):number =>{
            if(a.rating < b.rating) return -1;
            if(a.rating > b.rating) return 1;
            return 0;
          
        })
        return x;
          
        //   if (sortby==0)	return this.sortBy(array, function(obj){ return obj.act });
        //   if (sortby==1)	return this.sortBy(array, function(obj){ return -obj.rating });
        //   if (sortby==2)	return this.sortBy(array, function(obj){ return +obj.rating });
        // }
    }
  
  }
  }
  