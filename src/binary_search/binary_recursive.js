export function binary_recursive(num, arr, start, end) {
    const mid = Math.floor((end + start) / 2);
    if (arr[mid] === num) {
        return mid;
    }
    if (arr[mid] < num) {
        return binary_recursive(num, arr, mid + 1, end);
    }
    if (arr[mid] > num) {
        return binary_recursive(num, arr, start, Math.max(mid - 1, 0));
    }
}