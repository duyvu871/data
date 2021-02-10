Array.prototype.sort_in = function(fie,rev,pri) {
     const fakeObj = [fie,rev,pri] 
     function sort_by(field, reverse, primer ) {
        const key = primer ? x => primer(x[field]) : x => x[field];
        reverse = !reverse ? 1 : -1;
         return  (a, b) => { return a = key(a), b = key(b), reverse * ( (a > b) - (b > a) ) ;}
      }
      return this.sort(sort_by(fakeObj[0],fakeObj[1],fakeObj[2]))
}