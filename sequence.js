// Given an integer sequence s = (s1, s2, s3,…,sn), a subsequence is another sequence s_ = (s_1, s_2, s_3…., s_k) with k < n, and s_1, s_2, s_3…, s_k belonging to s, exactly in that order.

// Find the maximum length of a subsequence in which its elements are in increasing sorted order, lowest to highest.The subsequence doesn't have to be necessarily contigous, or unique

function longestIncreasingSubsequence(sequence) {
  const n = sequence.length;

  let tails = [];

  // Function to perform binary search
  function binarySearch(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      console.log(`array:`, arr)
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  for (let num of sequence) {

    const pos = binarySearch(tails, num);

    if (pos === tails.length) {
      tails.push(num);
      console.log(tails)
    } else {

      tails[pos] = num;
    }
  }

  return tails.length;
}

const sequence = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
console.log(longestIncreasingSubsequence(sequence));

