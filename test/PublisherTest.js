const PublisherManagement = artifacts.require("PublisherManagement");

contract("PublisherManagement", accounts => {
    let instance;

    beforeEach(async () => {
        instance = await PublisherManagement.new();
    });


    it("should register a publisher", async () => {
        const name = "Test Publisher";
        const contactDetails = "test@example.com";

        await instance.registerPublisher(name, contactDetails, {from: accounts[0]});
        const publisher = await instance.publishers(accounts[0]);

        assert.equal(publisher.name, name, "Publisher name not match");
        assert.equal(publisher.contactDetails, contactDetails,  "Publisher contact detail not match");
    });

    // it("show get listof publisher name", async () => {
    //     await instance.getPublisherName(accounts[0]);
    // })

    it("should add an book list", async () => {
        const name = "Test Publisher";
        const contactDetails = "test@example.com";

        await instance.registerPublisher(name, contactDetails, {from: accounts[0]});

        const bookName = "Test Book";
        const authorName = "Test Author";
        const description = "Test Description";
        const price = 100;
        const bookId = 1;

        await instance.addBookList(bookId, bookName, description, authorName, price, {from: accounts[0]});
        const book = await instance.getBookInfo(accounts[0], bookId);
        const [bName, bDescription, bAuthor, bPrice] = Object.values(book);

        assert.equal(bName, bookName,  "book name not match");
        assert.equal(bAuthor, authorName, "Author name not match");
        assert.equal(bDescription, description,  "Book decription not match");
        assert.equal(bPrice, price, "price not match");
    });

});
