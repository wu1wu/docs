# repeat

A row of five cubes

{% craftml %}
<row>
  <cube repeat="5"></cube>
</row>
{% endcraftml %}


{% craftml %}
<row>
  <cube repeat="i in [1,2,3]"
        t="scale({:i:})">
  </cube>
</row>
{% endcraftml %}


{% craftml %}
<craft>
  <script>
    $params.is = [1,2,3]
  </script>
  <row>
    <cube repeat="i in is"
          t="scale({:i:})">
    </cube>
  </row>
</craft>
{% endcraftml %}
