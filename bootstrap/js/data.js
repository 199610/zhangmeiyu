$(function(){
 $.ajax({
   url:'wad/popular/2',
   method:'get',
   dataType:'json',
   success:function(data,status,xhr){
    console.log(data);
    for(i=0;i<data.length;i++){
     $('#sk'+i).text(data[i].name);
     
     $('#jh'+i).attr('src',data[i].pic_1);
    
    $('#sk'+i).attr('href','ind1.html?id='+data[i].id);
                              }
                                   },
     
        })



$.ajax({
   url:'wad/recommand/4',
   method:'get',
   dataType:'json',
   success:function(data,status,xhr){
    console.log(data);
    for(i=0;i<data.length;i++){
     $('#rm'+i).text(data[i].name);
     $('#rt'+i).attr('src',data[i].pic_1);
    $('#rm'+i).attr('href','ind1.html?id='+data[i].id);
                              }
                                   },

      })







             })   

   

 



 

