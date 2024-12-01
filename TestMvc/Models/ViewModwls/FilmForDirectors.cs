using TestMvc.Classes;

namespace TestMvc.Models.ViewModwls
{
    public class FilmForDirectors : Entity
    {
        public Director Director { get; set; }
        public int FilmNumbers { get; set; }
    }
}
