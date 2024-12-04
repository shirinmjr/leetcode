function maxProfit(prices: number[]): number {

    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {//tomorrow price = prices[i+1]
            maxProfit += (prices[i] - prices[i - 1])
        }

    }

    return maxProfit
};