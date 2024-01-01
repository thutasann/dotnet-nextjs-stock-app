namespace api.Dtos.Stock
{
    public class CreateStockRequestDto
    {
        public required string Symbol { get; set; }

        public required string CompanyName { get; set; }

        public float Purchase { get; set; }

        public float LastDiv { get; set; }

        public string Industry { get; set; } = string.Empty;

        public long MarketCap { get; set; }
    }
}