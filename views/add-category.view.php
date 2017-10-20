<div data-ng-controller="CategoryCreateCtrl">

    <h3>Add Category</h3>

    <form data-ng-submit="addCategory()">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" data-ng-model="name" id="name" placeholder="Enter Name">
        </div>

       <!-- <div class="form-group">
            <label for="exampleInputEmail1">Category</label>
            <select class="form-control" data-ng-model="category" id="category" name="category" placeholder="Enter Title">

                <option data-ng-repeat="category in categories" value="{{category.name}}">{{category.name}}</option>

            </select>
        </div>-->

        <div class="form-group">
            <label for="description">Description</label>
        <textarea class="form-control" data-ng-model="description" id="description" name="description" placeholder="Enter Description">
            </textarea>
        </div>


        <button type="submit" class="btn btn-default">Submit</button>
        <a class="btn btn-danger" href="/categories">Cancel</a>
    </form>




</div>

