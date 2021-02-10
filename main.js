const inFo = [
    { name:'du', age:16 ,height:23, value:121},
    { name:'cinder', age:47 ,height:14,value:5 },
    { name:'zinnder', age:47 ,height:14,value:5 },
    { name:'thai', age:34 ,height:45,value:454323 },  
    { name:'hung', age:17 ,height:56, value:-23},
    { name:'repull', age:15 ,height:70,value:12 },
    { name:'under', age:47 ,height:14,value:5 },
    { name:'buunder', age:47 ,height:14,value:5 },
    { name:'hung', age:17 ,height:56, value:11243},
  ];
  console.log(inFo.sort(sort_by('name',false, (a) => a.toUpperCase() )))
  
  