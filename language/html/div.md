# div

{% craftml %}
<craft>
    <div>
        <repeat n="5"><cube/></repeat>
        Hello
    </div>
</craft>
{% endcraftml %}


## div style

{% craftml %}
<craft>
    <div style="width: 50;">
        <repeat n="5"><cube/></repeat>
        Hello
    </div>
</craft>
{% endcraftml %}

{% craftml %}
<craft>
    <div style="width: 50; text-align:right; ">
        <repeat n="5"><cube/></repeat>
        Hello
    </div>
</craft>
{% endcraftml %}

{% craftml %}
<craft>
    <div style="width: 50; text-align:center; ">
        <repeat n="5"><cube/></repeat>
        Hello
    </div>
</craft>
{% endcraftml %}
