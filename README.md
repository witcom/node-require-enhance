#NodeJs Require Enhance

##Simple Use

```
if your project structure like
|-Project
|--lib              <- lib dir
|----my-module      <- lib module dir
|------index.js     <- lib module code
|--App              <- Application dir
|----Module         <- App Module dir
|------index.js     <- AppModule code
|----index.js       <- entry code
```

only require node-require-enhance module in head of your entry code 
and give the Application Path (normally __dirname) and everything is ok.
Then you can use $root,$lib,$at to locate your modules anywhere.


```
require('node-require-enhance')(__dirname);

var root_module = require($root('OutsideModule'));
var my_module = require($lib('my-module'));
var at_moudle = require($at('Module/someutils'));

console.log(my_module.hello());
console.log(root_module.hello());
console.log(at_moudle.hello());
```
Output:
```$xslt
$ node require_enhance_example.js 
I am my-module
I am Outside Module
I am someutils Inside Module
```

##Description
$root() means the parent directory of your App path.
$lib() means the lib directory under your App path.
$at() means the app directory, so $at('lib') equals $lib() by default.

you can define the libname by setting the option by
```$xslt
require('node-require-enhance')({
    apppath: __dirname,
    libname: 'Library'
});
```

##Options
```$xslt
apppath stirng  AppPath
libname string  Lib directory name
global  boolean Register in global defualt:true
```

