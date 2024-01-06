using api.Data;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Org.BouncyCastle.Crypto.Signers;

namespace api.Controllers
{
    [Route("api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ILogger<CommentController> _logger;
        private readonly ApplicationDBContext _context;
        private readonly ICommentRepository _commentRepository;

        public CommentController(ILogger<CommentController> logger, ApplicationDBContext context, ICommentRepository commentRepository)
        {   
            _logger = logger;
            _context = context;
            _commentRepository = commentRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(){
            var comments = await _commentRepository.GetAllAsync();
            var commentDto = comments.Select(s => s.ToCommentDto());
            return Ok(commentDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id){
            var comment = await _commentRepository.GetByIdAsync(id);

            if(comment == null){
                return NotFound();
            }

            return Ok(comment.ToCommentDto());
        }
    }
}