# cut

## cut by name

Before

{% craftml %}
<g l="centerXYZ()">
  <sphere t="scale(2)" style="color:yellow"></sphere>
  <cylinder t="sizeZ(30)"></cylinder>
</g>
{% endcraftml %}

After

{% craftml %}
<g l="centerXYZ() cut(cylinder)">
  <sphere t="scale(2)" style="color:yellow"></sphere>
  <cylinder t="sizeZ(30)"></cylinder>
</g>
{% endcraftml %}

## cut by class

Before

{% craftml %}
<g l="centerXYZ()">
  <cube t="scale(5 2 2)" style="color:yellow"></cube>
  <row>
    <cube t="sizeZ(60)" class="cutme"></cube>
    <cube t="sizeZ(60)"></cube>
    <cube t="sizeZ(60)" class="cutme"></cube>
  </row>
</g>
{% endcraftml %}

After

{% craftml %}
<g l="centerXYZ() cut(.cutme)">
  <cube t="scale(5 2 2)" style="color:yellow"></cube>
  <row>
    <cube t="sizeZ(60)" class="cutme"></cube>
    <cube t="sizeZ(60)"></cube>
    <cube t="sizeZ(60)" class="cutme"></cube>
  </row>
</g>
{% endcraftml %}

## select and cut by id

Before

{% craftml %}
<g l="centerXYZ()">
  <cube t="scale(5 5 2)" id="outside"></cube>
  <cube t="scale(3 3 3)" id="margin"></cube>
  <cube t="scale(1 1 4)" id="inside"></cube>
</g>
{% endcraftml %}

After

{% craftml %}
<g l="centerXYZ() select(#outside) cut(#margin)">
  <cube t="scale(5 5 2)" id="outside"></cube>
  <cube t="scale(3 3 3)" id="margin"></cube>
  <cube t="scale(1 1 4)" id="inside"></cube>
</g>
{% endcraftml %}
