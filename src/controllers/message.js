/**
 * Message Controller
 */

/**
 * Create message
 * @param  {String} text The text of the message
 */
function create(text) {
	return new Promise((resolve, reject) => {
		resolve({
			status: true,
			message: {
				text,
				id: "uniqueid"
			}
		})
	})
}

module.exports.create = create;
