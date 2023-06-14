function receivesAFunction(callBack){
    callBack();
}
receivesAFunction();

function returnsANamedFunction(){
    return(function receivesAFunction(){

    }) ;

    
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
    return (function (){
        
    })
}