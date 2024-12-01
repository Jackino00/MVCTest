using System.Data.SqlClient;

namespace TestMvc.Classes
{
    public class Database
    {
        public SqlConnection Connection { get; set; }
        private string connectionSting = @"Data Source = DESKTOP-S92E5LR; 
                                           Initial Catalog = CINEMA;
                                           Integrated Security = True;";

        public Database()
        {
            Connection = new SqlConnection(connectionSting);
        }

        public bool Update(string query)
        {
            try
            {
                Connection.Open();

                SqlCommand cmd = new SqlCommand(query, Connection);

                int affette = cmd.ExecuteNonQuery();

                return affette > 0;
            }
            catch (Exception ex)
            {
                // Stampo in console il messaggio di errore "originale"
                Console.WriteLine(ex.Message);
                Console.WriteLine($"ERRORE nella QUERY: \n{query}");

                return false;
            }
            finally
            {
                Connection.Close();
            }
        }

        public List<Dictionary<string, string>> Read(string query)
        {
            List<Dictionary<string, string>> ris = new List<Dictionary<string, string>>();

            try
            {
                Connection.Open(); 

                SqlCommand cmd = new SqlCommand(query, Connection);

                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    Dictionary<string, string> riga = new Dictionary<string, string>();

                    for (int i = 0; i < dr.FieldCount; i++)
                    {
                        riga.Add(dr.GetName(i).ToLower(), dr.GetValue(i).ToString());
                    }

                    ris.Add(riga);
                }

                dr.Close(); 
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Console.WriteLine($"ERRORE nella QUERY: \n{query}");
            }
            finally
            {
                if (Connection.State != System.Data.ConnectionState.Closed)
                    Connection.Close(); 
            }

            return ris;
        }
    }
}
