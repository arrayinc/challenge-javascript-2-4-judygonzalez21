//
const QUOTATIONMARKS = '"';

function quote(x){
  return QUOTATIONMARKS + x  + QUOTATIONMARKS;
}

quote("where are you going" + 345);
