# intersect

Before

{% craftml %}
<craft>
  <craft name="four-cubes">
    <row spacing="5" t="sizeY(60)">
      <cube/><cube/><cube/><cube/>
    </row>
  </craft>

  <g l="centerXY()">
    <four-cubes/>
    <cylinder t="size(60 60 10)"
        style="opacity:0.5;">
    </cylinder>
  </g>

</craft>
{% endcraftml %}

`select(four-cubes) intersect(cylinder)`

{% craftml %}
<craft>
  <craft name="four-cubes">
    <row spacing="5" t="sizeY(60)">
        <cube/><cube/><cube/><cube/>
    </row>
  </craft>

  <g l="centerXY() select(four-cubes) intersect(cylinder)">
    <four-cubes/>
    <cylinder t="size(60 60 10)"
        style="opacity:0.5;">
    </cylinder>
  </g>

</craft>
{% endcraftml %}
