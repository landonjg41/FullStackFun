namespace APIFun.Data
{
    //the rules for the template
    public interface IFoodRepository
    {
        IEnumerable<MarriottFood> Foods { get; }
    }
}
