namespace Project_Team_One.Domain.Tests;
using Project_Team_One.Domain;
using Project.Team.One.Domain.Catalog;

[TestClass]
public class RatingTests
{
    [TestMethod]
    public void Can_Create_New_Rating()
    {
        //arrange
        var rating = new Rating(1, "Mike", "Great Fit!");

        //Assert
        Assert.AreEqual(1, rating.Stars);
        Assert.AreEqual("Mike", rating.UserName);
        Assert.AreEqual("Great Fit!", rating.Review);

    }
    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void Cannot_Create_Rating_With_Valid_Stars()
    {
        //arrange
        var rating = new Rating(0, "Mike", "Great Fit!");
    }
}