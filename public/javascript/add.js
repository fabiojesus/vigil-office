
<div id="mainSection">
    <form action="/{{toLowerCase title}}/add" method="post" name="form">
        {{#each fields}}
        <label>{{capitalizeFirst this}}</label>
        <br>
        <input type="text" name="{{this}}" id="{{this}}" />
        <br><br> 
        {{/each}}
        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
    </form>
</div>
