namespace Project_Team_One.Domain.Tests;
using Project_Team_One.Domain;
using Project.Team.One.Domain.Catalog;

[TestClass]
public class ItemTests
{
    [TestMethod]
    public void Can_Create_New_Item()
    {
        //arrange
        var item = new Item("Name", "Description", "Brand", 10.00m);

        //Assert
        Assert.AreEqual("Name", item.Name);
        Assert.AreEqual("Description", item.Description);
        Assert.AreEqual("Brand", item.Brand);
        Assert.AreEqual(10.00m, item.Price);

    }
    [TestMethod]
    public void Can_Create_Add_Rating()
    {
        //arrange
        var item = new Item("Name", "Description", "Brand", 10.00m);
        var rating = new Rating(5, "Name", "Review");

        //Act
        item.AddRating(rating);

        //Assert
        Assert.AreEqual(rating, item.Ratings[0]);
    }
}