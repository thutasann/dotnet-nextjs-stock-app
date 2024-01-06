using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Dtos.Comment
{
    public class CommentDto
    {
        public int Id { get; set; }

        public required string Title { get; set; }

        public required string Content { get; set; }

        public DateTime CreatedOn { get; set; } = DateTime.Now;

        public int? StockId { get; set; }
    }
}