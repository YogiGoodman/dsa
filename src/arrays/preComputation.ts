//int array A[N]
//int Q, Q queries
//int l and r - indices of array

// return sum(i,j)

// using Prefix sum array , sum(i,j) = PS(j) - PS(i-1)

export function PrefixSum(arr: number[]): number[] {
  const n = arr.length;
  const psum = [arr[0]];
  for (let i = 1; i < n; i++) {
    psum[i] = psum[i - 1] + arr[i];
  }
  return psum;
}

// TC : O(Q+N) ; O(Q) for queries , O(N) for calculating prefix max
// SC : O(N)

export function subArraySum(l: number, r: number) {
  const arr = [1, 3, 4, -2, 10];
  const PSum = PrefixSum(arr);
  if (l === 0) return PSum[r];
  return PSum[r] - PSum[l - 1];
}

export function PrefixMax(arr: number[]): number[] {
  const n = arr.length;
  const pmax = [arr[0]];
  for (let i = 1; i < n; i++) {
    pmax[i] = Math.max(pmax[i - 1], arr[i]);
  }
  return pmax;
}

// TC : O(N) ; O(N) for calculating prefix max
// SC : O(N) , O(1) if modified inplace

export function maxElement(arr: number[], idx: number) {
  const pmax = PrefixMax(arr);
  return pmax[idx];
}

// find max element from index to the end of array 

export function SuffixMax(arr: number[]): number[] {
  const n = arr.length;
  const smax = Array(n).fill(-Infinity);
  smax[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    smax[i] = Math.max((smax[i + 1]), arr[i]);
  }
  return smax;
}

export function maxElementTillEnd(arr: number[], idx: number) {
  const smax = SuffixMax(arr);
  return smax[idx];
}

// console.log(maxElementTillEnd([1, 3, 2, 5, 9], 2));
// console.log(maxElement([1, 3, 2, 5, 9], 4));
// console.log(subArraySum(1, 3));