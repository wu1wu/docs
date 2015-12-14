# mirror

## mirrorX
{% craftml %}
<craft name="foo">
  <g>
    <cube size="30 10 10"></cube>
    <cube size="10 30 10"></cube>
    <cube size="10 10 50"></cube>
  </g>
</craft>

<row spacing="5">
  <foo style="color: pink;"></foo>
  <foo t="mirrorX()" style="color:red;">
</row>
{% endcraftml %}

## mirrorY
{% craftml %}
<craft name="foo">
  <g>
    <cube size="30 10 10"></cube>
    <cube size="10 30 10"></cube>
    <cube size="10 10 50"></cube>
  </g>
</craft>

<row spacing="5">
  <foo style="color: pink;"></foo>
  <foo t="mirrorY()" style="color:red;">
</row>
{% endcraftml %}

## mirrorZ
{% craftml %}
<craft name="foo">
  <g>
    <cube size="30 10 10"></cube>
    <cube size="10 30 10"></cube>
    <cube size="10 10 50"></cube>
  </g>
</craft>

<row spacing="5">
  <foo style="color: pink;"></foo>
  <foo t="mirrorZ()" style="color:red;">
</row>
{% endcraftml %}