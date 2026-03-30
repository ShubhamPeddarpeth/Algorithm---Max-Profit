
function maxProfit(n) {

  const buildings = [
    { type: "T", time: 5, earning: 1500 },
    { type: "P", time: 4, earning: 1000 },
    { type: "C", time: 10, earning: 2000 }
  ];

  let bestProfit = 0;
  let solutions = [];

  for (let t = 0; t <= Math.floor(n/5); t++) {
    for (let p = 0; p <= Math.floor(n/4); p++) {
      for (let c = 0; c <= Math.floor(n/10); c++) {

        let timeUsed = t*5 + p*4 + c*10;

        if (timeUsed > n) continue;

        let profit = 0;
        let currentTime = 0;

        for (let i=0;i<t;i++) {
          currentTime += 5;
          profit += 1500 * (n-currentTime);
        }

        for (let i=0;i<p;i++) {
          currentTime += 4;
          profit += 1000 * (n-currentTime);
        }

        for (let i=0;i<c;i++) {
          currentTime += 10;
          profit += 2000 * (n-currentTime);
        }

        if (profit > bestProfit) {
          bestProfit = profit;
          solutions = [{T:t,P:p,C:c}];
        }

        else if (profit === bestProfit) {
          solutions.push({T:t,P:p,C:c});
        }

      }
    }
  }

  return {
    earnings:  bestProfit,
   solutions:solutions.sort((a,b) => {

    if (b.T !== a.T) return b.T - a.T;
    if (b.P !== a.P) return b.P - a.P;
    return b.C - a.C;
  })
};

}


console.log(maxProfit(7))
console.log(maxProfit(8))
console.log(maxProfit(13))