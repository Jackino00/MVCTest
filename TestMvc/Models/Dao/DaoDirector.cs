using TestMvc.Classes;
using TestMvc.Models.ViewModwls;

namespace TestMvc.Models.Dao
{
    public class DaoDirector : IDAO
    {
        private Database db;

        private static DaoDirector instance = null;

        public static DaoDirector GetInstance()
        {
            if (instance == null)
                instance = new DaoDirector();

            return instance;
        }

        private DaoDirector()
        {
            db = new Database();
        }

        public List<Entity> ReadAllDirectorsFilm()
        {
            string query = @"SELECT
                            ID_DIRECTOR,
                            Name,
                            COUNT(FILMS.ID_FILM) AS FilmNumbers
                            FROM DIRECTORS
                            LEFT JOIN FILMS ON FK_ID_DIRECTOR = ID_DIRECTOR
                            GROUP BY
                            ID_DIRECTOR,
                            Name
                            ORDER BY NAME";

            List<Entity> ris = new List<Entity>();
            List<Dictionary<string, string>> read = db.Read(query);

            foreach (Dictionary<string, string> item in read)
            {
                FilmForDirectors filmDirectors = new FilmForDirectors();
                filmDirectors.FromDictionary(item);

                ris.Add(filmDirectors);
            }

            return ris;
        }

        public bool Delete(Entity e)
        {
            throw new NotImplementedException();
        }

        public Entity Find(int id)
        {
            throw new NotImplementedException();
        }

        public bool Insert(Entity e)
        {
            string query = @$"INSERT INTO DIRECTORS 
                            (NAME)
                            VALUES
                            ('{((Director)e).Name}')";

            return db.Update(query);
        }

        public List<Entity> ReadAll()
        {
            string query = @"SELECT * FROM DIRECTORS ORDER BY NAME";

            List<Entity> ris = new List<Entity>();
            List<Dictionary<string, string>> read = db.Read(query);

            foreach (Dictionary<string, string> item in read)
            {
                Director director = new ();
                director.FromDictionary(item);

                ris.Add(director);
            }

            return ris;
        }

        public bool Update(Entity e)
        {
            throw new NotImplementedException();
        }
    }
}
