<div data-ng-controller="CategoryEditCtrl">
    <a href="/#categories">Go back</a>
    <h3>Edit Category</h3>

    <form data-ng-submit="updateCategory()">
        <div class="form-group">
            <label for="description">Name</label>
            <input type="text" class="form-control" data-ng-model="category.name" name="name" id="name" placeholder="Enter Name">
            <input type="hidden" class="form-control" data-ng-model="category._id" name="_id" id="_id">
        </div>

       <!-- <div class="form-group">
            <label for="exampleInputEmail1">Category</label>
            <select class="form-control" data-ng-model="article.category" id="category" name="category" placeholder="Enter Title">

                <option data-ng-repeat="category in categories" value="{{category.name}}">{{category.name}}</option>

            </select>
        </div>-->

        <div class="form-group">
            <label for="description">Description</label>
        <textarea class="form-control" data-ng-model="category.description" id="description" name="description" placeholder="Enter Content">
            </textarea>
        </div>


        <button type="submit" class="btn btn-default">Submit</button>
        <a class="btn btn-danger" href="/categories">Cancel</a>
        <a href="#" class="btn btn-danger" data-ng-click="removeCategory()">Delete</a>
    </form>




</div>

