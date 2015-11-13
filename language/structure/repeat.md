# repeat

{% craftml %}
<craft>
  <row>
    <repeat n="5">
      <cube></cube>
    </repeat>
  </row>
</craft>
{% endcraftml %}


{% craftml %}
<craft>
  <row>
    <repeat each="i" in="{: [1,2,3] :}">
      <cube t="scale({:i:})"></cube>
    </repeat>
  </row>
</craft>
{% endcraftml %}


{% craftml %}
<craft>
  <script>
    $params.is = [1,2,3]
  </script>
  <row>
    <repeat each="i" in="{: is :}">
      <cube t="scale({:i:})"></cube>
    </repeat>
  </row>
</craft>
{% endcraftml %}
