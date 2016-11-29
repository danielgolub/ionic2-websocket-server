var message = require("../../src/controllers/message");
var should = require("should");

describe("[unit] MessageController", function() {

	it("should be able to create a message", function(done) {

		message.create("test 123").then((response) => {
			response.should.be.an.Object();
			response.should.have.property("status");
			response.message.should.be.an.Object();
			response.message.should.have.property("text")
			done();
		}).catch(done);

	})

})
