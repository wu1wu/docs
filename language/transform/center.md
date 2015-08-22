# center

{% craftml %}
<craft>
    <craft name="ball">
        <sphere t="translate(30 -10 10)"></sphere>
    </craft>

    <ball style="color: pink;"/>

    <!-- center with respect to the origin -->
    <ball t="center()"
        style="color:red;"/>

    <!-- center with respect to (10 10 0) -->
    <ball t="center(10 10 0)"
        style="color:green;"/>

</craft>
{% endcraftml %}
