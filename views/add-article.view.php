<div data-ng-controller="ArticleCreateCtrl">

<h3>Add Article</h3>

<form data-ng-submit="addArticle()">
    <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" data-ng-model="title" id="title" placeholder="Enter Title">
    </div>

    <div class="form-group">
        <label for="category">Category</label>
        <select class="form-control" data-ng-model="category" id="category" name="category" placeholder="Enter Title">

            <option data-ng-repeat="category in categories" value="{{category.name}}">{{category.name}}</option>

        </select>
    </div>

    <div class="form-group">
        <label for="body">Content</label>
        <textarea class="form-control" data-ng-model="body" id="body" name="body" placeholder="Enter Content">
            </textarea>
    </div>


    <button type="submit" class="btn btn-default">Submit</button>
    <a class="btn btn-danger" href="/categories">Cancel</a>
</form>




</div>

