using System.Diagnostics.Eventing.Reader;
using System.Reflection;
using TestMvc.Models;

namespace TestMvc.Classes
{
    public class Entity
    {
        public void FromDictionary(Dictionary<string, string> item)
        {
            foreach (PropertyInfo property in GetType().GetProperties())
            {
                if (item.ContainsKey(property.Name.ToLower()))
                {
                    object? valore = item[property.Name.ToLower()];

                    switch (property.PropertyType.Name.ToLower())
                    {
                        case "int32":
                            valore = int.Parse(item[property.Name.ToLower()]);
                            break;

                        case "int64":
                            valore = long.Parse(item[property.Name.ToLower()]);
                            break;

                        case "double":
                            valore = double.Parse(item[property.Name.ToLower()]);
                            break;

                        case "boolean":
                            valore = bool.Parse(item[property.Name.ToLower()]);
                            break;

                        case "datetime":
                            try
                            {
                                valore = DateTime.Parse(item[property.Name.ToLower()]);
                            }
                            catch
                            {
                                valore = null;
                            }
                            break;
                    }

                    property.SetValue(this, valore);
                }
                else if (typeof(Entity).IsAssignableFrom(property.PropertyType))
                {
                    object? entityInstance = Activator.CreateInstance(property.PropertyType);

                    if (entityInstance != null)
                    {
                        MethodInfo? fromDictionary = property.PropertyType.GetMethod("FromDictionary");

                        fromDictionary?.Invoke(entityInstance, new object[] { item });
                        property.SetValue(this, entityInstance);
                    }
                }
            }
        }
    }
}
