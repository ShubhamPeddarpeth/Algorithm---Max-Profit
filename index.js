function maxProfit(n) {
  // Building types (time, earning)
  const buildings = [
    { name: 'T', time: 5, earn: 1500 },
    { name: 'P', time: 4, earn: 1000 },
    { name: 'C', time: 10, earn: 2000 },
  ];

  // DP array where dp[i] = {earn, combo}
  const dp = Array(n + 1)
    .fill(null)
    .map(() => ({
      earn: 0,
      combo: { T: 0, P: 0, C: 0 },
    }));

  // Fill DP table
  for (let t = 1; t <= n; t++) {
    for (let b of buildings) {
      if (t >= b.time) {
        const prev = dp[t - b.time]; // state after finishing this building
        const newEarn = prev.earn + b.earn;

        if (newEarn > dp[t].earn) {
          // update best solution for current time t
          dp[t] = {
            earn: newEarn,
            combo: {
              ...prev.combo,
              [b.name]: prev.combo[b.name] + 1,
            },
          };
        }
      }
    }
  }

  return dp[n];
}

// Testing the function with sample inputs
console.log('n=7 →', maxProfit(7));
console.log('n=8 →', maxProfit(8));
console.log('n=13 →', maxProfit(13));
