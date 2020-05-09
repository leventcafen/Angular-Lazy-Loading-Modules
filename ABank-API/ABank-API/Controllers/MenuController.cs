using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ABank_API.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace ABank_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MenuController : ControllerBase
    {


        private readonly ILogger<MenuController> _logger;

        public MenuController(ILogger<MenuController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Menu> Get()
        {
            var menuData = System.IO.File.ReadAllText("Data/Data.json");
            var users = JsonConvert.DeserializeObject<List<Menu>>(menuData);
            return users;
        }
    }
}
