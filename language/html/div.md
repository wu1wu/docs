# div

{% craftml %}
<div>
  <repeat n="5"><cube/></repeat>
  Hello
</div>
{% endcraftml %}


## div style

Set the width of the `div` element to 50.

{% craftml %}
<div style="width: 50;">
  <repeat n="5"><cube/></repeat>
  Hello
</div>
{% endcraftml %}

Aligning contents to the right

{% craftml %}
<div style="width: 50; text-align:right; ">
  <repeat n="5"><cube/></repeat>
  Hello
</div>
{% endcraftml %}

Aligning contents to the center

{% craftml %}
<div style="width: 50; text-align:center; ">
  <repeat n="5"><cube/></repeat>
  Hello
</div>
{% endcraftml %}
