function showDay(){
  let date=new Date();

    let day=date.getDay();
    let nameofday;
    let quote;
    switch(day){
        case 1:
            nameofday="Monday";
            quote="Monday's child is fair of face";
            break;
            case 2:
                nameofday="Tuesday";
                quote="Tuesday's child is full of grace";
                break;
                case 3:
                    nameofday="Wednesday";
                    quote="Wednesday's child is full of woe";
                    break;
                    case 4:
                        nameofday="Thursday";
                        quote="Thursday's child has far to go";
                        break;
                        case 5:
                            nameofday="Friday";
                            quote="Friday's child is loving and giving";
                            break;
                            case 6:
                                nameofday="Saturday";
                                quote="Saturday's child works hard for a living";
                                break;
                                case 7:
                                    nameofday="Sunday";
                                    quote="chillaxx";
                                    break;
                                    

    }
    
   let dayoftheweek= document.getElementById("weekday");
dayoftheweek.innerHTML=`${nameofday}`;
let quotes=document.getElementById("phrase");
quotes.innerHTML=`${quote}`;

}
showDay();
