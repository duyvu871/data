const inFo = [
    { name:'du', age:16 ,height:23, value:121,money:12000},
    { name:'cinder', age:47 ,height:14,value:5,money:54000 },
    { name:'zinnder', age:47 ,height:14,value:5,money:133000 },
    { name:'thai', age:34 ,height:45,value:454323,money:7000000 },  
    { name:'hung', age:17 ,height:56, value:-23,money:2323000},
    { name:'repull', age:15 ,height:70,value:12,money:-100000 },
    { name:'under', age:47 ,height:14,value:5 ,money:5500000000},
    { name:'buunder', age:47 ,height:14,value:5 ,money:-1000},
    { name:'hung', age:17 ,height:56, value:11243,money:0},
  ];
 console.log(inFo.sort_in('money',true,parseInt))
 //nếu tham số thứ nhất là thuộc tính có giá trị khác number thì tham số thứ 2 co gia trị
 // false và tham số thứ 3 có giá trị là một function dạng như (a) => a.toUpperCase 
// VD : 'name',false, (a) => a.toUpperCase()


let arr1 = [1,2,4,5,46,84,23,14,5235,8756,354];
arr1.sort((a,b) => a - b);
 function find(arr,value) {
    let me = Math.floor(arr.length/2);
    if(arr[me] === value) return arr[me]
    else if(arr[me] < value && arr.length > 1) return find(arr.splice(me, arr.length -1), value)
    else if(arr[me] > value && arr.length > 1) return find(arr.splice(0, me), value)
    else return -1
 }