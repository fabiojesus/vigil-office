var addTemplate = `
<form method="post" name="form">
    {{#fields}}
    <label>{{name}}</label>
    <br>
    <input type="text" name="{{name}}" id="{{name}}" />
    <br><br> 
    {{/fields}}
    <input type="button" value="Submit" onclick="{{function}}">
    <input type="reset" value="Reset">
</form>
`