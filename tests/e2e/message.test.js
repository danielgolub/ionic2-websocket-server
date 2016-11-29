var server = require("../../server");
var io = require("socket.io-client");
var should = require("should");

describe("[e2e] MessageController", function() {

	it("should be able to create a message", function(done) {

		var socket = io("http://localhost:3000");
		socket.emit("MESSAGE_CREATE", {
			text: "test 123"
		}, (response) => {
			response.should.be.an.Object();
			response.should.have.property("status")
			response.status.should.be.a.Boolean();
			done();
		})

	})

})
