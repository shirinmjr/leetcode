function maxProfit(prices: number[]): number {
    let minPrice = prices[0]
    let maxProfit = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
           minPrice = prices[i]
        }
             if(maxProfit <   prices[i]- minPrice){
                maxProfit = prices[i]- minPrice
             }

        
    }
    return maxProfit
};