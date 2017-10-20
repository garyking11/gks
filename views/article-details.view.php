<div data-ng-controller="ArticleDetailsCtrl">
    <a href="#/articles">Go Back</a>
    <h1>{{article.title}}</h1>
    <small>Posted on: <span ng-bind="article.date | date: MM/dd/yyyy"></span></small>
    <hr />

    <div>

        {{article.body }}

    </div>

    <br /><br />

    <div class="actions">
        <a href="#/articles/edit/{{article._id}}" class="btn btn-default">Edit</a>
        <a href="#" class="btn btn-danger" data-ng-click="removeArticle()">Delete</a>
    </div>

</div>

<br /><br />