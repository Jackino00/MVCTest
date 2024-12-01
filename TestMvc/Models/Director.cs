using TestMvc.Classes;

namespace TestMvc.Models
{
    public class Director : Entity
    {
        public long Id_Director { get; set; }
        public string Name { get; set; }

        public Director(long id_director, string name)
        {
            Id_Director = id_director;
            Name = name;
        }

        public Director() { }
    }
}
