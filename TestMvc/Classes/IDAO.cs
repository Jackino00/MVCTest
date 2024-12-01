namespace TestMvc.Classes
{
    public interface IDAO
    {
        public List<Entity> ReadAll();
        public Entity Find(int id);
        public bool Insert(Entity e);
        public bool Delete(Entity e);
        public bool Update(Entity e);
    }
}
