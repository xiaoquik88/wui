<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Iscity Rock's</title>

    <!-- Bootstrap core CSS -->
    <!-- <link href="../../dist/css/bootstrap.min.css" rel="stylesheet"> -->
    <link href="default-theme/css/bootstrap/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.css">
    <!-- Bootstrap theme -->
    <link href="default-theme/css/bootstrap/bootstrap-theme.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <!-- <link href="theme.css" rel="stylesheet"> -->

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]>
    <script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <!-- <script src="../resources/assets/themes/default/dist/js/ie-emulation-modes-warning.js"></script> -->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <script type="text/javascript" src="default-theme/js/angular/angular.js" ></script>
    <script type="text/javascript" src="default-theme/js/angular-ui-router/0.2.14/angular-ui-router.js" ></script>
    <!-- Application Dependencies -->
    <script src="node_modules/api-check/dist/api-check.js"></script>
    {{--<script src="node_modules/angular/angular.js"></script>--}}
    <script src="node_modules/angular-formly/dist/formly.js"></script>
    <script src="node_modules/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.js"></script>
    {{--<script type="text/javascript" src="default-theme/js/angular-ui-router/0.2.14/angular-ui-router.js" ></script--}}

    <script src="app/app.js"></script>
    <script src="app/scripts/customFormlyConfigurator.js"></script>
    <script src="app/scripts/ApiManageController.js"></script>


    <style type="text/css">
        ul {
            list-style-type: none;
            padding: 0;
        }

        #sidebar-menu .main-menu a {
            display: block;
            font-size: 13px;
            font-weight: 500;
            color: #999;
            padding: 4px 20px;
        }
        #sidebar-menu .main-menu a:hover {
            color: #11427D;
            text-decoration: none;
            background-color: transparent;
            border-left: 1px solid #11427D;
        }

        #sidebar-menu .sub-menu a {
            padding-top: 1px;
            padding-bottom: 1px;
            padding-left: 30px;
            font-size: 12px;
            font-weight: 400;
        }
    </style>
</head>

<body role="document" ng-app="apiApp">

<!-- Fixed navbar -->
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/wui/public">ISCITY</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a ui-sref="home">Home</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Developer<span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a ui-sref="api.detail({apiId:1})">API Guide</a></li>
                        <li><a ui-sref="method">Backend Developer Guide</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="nav navbar-nav pull-right">
                <li><a href="#">Help</a></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>

<div class="container theme-showcase" role="main" style="margin-top:60px;">
    <div ui-view></div>
</div> <!-- /container -->


<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script type="text/javascript" src="default-theme/js/jquery/1.11.2/jquery.min.js"></script>
<script type="text/javascript" src="default-theme/js/bootstrap/bootstrap.min.js"></script>



<!-- <script src="../../assets/js/docs.min.js"></script> -->
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<!-- <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script> -->
</body>
</html>
