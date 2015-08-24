# script

CraftML's rendering engine takes a source DOM and transforms it a solid DOM.
The `<script>`tag makes it possible to define custom transformations.

Three special variables are made available in a script block.

* `this` the current solid element
* `$scope` the scope in which this solid element is constructed
* `$` the query function for searching, navigating, and manipulating the solid DOM


```html
<script>
	this
	$scope
	$
</script>
```
