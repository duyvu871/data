function sort_by(field, reverse, primer) {
    const key = primer ? x => primer(x[field]) : x => x[field];
    reverse = !reverse ? 1 : -1;
    return  (a, b) => { return a = key(a), b = key(b), reverse * ( (a > b) - (b > a) ) ;}
 }