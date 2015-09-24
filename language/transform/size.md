# size

Change the size of a solid

`size` differs from `scale` in that `scale` specifies a scaling ratio relative to the solid's current size, whereas `size` specifies the solid's new size that solid will be automatically scaled to.

{% craftml %}
<craft>
    <craft name="cross">
        <cube size="10 50 10"/>
        <cube size="50 10 10"
              t="translate(-20 10 0)"/>
    </craft>


    <row spacing="10">
        <cross style="color:pink;"/>
        <cross style="color:red;"
               t="size(30 30 30)"/>
    </row>
</craft>
{% endcraftml %}

## sizeX

{% craftml %}
<craft>
    <craft name="cross">
        <cube size="10 50 10"/>
        <cube size="50 10 10"
              t="translate(-20 10 0)"/>
    </craft>


    <row spacing="10">
        <cross style="color:pink;"/>
        <cross style="color:red;"
               t="sizeX(30)"/>
    </row>
</craft>
{% endcraftml %}

## sizeY

{% craftml %}
<craft>
    <craft name="cross">
        <cube size="10 50 10"/>
        <cube size="50 10 10"
              t="translate(-20 10 0)"/>
    </craft>


    <row spacing="10">
        <cross style="color:pink;"/>
        <cross style="color:red;"
               t="sizeY(30)"/>
    </row>
</craft>
{% endcraftml %}

## sizeZ

{% craftml %}
<craft>
    <craft name="cross">
        <cube size="10 50 10"/>
        <cube size="50 10 10"
              t="translate(-20 10 0)"/>
    </craft>


    <row spacing="10">
        <cross style="color:pink;"/>
        <cross style="color:red;"
               t="sizeZ(30)"/>
    </row>
</craft>
{% endcraftml %}
