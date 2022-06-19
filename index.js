const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
    }

function destructivelyRemoveLastCat(){
    cats.pop(-1);
}

function destructivelyRemoveFirstCat(){
    cats.shift(0);
}

function appendCat(Broom){
    return appendCat = [...cats, "Broom"];
}

function prependCat(Arnold){
    return prependCat = ["Arnold", ...cats]
}

function removeLastCat(){
    return cats.slice(0, cats.length - 1)
}

function removeFirstCat(){
    return cats.slice(1)
}