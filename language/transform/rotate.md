# rotateX, rotateY, rotateZ

Rotate the object

{% craftml %}
<craft>
    <row>
        <cube></cube>
        <cube t="rotateZ(30)"></cube>
        <cube t="rotateZ(60)"></cube>
        <cube t="rotateZ(90)"></cube>
        <cube t="rotateZ(120)"></cube>
    </row>
</craft>
{% endcraftml %}

{% craftml %}
<craft>
    <row>
        <dome></dome>
        <dome t="rotateX(45)"></dome>
        <dome t="rotateX(90)"></dome>
        <dome t="rotateX(135)"></dome>
        <dome t="rotateX(180)"></dome>
    </row>
</craft>
{% endcraftml %}


{% craftml %}
<craft>
    <row>
        <dome></dome>
        <dome t="rotateY(45)"></dome>
        <dome t="rotateY(90)"></dome>
        <dome t="rotateY(135)"></dome>
        <dome t="rotateY(180)"></dome>
    </row>
</craft>
{% endcraftml %}
