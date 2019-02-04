let  readlineSync  =  require('readline-sync');

console.log('__________________________')
console.log( '||Gr33ting$ 3@rthling||\ny.....0....u..... ar3 th3 ch0$3n 0N3' );
console.log('__________________________________________')
let name = readlineSync.question( '//Wh@t i$ y0ur n@m3.. hum@n??// ' );
console.log( `${name}, w3 m3@n n0 h@rm...\nw3 ju$t w@nt y0u 2 und3r$t@nd..'`);
console.log( 'd0 y0u w@nt to kn0w why w3 ch0$3 y0u?' );
let option = readlineSync.question( ' Yes, No, WAKE UP ' );


  if ( option === 'Yes' || option === 'yes' || option === 'YES' ) {
   console.log( `${name}, we have been watching you for a while now..` );
   console.log('===(*&^%$#@$$%$^&^&^%$^%$@#!@#%$^%&^(*))===');
   console.log('You have an ability that other humans do not...');
   console.log('The truth is earth is in danger, we are building an >>human army<< \nWe will train you and give you infinite knowledge...');
   console.log('===$%^&#%#$@$%^&**^%!@#!$%^%^^*&*(*&(^&^%#$%$#@#!@@))===');
   console.log('Do you accept? ');


   let main = readlineSync.question( '||Yes|| --No-- >> ' );
   if ( main === 'Yes' || main === 'yes' || main === 'YES'){
     console.log(`${name}, congratulations on accepting our offer`);
     console.log('This is just the beginning...');
   }
   else if (main === 'No' || main === 'no' || main === 'NO'){
     console.log(`${name}, you will die like the rest..`);
   }
   else {
     console.log('Error, please try that again.');
   }
}
else if ( option === 'No' || option === 'no' || option === 'NO' ){
 console.log( `${name}, let us change your mind..` );
 console.log('Do you need more time to process this?');
 console.log('????????????????????????????????????????????????')

 let mind = readlineSync.question( '|Yes| -No- >> ' );
 if ( mind === 'Yes' || mind === 'yes' || mind === 'YES'){
   console.log(`${name}, good choice.. `);
   console.log('You have a chance to save your species..');
 }
 else if (mind === 'No' || mind === 'no' || mind === 'NO'){
   console.log(`${name}, you will die like the rest..`);
 }
 else {
   console.log('Error, please try that again.');
 }

}

else if ( option === 'WAKE UP' || option === 'wake up' || option === 'Wake Up'){
  console.log( 'You cant escape us... ' );
  console.log(`${name}, this is not a dream..`);
  console.log('***************BELIEVE*******************')
}
  else {
    console.log('The truth is out there......');
}
