# land

Move the object so that its bottom sits on the `z=0` plane (i.e., x-y plane).

{% craftml %}
<craft>
    <!-- the first cube is 20 units above the plane -->
    <cube t="translate(0 0 20)"></cube>
    <!-- the second cube is 20 units below the plane -->
    <cube t="translate(20 0 -20)"></cube>
</craft>
{% endcraftml %}

{% craftml %}
<craft>
    <!-- both cubes now sit nicely on the `z=0` plane -->
    <cube t="translate(0 0 20) land()"></cube>
    <cube t="translate(20 0 -20) land()"></cube>
</craft>
{% endcraftml %}
