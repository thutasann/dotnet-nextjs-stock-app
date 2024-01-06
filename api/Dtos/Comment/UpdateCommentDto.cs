using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Comment
{
    public class UpdateCommentDto
    {
        [Required]
        [MinLength(5, ErrorMessage = "Title must be ")]
        [MaxLength(280, ErrorMessage = "Title Cannot be over 280 characters")]
        public required string Title { get; set; }

        [Required]
        [MinLength(5, ErrorMessage = "Content must be 5 characters")]
        [MaxLength(280, ErrorMessage = "Content cannot be over 280 characters")]
        public required string Content { get; set; }
    }
}