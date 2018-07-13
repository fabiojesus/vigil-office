var addTemplate = `
<form method="post" name="form">
    {{#fields}}
    <label>{{name}}</label>
    <br>
    {{#value}}
        <input type="text" name="{{name}}" id="{{name}}" value="{{value}}" />
    {{/value}}
    {{^value}}
        <input type="text" name="{{name}}" id="{{name}}" />
    {{/value}}
    <br><br> 
    {{/fields}}
    {{#isEdit}}
        <input type="text" id="id" value="{{id}}" style="display:none;" />
    {{/isEdit}}
    <input type="button" value="Submit" onclick="{{function}}">
    <input type="reset" value="Reset">
</form>
`