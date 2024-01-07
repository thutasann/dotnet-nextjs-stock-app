using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface ITokenService
    {
        /// <summary>
        /// Create Token Service that returns `token` string
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        string CreateToken(AppUser user);
    }
}