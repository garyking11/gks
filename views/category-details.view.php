<div data-ng-controller="CategoryDetailsCtrl">
    <a href="#/categories">Go Back</a>
    <h1>{{category.name}}</h1>
<!--    <small>Posted on: <span ng-bind="article.date | date: MM/dd/yyyy"></span></small>-->
    <hr />

    <div>

        {{category.description }}

    </div>

    <br /><br />

    <div class="actions">
        <a href="#/categories/edit/{{category._id}}" class="btn btn-default">Edit</a>
        <a href="#" class="btn btn-danger" data-ng-click="removeCategory()">Delete</a>
    </div>

</div>

<br /><br />