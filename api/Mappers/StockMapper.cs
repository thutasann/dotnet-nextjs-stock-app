using api.Dtos.Stock;
using api.Models;

namespace api.Mappers
{
    public static class StockMapper
    {
        /// <summary>
        /// Stock DTO Mapper
        /// </summary>
        /// <param name="stockModel"></param>
        /// <returns></returns>
        public static StockDto ToStockDto(this Stock stockModel)
        {
            return new StockDto{
                Id = stockModel.Id,
                Symbol = stockModel.Symbol,
                CompanyName = stockModel.CompanyName,
                Purchase = stockModel.Purchase,
                LastDiv = stockModel.LastDiv,
                Industry = stockModel.Industry,
                MarketCap = stockModel.MarketCap
            };
        }
    }
}