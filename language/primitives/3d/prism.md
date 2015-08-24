# prism

{% craftml %}
<craft>
    <prism></prism>
</craft>
{% endcraftml %}


## `sides="integer"`

{% craftml %}
<craft>
    <row spacing="10">
        <prism sides="3"></prism>
        <prism sides="4"></prism>
        <prism sides="5"></prism>
        <prism sides="6"></prism>
        <prism sides="7"></prism>
    </row>
</craft>
{% endcraftml %}

## `sideLength="float"`

{% craftml %}
<craft>
    <col>
        <prism sideLength="10" sides="5"></prism>
        <rectangle width="10" height="10"></rectangle>
    </col>
</craft>
{% endcraftml %}

## `radius="float"`

{% craftml %}
<craft>
    <stack>
        <prism radius="10" sides="5"></prism>
        <circle radius="10"></circle>
    </stack>
</craft>
{% endcraftml %}

## Examples

{% craftml %}
<craft>
    <row spacing="10" l="alignY(100%)">
        <repeat each="n" in="{:[3,5,7,9]:}">
            <col>
                <prism sideLength="10" sides="{:n:}"></prism>
                <cube size="10 50 10"></cube>
            </col>
        </repeat>
    </row>
</craft>
{% endcraftml %}
