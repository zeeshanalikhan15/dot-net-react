using Microsoft.AspNetCore.Mvc;

namespace dot_net_react.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FunnyJokesController : Controller
    {
        private static readonly string[] Jokes = new string[]
        {
            "Why don't scientists trust atoms? Because they make up everything!",
            "I told my wife she was drawing her eyebrows too high. She looked surprised.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "What do you call fake spaghetti? An impasta!",
            "Why did the bicycle fall over? Because it was two-tired!"
        };

        private readonly ILogger<FunnyJokesController> _logger;

        public FunnyJokesController(ILogger<FunnyJokesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<FunnyJokes> Get()
        {
            Random random = new Random();
            return Enumerable.Range(1, 5).Select(index =>
                new FunnyJokes
                {
                    ID = index.ToString(),
                    Joke = Jokes[random.Next(Jokes.Length)]
                }).ToArray();
        }
    }
}
