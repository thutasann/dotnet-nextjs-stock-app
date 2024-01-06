using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comment
{
    /// <summary>
    /// Create Comment DTO
    /// </summary>
    public class CreateCommentDto
    {
        public required string Title { get; set; }

        public required string Content { get; set; }
    }
}