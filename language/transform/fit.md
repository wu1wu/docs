# fit

{% craftml %}
<craft>
  <craft name="huge">
    <cube size="50 20 20" style="opacity: 0.7;"></cube>
  </craft>

  <cylinder></cylinder>
  <huge t="translate(10 0 0)"></huge>
  <cylinder t="translate(20 0 0)"></cylinder>

</craft>
{% endcraftml %}

Fit the huge object within the space between the two cylinders, while keeping the aspect ratio.

{% craftml %}
<craft>
  <craft name="huge">
    <cube size="50 50 20" style="opacity: 0.7;"></cube>
  </craft>

  <cylinder></cylinder>
  <huge t="translate(10 0 0) fit(10 10 10)"></huge>
  <cylinder t="translate(20 0 0)"></cylinder>

</craft>
{% endcraftml %}
