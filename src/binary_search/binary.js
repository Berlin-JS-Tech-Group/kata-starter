export function binary_search(number, arr) {
    const length = arr.length;
    let mid = Math.floor( length / 2 );
    let right = length - 1, left = 0;
    for (var i =0; i<length; i++) {
     if ( arr[mid] == number ) {
        return mid;
     } else if( arr[mid] < number ) {
       left = mid + 1;
       mid = mid + ( right - mid ) / 2;
     } else if(arr[mid]>number ) {
        right = mid - 1;
        mid = mid - ( right - mid ) / 2;
     }
     mid = Math.floor(mid);
     console.log('mid = ' + mid);
    }
}