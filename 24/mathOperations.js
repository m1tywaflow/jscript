export function summ(a,b){
    return a+b;
}
export function minus(a,b){
    return a-b;
}
export function multiply(a,b){
    return a*b;
}
export function devide(a,b){
    if(b===0) throw new Error(`На нуль ділити не можна`);
    return a/b;
}