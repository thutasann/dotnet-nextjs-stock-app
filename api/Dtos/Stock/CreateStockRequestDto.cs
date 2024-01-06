using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Stock
{
    public class CreateStockRequestDto
    {
        [Required]
        [MaxLength(10, ErrorMessage = "Symbol cannot be over 10 characters")]
        public required string Symbol { get; set; }

        [Required]
        [MaxLength(10, ErrorMessage = "ErrorMessage cannot be over 10 characters")]
        public required string CompanyName { get; set; }

        [Required]
        [Range(1, 1000000000)]
        public float Purchase { get; set; }

        [Required]
        [Range(0, 100)]
        public float LastDiv { get; set; }

        [Required]
        [MaxLength(10, ErrorMessage = "Industry cannot be over 10 characters")]
        public string Industry { get; set; } = string.Empty;

        [Required]
        [Range(1, 5000)]
        public long MarketCap { get; set; }
    }
}