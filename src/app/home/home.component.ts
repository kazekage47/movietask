import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import * as $ from 'jquery';
import { User } from '../_models';
import { UserService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
  
            var movies = [
              {mov:'12 Angry Men', relDate: '1957', rating: 3,url:'assets/12am.jpg'},
              {mov:'The Good, the Bad and the Ugly', relDate: '1966', rating: 3,url:'assets/gbu.jpg'},
              {mov:'The Godfather', relDate: '1972', rating: 5,url:"assets/godfather.jpg"},
              {mov:'The Godfather; Part 2', relDate: '1974', rating: 3,url:'assets/g2.jpg'},
              {mov:'Schindler\'s List', relDate: '1993', rating: 5,url:'assets/slist.jpg'},
              {mov:'The Shawshank Redemption', relDate: '1994', rating: 5,url:'assets/shaw.jpg'},
              {mov:'Pulp Fiction', relDate: '1994', rating: 4,url:'assets/pf.jpg'},
              {mov:'The Lord of the Rings: The Return of the King', relDate: '2003', rating: 4,url:'assets/lotr.jpg'},
              {mov:'The Dark Knight', relDate: '2008', rating: 5,url:'assets/knight.jpg'},
              {mov:'Inception', relDate: '2010', rating: 4,url:'assets/inception.jpg'},
          
              {mov:'The Lord of the Rings: TheFellowship of  the Ring', relDate: '2001', rating: 3,url:'assets/lotrfor.jpg'},
              {mov:'Forrest Gump', relDate: '1994', rating: 3,url:'assets/forrest.jpg'},
              {mov:'Fight Club', relDate: '1999', rating: 2,url:'assets/fightclub.jpg'},
              {mov:'Star Wars: Episode 5 - The Empire Strikes Back', relDate: '1980', rating: 4,url:'assets/swe5.jpg'},
              {mov:'Goodfellas', relDate: ' 1990', rating: 2,url:'assets/goodfellas.jpg'},
              {mov:'The Matrix', relDate: '1999', rating: 3,url:'assets/matrix.jpg'},
              {mov:'The Lord of the Rings: The Two Towers', relDate: '2002', rating: 3,url:'assets/lotrttt.jpg'},
              {mov:'Seven Samurai', relDate: '16.7.2010', rating: 2,url:'assets/samurai.jpg'},
              {mov:'Avengers: Infinity War', relDate: '2018', rating: 2,url:'assets/avengersinf.jpg'},
              {mov:'Interstellar', relDate: '2014', rating: 3,url:'assets/interstellar.jpg'},
              {mov:'The Silence of the Lambs', relDate: '1991', rating: 4,url:'assets/silenceotl.jpg'},
          
              {mov:'Star Wars: Episode 4 - A New Hope', relDate: '1977', rating: 4.3,url:'assets/swe4.jpg'},
              {mov:'The Usual Suspects', relDate: '1995', rating: 2,url:'assets/us.jpg'},
              {mov:'Saving Private Ryan', relDate: '1957', rating: 3,url:'assets/spr.jpg'},
              {mov:'Spirited Away', relDate: '2001', rating: 1,url:'assets/spiritedaway.jpg'},
              {mov:'City Lights', relDate: '1931', rating: 3,url:'assets/citylights.jpg'},
              {mov:'The Departed', relDate: '2006', rating: 2,url:'assets/thedeparted.jpg'},
              {mov:'The Lion King', relDate: '1994', rating: 4,url:'assets/lionking.jpg'},
              {mov:'Gladiator', relDate: '2000', rating: 1,url:'assets/gladiator.jpg'},
              {mov:'The Prestige', relDate: '2006', rating: 2,url:'assets/prestige.jpg'},
              {mov:'Whiplash', relDate: '2014', rating: 2,url:'assets/whiplash.jpg'},
          
          
              ];      


            var sortedMovies = sortCards(movies,0);
            //   console.log(sortedMovies);
            drawCards(sortedMovies,0);
            
            $('#sort').on('change', function() {
                var opt= $('#sort').val();
                //console.log("Options="+ opt);
                sortedMovies = sortCards(movies,opt);
                //console.log(sortedMovies);
                $('#movies').empty();
                drawCards(sortedMovies,0);
                });

            function drawCards(array,page)
                {
                    var perpage=[];
                    if(page==0 ){perpage = array.slice(0,10);}
                    if(page==1){perpage = array.slice(10,20);}
                    if(page==2){perpage = array.slice(20,30);}
                    if(page==3){perpage = array[30];}
                
                $(perpage).each(function(key,value) 
                 {
                  var elem = '<div class="cardContainer" style="background-image: linear-gradient(rgba(10,10,10,0.1),rgba(5,5,5,0.7)),  url('+ this.url +') ;background-size: contain; "> \
              <div class="cardTitle"><div class="cardText">' + this.mov + '</div></div> \
              <div><i class="fa fa-tachometer saphron-icon" aria-hidden="true"></i>Your Rating: <input class="inp" name="number" type="number" value="3" min="1" max="5" step="1"></div> \
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

              function sortCards(array,sortby) 
              {
                console.log(sortby);
                  var x="";
                if (sortby==0){
                    x=array.sort((a,b):number =>{
                        if(a.mov > b.mov) return 1;
                        if(a.mov < b.mov) return -1;
                        return 0;});
                }
                if (sortby==1){
                    x=array.sort((a,b):number =>{
                        if(a.relDate > b.relDate) return -1;
                        if(a.relDate < b.relDate) return 1;
                        return 0;});
                }
                if (sortby==2){
                    x=array.sort((a,b):number =>{
                        if(a.rating > b.rating) return -1;
                        if(a.rating < b.rating) return 1;
                        return 0;});
                }
                
                return x;
              }
            
            var page =0;
            $('#next').on('click',function(){
                page++;
                if(page>3){page=0;}
                console.log(page);
                
                $('#movies').empty();
                drawCards(sortedMovies,page);
            });
        
            $('#back').on('click',function(){
                page--;
                if(page<0){page=0;}
                $('#movies').empty();
                drawCards(sortedMovies,page);
            });

            $('.inp').on('change',function(){
                if(this.value>5){
                    this.value=5;
                }
                if(this.value<1){
                    this.value=1;
                }
            });
        }



    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
}