var items = [{name: 'laptop', description: 'MacBook Pro 15"'}, {name: 'mouse', description: 'Logitech trackball'},
			{name: 'Monitor', description: 'BenQ 32"'}, {name: 'foo', description: 'bar'}];

exports.list = function (req, res) {
	res.render('index', {items: items});
}