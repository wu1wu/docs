# center

`center` centers an object at a specific location along all or selective dimensions

{% craftml %}

<!-- centers at (0,0,0) -->
<cube color="yellow"/>

<!-- centers at (20,20,0) -->
<cube t="center 20 20 0" color="red"/>

<!-- centers at (20,20,10) -->
<cube t="center xy 40 10" clor="green"/>

<!-- centers at x=40, y=40, ignoring z -->
<cube t="center xy 40"/>

{% endcraftml %}
