# prism

{% craftml %}
<prism/>
{% endcraftml %}

## `sides="integer"`

{% craftml %}
<row spacing="10">
  <prism sides="3"/>
  <prism sides="4"/>
  <prism sides="5"/>
  <prism sides="6"/>
  <prism sides="7"/>
</row>
{% endcraftml %}

## `sideLength="float"`

{% craftml %}
<col>
  <prism sideLength="10" sides="5"/>
  <rectangle width="10" height="10"/>
</col>
{% endcraftml %}

## `radius="float"`

{% craftml %}
<stack>
  <prism radius="10" sides="5"/>
  <circle radius="10"/>
</stack>
{% endcraftml %}

## Examples

{% craftml %}
<row spacing="10" l="alignY(100%)">
  <repeat each="n" in="{:[3,5,7,9]:}">
    <col>
      <prism sideLength="10" sides="{:n:}"/>
      <cube size="10 50 10"/>
    </col>
  </repeat>
</row>
{% endcraftml %}
