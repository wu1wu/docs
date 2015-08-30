# script

CraftML's rendering engine takes a source DOM and transforms it a solid DOM.
The `<script>`tag makes it possible to define custom transformations.

Three special variables are made available in a script block.

* `this` the current solid element
* `$params` the parameters available for this solid element
* `$` the query function for searching, navigating, and manipulating the solid DOM


```html
<script>
	this
	$params
	$
</script>
```
