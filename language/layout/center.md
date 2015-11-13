# center

{% craftml %}
<craft>
  <craft name="three">
    <cube t="scale(1 1 4)"></cube>
    <cube t="scale(5 1 1)"></cube>
    <cube t="scale(1 10 1)"></cube>
  </craft>
  <three></three>
</craft>
{% endcraftml %}


{% craftml %}
<craft>
  <craft name="three">
    <cube t="scale(1 1 4)"></cube>
    <cube t="scale(5 1 1)"></cube>
    <cube t="scale(1 10 1)"></cube>
  </craft>

  <row spacing="5">
    <three l="centerX()"></three>
    <three l="centerY()"></three>
    <three l="centerZ()"></three>
  </row>
</craft>
{% endcraftml %}


{% craftml %}
<craft>
  <craft name="three">
    <cube t="scale(1 1 4)"></cube>
    <cube t="scale(5 1 1)"></cube>
    <cube t="scale(1 10 1)"></cube>
  </craft>

  <row spacing="10">
    <three l="centerXY()"></three>
    <three l="centerYZ()"></three>
    <three l="centerXZ()"></three>
    <three l="centerXYZ()"></three>
  </row>
</craft>
{% endcraftml %}
