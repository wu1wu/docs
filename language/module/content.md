# content

{% craftml %}
<craft>
    <craft name="n-by-n">
        <parameter name="n" type="int" default="3"/>
        <col spacing="2">
            <repeat n="{:n:}">
            <row spacing="2">
                <repeat n="{:n:}">
                    <content></content>
                </repeat>
            </row>
        </col>
    </craft>

    <n-by-n n="3">
        <!-- Try it! Change <cube/> to <sphere/> -->
        <cube/>
    </n-by-n>
</craft>
{% endcraftml %}

The content tag can be used more than one time.

{% craftml %}
<craft>
    <craft name="triple">
        <row>
            <content></content>
            <content></content>
            <content></content>
        </row>
    </craft>

    <triple>
        <cube></cube>
    </triple>
</craft>
{% endcraftml %}

The content tag can be used together with other tags.

{% craftml %}
<craft>
    <craft name="sandwich">
        <stack>
            <cube></cube>
            <content></content>
            <cube></cube>
        </stack>
    </craft>

    <sandwich>
        <sphere></sphere>
    </sandwich>
</craft>
{% endcraftml %}

## Named Contents Tags

Content tags can be individually named to take on different roles.

{% craftml %}
<craft>
    <craft name="sandwich">
        <stack>
            <content name="top"/>
            <content></content>
            <content name="bottom">
        </stack>
    </craft>
    <sandwich>
        <top>
            <cube size="5 5 2"></cube>
        </top>
        <bottom>
            <cube size="20 20 2"></cube>
        </bottom>
        <cylinder t="scale(1 1 0.5)"></cylinder>
    </sandwich>
</craft>
{% endcraftml %}
