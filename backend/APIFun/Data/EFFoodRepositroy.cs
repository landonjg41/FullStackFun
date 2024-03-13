
namespace APIFun.Data
{
    public class EFFoodRepositroy : IFoodRepository
    {
        private FoodContext _foodContext;
        public EFFoodRepositroy(FoodContext temp)
        {
            _foodContext = temp;
        }
        public IEnumerable<MarriottFood> Foods => _foodContext.Foods;
    }
}
