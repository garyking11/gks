
<div data-ng-controller="CategoriesCtrl">

    <div class="row">

        <div class="categories">

            <div data-ng-repeat="category in categories">

                <div class="col-md-6">

                    <h3>{{category.name}}</h3>
                    <p>{{category.description | limitTo: 200 }} Read more ...</p>
                    <a href="#/categories/edit/{{category._id}}">Edit Category</a>
                    <a href="#/articles/category/{{category.name}}">View articles</a>

                </div>

            </div>


        </div>

    </div>

</div>

<br /><br />
<h3 class="heading">Articles
</h3>

<div data-ng-controller="ArticlesCtrl">

    <div class="row">

        <div class="articles">

            <div data-ng-repeat="article in articles">
                <div class="col-md-12">
                    <div class="article">

                        <h4>{{article.title}}</h4>
                        <p>{{article.body | limitTo: 150}}  Read more ...</p>
                        <a class="btn-default" href="#/articles/details/{{article._id}}">Read article</a>

                    </div>

                </div>

            </div>

            <div data-ng-if="articles ==  false">
            <p>NO articles to display</p>
            </div>


        </div>

    </div>

</div>