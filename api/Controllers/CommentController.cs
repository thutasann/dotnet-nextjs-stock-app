using api.Data;
using api.Interfaces;
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
    }
}