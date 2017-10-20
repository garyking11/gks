<div data-ng-controller="ArticleEditCtrl">
    <a href="/#categories">Go back</a>
    <h3>Edit Article</h3>

    <form data-ng-submit="updateArticle()">
        <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" class="form-control" data-ng-model="article.title" id="title" placeholder="Enter Title">
        </div>

        <div class="form-group">
            <label for="exampleInputEmail1">Category</label>
            <select class="form-control" data-ng-model="article.category" id="category" name="category" placeholder="Enter Title">

                <option data-ng-repeat="category in categories" value="{{category.name}}">{{category.name}}</option>

            </select>
        </div>

        <div class="form-group">
            <label for="exampleInputEmail1">Content</label>
        <textarea class="form-control" data-ng-model="article.body" id="body" name="body" placeholder="Enter Content">
            </textarea>
        </div>


        <button type="submit" class="btn btn-default">Submit</button>
        <a class="btn btn-danger" href="/categories">Cancel</a>
    </form>




</div>

