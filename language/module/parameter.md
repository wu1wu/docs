# parameter

{% craftml %}
<craft>
  <craft name="n-by-n-cubes">
    <param name="n" type="int" default="3"/>
    <col spacing="2">
      <repeat n="{:n:}">
        <row spacing="2">
          <repeat n="{:n:}">
            <cube></cube>
          </repeat>
        </row>
      </repeat>        
    </col>
  </craft>

  <!-- Try it! Change n="3" to n="5" -->
  <n-by-n-cubes n="3"></n-by-n-cubes>

</craft>
{% endcraftml %}
