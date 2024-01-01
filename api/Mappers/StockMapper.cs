using api.Dtos.Stock;
using api.Models;
using ZstdSharp.Unsafe;

namespace api.Mappers
{
    public static class StockMapper
    {
        /// <summary>
        /// Stock DTO Mapper
        /// </summary>
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

        /// <summary>
        /// Stock From CreateStockRequest DTO Mapper
        /// </summary>
        public static Stock ToStockFromCreateDTO(this CreateStockRequestDto stockDto)
        {
            return new Stock{
                Symbol = stockDto.Symbol,
                CompanyName = stockDto.CompanyName,
                Purchase = stockDto.Purchase,
                LastDiv = stockDto.LastDiv,
                Industry = stockDto.Industry,
                MarketCap = stockDto.MarketCap
            };
        }
    }
}