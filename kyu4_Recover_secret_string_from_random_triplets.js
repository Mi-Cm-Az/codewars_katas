function recoverSecret(triplets) {
    numberOfLetters = new Set(triplets.flat()).size

    let value = triplets[0][0];
    let result = "";
    let counter = 0;

    while (result.length < numberOfLetters){

        for(let i = 0 ; i < triplets.length ; i++){
            counter = i
            if (triplets[i].indexOf(value) && triplets[i].indexOf(value) > 0){

                value = triplets[i][0]           
                break;              
            }
        }
        if (counter == triplets.length - 1){
            result += value;          
            triplets = triplets.map(a => a.filter(el => el!=value))
            for(let each of triplets){
                if(each.length){
                    value = each[0]
                    break
                }
            }
        }
    }
    return result
}


console.log(recoverSecret(
    [
        [ 't', 's', 'f' ], [ 'a', 's', 'u' ],
        [ 'm', 'a', 'f' ], [ 'a', 'i', 'n' ],
        [ 's', 'u', 'n' ], [ 'm', 'f', 'u' ],
        [ 'a', 't', 'h' ], [ 't', 'h', 'i' ],
        [ 'h', 'i', 'f' ], [ 'm', 'h', 'f' ],
        [ 'a', 'u', 'n' ], [ 'm', 'a', 't' ],
        [ 'f', 'u', 'n' ], [ 'h', 's', 'n' ],
        [ 'a', 'i', 's' ], [ 'm', 's', 'n' ],
        [ 'm', 's', 'u' ]
      ]
))