using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Comment
    {

        public int Id { get; set; }

        public required string Title { get; set; }

        public required string Content { get; set; }

        public DateTime CreatedOn { get; set; } = DateTime.Now;

        public int? StockId { get; set; }

        public Stock? Stock { get; set; }
    }
}