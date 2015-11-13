# align

{% craftml %}
<craft>
  <craft name="three">
    <cylinder t="scale(4 2 3) translate(-20 0 0)"></cylinder>
    <cylinder t="translate(20 20 0)"></cylinder>
    <cylinder t="translate(0 40 0)"></cylinder>
  </craft>
  <three></three>
</craft>
{% endcraftml %}


{% craftml %}
<craft>
  <craft name="three">
    <cylinder t="scale(4 2 3) translate(-20 0 0)"></cylinder>
    <cylinder t="translate(20 20 0)"></cylinder>
    <cylinder t="translate(0 40 0)"></cylinder>
  </craft>

  <row spacing="5">
    <three l="alignX(0%)"></three>
    <three l="alignX(50%)"></three>
    <three l="alignX(100%)"></three>
  </row>
</craft>
{% endcraftml %}
