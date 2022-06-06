// Given Array [N] and 3 integers p,q,r
// consder expression such that it evaluates to max
// max(p*arr[i]+q*arr[j]*r*arr[k])
// constraint i < j < k (strictly)

// naive approach : all posssible combinations. O(n^3)
export function maximizeExpr() {
    const arr = [1, 2, 3, 4];
    const n = arr.length;
    const p = -2;
    const q = 5;
    const r = 10;
    let max = -Infinity;
    for (let i = 0; i < n - 2; i++) {
        for (let j = 1; j < n - 1; j++) {
            for (let k = 2; k < n; k++) {
                const expr = p * arr[i] + q * arr[j] + r * arr[k];
                max = Math.max(max, expr);
            }
        }
    }
    console.log(max);
}
console.clear();
maximizeExpr();