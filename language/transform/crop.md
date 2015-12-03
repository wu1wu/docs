# cropX, cropY, cropZ

{% craftml %}
<row spacing="5">
  <cylinder t="cropX(30%)"></cylinder>
  <cylinder t="cropX(0 30%)"></cylinder>
  <cylinder t="cropY(30%)"></cylinder>
  <cylinder t="cropY(0 30%)"></cylinder>
</row>
{% endcraftml %}

{% craftml %}
<row spacing="2">
  <!-- crop the top 50% -->
  <sphere t="cropZ(0 50%)"></sphere>
  <!-- crop the top 5 units -->
  <sphere t="cropZ(0 5)"></sphere>

  <!-- crop the bottom 50% -->
  <sphere t="cropZ(50% 0)"></sphere>
  <!-- crop the bottom 5 units -->
  <sphere t="cropZ(5 0)"></sphere>
</row>
{% endcraftml %}
