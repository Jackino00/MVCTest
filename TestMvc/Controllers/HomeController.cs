using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using TestMvc.Classes;
using TestMvc.Models;
using TestMvc.Models.Dao;
using TestMvc.Models.ViewModwls;

namespace TestMvc.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            List<Film> listFilm = DaoFilm.GetInstance().ReadAll().Cast<Film>().ToList();
            List<FilmForDirectors> listCount = DaoDirector.GetInstance().ReadAllDirectorsFilm().Cast<FilmForDirectors>().ToList();

            return View();
        }

        public ActionResult CreateDirector(Director director)
        {
            if (ModelState.IsValid)
            {
                DaoDirector.GetInstance().Insert(director);
                return RedirectToAction("Index"); 
            }

            return View("~/Views/Home/Index.cshtml");
        }

        public IActionResult BindDdl(long selectedDirectorId, long selectedFilmId)
        {
            ViewBag.listFilm = null;
            ViewBag.showGrid = false;

            if (selectedDirectorId != 0)
            {
                List<Film> listFilm = DaoFilm.GetInstance().ReadAllByDirectorId(selectedDirectorId).Cast<Film>().ToList();
                ViewBag.listFilm = listFilm;
            }

            if (selectedFilmId != 0 && selectedFilmId != 0)
                ViewBag.showGrid = true;

            return View("~/Views/Home/Index.cshtml");
        }

        public ActionResult GetFilms()
        {
            //List<Film> listFilm = DaoFilm.GetInstance().ReadAll().Cast<Film>().ToList();
            List<FilmForDirectors> listCount = DaoDirector.GetInstance().ReadAllDirectorsFilm().Cast<FilmForDirectors>().ToList();
            var jsonResult = JsonConvert.SerializeObject(listCount);

            return Content(jsonResult, "application/json");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
