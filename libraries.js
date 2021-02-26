Array.prototype.sort_in = function(fie,rev,pri) {
     const fakeObj = [fie,rev,pri] 
     function sort_by(field, reverse, primer ) {
        const key = primer ? x => primer(x[field]) : x => x[field];
        reverse = !reverse ? 1 : -1;
         return  (a, b) => { return a = key(a), b = key(b), reverse * ( (a > b) - (b > a) ) ;}
      }
      return this.sort(sort_by(fakeObj[0],fakeObj[1],fakeObj[2]))
}
function setEvent(queryName,boolean,event,callback) {
   let element ;
   if (boolean){ 
      element = document.querySelector(queryName);
      element.addEventListener(event,callback);
   }
   else{ 
      element = document.querySelectorAll(queryName);
      for (let i = 0; i < element.length; i++){
         element[i].addEventListener(event,callback);
      };
   }
}
function setStyle(queryName,boolean,styleProperty,value) {
   let element ;
   if (document.querySelector('*').style.hasOwnProperty(styleProperty)) {
      if(boolean) {
         element = document.querySelector(queryName)
         element.style[styleProperty] = value;
      } 
      else{ 
         element = document.querySelectorAll(queryName);
         [...element].forEach(e => (e.style[styleProperty] = value));
      }
   }
   else throw new Error( `\'${styleProperty}\' does not a property of Element.style`);
}
const getScrollPosition = (el = window) => ({
   x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
   y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
 });
 //lấy vị trí cuộn của trang
 const scrollToTop = () => {
   const c = document.documentElement.scrollTop || document.body.scrollTop;
   if (c > 0) {
     window.requestAnimationFrame(scrollToTop);
     window.scrollTo(0, c - c / 8);
   }
 };
 //cuộn tới đầu trang
 function getParent(element,selector) {
   while (element.parentElement) {
       if (element.parentElement.matches(selector)) {
           return element.parentElement
       }
       element= element.parentElement
   }
}
//lấy phần tử cha có id hoặc class giống với tham số thứ 2
const getImages = (el, includeDuplicates) => {
   const images = [...el.getElementsByTagName('div')].map(img => img.getAttribute('src'));
   return includeDuplicates ? images : [...new Set(images)];
 };
//lấy toàn bộ ảnh tồn tại trong phạm vị el vd : document,.. 
const elementIsVisibleInViewport = (el, partiallyVisible ) => {
   const { top, left, bottom, right } = el.getBoundingClientRect();
   const { innerHeight, innerWidth } = window;
   return partiallyVisible
     ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
         ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
     : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
 };
 //kiểm tra xem một phần tử có tồn tại không
 const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
// kiểm tra xem tiết bị là mobile hay desktop
const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );
  //tạo một đối tượng chứa tham số của url
  const formToObject = form => Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({...acc,[key]: value}),
    {}
  ); 
   
  //lấy dữ liệu trong form dưới dạng object

  {
     //keyword:.How to retrieve a set of properties indicated by the given selectors from an object?
//   const get = (from, ...selectors) =>
//   [...selectors].map(s =>
//     s
//       .replace(/\[([^\[\]]*)\]/g, '.$1.')
//       .split('.')
//       .filter(t => t !== '')
//       .reduce((prev, cur) => prev && prev[cur], from)
//   );
// const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };

// // Example
// get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']
  }
  //lấy requesst từ url
  const httpGets = (url, callback, err = console.error) => {
   const request = new XMLHttpRequest();
   request.open('GET', url, true);
   request.onload = () => callback(request.responseText);
   request.onerror = () => err(request);
   request.send();
 };
 //vd :httpGets('https://www.youtube.com/watch?v=_BYY1p_7urw',console.log); 
 function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}
//tách code html khỏi text và code javascript
const httpPost = (url, data, callback, err = console.error) => {
   const request = new XMLHttpRequest();
   request.open('POST', url, true);
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   request.onload = () => callback(request.responseText);
   request.onerror = () => err(request);
   request.send(data);
 };
 //đẩy request
 //vd : 
 //const newPost = {
//   userId: 1,
//   id: 1337,
//   title: 'Foo',
//   body: 'bar bar bar'
// };
// const data = JSON.stringify(newPost);
// httpPost(
//   'https://jsonplaceholder.typicode.com/posts',
//   data,
//   console.log
// ); 

//  Logs: {"userId": 1, "id": 1337, "title": "Foo", "body": "bar bar bar"}
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
