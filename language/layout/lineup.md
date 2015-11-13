# lineup

{% craftml %}
<craft>
  <g l="lineupX(0)">
    <cube></cube>
    <cube></cube>
    <cube></cube>
  </g>
  <!-- equivalent to <row> -->
</craft>
{% endcraftml %}

{% craftml %}
<craft>

  <col spacing="5">

    <g l="lineupX(2)">
      <cube></cube>
      <cube></cube>
      <cube></cube>
    </g>

    <g l="lineupX(-2)">
      <cube></cube>
      <cube></cube>
      <cube></cube>
    </g>

  </col>

</craft>
{% endcraftml %}
