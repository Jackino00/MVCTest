using TestMvc.Classes;

namespace TestMvc.Models
{
    public class Film : Entity
    {
        public long Id_Film { get; set; }
        public string Title { get; set; }
        public Director Director { get; set; }

        public Film(long id_film, string title, Director director)
        {
            Id_Film = id_film;
            Title = title;
            Director = director;
        }

        public Film() { }
    }
}
