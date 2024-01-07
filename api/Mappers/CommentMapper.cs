using api.Dtos.Comment;
using api.Models;

namespace api.Mappers
{
    public static class CommentMapper
    {
        /// <summary>
        /// Comment DTO Mapper 🚀
        /// </summary>
        /// <param name="commentModel"></param>
        /// <returns></returns>
        public static CommentDto ToCommentDto(this Comment commentModel){
            return new CommentDto{
                Id = commentModel.Id,
                Title = commentModel.Title,
                Content = commentModel.Content,
                CreatedOn = commentModel.CreatedOn,
                StockId = commentModel.StockId
            };
        } 

        /// <summary>
        /// To Comment From Create Mapper
        /// </summary>
        /// <param name="commentModel"></param>
        /// <returns></returns>
        public static Comment ToCommentFromCreate(this CreateCommentDto commentDto, int stockId){
            return new Comment{
                Title = commentDto.Title,
                Content = commentDto.Content,
                StockId = stockId
            };
        } 

        /// <summary>
        /// To Comment From Update
        /// </summary>
        /// <param name="commentDto"></param>
        /// <returns></returns>
        public static Comment ToCommentFromUpdate(this UpdateCommentDto commentDto){   
            return new Comment{
                Title = commentDto.Title,
                Content = commentDto.Content,
            };
        }
    }
}