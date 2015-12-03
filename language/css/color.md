# color

Color elements selected by element names

{% craftml %}
<style>
  cube {
      color: black;
  }
  cylinder {
      color: gold;
  }
</style>
<row>
  <cube></cube>
  <cylinder></cylinder>
  <cube></cube>
  <cylinder></cylinder>
  <cube></cube>
</row>
{% endcraftml %}

Color elements selected by class labels

{% craftml %}
<style>
  .odd {
      color: pink;
  }
  .even {
      color: crimson;
  }
</style>
<row>
  <cube class="odd"></cube>
  <cube class="even"></cube>
  <cube class="odd"></cube>
  <cube class="even"></cube>
  <cube class="odd"></cube>
</row>
{% endcraftml %}

Color elements selected by Id

{% craftml %}
<style>
  #one {
      color: #55F;
  }
  #two {
      color: #AAF;
  }
  #three {
      color: #FFF;
  }
</style>
<row>
  <cube id="one"></cube>
  <cube id="two"></cube>
  <cube id="three"></cube>
</row>
{% endcraftml %}
