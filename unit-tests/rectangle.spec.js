describe('Rectangle Class', function () {
	describe('When new Rectangle is instantiated', function () {
		var rectangle;
		beforeEach(function () {
			rectangle = new Rectangle();
		});

		it('should have a x and y coordinates', function () {
			expect(rectangle.x).toBeDefined();
		});
	});
});