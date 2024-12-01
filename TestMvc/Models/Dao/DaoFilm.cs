using TestMvc.Classes;

namespace TestMvc.Models.Dao
{
    public class DaoFilm : IDAO
    {
        private Database db;

        private static DaoFilm instance = null;

        public static DaoFilm GetInstance()
        {
            if (instance == null)
                instance = new DaoFilm();

            return instance;
        }

        private DaoFilm()
        {
            db = new Database();
        }

        public List<Entity> ReadAll()
        {
            string query = @"SELECT *
                            FROM FILMS 
                            LEFT JOIN DIRECTORS DI ON ID_DIRECTOR = FK_ID_DIRECTOR";

            List<Entity> ris = new List<Entity>();
            List<Dictionary<string, string>> read = db.Read(query);

            foreach (Dictionary<string, string> item in read)
            {
                Film film = new Film();
                film.FromDictionary(item);

                ris.Add(film);
            }

            return ris;
        }

        public List<Entity> ReadAllByDirectorId(long directorId)
        {
            string query = @$"SELECT *
                            FROM FILMS 
                            LEFT JOIN DIRECTORS DI ON ID_DIRECTOR = FK_ID_DIRECTOR 
                            WHERE ID_DIRECTOR = {directorId}";

            List<Entity> ris = new List<Entity>();
            List<Dictionary<string, string>> read = db.Read(query);

            foreach (Dictionary<string, string> item in read)
            {
                Film film = new Film();
                film.FromDictionary(item);

                ris.Add(film);
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
            throw new NotImplementedException();
        }

        public bool Update(Entity e)
        {
            throw new NotImplementedException();
        }
    }
}
