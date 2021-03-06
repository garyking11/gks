<h3 class="heading">Articles</h3>

<div data-ng-controller="ArticlesCtrl">

    <a href="/categories">Go back</a>
    <div class="row">

        <div class="articles">

            <div data-ng-repeat="article in articles">

                <div class="col-md-12">
                    <div class="article">

                        <h4>{{ article.title }}</h4>
                        <p>{{ article.body | limitTo: 150 }}</p>
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