using APIFun.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;

namespace APIFun.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MarriottFoodController : ControllerBase
    {
        private IFoodRepository _foodRepository;
        public MarriottFoodController(IFoodRepository temp)
        {
            _foodRepository = temp;
        }
        [HttpGet]
        public IEnumerable<MarriottFood> Get()
        {
            var foodData = _foodRepository.Foods.ToArray(); // add query if I'd like to

            return foodData;
        }
    }
}
